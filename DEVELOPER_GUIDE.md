# Developer Guide: Supabase + Prisma Integration

## Overview
This guide explains how to work with the Supabase + Prisma integration in the Sammy Realty platform.

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     React Components                         │
│         (Home, Properties, Contact, Admin Pages)            │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ↓
        ┌────────────────────────────┐
        │  Custom React Hooks        │
        │  - useProperties()         │
        │  - useInquiry()            │
        └────────────┬───────────────┘
                     │
                     ↓
        ┌────────────────────────────┐
        │   Next.js API Routes       │
        │   /api/admin/*             │
        │   /api/properties/*        │
        │   /api/inquiries/*         │
        │   /api/agents/*            │
        │   /api/testimonials/*      │
        └────────────┬───────────────┘
                     │
                     ↓
        ┌────────────────────────────┐
        │  Prisma ORM                │
        │  - Type-safe queries       │
        │  - Auto-generated types    │
        │  - Query builder           │
        └────────────┬───────────────┘
                     │
                     ↓
        ┌────────────────────────────┐
        │   Supabase PostgreSQL      │
        │   - 7 Database Models      │
        │   - Realtime capable       │
        │   - Full-text search       │
        └────────────────────────────┘
```

## Directory Structure

```
src/
├── lib/
│   └── prisma.js                    # Prisma client singleton
│
├── pages/api/
│   ├── admin/
│   │   ├── login.js                # Authentication
│   │   └── password-reset.js       # Password reset
│   │
│   ├── properties/
│   │   └── index.js                # Property listing API
│   │
│   ├── inquiries/
│   │   └── index.js                # Message/inquiry handling
│   │
│   ├── agents/
│   │   └── index.js                # Team members API
│   │
│   └── testimonials/
│       └── index.js                # Reviews API
│
├── hooks/
│   ├── use-properties.js           # Properties data hook
│   ├── use-inquiry.js              # Inquiry submission hook
│   └── ...other hooks
│
└── pages/
    └── admin/
        └── login.js                # Admin login (uses API)

prisma/
├── schema.prisma                   # Database schema
├── migrations/                     # Migration files
└── seed.js                         # Seed script
```

## Database Schema

### User (Authentication)
```prisma
model User {
  id        Int
  email     String @unique
  password  String          // Never expose this!
  loginOtps LoginOtp[]
  createdAt DateTime
  updatedAt DateTime
}
```

### Property (Listings)
```prisma
model Property {
  id           Int
  image        String
  title        String
  status       String          // available, sold, rented
  location     String
  description  String?
  bedrooms     Int
  bathrooms    Int
  amenities    String?
  price        Decimal(15,2)
  propertyType String          // apartment, house, villa, etc
  featured     Boolean         // Show on homepage?
  inquiries    Inquiry[]       // Related inquiries
  createdAt    DateTime
}
```

### Inquiry (Messages/Contact Requests)
```prisma
model Inquiry {
  id         Int
  propertyId Int?            // Optional - links to property
  property   Property?
  name       String
  email      String
  phone      String?
  message    String
  createdAt  DateTime
}
```

### Agent (Team Members)
```prisma
model Agent {
  id        Int
  name      String
  email     String @unique
  phone     String?
  photoUrl  String?
  bio       String?
  createdAt DateTime
}
```

### Testimonial (Reviews)
```prisma
model Testimonial {
  id             Int
  clientName     String
  clientLocation String
  clientPhotoUrl String?
  rating         Int           // 1-5 stars
  body           String        // Review text
  createdAt      DateTime
}
```

### PasswordReset & LoginOtp (Security)
```prisma
model PasswordReset {
  id        Int
  email     String
  token     String
  expiresAt DateTime
  createdAt DateTime
}

model LoginOtp {
  id        Int
  userId    Int
  otp       String
  expiresAt DateTime
  createdAt DateTime
}
```

## API Endpoints

### Authentication

#### Login
```
POST /api/admin/login
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "secure-password"
}

Response 200:
{
  "success": true,
  "user": {
    "id": 1,
    "email": "admin@example.com"
  }
}

Response 401:
{
  "error": "Invalid email or password"
}
```

#### Password Reset Request
```
POST /api/admin/password-reset
Content-Type: application/json

{
  "email": "admin@example.com"
}

Response 200:
{
  "message": "If an account with this email exists, a reset link will be sent",
  "token": "abc123..." // Only in development
}
```

### Properties

#### Get All Properties
```
GET /api/properties?limit=10&offset=0&featured=true

Response 200:
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Luxury Apartment",
      "price": "500000.00",
      "location": "Downtown",
      "featured": true,
      ...
    }
  ],
  "pagination": {
    "total": 45,
    "limit": 10,
    "offset": 0
  }
}
```

### Inquiries

#### Submit Inquiry
```
POST /api/inquiries
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "message": "I'm interested in this property",
  "propertyId": 1
}

Response 201:
{
  "success": true,
  "data": {
    "id": 42,
    "name": "John Doe",
    "email": "john@example.com",
    "message": "I'm interested in this property",
    "propertyId": 1,
    "createdAt": "2024-05-26T..."
  },
  "message": "Your inquiry has been submitted successfully"
}
```

#### Get Inquiries
```
GET /api/inquiries?propertyId=1&limit=10&offset=0

Response 200:
{
  "success": true,
  "data": [
    {
      "id": 42,
      "name": "John Doe",
      "email": "john@example.com",
      "message": "I'm interested in this property",
      "property": {
        "id": 1,
        "title": "Luxury Apartment"
      },
      "createdAt": "2024-05-26T..."
    }
  ],
  "pagination": { ... }
}
```

### Agents
```
GET /api/agents?limit=10&offset=0

Response 200:
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Jane Smith",
      "email": "jane@example.com",
      "phone": "+1234567890",
      "photoUrl": "https://...",
      "bio": "Senior agent with 10 years experience",
      "createdAt": "2024-05-26T..."
    }
  ],
  "pagination": { ... }
}
```

### Testimonials
```
GET /api/testimonials?limit=6&offset=0

Response 200:
{
  "success": true,
  "data": [
    {
      "id": 1,
      "clientName": "Sarah Johnson",
      "clientLocation": "New York, NY",
      "clientPhotoUrl": "https://...",
      "rating": 5,
      "body": "Excellent service! Found my dream home.",
      "createdAt": "2024-05-26T..."
    }
  ],
  "pagination": { ... }
}
```

## Using Hooks in Components

### useProperties Hook

```jsx
import { useProperties } from '@/hooks/use-properties';

function PropertyListing() {
  const { properties, loading, error, pagination } = useProperties({
    featured: true,
    limit: 12,
    offset: 0
  });

  if (loading) return <div>Loading properties...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="property-grid">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <p>Showing {properties.length} of {pagination.total} properties</p>
    </div>
  );
}
```

### useInquiry Hook

```jsx
import { useInquiry } from '@/hooks/use-inquiry';
import { toast } from 'react-toastify';

function ContactForm({ propertyId }) {
  const { submitInquiry, loading, error, success } = useInquiry();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitInquiry({
        ...formData,
        propertyId
      });
      toast.success('Thank you! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        placeholder="Your Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        placeholder="Your Email"
        required
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={(e) => setFormData({...formData, phone: e.target.value})}
        placeholder="Your Phone (optional)"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
        placeholder="Your Message"
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Inquiry'}
      </button>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">Message sent successfully!</div>}
    </form>
  );
}
```

## Direct Prisma Usage (Server-Side)

For more complex operations, use Prisma directly in API routes:

```javascript
// pages/api/properties/[id].js
import prisma from '@/lib/prisma';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const property = await prisma.property.findUnique({
        where: { id: parseInt(id) },
        include: {
          inquiries: {
            select: {
              id: true,
              name: true,
              email: true,
              createdAt: true
            },
            orderBy: { createdAt: 'desc' },
            take: 5
          }
        }
      });

      if (!property) {
        return res.status(404).json({ error: 'Property not found' });
      }

      res.status(200).json({ data: property });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
```

## Best Practices

1. **Never expose passwords** - Always use `select` to exclude password field
   ```js
   // ✅ Good
   const user = await prisma.user.findUnique({
     where: { email },
     select: { id: true, email: true }
   });
   
   // ❌ Bad - exposes password
   const user = await prisma.user.findUnique({ where: { email } });
   ```

2. **Use hooks for client-side data fetching**
   ```js
   // ✅ Good - reusable, clean
   const { properties, loading } = useProperties();
   
   // ❌ Avoid - boilerplate everywhere
   const [properties, setProperties] = useState([]);
   useEffect(() => { fetch(...) }, []);
   ```

3. **Handle errors consistently**
   ```js
   // ✅ Good
   try {
     const data = await submitInquiry(formData);
     toast.success('Success!');
   } catch (error) {
     toast.error(error.message);
   }
   ```

4. **Use pagination for large datasets**
   ```js
   // ✅ Good - limits data transfer
   const { properties } = useProperties({ limit: 10, offset: 0 });
   
   // ❌ Bad - fetches all properties
   const { properties } = useProperties();
   ```

5. **Type-safe Prisma queries**
   ```js
   // ✅ Good - Prisma provides autocomplete & type checking
   await prisma.property.findMany({ where: { featured: true } });
   
   // ❌ Avoid - raw SQL queries when possible
   await db.query('SELECT * FROM properties WHERE featured = true');
   ```

## Troubleshooting

### Issue: "PrismaClient not initialized"
**Solution**: Ensure `src/lib/prisma.js` exists and is imported correctly

### Issue: "Database connection timeout"
**Solution**: Check `.env` DATABASE_URL and DIRECT_URL are correct

### Issue: "No migrations found"
**Solution**: Run `npx prisma migrate dev --name initial`

### Issue: "Type errors with Prisma queries"
**Solution**: Run `npx prisma generate` to regenerate types

## Performance Tips

1. **Use `select` to fetch only needed fields**
   ```js
   // Fetches only title and price
   const properties = await prisma.property.findMany({
     select: { id: true, title: true, price: true }
   });
   ```

2. **Use `take` and `skip` for pagination**
   ```js
   // Fetch 10 items, skip first 20
   const properties = await prisma.property.findMany({
     take: 10,
     skip: 20
   });
   ```

3. **Use `include` only when needed**
   ```js
   // Avoid including large relations unnecessarily
   const properties = await prisma.property.findMany({
     include: { inquiries: true }  // Only if needed
   });
   ```

## Next: Implementation Checklist

- [ ] Install bcrypt: `npm install bcrypt`
- [ ] Seed database: `npx prisma db seed`
- [ ] Add admin users
- [ ] Replace hardcoded data with API calls
- [ ] Implement email notifications
- [ ] Add JWT authentication
- [ ] Set up CI/CD for migrations
- [ ] Add monitoring & logging
