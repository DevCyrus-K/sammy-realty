import { useState, useRef } from 'react';
import { X, Upload, Image as ImageIcon, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import toast from 'react-hot-toast';

interface PropertyPhotoGalleryProps {
  propertyId: number;
  photos: Array<{ id: number; url: string; order: number }>;
  onPhotosChange: (photos: Array<{ id: number; url: string; order: number }>) => void;
  maxPhotos?: number;
}

export function PropertyPhotoGallery({
  propertyId,
  photos,
  onPhotosChange,
  maxPhotos = 10,
}: PropertyPhotoGalleryProps) {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;
    if (!files) return;

    if (photos.length + files.length > maxPhotos) {
      toast.error(`Maximum ${maxPhotos} photos allowed`);
      return;
    }

    setIsUploading(true);
    const uploadedPhotos = [];

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // Validate file type
        if (!file.type.startsWith('image/')) {
          toast.error(`${file.name} is not an image`);
          continue;
        }

        // Validate file size (5MB max per file)
        if (file.size > 5 * 1024 * 1024) {
          toast.error(`${file.name} is too large (max 5MB)`);
          continue;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('propertyId', propertyId.toString());

        const response = await fetch('/api/properties/upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`Upload failed for ${file.name}`);
        }

        const data = await response.json();
        uploadedPhotos.push(
          data.photo || {
            id: Date.now() + i,
            url: data.url,
            order: photos.length + uploadedPhotos.length,
          }
        );
      }

      const newPhotos = [...photos, ...uploadedPhotos];
      onPhotosChange(newPhotos);

      if (uploadedPhotos.length > 0) {
        toast.success(`${uploadedPhotos.length} photo(s) uploaded`);
      }
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Failed to upload photos');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemovePhoto = async (photoId: number) => {
    try {
      await fetch(`/api/properties/photos?photoId=${photoId}`, {
        method: 'DELETE',
      });

      onPhotosChange(photos.filter((p) => p.id !== photoId));
      toast.success('Photo removed');
    } catch (error) {
      console.error('Delete error:', error);
      toast.error('Failed to remove photo');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-[var(--brand-primary)]">Property Photos</h3>
          <p className="text-xs text-[var(--brand-muted)] mt-1">
            {photos.length} of {maxPhotos} photos uploaded
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading || photos.length >= maxPhotos}
          className="min-h-9 gap-2 px-3"
        >
          <Upload size={16} />
          {isUploading ? 'Uploading...' : 'Add Photos'}
        </Button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileSelect}
        disabled={isUploading || photos.length >= maxPhotos}
        className="hidden"
      />

      {photos.length === 0 ? (
        <div className="rounded-lg border-2 border-dashed border-[var(--brand-border)] p-8 text-center">
          <ImageIcon size={32} className="mx-auto text-[var(--brand-muted)] opacity-40 mb-2" />
          <p className="text-sm text-[var(--brand-muted)]">
            No photos yet. Click "Add Photos" to upload images.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative aspect-square overflow-hidden rounded-lg border border-[var(--brand-border)] bg-[var(--brand-surface)]"
            >
              <img
                src={photo.url}
                alt="Property"
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
              <button
                type="button"
                onClick={() => handleRemovePhoto(photo.id)}
                className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <X size={20} className="text-white" />
              </button>
            </div>
          ))}
        </div>
      )}

      {photos.length >= maxPhotos && (
        <div className="rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-3 flex gap-2">
          <AlertCircle size={16} className="text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-amber-700 dark:text-amber-300">
            Maximum {maxPhotos} photos limit reached. Remove a photo to add more.
          </p>
        </div>
      )}
    </div>
  );
}
