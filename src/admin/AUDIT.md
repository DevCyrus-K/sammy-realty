# Admin Audit

## Live Routes

- `/admin` and `/admin/login`: legacy login page in `src/pages/admin/login.js`.
- `/admin/welcome`: legacy monolithic dashboard in `src/pages/admin/welcome.js`.
- `/admin/dashboard`: exports `src/admin/pages/DashboardPage`.
- `/admin/properties`: exports `src/admin/pages/PropertiesPage`.
- `/admin/listing-requests`: exports `src/admin/pages/ListingRequestsPage`.
- `/admin/messages`: exports `src/admin/pages/MessagesPage`.
- `/admin/customers`: exports `src/admin/pages/CustomersPage`.
- `/admin/faq`: exports `src/admin/pages/FaqPage`.
- `/admin/testimonials`: exports `src/admin/pages/TestimonialsPage`.
- `/admin/reports` and `/admin/reports/[type]`: export `src/admin/pages/ReportsPage`.
- `/admin/settings`: exports `src/admin/pages/SettingsPage`.
- `/admin/reset-password` and `/admin/reset-link-sent`: legacy password pages.

## Existing Admin Surface

- `src/pages/admin/*.tsx` route files are thin read-only wrappers into `src/admin`.
- `src/pages/admin/login.js`, `reset-password.js`, `reset-link-sent.js`, and `welcome.js` are legacy pages with inline styles and React Icons.
- `src/components/admin` contains an older dashboard implementation based on shadcn-style local UI and Recharts; it is not used by the routed `src/admin` pages.
- `src/admin/components/layout` contains the active admin shell, sidebar, and topbar.
- `src/admin/components/data-table` contains the active TanStack Table implementation.
- `src/admin/components/charts` contains the active ApexCharts wrappers.
- `src/admin/components/properties`, `dashboard`, `shared`, and `ui` contain shared admin-only presentation components.

## Data Preserved

- Admin mock data is read from `src/lib/mock-data.ts`: properties, listing requests, messages, customers, FAQs, testimonials, activity feed, dashboard KPIs, and report chart data.
- Formatting helpers are read from `src/lib/utils.ts`.
- All create/update/delete/approve/reject interactions remain local UI state plus toast feedback.

## Pre-Upgrade Gaps Found

- The active admin shell did not scope `next-themes` or `react-hot-toast` in `AdminLayout`.
- The sidebar used a border-left active marker instead of a full active background and did not expose all requested report/settings nav items.
- The topbar had no expandable search, breadcrumb icons, notification item detail, or avatar menu.
- The reusable table was TanStack-based but missed debounced search, clear filters, full pagination text, richer bulk actions, and animated rows.
- Reports still contained one plain HTML table for top pages.
- Chart wrappers used ApexCharts but were not consistently framed with chart card headers and mount skeletons.
