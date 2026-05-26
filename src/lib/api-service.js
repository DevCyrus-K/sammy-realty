/**
 * Data service layer for API calls
 * Handles all data fetching from the Sammy Realty API
 */

// Properties
export async function fetchProperties(options = {}) {
  const { featured = false, limit = 10, offset = 0 } = options;
  
  const params = new URLSearchParams({
    limit,
    offset,
    ...(featured && { featured: true }),
  });

  const response = await fetch(`/api/v1/listings?${params}`);
  if (!response.ok) {
    throw new Error("Failed to fetch properties");
  }
  return response.json();
}

// Single property
export async function fetchProperty(id) {
  const response = await fetch(`/api/v1/listings?id=${encodeURIComponent(id)}`);
  if (!response.ok) {
    throw new Error("Failed to fetch property");
  }
  return response.json();
}

// Inquiries
export async function submitInquiry(data) {
  const response = await fetch("/api/inquiries", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to submit inquiry");
  }
  return response.json();
}

export async function fetchInquiries(options = {}) {
  const { propertyId, limit = 10, offset = 0 } = options;
  
  const params = new URLSearchParams({ limit, offset });
  if (propertyId) params.append("propertyId", propertyId);

  const response = await fetch(`/api/inquiries?${params}`);
  if (!response.ok) {
    throw new Error("Failed to fetch inquiries");
  }
  return response.json();
}

// Agents
export async function fetchAgents(options = {}) {
  const { limit = 10, offset = 0 } = options;
  
  const params = new URLSearchParams({ limit, offset });

  const response = await fetch(`/api/agents?${params}`);
  if (!response.ok) {
    throw new Error("Failed to fetch agents");
  }
  return response.json();
}

// Testimonials
export async function fetchTestimonials(options = {}) {
  const { limit = 10, offset = 0 } = options;
  
  const params = new URLSearchParams({ limit, offset });

  const response = await fetch(`/api/testimonials?${params}`);
  if (!response.ok) {
    throw new Error("Failed to fetch testimonials");
  }
  return response.json();
}

// Authentication
export async function loginAdmin(email, password) {
  const response = await fetch("/api/admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Login failed");
  }
  return response.json();
}

export async function requestPasswordReset(email) {
  const response = await fetch("/api/admin/password-reset", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Password reset failed");
  }
  return response.json();
}

export async function confirmPasswordReset(token, newPassword) {
  const response = await fetch("/api/admin/confirm-password-reset", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token, newPassword }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Password reset confirmation failed");
  }
  return response.json();
}
