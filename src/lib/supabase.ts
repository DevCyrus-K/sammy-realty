import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

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

  if (error) {
    throw new Error(`Upload failed: ${error.message}`);
  }

  const { data: publicUrlData } = supabase.storage
    .from('property-photos')
    .getPublicUrl(filepath);

  return publicUrlData.publicUrl;
};

export const deletePropertyPhoto = async (photoUrl: string): Promise<void> => {
  try {
    const url = new URL(photoUrl);
    const filepath = url.pathname.split('/storage/v1/object/public/property-photos/')[1];

    if (!filepath) return;

    const { error } = await supabase.storage
      .from('property-photos')
      .remove([filepath]);

    if (error) {
      console.error('Delete failed:', error);
    }
  } catch (err) {
    console.error('Error deleting photo:', err);
  }
};
