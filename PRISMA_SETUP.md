# Supabase + Prisma Integration Guide

## Overview
This application uses Supabase as the PostgreSQL database provider and Prisma as the ORM for type-safe database access.

## Setup Instructions

### 1. Environment Variables
The `.env` file contains your Supabase credentials:
```
DATABASE_URL=postgresql://...
DIRECT_URL=postgresql://...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 2. Prisma Setup
The `prisma/schema.prisma` file defines all database models:
- **User**: Admin user authentication
- **LoginOtp**: OTP for login verification
- **PasswordReset**: Password reset tokens
- **Property**: Real estate listings
- **Agent**: Real estate agents
- **Inquiry**: Property inquiries/messages from users
- **Testimonial**: Customer testimonials

### 3. Database Migrations
To sync your local schema with Supabase:
```bash
npx prisma migrate dev --name initial
```

To push schema changes to Supabase:
```bash
npx prisma db push
```

## Available APIs

### Authentication
- **POST /api/admin/login** - Admin user login
  - Required: email, password
  - Returns: user object with id and email

- **POST /api/admin/password-reset** - Request password reset
  - Required: email
  - Returns: success message

### Properties
- **GET /api/properties** - Fetch all properties
  - Query params: featured, limit, offset
  - Returns: array of properties with pagination

### Inquiries (Messages)
- **POST /api/inquiries** - Submit property inquiry
  - Required: name, email, message
  - Optional: propertyId, phone
  - Returns: created inquiry object

- **GET /api/inquiries** - Fetch inquiries
  - Query params: propertyId, limit, offset
  - Returns: array of inquiries with pagination

### Agents
- **GET /api/agents** - Fetch all agents
  - Query params: limit, offset
  - Returns: array of agents with pagination

### Testimonials
- **GET /api/testimonials** - Fetch testimonials
  - Query params: limit, offset
  - Returns: array of testimonials with pagination

## Using the Hooks

### useProperties Hook
```jsx
import { useProperties } from '@/hooks/use-properties';

function MyComponent() {
  const { properties, loading, error, pagination } = useProperties({
    featured: true,
    limit: 10,
    offset: 0
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {properties.map(prop => (
        <div key={prop.id}>{prop.title}</div>
      ))}
    </div>
  );
}
```

### useInquiry Hook
```jsx
import { useInquiry } from '@/hooks/use-inquiry';
import { toast } from 'react-toastify';

function ContactForm() {
  const { submitInquiry, loading, error, success } = useInquiry();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitInquiry({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'I am interested in this property',
        propertyId: 1
      });
      toast.success('Inquiry submitted successfully');
    } catch (err) {
      toast.error(err.message);
    }
  };

  return <form onSubmit={handleSubmit}>...</form>;
}
```

## Database Access in Components

For server-side operations, use Prisma directly:

```javascript
import prisma from '@/lib/prisma';

// In an API route or server-side function
const property = await prisma.property.findUnique({
  where: { id: 1 }
});
```

## Important Notes

1. **Never select password field** in queries - Use `select: { id: true, email: true }` when fetching users

2. **Error Handling** - All API endpoints include try/catch blocks. Always handle errors in client code

3. **Authentication** - Currently using localStorage for admin session storage. Implement proper JWT/session tokens for production

4. **Password Hashing** - Install and use `bcrypt` for password hashing before production deployment:
   ```bash
   npm install bcrypt
   ```

5. **Email Sending** - Password reset and inquiry confirmation emails are TODO. Integrate with a service like SendGrid or Mailgun

## Next Steps

1. Implement email notifications for password resets and inquiries
2. Add JWT-based authentication for better security
3. Create admin dashboard to manage properties, agents, and inquiries
4. Add image upload functionality for properties
5. Implement user authentication for clients
