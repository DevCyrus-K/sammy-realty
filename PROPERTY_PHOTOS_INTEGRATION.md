# Integration Guide: Adding Photo Gallery to Property Form

This guide shows how to integrate the PropertyPhotoGallery into your existing property management components.

## Option 1: Add to PropertyDrawer Component

In `src/admin/components/properties/PropertyDrawer.tsx`:

```tsx
import { PropertyPhotoGallery } from './PropertyPhotoGallery';

interface PropertyDrawerProps {
  property?: Property;
  open: boolean;
  onClose: () => void;
  onSave: (property: Property) => void;
}

export function PropertyDrawer({ property, open, onClose, onSave }: PropertyDrawerProps) {
  const [form, setForm] = useState(property || {});
  const [photos, setPhotos] = useState<PropertyPhoto[]>([]);

  useEffect(() => {
    if (property?.id) {
      // Fetch existing photos
      fetch(`/api/properties/photos?propertyId=${property.id}`)
        .then(r => r.json())
        .then(setPhotos)
        .catch(console.error);
    }
  }, [property?.id]);

  const handleSave = async () => {
    try {
      // Save property and photos will be handled separately
      await onSave({ ...form, photos });
    } catch (error) {
      console.error('Save error:', error);
    }
  };

  return (
    <Drawer open={open} onClose={onClose}>
      <div className="space-y-6 p-6">
        {/* Existing form fields */}
        <div>
          <label>Title</label>
          <Input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>

        {/* Add photo gallery here */}
        <PropertyPhotoGallery
          propertyId={property?.id || 0}
          photos={photos}
          onPhotosChange={setPhotos}
          maxPhotos={10}
        />

        {/* Rest of form fields */}
        <Button onClick={handleSave}>Save Property</Button>
      </div>
    </Drawer>
  );
}
```

## Option 2: Add to Property Modal

In `src/admin/pages/PropertiesPage.tsx`:

```tsx
import { PropertyPhotoGallery } from '../components/properties/PropertyPhotoGallery';

export default function PropertiesPage() {
  const [propertyPhotos, setPropertyPhotos] = useState<PropertyPhoto[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  useEffect(() => {
    if (selectedProperty?.id) {
      fetch(`/api/properties/photos?propertyId=${selectedProperty.id}`)
        .then(r => r.json())
        .then(setPropertyPhotos);
    }
  }, [selectedProperty?.id]);

  return (
    <Modal open={propertyModalOpen} onClose={() => setPropertyModalOpen(false)}>
      <div className="space-y-6">
        <h2>Edit Property</h2>
        
        {/* Form fields */}
        <Input placeholder="Title" />
        <Input placeholder="Price" />
        
        {/* Photo Gallery */}
        {selectedProperty && (
          <PropertyPhotoGallery
            propertyId={selectedProperty.id}
            photos={propertyPhotos}
            onPhotosChange={setPropertyPhotos}
            maxPhotos={10}
          />
        )}

        <Button onClick={handleSaveProperty}>Save Changes</Button>
      </div>
    </Modal>
  );
}
```

## Option 3: Standalone Photo Management Page

Create `src/admin/pages/PropertyPhotosPage.tsx`:

```tsx
import { useState, useEffect } from 'react';
import { PropertyPhotoGallery } from '../components/properties/PropertyPhotoGallery';
import { AdminLayout } from '../components/layout/AdminLayout';
import { Select } from '../components/ui/Select';

export default function PropertyPhotosPage() {
  const [selectedPropertyId, setSelectedPropertyId] = useState<number | null>(null);
  const [properties, setProperties] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Fetch all properties
    fetch('/api/v1/listings?limit=100')
      .then(r => r.json())
      .then(data => setProperties(data.listings || []))
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (selectedPropertyId) {
      fetch(`/api/properties/photos?propertyId=${selectedPropertyId}`)
        .then(r => r.json())
        .then(setPhotos);
    }
  }, [selectedPropertyId]);

  return (
    <AdminLayout title="Property Photos">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Manage Property Photos</h1>

        <Select
          options={properties.map(p => ({
            label: p.title,
            value: p.id.toString(),
          }))}
          value={selectedPropertyId?.toString()}
          onChange={(value) => setSelectedPropertyId(parseInt(value))}
          placeholder="Select a property"
        />

        {selectedPropertyId && (
          <PropertyPhotoGallery
            propertyId={selectedPropertyId}
            photos={photos}
            onPhotosChange={setPhotos}
            maxPhotos={10}
          />
        )}
      </div>
    </AdminLayout>
  );
}
```

## Adding to Frontend Property Detail Page

In `src/pages/properties/[id].tsx` or your property detail component:

```tsx
import { PropertyPhotoDisplay } from '@/components/property/PropertyPhotoDisplay';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    Promise.all([
      fetch(`/api/v1/listings/${id}`).then(r => r.json()),
      fetch(`/api/properties/photos?propertyId=${id}`).then(r => r.json()),
    ])
      .then(([propertyData, photosData]) => {
        setProperty(propertyData);
        setPhotos(photosData);
      })
      .finally(() => setLoading(false))
      .catch(console.error);
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!property) return <div>Property not found</div>;

  return (
    <div className="max-w-4xl mx-auto py-8">
      {/* Photo Gallery */}
      <PropertyPhotoDisplay
        propertyId={property.id}
        photos={photos}
        title={property.title}
      />

      {/* Property Details */}
      <div className="mt-8">
        <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
        <p className="text-gray-600 mb-6">{property.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="font-semibold">Bedrooms</h3>
            <p>{property.bedrooms}</p>
          </div>
          <div>
            <h3 className="font-semibold">Bathrooms</h3>
            <p>{property.bathrooms}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[var(--brand-primary)]">
          ₦{property.price.toLocaleString()}
        </h2>
      </div>
    </div>
  );
}
```

## Type Definitions

Add to your types file:

```tsx
// types/property.ts
export interface PropertyPhoto {
  id: number;
  propertyId: number;
  url: string;
  order: number;
  createdAt: string;
}

export interface Property {
  id: number;
  title: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  description?: string;
  image: string;
  photos?: PropertyPhoto[];
  // ... other fields
}
```

## Styling Notes

Both components use CSS custom properties from your design system:
- `var(--brand-primary)` - Primary color
- `var(--brand-surface)` - Background color
- `var(--brand-border)` - Border color
- `var(--brand-muted)` - Muted text color

Customize styling by updating these variables in your Tailwind config or CSS variables file.

## API Integration

The components expect these API endpoints:

```
GET  /api/properties/photos?propertyId=123
POST /api/properties/upload
DELETE /api/properties/photos?photoId=456
```

Make sure your API routes handle these correctly!

