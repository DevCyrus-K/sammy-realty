# Quick Start: Using the Database

## 1. Login Page (Non-Hardcoded Auth)
The admin login page now authenticates against the Supabase database:
- Endpoint: `POST /api/admin/login`
- Users must exist in the `users` table
- Passwords are validated via bcrypt

### To add a test admin user:
```sql
-- Connect to Supabase SQL editor and run:
INSERT INTO users (email, password, created_at, updated_at) 
VALUES (
  'admin@sammy-realty.com', 
  '$2b$10$...', -- bcrypt hashed password
  NOW(),
  NOW()
);
```

## 2. Display Properties (No Hardcoded Data)
Replace hardcoded property data with API:

```jsx
// OLD (hardcoded):
const properties = [
  { id: 1, title: "Luxury Apartment", ... },
  { id: 2, title: "Beach House", ... }
];

// NEW (from database):
import { useProperties } from '@/hooks/use-properties';

function PropertyList() {
  const { properties, loading, error } = useProperties({ limit: 12 });
  
  if (loading) return <Skeleton />;
  if (error) return <Error message={error} />;
  
  return (
    <div className="properties-grid">
      {properties.map(prop => (
        <PropertyCard key={prop.id} data={prop} />
      ))}
    </div>
  );
}
```

## 3. Property Inquiries (Messages)
All property inquiries are now stored in the database:

```jsx
import { useInquiry } from '@/hooks/use-inquiry';

function InquiryForm({ propertyId }) {
  const { submitInquiry, loading, error } = useInquiry();
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
      toast.error('Failed to submit inquiry');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        required
      />
      <input
        type="tel"
        placeholder="Your Phone"
        value={formData.phone}
        onChange={(e) => setFormData({...formData, phone: e.target.value})}
      />
      <textarea
        placeholder="Your Message"
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Submit Inquiry'}
      </button>
    </form>
  );
}
```

## 4. Team Members (Agents)
Display team from database:

```jsx
import { useState, useEffect } from 'react';

function TeamSection() {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/agents?limit=10')
      .then(res => res.json())
      .then(data => {
        setAgents(data.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading team...</div>;

  return (
    <div className="team-grid">
      {agents.map(agent => (
        <div key={agent.id} className="team-card">
          {agent.photoUrl && <img src={agent.photoUrl} alt={agent.name} />}
          <h3>{agent.name}</h3>
          <p>{agent.bio}</p>
          <a href={`mailto:${agent.email}`}>{agent.email}</a>
        </div>
      ))}
    </div>
  );
}
```

## 5. Testimonials
Display customer reviews from database:

```jsx
import { useState, useEffect } from 'react';

function TestimonialCarousel() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('/api/testimonials?limit=6')
      .then(res => res.json())
      .then(data => setTestimonials(data.data));
  }, []);

  return (
    <div className="testimonial-carousel">
      {testimonials.map(testimonial => (
        <div key={testimonial.id} className="testimonial-card">
          <div className="rating">
            {'⭐'.repeat(testimonial.rating)}
          </div>
          <p className="body">{testimonial.body}</p>
          <h4>{testimonial.clientName}</h4>
          <p className="location">{testimonial.clientLocation}</p>
        </div>
      ))}
    </div>
  );
}
```

## 6. Password Reset (Non-Hardcoded)
The password reset flow is now database-driven:

1. User requests reset: `POST /api/admin/password-reset`
2. Token is generated and stored in `password_resets` table
3. Reset email sent with token link (TODO: implement email)
4. User resets password with token

## 7. Direct Database Access (Server-Side)

For more complex operations, access Prisma directly in API routes:

```javascript
// pages/api/properties/[id].js
import prisma from '@/lib/prisma';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const property = await prisma.property.findUnique({
      where: { id: parseInt(id) },
      include: {
        inquiries: {
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
```

## 8. Migration Checklist

- [ ] Install bcrypt: `npm install bcrypt`
- [ ] Install Prisma Client: `npm install @prisma/client`
- [ ] Run migrations: `npx prisma migrate dev`
- [ ] Seed database: `npx prisma db seed`
- [ ] Add admin users to database
- [ ] Update all hardcoded data with API calls
- [ ] Test login with database users
- [ ] Test property inquiries
- [ ] Implement email notifications
- [ ] Deploy to production

## Support

For database questions, refer to:
- Supabase Docs: https://supabase.com/docs
- Prisma Docs: https://www.prisma.io/docs
- See PRISMA_SETUP.md for full API documentation
