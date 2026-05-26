import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface PropertyPhotoDisplayProps {
  propertyId: number;
  photos: Array<{ id: number; url: string }>;
  title?: string;
}

export function PropertyPhotoDisplay({
  propertyId,
  photos,
  title = 'Property Photos',
}: PropertyPhotoDisplayProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (photos.length === 0) {
    return null;
  }

  const currentPhoto = photos[currentPhotoIndex];

  const handlePrevious = () => {
    setCurrentPhotoIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPhotoIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Main Photo Carousel */}
      <div className="relative w-full bg-black rounded-lg overflow-hidden">
        <div className="relative aspect-video">
          <img
            src={currentPhoto.url}
            alt={`${title} ${currentPhotoIndex + 1}`}
            className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setIsLightboxOpen(true)}
          />

          {/* Navigation Arrows */}
          {photos.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Photo Counter */}
          {photos.length > 1 && (
            <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1.5 rounded text-sm font-medium">
              {currentPhotoIndex + 1} / {photos.length}
            </div>
          )}
        </div>
      </div>

      {/* Thumbnail Strip */}
      {photos.length > 1 && (
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => setCurrentPhotoIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                index === currentPhotoIndex
                  ? 'border-[var(--brand-primary)]'
                  : 'border-[var(--brand-border)] hover:border-[var(--brand-primary)]'
              }`}
            >
              <img
                src={photo.url}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X size={32} />
            </button>

            {/* Main Image */}
            <div className="relative w-full h-full max-w-6xl">
              <img
                src={currentPhoto.url}
                alt={`${title} ${currentPhotoIndex + 1}`}
                className="w-full h-full object-contain"
              />

              {/* Navigation */}
              {photos.length > 1 && (
                <>
                  <button
                    onClick={handlePrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2"
                  >
                    <ChevronLeft size={40} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2"
                  >
                    <ChevronRight size={40} />
                  </button>
                </>
              )}
            </div>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded text-sm font-medium">
              {currentPhotoIndex + 1} / {photos.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
