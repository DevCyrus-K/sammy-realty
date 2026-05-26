# 🍞 Toast Notifications - Quick Start

## Installation Done! ✅

The toast system is now unified across your entire application. No setup needed!

## Quick Reference

### Import
```jsx
import toast from "react-hot-toast";
```

### Common Examples

#### Success
```jsx
toast.success("Item added to cart!");
```

#### Error  
```jsx
toast.error("Failed to save. Please try again.");
```

#### Loading
```jsx
const id = toast.loading("Processing payment...");
setTimeout(() => toast.success("Payment complete!", { id }), 2000);
```

#### Custom Message
```jsx
toast("Custom notification");
```

#### Promise
```jsx
const promise = fetch("/api/data");
toast.promise(promise, {
  loading: "Loading...",
  success: "Loaded successfully!",
  error: "Failed to load",
});
```

## Real World Examples

### Redux Action
```jsx
// src/store/slices/cart-slice.js
import toast from "react-hot-toast";

addToCart(state, action) {
  state.cartItems.push(action.payload);
  toast.success("Added to cart!");
}
```

### React Component
```jsx
// src/components/contact/index.jsx
import toast from "react-hot-toast";

const handleSubmit = (data) => {
  // ... submit logic
  toast.success("Thank you! We'll contact you soon.");
};
```

### Admin Page
```jsx
// src/admin/pages/SettingsPage.tsx
import toast from "react-hot-toast";

const handleSave = async () => {
  try {
    await saveSettings();
    toast.success("Settings saved!");
  } catch (error) {
    toast.error("Failed to save settings");
  }
};
```

## Styling Info

- **Position**: Top-right corner
- **Colors**: Green (success), Red (error), Blue (loading)
- **Duration**: Auto-close after 4 seconds
- **Always on top**: z-index 9999

## Where It Works

✅ Admin pages
✅ Frontend pages  
✅ Layout components
✅ Contact forms
✅ Redux slices
✅ API responses
✅ Form submissions

## Need More Info?

See `TOAST_SYSTEM.md` for complete documentation and advanced usage.

---

**That's it! You're ready to use toasts anywhere in your app!** 🎉
