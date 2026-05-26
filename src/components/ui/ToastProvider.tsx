import React from "react";
import { Toaster } from "react-hot-toast";

/**
 * ToastProvider Component
 * 
 * Provides a unified toast notification system across the entire application.
 * Uses react-hot-toast with consistent styling that matches the admin panel.
 * 
 * Usage:
 * - Add this component in _app.js to enable toast notifications globally
 * - Use `import toast from "react-hot-toast"` and `toast.success()`, `toast.error()`, etc. in any component
 * 
 * Example:
 * ```jsx
 * import toast from "react-hot-toast";
 * 
 * export default function MyComponent() {
 *   const handleAction = () => {
 *     toast.success("Action completed!");
 *   };
 *   
 *   return <button onClick={handleAction}>Click me</button>;
 * }
 * ```
 */
export function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      containerStyle={{ zIndex: 9999 }}
      toastOptions={{
        style: {
          background: "#ffffff",
          color: "#1f2937",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          fontFamily: "inherit",
          fontSize: "14px",
          padding: "12px 16px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        },
        success: {
          style: {
            background: "#f0fdf4",
            color: "#166534",
            borderColor: "#bbf7d0",
          },
          icon: "✓",
        },
        error: {
          style: {
            background: "#fef2f2",
            color: "#991b1b",
            borderColor: "#fecaca",
          },
          icon: "✕",
        },
        loading: {
          style: {
            background: "#f0f9ff",
            color: "#0c4a6e",
            borderColor: "#bae6fd",
          },
        },
      }}
    />
  );
}

export default ToastProvider;
