import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import formidable from "formidable";
import fs from "fs/promises";
import prisma from "@/lib/prisma";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const bucket = process.env.SUPABASE_PROPERTY_PHOTOS_BUCKET || "property-photos";

  if (!supabaseUrl || !supabaseKey) {
    return res.status(500).json({
      error: "Supabase storage is not configured. Add Supabase URL and service role key.",
    });
  }

  try {
    const form = formidable({
      multiples: false,
      maxFileSize: 5 * 1024 * 1024,
      filter: ({ mimetype }) => Boolean(mimetype?.startsWith("image/")),
    });
    const [fields, files] = await form.parse(req);
    const file = Array.isArray(files.file) ? files.file[0] : files.file;

    if (!file) {
      return res.status(400).json({ error: "No image file provided" });
    }

    const propertyIdField = Array.isArray(fields.propertyId)
      ? fields.propertyId[0]
      : fields.propertyId;
    const propertyId = Number(propertyIdField);
    const safePropertyFolder = Number.isInteger(propertyId) && propertyId > 0 ? String(propertyId) : "draft";
    const originalName = file.originalFilename || file.newFilename || "property-photo.jpg";
    const extension = originalName.split(".").pop()?.toLowerCase() || "jpg";
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${extension}`;
    const storagePath = `properties/${safePropertyFolder}/${filename}`;
    const buffer = await fs.readFile(file.filepath);
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: uploadError } = await supabase.storage.from(bucket).upload(storagePath, buffer, {
      cacheControl: "31536000",
      contentType: file.mimetype || "image/jpeg",
      upsert: false,
    });

    if (uploadError) {
      throw uploadError;
    }

    const { data: publicUrlData } = supabase.storage.from(bucket).getPublicUrl(storagePath);
    const url = publicUrlData.publicUrl;
    let photo = null;

    if (Number.isInteger(propertyId) && propertyId > 0) {
      const currentCount = await prisma.propertyPhoto.count({ where: { propertyId } });
      photo = await prisma.propertyPhoto.create({
        data: {
          propertyId,
          url,
          order: currentCount,
        },
      });
    }

    return res.status(200).json({
      success: true,
      url,
      photo,
      message: "Image uploaded successfully",
    });
  } catch (error) {
    console.error("Property image upload error:", error);
    return res.status(500).json({ error: "Image upload failed" });
  }
}
