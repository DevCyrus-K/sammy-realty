import { useState, useEffect } from "react";

export function useProperties(options = {}) {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    total: 0,
    limit: options.limit || 10,
    offset: options.offset || 0,
  });

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams({
          limit: options.limit || 10,
          offset: options.offset || 0,
          ...(options.featured && { featured: true }),
        });

        const response = await fetch(`/api/properties?${params}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch properties");
        }

        setProperties(data.data);
        setPagination(data.pagination);
        setError(null);
      } catch (err) {
        setError(err.message);
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [options.limit, options.offset, options.featured]);

  return { properties, loading, error, pagination };
}
