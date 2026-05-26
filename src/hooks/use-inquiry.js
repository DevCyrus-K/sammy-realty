import { useState, useCallback } from "react";

export function useInquiry() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitInquiry = useCallback(async (data) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit inquiry");
      }

      setSuccess(true);
      return result.data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { submitInquiry, loading, error, success };
}
