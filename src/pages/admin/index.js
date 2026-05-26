/*
  ADMIN AUDIT - 2026-05-26

  1. Login form/page:
     - src/pages/admin/login.js

  2. Current successful-login behavior:
     - src/pages/admin/login.js handleSubmit validates the demo credentials, shows a toast, then router.push("/admin/welcome") after 1 second.
     - No auth state is currently stored before redirect.

  3. Welcome page location:
     - src/pages/admin/welcome.js

  4. Welcome imports/references:
     - src/pages/admin/login.js redirects to /admin/welcome.
     - src/pages/admin/welcome.js self-contains its own legacy nav links to /admin/welcome hash routes.
     - No active src/admin component imports Welcome.

  5. Routing setup:
     - Next.js Pages Router via src/pages.
     - src/pages/_app.js is the global app wrapper; there is no App.tsx or main.tsx.
     - Admin pages under src/pages/admin mostly re-export active implementations from src/admin/pages.

  6. Registered /admin/* routes before fixes:
     - /admin -> src/pages/admin/index.js -> ./login
     - /admin/login -> src/pages/admin/login.js
     - /admin/welcome -> src/pages/admin/welcome.js
     - /admin/dashboard -> src/admin/pages/DashboardPage
     - /admin/properties -> src/admin/pages/PropertiesPage
     - /admin/listing-requests -> src/admin/pages/ListingRequestsPage
     - /admin/messages -> src/admin/pages/MessagesPage
     - /admin/customers -> src/admin/pages/CustomersPage
     - /admin/faq -> src/admin/pages/FaqPage
     - /admin/testimonials -> src/admin/pages/TestimonialsPage
     - /admin/reports and /admin/reports/[type] -> src/admin/pages/ReportsPage
     - /admin/settings -> src/admin/pages/SettingsPage
     - /admin/reset-password -> src/pages/admin/reset-password.js
     - /admin/reset-link-sent -> src/pages/admin/reset-link-sent.js

  7. Admin layout/responsiveness issues found:
     - /admin loads login instead of Dashboard.
     - Sidebar is hidden until desktop and does not provide the requested collapsed tablet state.
     - Mobile nav sheet is present but not the requested w-72 left slide panel with explicit overlay motion.
     - Mobile topbar shows breadcrumbs and lacks a compact centered brand/title treatment.
     - Data tables scroll horizontally but do not enforce a stable mobile min-width.
     - Messages page stays split-pane on mobile instead of list/detail state.
     - Drawers remain right-side panels on mobile instead of bottom sheets.
     - Modal positioning is centered on mobile instead of thumb-reachable lower placement.

  8. Admin console/import bugs found:
     - Login redirects to removed /admin/welcome with router.push instead of replace.
     - No shared auth state or guard protects /admin/*.
     - Sidebar/topbar logout links do not clear auth state.
     - Reports and settings read initial route query only once, so route/query navigation can show stale tabs.
     - DataTable bulk actions do not clear selected rows after action.
*/
export { default } from "@/admin/pages/DashboardPage";
