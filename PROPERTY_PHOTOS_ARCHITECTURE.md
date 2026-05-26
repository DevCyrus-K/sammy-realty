# Property Photos System - Architecture & Flow

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                          FRONTEND USERS                          │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│              PropertyPhotoDisplay Component                       │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ • Main Carousel                                           │   │
│  │ • Thumbnail Navigation                                   │   │
│  │ • Lightbox Modal                                         │   │
│  │ • Mobile Responsive                                      │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                    ┌─────────┴─────────┐
                    ▼                   ▼
        ┌──────────────────┐  ┌──────────────────┐
        │  GET /api/       │  │  Property Detail │
        │  properties/     │  │  Pages           │
        │  photos          │  │                  │
        └──────────────────┘  └──────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────────┐
│                     DATABASE (Prisma)                            │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ property_photos TABLE:                                   │   │
│  │ • id (PK)          • url                                 │   │
│  │ • property_id (FK) • order                               │   │
│  │ • created_at                                             │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │  Supabase DB     │
                    │  (PostgreSQL)    │
                    └──────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                      ADMIN PANEL                                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│          PropertyPhotoGallery Component                           │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ • File Upload Interface                                  │   │
│  │ • Multiple File Selection                                │   │
│  │ • Thumbnail Grid Preview                                │   │
│  │ • Delete Functionality                                   │   │
│  │ • Max 10 Photos Limit                                    │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                    ┌─────────┼─────────┐
                    ▼         ▼         ▼
        ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
        │  POST /api/  │ │  DELETE /api/│ │  GET /api/   │
        │  properties/ │ │  properties/ │ │  properties/ │
        │  upload      │ │  photos      │ │  photos      │
        └──────────────┘ └──────────────┘ └──────────────┘
                    │         │         │
                    └─────────┼─────────┘
                              ▼
        ┌─────────────────────────────────────────┐
        │ Supabase Storage API (REST)             │
        │ • Multipart Upload                      │
        │ • File Storage                          │
        │ • CDN Distribution                      │
        └─────────────────────────────────────────┘
                              │
                              ▼
        ┌─────────────────────────────────────────┐
        │ Supabase Storage Bucket                 │
        │ /property-photos/                       │
        │   ├── properties/1/photo-123.jpg        │
        │   ├── properties/1/photo-456.jpg        │
        │   ├── properties/2/photo-789.jpg        │
        │   └── ...                               │
        └─────────────────────────────────────────┘
                              │
                              ▼
        ┌─────────────────────────────────────────┐
        │ Supabase CDN                            │
        │ (Fast Global Delivery)                  │
        └─────────────────────────────────────────┘
```

---

## Data Flow Diagrams

### Upload Flow (Admin)
```
User Selects File
        │
        ▼
PropertyPhotoGallery
        │
        ▼
Validate File (Type, Size)
        │
        ├─ Valid ──→ Create FormData ──→ POST /api/properties/upload
        │                                       │
        │                                       ▼
        │                          Upload to Supabase Storage
        │                                       │
        │                                       ▼
        │                          Get Public URL
        │                                       │
        │                                       ▼
        │                          Create DB Record
        │                                       │
        │                                       ▼
        │                          Return URL
        │
        ├─ Invalid ──→ Show Error Toast
        │
        ▼
Update Component State
        │
        ▼
Display Thumbnail
        │
        ▼
Show Success Notification
```

### Display Flow (Frontend)
```
Property Detail Page Loads
        │
        ▼
useEffect Hook Triggers
        │
        ▼
Fetch: GET /api/properties/photos?propertyId=123
        │
        ▼
Database Query
        │
        ▼
Return Photo URLs
        │
        ▼
PropertyPhotoDisplay Component
        │
        ├─ Render Main Carousel
        │
        ├─ Render Thumbnail Strip
        │
        └─ Setup Navigation & Lightbox
```

---

## Component Hierarchy

```
App
├── Admin Panel
│   └── PropertiesPage
│       └── PropertyDrawer/Modal
│           └── PropertyPhotoGallery
│               ├── File Input
│               ├── Upload Button
│               ├── Thumbnail Grid
│               │   ├── Photo Thumbnail
│               │   ├── Photo Thumbnail
│               │   └── Delete Button
│               └── Max Photos Warning
│
└── Frontend
    └── PropertyDetailPage
        └── PropertyPhotoDisplay
            ├── Main Carousel
            │   ├── Image
            │   ├── Previous Button
            │   ├── Next Button
            │   └── Photo Counter
            ├── Thumbnail Strip
            │   ├── Thumbnail
            │   ├── Thumbnail
            │   └── Thumbnail
            └── Lightbox Modal
                ├── Full Screen Image
                ├── Navigation
                └── Close Button
