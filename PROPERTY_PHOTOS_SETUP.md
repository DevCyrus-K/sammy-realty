# Property Photo Upload Setup Guide

This guide explains how to set up property photo uploads with Supabase storage for Vercel deployment.

## Step 1: Install Supabase Package

```bash
npm install @supabase/supabase-js formidable
```

## Step 2: Set Up Supabase Project

### Create a new Supabase bucket:

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Create a new bucket called `property-photos`
3. Make it **Public** (for public photo access)

### Get your credentials:

1. Go to Settings → API
2. Copy your:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon` public key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY`

## Step 3: Update Environment Variables

Add to `.env`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## Step 4: Run Prisma Migration

```bash
npx prisma migrate dev --name add_property_photos
```

This creates the `property_photos` table to store photo metadata.

## Step 5: Update Supabase Client

Edit `src/lib/supabase.ts` to integrate with your Supabase project:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const uploadPropertyPhoto = async (
  propertyId: number,
  file: File
): Promise<string> => {
  const timestamp = Date.now();
  const ext = file.name.split('.').pop();
  const filename = `property-${propertyId}-${timestamp}.${ext}`;
  const filepath = `properties/${propertyId}/${filename}`;

  const { data, error } = await supabase.storage
    .from('property-photos')
    .upload(filepath, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (error) throw new Error(error.message);

  const { data: publicUrlData } = supabase.storage
    .from('property-photos')
    .getPublicUrl(filepath);

  return publicUrlData.publicUrl;
};
```

## Step 6: Update Upload API

Edit `src/pages/api/properties/upload.ts`:

```typescript
import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import { uploadPropertyPhoto } from '@/lib/supabase';
import { prisma } from '@/lib/prisma';

export const config = {
  api: { bodyParser: false },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const form = formidable();
    const [fields, files] = await form.parse(req);

    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    const propertyId = parseInt(Array.isArray(fields.propertyId) ? fields.propertyId[0] : fields.propertyId as string);

    if (!file) return res.status(400).json({ error: 'No file provided' });

    // Convert file to File object for upload
    const buffer = require('fs').readFileSync(file.filepath);
    const uploadedFile = new File([buffer], file.originalFilename || 'photo.jpg', {
      type: file.mimetype,
    });

    const uploadedUrl = await uploadPropertyPhoto(propertyId, uploadedFile);

    // Save to database
    const photo = await prisma.propertyPhoto.create({
      data: {
        propertyId,
        url: uploadedUrl,
        order: 0,
      },
    });

    return res.status(200).json({
      success: true,
      url: uploadedUrl,
      photoId: photo.id,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return res.status(500).json({ error: 'Upload failed' });
  }
}
```

## Step 7: Use Components in Admin

In `src/admin/pages/PropertiesPage.tsx`:

```tsx
import { PropertyPhotoGallery } from '../components/properties/PropertyPhotoGallery';

// Inside your property form:
<PropertyPhotoGallery
  propertyId={propertyId}
  photos={propertyPhotos}
  onPhotosChange={setPropertyPhotos}
  maxPhotos={10}
/>
```

## Step 8: Display Photos on Frontend

In your property detail page:

```tsx
import { PropertyPhotoDisplay } from '@/components/property/PropertyPhotoDisplay';

export default function PropertyDetail() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Fetch property photos
    fetch(`/api/properties/photos?propertyId=${propertyId}`)
      .then(r => r.json())
      .then(setPhotos);
  }, [propertyId]);

  return (
    <PropertyPhotoDisplay
      propertyId={propertyId}
      photos={photos}
      title="Property Photos"
    />
  );
}
```

## Features

✅ Upload up to 10 photos per property
✅ Drag-and-drop reorganization (future feature)
✅ Image validation (type and size)
✅ Thumbnail gallery on product pages
✅ Lightbox modal viewer
✅ Automatic image optimization
✅ Vercel + Supabase compatible
✅ Mobile responsive

## Database Schema

```sql
-- Property Photos Table
CREATE TABLE property_photos (
  id SERIAL PRIMARY KEY,
  property_id INTEGER NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
  url VARCHAR(500) NOT NULL,
  "order" INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  INDEX idx_property_photos_property_id (property_id)
);
```

## Vercel Deployment

When deploying to Vercel:

1. Add environment variables in Vercel Settings
2. Ensure Supabase RLS policies allow public read access to `property-photos` bucket
3. Photos will be served from Supabase CDN (fast globally)

## RLS Policy for Public Access

In Supabase Storage settings, enable this policy for `property-photos` bucket:

```sql
-- Allow public read access
CREATE POLICY "Allow public read access"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'property-photos');

-- Allow authenticated uploads
CREATE POLICY "Allow authenticated uploads"
  ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'property-photos' AND
    auth.role() = 'authenticated'
  );
```

## Troubleshooting

**Photos not uploading?**
- Check Supabase bucket is public
- Verify environment variables are set
- Check browser console for errors

**Images not displaying?**
- Ensure Supabase URL is correct
- Check RLS policies allow public access
- Verify image URLs in database

**Vercel deployment issues?**
- Build size: Verify formidable is bundled
- Cold starts: Optimize upload processing
- Storage limits: Monitor Supabase usage
