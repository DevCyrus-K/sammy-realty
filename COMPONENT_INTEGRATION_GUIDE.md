# Component Integration Guide

## How to Replace Hardcoded Data with Database APIs

This guide shows examples of updating components to use the new database APIs instead of hardcoded JSON data.

---

## 1. Display Properties List

### Before (Hardcoded)
```javascript
import productsData from "@/data/products.json";

export default function PropertyGrid() {
  return (
    <div className="property-grid">
      {productsData.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
```

### After (Database-Backed)
```javascript
import { useProperties } from "@/hooks/use-properties";
import PropertyCard from "@/components/property/PropertyCard";

export default function PropertyGrid() {
  const { properties, loading, error, pagination } = useProperties({
    limit: 12,
    featured: false
  });

  if (loading) return <div>Loading properties...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="property-grid">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
```

---

## 2. Display Featured Properties

### Using the Hook
```javascript
import { useProperties } from "@/hooks/use-properties";

export default function FeaturedProperties() {
  const { properties } = useProperties({
    limit: 6,
    featured: true
  });

  return (
    <section className="featured-properties">
      <h2>Featured Listings</h2>
      <div className="properties-carousel">
        {properties.map((property) => (
          <div key={property.id} className="property-item">
            <img src={property.image} alt={property.title} />
            <h3>{property.title}</h3>
            <p className="price">${property.price}</p>
            <p className="location">{property.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

---

## 3. Property Inquiry Form

### Before (No Backend)
```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  alert("Inquiry submitted (not saved)");
};
```

### After (Database Saved)
```javascript
import { useInquiry } from "@/hooks/use-inquiry";

export default function InquiryForm({ propertyId }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const { submitInquiry, loading, error, success } = useInquiry();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitInquiry({
        propertyId,
        ...formData
      });
      alert("Inquiry submitted successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      alert("Failed to submit inquiry: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <textarea
        placeholder="Your Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit Inquiry"}
      </button>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">Inquiry submitted!</div>}
    </form>
  );
}
```

---

## 4. Team/Agents List

### Before (Hardcoded)
```javascript
import teamData from "@/data/team.json";

export default function TeamCarousel() {
  return (
    <Slider {...settings}>
      {teamData.map((agent) => (
        <TeamCard key={agent.id} agent={agent} />
      ))}
    </Slider>
  );
}
```

### After (Database)
```javascript
import { fetchAgents } from "@/lib/api-service";
import TeamCard from "@/components/team/TeamCard";

export default function TeamCarousel() {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAgents({ limit: 6 })
      .then(data => setAgents(data.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading team...</div>;

  return (
    <Slider {...settings}>
      {agents.map((agent) => (
        <TeamCard 
          key={agent.id} 
          name={agent.name}
          email={agent.email}
          phone={agent.phone}
          photoUrl={agent.photoUrl}
          bio={agent.bio}
        />
      ))}
    </Slider>
  );
}
```

---

## 5. Testimonials Carousel

### Before (Hardcoded)
```javascript
import testimonialsData from "@/data/testimonials.json";

export default function TestimonialSlider() {
  return (
    <Slider {...settings}>
      {testimonialsData.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </Slider>
  );
}
```

### After (Database)
```javascript
import { fetchTestimonials } from "@/lib/api-service";
import TestimonialCard from "@/components/testimonial/TestimonialCard";

export default function TestimonialSlider() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials({ limit: 6 })
      .then(data => setTestimonials(data.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading testimonials...</div>;

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="testimonial-card">
          <div className="stars">
            {'⭐'.repeat(testimonial.rating)}
          </div>
          <p className="body">{testimonial.body}</p>
          <h4 className="client-name">{testimonial.clientName}</h4>
          <p className="client-location">{testimonial.clientLocation}</p>
          {testimonial.clientPhotoUrl && (
            <img 
              src={testimonial.clientPhotoUrl} 
              alt={testimonial.clientName}
              className="client-photo"
            />
          )}
        </div>
      ))}
    </Slider>
  );
}
```

---

## 6. Admin Dashboard - View Inquiries

### Example
```javascript
import { useState, useEffect } from "react";
import { fetchInquiries } from "@/lib/api-service";

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInquiries({ limit: 20 })
      .then(data => setInquiries(data.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading inquiries...</div>;

  return (
    <table className="inquiries-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Property</th>
          <th>Message</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {inquiries.map((inquiry) => (
          <tr key={inquiry.id}>
            <td>{inquiry.name}</td>
            <td>{inquiry.email}</td>
            <td>{inquiry.property?.title || "General"}</td>
            <td>{inquiry.message}</td>
            <td>{new Date(inquiry.createdAt).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

---

## 7. Manual API Call (No Hook)

### Using api-service.js directly
```javascript
import { fetchProperties, submitInquiry } from "@/lib/api-service";

export default function SomeComponent() {
  // Fetch properties
  const handleFetchProperties = async () => {
    try {
      const data = await fetchProperties({ limit: 10 });
      console.log("Properties:", data.data);
    } catch (error) {
      console.error("Failed to fetch:", error.message);
    }
  };

  // Submit inquiry
  const handleSubmitInquiry = async () => {
    try {
      const response = await submitInquiry({
        propertyId: 123,
        name: "John Doe",
        email: "john@example.com",
        phone: "+1234567890",
        message: "I'm interested in this property"
      });
      console.log("Inquiry submitted:", response.data);
    } catch (error) {
      console.error("Failed to submit:", error.message);
    }
  };

  return (
    <div>
      <button onClick={handleFetchProperties}>Fetch Properties</button>
      <button onClick={handleSubmitInquiry}>Submit Inquiry</button>
    </div>
  );
}
```

---

## Migration Checklist

- [ ] Update property listings to use `useProperties` hook
- [ ] Update featured properties section
- [ ] Update team/agents carousel to fetch from database
- [ ] Update testimonials carousel
- [ ] Update all inquiry/contact forms to save to database
- [ ] Remove hardcoded JSON imports from components
- [ ] Test all pages and verify data loads correctly
- [ ] Check API response pagination and filtering
- [ ] Add error handling UI for failed API calls
- [ ] Implement loading skeletons/spinners

---

## Common Patterns

### Error Handling
```javascript
if (error) {
  return <div className="alert alert-error">Failed to load: {error}</div>;
}
```

### Loading State
```javascript
if (loading) {
  return (
    <div className="skeleton">
      <div className="skeleton-item" />
      <div className="skeleton-item" />
      <div className="skeleton-item" />
    </div>
  );
}
```

### Pagination
```javascript
const { pagination } = useProperties();

return (
  <div>
    {/* Content */}
    <nav>
      <button disabled={pagination.offset === 0}>Previous</button>
      <span>Page {pagination.offset / pagination.limit + 1}</span>
      <button disabled={pagination.offset + pagination.limit >= pagination.total}>
        Next
      </button>
    </nav>
  </div>
);
```

---

**All components should now use real database data instead of hardcoded values!**