```

---

## Database Schema

```
properties (existing)
├── id (PK)
├── title
├── price
├── bedrooms
├── bathrooms
├── description
├── image
├── created_at
└── photos (relationship) ──┐
                             │
                             └──→ property_photos
                                  ├── id (PK)
                                  ├── property_id (FK)
                                  ├── url (VARCHAR 500)
                                  ├── order (INT)
                                  └── created_at
```

---

## API Endpoints

### GET /api/properties/photos
```
Request:
  GET /api/properties/photos?propertyId=123

Response:
  [
    {
      id: 1,
      propertyId: 123,
      url: "https://supabase.../properties/123/photo-1.jpg",
      order: 0,
      createdAt: "2024-05-26T10:00:00Z"
    },
    ...
  ]
```

### POST /api/properties/upload
```
Request:
  POST /api/properties/upload
  Content-Type: multipart/form-data
  
  Fields:
    - file: File
    - propertyId: number

Response:
  {
    success: true,
    url: "https://supabase.../properties/123/photo-2.jpg",
    photoId: 2
  }
```

### DELETE /api/properties/photos
```
Request:
  DELETE /api/properties/photos?photoId=1

Response:
  204 No Content
```

---

## File Storage Structure

```
Supabase Bucket: property-photos
│
└── properties/
    ├── 1/
    │   ├── property-1-1716703200000.jpg
    │   ├── property-1-1716703201000.jpg
    │   └── property-1-1716703202000.jpg
    ├── 2/
    │   ├── property-2-1716703300000.jpg
    │   └── property-2-1716703301000.jpg
    └── ...
```

---

## Environment Variables Flow

```
.env (Local)
    ↓
process.env (Node.js)
    ├─ NEXT_PUBLIC_* (sent to browser)
    │  ├── NEXT_PUBLIC_SUPABASE_URL
    │  └── NEXT_PUBLIC_SUPABASE_ANON_KEY
    │
    └─ Sensitive (server only)
       └── SUPABASE_SERVICE_ROLE_KEY

Vercel Environment
    ├── Settings → Environment Variables
    └── Same pattern as above
```

---

## Deployment Architecture

```
┌──────────────────┐
│   GitHub Repo    │
│   (Source Code)  │
└────────┬─────────┘
         │
         ▼
┌──────────────────────────────────────┐
│   Vercel CI/CD Pipeline              │
│  • Build                             │
│  • Test                              │
│  • Deploy                            │
└────────┬─────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────┐
│   Vercel Deployment                  │
│  • Next.js App                       │
│  • API Routes                        │
│  • Static Assets                     │
└────────┬─────────────────────────────┘
         │
         ├──────────────────────────────┐
         ▼                              ▼
    ┌────────────┐           ┌──────────────────┐
    │ Supabase   │           │ Supabase Storage │
    │ Database   │           │ (CDN)            │
    │(PostgreSQL)│           │ (Images)         │
    └────────────┘           └──────────────────┘
```

---

## Request/Response Cycle

### Admin Upload
```
1. User Selects Files
2. PropertyPhotoGallery Validates
3. FormData Created
4. POST /api/properties/upload
5. Server Receives File
6. Validate & Process
7. Upload to Supabase Storage
8. Save to Database
9. Return URL
10. Component Updates
11. Show Thumbnail
```

### Frontend Display
```
1. Page Loads
2. useEffect Runs
3. GET /api/properties/photos
4. Server Queries DB
5. Returns Photo URLs
6. Component Renders
7. Images Load from CDN
8. Gallery Interactive
```

---

## Performance Optimizations

```
Client Side:
├── Image Lazy Loading (LCP optimization)
├── Thumbnail Compression
├── Lightbox Modal Splitting
└── Progressive Enhancement

Server Side:
├── Database Indexing on property_id
├── Supabase CDN Caching
├── Response Compression
└── Connection Pooling

Storage:
├── S3-compatible API
├── Automatic CDN Distribution
├── Edge Caching
└── Region Replication
```

---

## Error Handling Flow

```
Upload Error?
    ├─ File Too Large → Show Max Size Warning
    ├─ Invalid Type → Show File Type Error
    ├─ Network Error → Show Retry Toast
    ├─ Quota Full → Show "Max 10 photos"
    └─ Server Error → Show Generic Error

Display Error?
    ├─ Photos Missing → Show Empty State
    ├─ Load Failed → Show Placeholder
    └─ Connection Lost → Show Offline Message
```

---

## Monitoring & Analytics

```
Events to Track:
├── Photo Upload Started
├── Photo Upload Completed
├── Upload Failed (with reason)
├── Photo Viewed
├── Lightbox Opened
├── Gallery Interacted
└── Photo Deleted

Metrics to Monitor:
├── Upload Success Rate
├── Average Upload Time
├── Image Load Time (LCP)
├── Storage Usage
└── Bandwidth Usage
```

This is a complete, production-ready architecture! 🚀
