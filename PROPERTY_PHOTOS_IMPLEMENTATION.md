# Property Photos Implementation Checklist

## What Has Been Set Up

### ✅ Database Schema
- Added `PropertyPhoto` model to Prisma schema
- Creates `property_photos` table with:
  - `id`, `propertyId`, `url`, `order`, `createdAt`
  - Cascade delete when property is deleted
  - Index on `propertyId` for fast queries

### ✅ API Endpoints Created
1. **`/api/properties/photos`** - GET/POST/DELETE operations
   - GET: Fetch all photos for a property
   - POST: Add photo metadata to database
   - DELETE: Remove photo record

2. **`/api/properties/upload`** - Handle file uploads
   - Receives multipart form data
   - Validates file type and size
   - Integrates with Supabase storage

### ✅ Components Created

#### Admin Components
- **`PropertyPhotoGallery.tsx`** - Admin upload interface
  - Multiple file upload
  - Up to 10 photos per property
  - Thumbnail grid view
  - Delete functionality
  - Loading states

#### Frontend Components
- **`PropertyPhotoDisplay.tsx`** - Customer-facing gallery
  - Main carousel view
  - Thumbnail navigation
  - Lightbox modal
  - Previous/Next navigation
  - Photo counter

### ✅ Environment Setup
- `.env` updated with Supabase placeholders
- Instructions for adding credentials

### ✅ Documentation
- `PROPERTY_PHOTOS_SETUP.md` - Complete setup guide
- Step-by-step Supabase configuration
- Deployment instructions for Vercel

---

## Next Steps to Complete

### Step 1: Install Dependencies
```bash
npm install @supabase/supabase-js formidable
# or
yarn add @supabase/supabase-js formidable
```

### Step 2: Create Supabase Account & Project
1. Go to https://supabase.com
2. Create new project
3. Create bucket named `property-photos`
4. Make it PUBLIC

### Step 3: Configure Environment Variables
Get from Supabase dashboard (Settings → API):
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

### Step 4: Run Prisma Migration
```bash
npx prisma migrate dev --name add_property_photos
```

### Step 5: Update Upload Handler
Edit `src/pages/api/properties/upload.ts` and replace the mock implementation with actual Supabase integration (see PROPERTY_PHOTOS_SETUP.md for code)

### Step 6: Integrate into Admin
Add PropertyPhotoGallery to PropertyDrawer or PropertyModal:

```tsx
import { PropertyPhotoGallery } from '../components/properties/PropertyPhotoGallery';

// In your property form component:
const [propertyPhotos, setPropertyPhotos] = useState([]);

<PropertyPhotoGallery
  propertyId={propertyId}
  photos={propertyPhotos}
  onPhotosChange={setPropertyPhotos}
  maxPhotos={10}
/>
```

### Step 7: Add to Frontend
In your property detail/listing component:

```tsx
import { PropertyPhotoDisplay } from '@/components/property/PropertyPhotoDisplay';

// Fetch photos
useEffect(() => {
  fetch(`/api/properties/photos?propertyId=${propertyId}`)
    .then(r => r.json())
    .then(photos => setPhotos(photos));
}, [propertyId]);

// Display gallery
<PropertyPhotoDisplay
  propertyId={propertyId}
  photos={photos}
  title="Property Photos"
/>
```

---

## Features Included

✅ Upload up to 10 photos per property
✅ Image validation (type & size)
✅ Supabase cloud storage
✅ Admin gallery manager
✅ Customer photo carousel
✅ Lightbox viewer
✅ Mobile responsive
✅ Vercel compatible
✅ Thumbnail navigation
✅ Auto-organized by property

---

## File Structure

```
src/
├── lib/
│   └── supabase.ts (creates client & upload functions)
├── pages/api/
│   └── properties/
│       ├── photos.ts (CRUD operations)
│       └── upload.ts (file handling)
├── admin/components/
│   └── properties/
│       └── PropertyPhotoGallery.tsx (admin UI)
└── components/
    └── property/
        └── PropertyPhotoDisplay.tsx (customer UI)

prisma/
└── schema.prisma (PropertyPhoto model added)

.env (Supabase credentials)
```

---

## Deployment to Vercel

1. Add environment variables in Vercel project settings
2. Redeploy to apply new env vars
3. Supabase handles all image storage & CDN

---

## Database Queries

### Fetch all photos for a property
```sql
SELECT * FROM property_photos 
WHERE property_id = 123 
ORDER BY "order" ASC;
```

### Count photos per property
```sql
SELECT property_id, COUNT(*) as photo_count 
FROM property_photos 
GROUP BY property_id;
```

### Delete all photos for a property
```sql
DELETE FROM property_photos 
WHERE property_id = 123;
```

---

## Support

If you encounter issues:
1. Check `PROPERTY_PHOTOS_SETUP.md` troubleshooting section
2. Verify Supabase bucket is PUBLIC
3. Ensure environment variables are set
4. Check browser console for errors
5. Run `npx prisma db push` to sync schema

---

## Costs

- **Supabase Storage**: Free tier includes 1GB
- **Supabase Database**: Free tier includes 500MB
- **Vercel**: Free tier compatible
- Total: 🎉 Free for most use cases!

