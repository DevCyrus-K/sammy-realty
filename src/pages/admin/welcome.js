import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaChevronDown,
  FaCog,
  FaSearch,
  FaSignOutAlt,
  FaUser,
  FaUserCircle,
  FaBars,
  FaTimes,
  FaLifeRing,
  FaBell,
  FaQuestionCircle,
  FaFileAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowUp,
  FaCheckCircle,
  FaClock,
  FaMapMarkedAlt,
  FaPlus,
} from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiBuilding2Line } from "react-icons/ri";
import { MdReviews } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdContactMail } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";
import { FiSun, FiMoon } from "react-icons/fi";

const sidebarItems = [
  {
    section: "MAIN",
    items: [
      { label: "Dashboard", icon: LuLayoutDashboard, href: "/admin/welcome" },
    ]
  },
  {
    section: "INVENTORY",
    items: [
      { label: "Properties", icon: RiBuilding2Line, href: "/properties/for-sale" },
      { label: "Listing Requests", icon: FaFileAlt, href: "/admin/welcome#requests" },
    ]
  },
  {
    section: "COMMUNICATION",
    items: [
      { label: "Messages", icon: MdOutlineMailOutline, href: "/admin/welcome#leads" },
      { label: "Customers", icon: MdContactMail, href: "/admin/welcome#leads" },
    ]
  },
  {
    section: "CONTENT",
    items: [
      { label: "FAQ", icon: FaQuestionCircle, href: "/faq" },
      { label: "Testimonial", icon: FaBell, href: "/testimonials" },
      { label: "Reviews", icon: MdReviews, href: "/testimonials" },
    ]
  },
  {
    section: "PEOPLE & REPORTS",
    items: [
      { label: "Listing Report", icon: IoStatsChartSharp, href: "/admin/welcome#reports" },
      { label: "Visitor Report", icon: IoStatsChartSharp, href: "/admin/welcome#reports" },
      { label: "Customer Report", icon: IoStatsChartSharp, href: "/admin/welcome#reports" },
      { label: "Email Delivery Report", icon: IoStatsChartSharp, href: "/admin/welcome#reports" },
    ]
  },
  {
    section: "SETTINGS",
    items: [
      { label: "Account", icon: FaUser, href: "/my-account" },
      { label: "App Settings", icon: FaCog, href: "/admin/welcome#settings" },
    ]
  },
  {
    section: "HELP CENTER",
    items: [
      { label: "Documentation", icon: FaFileAlt, href: "/admin/welcome#help" },
      { label: "Changelog", icon: FaFileAlt, href: "/admin/welcome#help" },
    ]
  },
];

const accountItems = [
  { label: "My Account", icon: FaUser },
  { label: "Help Center", icon: FaLifeRing },
  { label: "Settings", icon: FaCog },
  { label: "Logout", icon: FaSignOutAlt },
];

const dashboardStats = [
  {
    label: "Hot Leads",
    value: "42",
    trend: "+12 today",
    detail: "7 need a call now",
    icon: MdContactMail,
    tone: "green",
  },
  {
    label: "Live Listings",
    value: "128",
    trend: "+8 this week",
    detail: "96 verified properties",
    icon: RiBuilding2Line,
    tone: "blue",
  },
  {
    label: "Vacancy Signal",
    value: "8%",
    trend: "Almost full",
    detail: "Scarcity drives urgency",
    icon: FaCheckCircle,
    tone: "amber",
  },
  {
    label: "Avg Response",
    value: "4m",
    trend: "Under target",
    detail: "Fast contact wins",
    icon: FaClock,
    tone: "coral",
  },
];

const leadQueue = [
  {
    name: "John Kamau",
    intent: "Ready buyer",
    property: "4BR Townhouse, Karen",
    budget: "KES 34M",
    time: "5m ago",
    phone: "+254712555016",
  },
  {
    name: "Amina Noor",
    intent: "Rent inquiry",
    property: "2BR Apartment, Kilimani",
    budget: "KES 95K/mo",
    time: "18m ago",
    phone: "+254733441208",
  },
  {
    name: "Peter Otieno",
    intent: "Land buyer",
    property: "1/8 acre, Kitengela",
    budget: "KES 3.8M",
    time: "31m ago",
    phone: "+254701330945",
  },
];

const listingHealth = [
  { label: "Karen Villas", value: 92, note: "8% Vacant", tone: "scarcity" },
  { label: "Kilimani Heights", value: 100, note: "100% Vacant", tone: "opportunity" },
  { label: "Kitengela Plots", value: 64, note: "36% Vacant", tone: "steady" },
];

const quickActions = [
  { label: "Add listing", href: "/add-listing", icon: FaPlus },
  { label: "For sale", href: "/properties/for-sale", icon: RiBuilding2Line },
  { label: "Map view", href: "/map/all", icon: FaMapMarkedAlt },
];

const requestQueue = [
  { title: "3BR Maisonette", location: "Kiambu Road", status: "Photos pending" },
  { title: "Commercial Plot", location: "Athi River", status: "Verify seller" },
  { title: "Studio Apartment", location: "Westlands", status: "Ready to publish" },
];

const reportCards = [
  { label: "Calls placed", value: "86", helper: "24h activity" },
  { label: "WhatsApp clicks", value: "114", helper: "Lead intent" },
  { label: "Listings viewed", value: "2.4k", helper: "Buyer traffic" },
];

const getWhatsappUrl = (phone) => `https://wa.me/${phone.replace(/\D/g, "")}`;

function AdminWelcome() {
  const router = useRouter();
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New property inquiry from John", unread: true, time: "5m ago" },
    { id: 2, message: "Payment received for property sale", unread: true, time: "1h ago" },
    { id: 3, message: "New review posted on your listing", unread: false, time: "2h ago" },
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 991px)");
    const syncSidebar = () => setIsSidebarOpen(!mediaQuery.matches);

    syncSidebar();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", syncSidebar);
      return () => mediaQuery.removeEventListener("change", syncSidebar);
    }

    mediaQuery.addListener(syncSidebar);
    return () => mediaQuery.removeListener(syncSidebar);
  }, []);

  const handleMarkAllAsRead = () => {
    setNotifications((currentNotifications) =>
      currentNotifications.map(n => ({ ...n, unread: false }))
    );
    toast.success("All notifications marked as read");
  };

  const handleLogout = () => {
    if (isLoggingOut) return;

    setIsLoggingOut(true);
    setIsAccountOpen(false);
    toast.success("Logged out successfully");

    setTimeout(() => {
      router.push("/admin/login");
    }, 900);
  };

  return (
    <>
      <Head>
        <title>Welcome Admin | Sammy Realty</title>
      </Head>
      <ToastContainer position="top-right" autoClose={1200} />

      <main className={`admin-shell ${!isSidebarOpen ? 'sidebar-hidden' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
        {isSidebarOpen && (
          <button
            className="admin-sidebar-backdrop"
            type="button"
            aria-label="Close sidebar"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <aside className="admin-sidebar">
          <div className="admin-sidebar-header">
            <div className="admin-sidebar-brand">
              <span>Sammy Realty</span>
              <small>Admin</small>
            </div>
            <button
              className="admin-sidebar-close"
              type="button"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label="Toggle sidebar"
            >
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <nav className="admin-sidebar-nav" aria-label="Admin navigation">
            {sidebarItems.map(({ section, items }) => (
              <div key={section} className="admin-sidebar-section">
                <div className="admin-sidebar-section-title">{section}</div>
                <div className="admin-sidebar-section-items">
                  {items.map(({ label, icon: Icon, href }) => (
                    <Link href={href} key={label} className="admin-sidebar-link" title={label}>
                      <Icon />
                      <span>{label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className="admin-sidebar-bottom">
            <button
              className="admin-logout-button"
              type="button"
              onClick={handleLogout}
              disabled={isLoggingOut}
              title="Logout"
            >
              <FaSignOutAlt />
              <span>{isLoggingOut ? "Logging you out..." : "Logout"}</span>
            </button>
          </div>
        </aside>

        <section className="admin-main">
          <header className="admin-topbar">
            <button
              className="admin-sidebar-toggle"
              type="button"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label="Toggle sidebar"
            >
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
            <form
              className="admin-search"
              role="search"
              onSubmit={(event) => event.preventDefault()}
            >
              <FaSearch />
              <input type="search" placeholder="Search leads, listings, locations" />
            </form>

            <div className="admin-topbar-actions">
              <button
                className="admin-theme-toggle"
                type="button"
                onClick={() => setIsDarkMode(!isDarkMode)}
                aria-label="Toggle dark mode"
                title={isDarkMode ? "Light mode" : "Dark mode"}
              >
                {isDarkMode ? <FiSun /> : <FiMoon />}
              </button>

              <div className="admin-notifications">
                <button
                  className="admin-icon-button"
                  type="button"
                  onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                  aria-label="Notifications"
                  aria-expanded={isNotificationOpen}
                >
                  <FaBell />
                  {unreadCount > 0 && <span>{unreadCount}</span>}
                </button>

                {isNotificationOpen && (
                  <div className="admin-notifications-menu">
                    <div className="admin-notifications-header">
                      <h3>Notifications</h3>
                      {unreadCount > 0 && (
                        <button
                          type="button"
                          className="admin-mark-all-read"
                          onClick={handleMarkAllAsRead}
                        >
                          Mark all as read
                        </button>
                      )}
                    </div>
                    <div className="admin-notifications-list">
                      {notifications.length > 0 ? (
                        notifications.map(({ id, message, unread, time }) => (
                          <div
                            key={id}
                            className={`admin-notification-item ${unread ? 'unread' : ''}`}
                          >
                            <div className="admin-notification-content">
                              <p className="admin-notification-message">{message}</p>
                              <span className="admin-notification-time">{time}</span>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="admin-notifications-empty">No notifications</div>
                      )}
                    </div>
                    <div className="admin-notifications-footer">
                      <button
                        type="button"
                        className="admin-view-all-notifications"
                        onClick={() => setIsNotificationOpen(false)}
                      >
                        View all notifications
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="admin-account">
                <button
                  className="admin-account-button"
                  type="button"
                  onClick={() => setIsAccountOpen((isOpen) => !isOpen)}
                  aria-expanded={isAccountOpen}
                >
                  <FaUserCircle />
                  <span>Demo User</span>
                  <FaChevronDown />
                </button>

                {isAccountOpen && (
                  <div className="admin-account-menu">
                    {accountItems.map(({ label, icon: Icon }) => (
                      <button
                        type="button"
                        key={label}
                        onClick={label === "Logout" ? handleLogout : undefined}
                        disabled={label === "Logout" && isLoggingOut}
                      >
                        <Icon />
                        <span>
                          {label === "Logout" && isLoggingOut
                            ? "Logging you out..."
                            : label}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </header>

          <div className="admin-content">
            {isLoggingOut && (
              <p className="admin-status-message" role="status">
                Logging you out...
              </p>
            )}

            <section className="admin-hero">
              <div className="admin-hero-copy">
                <span className="admin-eyebrow">Lead command center</span>
                <h1>Welcome back, Demo User</h1>
                <p>42 active leads are waiting across sales, rentals, and land requests.</p>
              </div>

              <div className="admin-hero-panel">
                <span>Fastest seller response</span>
                <strong>04m 28s</strong>
                <small>Target under 5 minutes</small>
              </div>
            </section>

            <section className="admin-stats-grid" aria-label="Dashboard summary">
              {dashboardStats.map(({ label, value, trend, detail, icon: Icon, tone }) => (
                <article className={`admin-stat-card ${tone}`} key={label}>
                  <div className="admin-stat-icon">
                    <Icon />
                  </div>
                  <div>
                    <span>{label}</span>
                    <strong>{value}</strong>
                    <p>
                      <FaArrowUp />
                      {trend}
                    </p>
                    <small>{detail}</small>
                  </div>
                </article>
              ))}
            </section>

            <section className="admin-dashboard-grid">
              <article className="admin-panel admin-leads-panel" id="leads">
                <div className="admin-panel-header">
                  <div>
                    <span className="admin-panel-kicker">Contact first</span>
                    <h2>Hot Lead Queue</h2>
                  </div>
                  <Link href="/properties/for-sale" className="admin-soft-link">
                    View listings
                  </Link>
                </div>

                <div className="admin-lead-list">
                  {leadQueue.map(({ name, intent, property, budget, time, phone }) => (
                    <div className="admin-lead-row" key={`${name}-${phone}`}>
                      <div className="admin-lead-person">
                        <strong>{name}</strong>
                        <span>{intent}</span>
                      </div>
                      <div className="admin-lead-property">
                        <strong>{property}</strong>
                        <span>{budget} · {time}</span>
                      </div>
                      <div className="admin-lead-actions">
                        <a href={`tel:${phone}`} className="admin-call-link" aria-label={`Call ${name}`}>
                          <FaPhoneAlt />
                          <span>Call</span>
                        </a>
                        <a
                          href={getWhatsappUrl(phone)}
                          className="admin-whatsapp-link"
                          aria-label={`WhatsApp ${name}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaWhatsapp />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <aside className="admin-side-stack">
                <article className="admin-panel" id="settings">
                  <div className="admin-panel-header compact">
                    <div>
                      <span className="admin-panel-kicker">Vacancy</span>
                      <h2>Listing Health</h2>
                    </div>
                  </div>

                  <div className="admin-health-list">
                    {listingHealth.map(({ label, value, note, tone }) => (
                      <div className="admin-health-item" key={label}>
                        <div className="admin-health-copy">
                          <strong>{label}</strong>
                          <span className={tone}>{note}</span>
                        </div>
                        <div className="admin-health-track" aria-label={`${label} ${note}`}>
                          <span style={{ width: `${value}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="admin-panel admin-actions-panel" id="help">
                  <div className="admin-panel-header compact">
                    <div>
                      <span className="admin-panel-kicker">Move fast</span>
                      <h2>Quick Actions</h2>
                    </div>
                  </div>

                  <div className="admin-action-grid">
                    {quickActions.map(({ label, href, icon: Icon }) => (
                      <Link href={href} className="admin-action-tile" key={label}>
                        <Icon />
                        <span>{label}</span>
                      </Link>
                    ))}
                  </div>
                </article>
              </aside>
            </section>

            <section className="admin-lower-grid">
              <article className="admin-panel" id="requests">
                <div className="admin-panel-header">
                  <div>
                    <span className="admin-panel-kicker">Publish pipeline</span>
                    <h2>Listing Requests</h2>
                  </div>
                  <Link href="/add-listing" className="admin-soft-link">
                    Add listing
                  </Link>
                </div>

                <div className="admin-request-list">
                  {requestQueue.map(({ title, location, status }) => (
                    <div className="admin-request-row" key={`${title}-${location}`}>
                      <div>
                        <strong>{title}</strong>
                        <span>{location}</span>
                      </div>
                      <p>{status}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="admin-panel" id="reports">
                <div className="admin-panel-header compact">
                  <div>
                    <span className="admin-panel-kicker">Conversion</span>
                    <h2>Today&apos;s Activity</h2>
                  </div>
                </div>

                <div className="admin-report-grid">
                  {reportCards.map(({ label, value, helper }) => (
                    <div className="admin-report-item" key={label}>
                      <strong>{value}</strong>
                      <span>{label}</span>
                      <small>{helper}</small>
                    </div>
                  ))}
                </div>
              </article>
            </section>
          </div>
        </section>
      </main>

      <style jsx>{`
        .admin-shell {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 220px minmax(0, 1fr);
          background: #f7faf8;
          color: #071c1f;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode {
          background: #1a1a1a;
          color: #f0f0f0;
        }

        .admin-shell.sidebar-hidden {
          grid-template-columns: 70px minmax(0, 1fr);
        }

        .admin-shell.sidebar-hidden.dark-mode {
          background: #1a1a1a;
        }

        .admin-sidebar {
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: #ffffff;
          border-right: 1px solid #e6eee9;
          color: #071c1f;
          padding: 20px 18px;
          transition: all 0.3s ease;
          overflow-y: auto;
        }

        .admin-shell.dark-mode .admin-sidebar {
          background: #2a2a2a;
          border-right-color: #444444;
          color: #f0f0f0;
        }

        .admin-sidebar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding-bottom: 12px;
          border-bottom: 1px solid #e6eee9;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-sidebar-header {
          border-bottom-color: #444444;
        }

        .admin-sidebar-close {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #dfe8e3;
          border-radius: 0;
          background: transparent;
          color: #0B5D3B;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-sidebar-close {
          border-color: #444444;
          color: #4CAF50;
        }

        .admin-sidebar-close:hover {
          background: #f7faf8;
        }

        .admin-shell.dark-mode .admin-sidebar-close:hover {
          background: #333333;
        }

        .admin-shell.sidebar-hidden .admin-sidebar-close {
          display: none;
        }

        .admin-sidebar-brand {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 0;
          border-bottom: none;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-sidebar-brand {
          border-bottom-color: #444444;
        }

        .admin-sidebar-brand span {
          font-size: 18px;
          font-weight: 800;
          color: #0B5D3B;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-sidebar-brand span {
          color: #4CAF50;
        }

        .admin-sidebar-brand small {
          color: #0B5D3B;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 11px;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-sidebar-brand small {
          color: #4CAF50;
        }

        .admin-sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .admin-sidebar-section {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .admin-sidebar-section-title {
          font-size: 11px;
          font-weight: 900;
          color: #0B5D3B;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 0 8px;
          margin-bottom: 4px;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-sidebar-section-title {
          color: #4CAF50;
        }

        .admin-shell.sidebar-hidden .admin-sidebar-section-title {
          display: none;
        }

        .admin-sidebar-section-items {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .admin-sidebar-bottom {
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid #e6eee9;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-sidebar-bottom {
          border-top-color: #444444;
        }

        .admin-sidebar-link,
        .admin-logout-button {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          border: 0;
          border-radius: 0;
          background: transparent;
          color: #333333;
          font-weight: 700;
          padding: 10px 12px;
          text-align: left;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-sidebar-link,
        .admin-shell.dark-mode .admin-logout-button {
          color: #e0e0e0;
        }

        .admin-shell.sidebar-hidden .admin-sidebar-link,
        .admin-shell.sidebar-hidden .admin-logout-button {
          justify-content: center;
          padding: 10px 6px;
          font-size: 0;
        }

        .admin-shell.sidebar-hidden .admin-sidebar-link svg,
        .admin-shell.sidebar-hidden .admin-logout-button svg {
          font-size: 18px;
        }

        .admin-sidebar-link:hover,
        .admin-logout-button:hover {
          background: rgba(11, 93, 59, 0.08);
          color: #0B5D3B;
        }

        .admin-shell.dark-mode .admin-sidebar-link:hover,
        .admin-shell.dark-mode .admin-logout-button:hover {
          background: rgba(11, 93, 59, 0.2);
          color: #4CAF50;
        }

        .admin-main {
          min-width: 0;
        }

        .admin-topbar {
          min-height: 78px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          background: #ffffff;
          border-bottom: 1px solid #e6eee9;
          padding: 16px 28px;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-topbar {
          background: #2a2a2a;
          border-bottom-color: #444444;
        }

        .admin-theme-toggle {
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #dfe8e3;
          border-radius: 0;
          background: #ffffff;
          color: #0B5D3B;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-theme-toggle {
          background: #333333;
          border-color: #444444;
          color: #ffd700;
        }

        .admin-theme-toggle:hover {
          background: #f7faf8;
        }

        .admin-shell.dark-mode .admin-theme-toggle:hover {
          background: #444444;
        }

        .admin-sidebar-toggle {
          display: inline-flex;
          width: 44px;
          height: 44px;
          border: 1px solid #dfe8e3;
          border-radius: 0;
          background: #ffffff;
          color: #0B5D3B;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-sidebar-toggle {
          background: #333333;
          border-color: #444444;
          color: #4CAF50;
        }

        .admin-sidebar-toggle:hover {
          background: #f7faf8;
        }

        .admin-shell.dark-mode .admin-sidebar-toggle:hover {
          background: #444444;
        }

        .admin-search {
          width: min(460px, 100%);
          display: flex;
          align-items: center;
          gap: 12px;
          background: #f7faf8;
          border: 1px solid #e6eee9;
          border-radius: 0;
          padding: 0 14px;
          color: #0B5D3B;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-search {
          background: #333333;
          border-color: #444444;
          color: #4CAF50;
        }

        .admin-search input {
          width: 100%;
          height: 44px;
          border: 0;
          background: transparent;
          margin: 0;
          padding: 0;
          color: #333333;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-search input {
          color: #f0f0f0;
        }

        .admin-search input::placeholder {
          color: #999999;
        }

        .admin-shell.dark-mode .admin-search input::placeholder {
          color: #666666;
        }

        .admin-topbar-actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .admin-notifications {
          position: relative;
        }

        .admin-icon-button {
          position: relative;
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #e6eee9;
          border-radius: 0;
          background: #ffffff;
          color: #0B5D3B;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-icon-button {
          background: #333333;
          border-color: #444444;
          color: #4CAF50;
        }

        .admin-icon-button:hover {
          background: #f7faf8;
        }

        .admin-shell.dark-mode .admin-icon-button:hover {
          background: #444444;
        }

        .admin-icon-button span {
          position: absolute;
          top: -5px;
          right: -5px;
          min-width: 18px;
          height: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 0;
          background: #ff5a3c;
          color: #ffffff;
          font-size: 11px;
          font-weight: 800;
        }

        .admin-notifications-menu {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          z-index: 10;
          width: 340px;
          background: #ffffff;
          border: 1px solid #e6eee9;
          box-shadow: 0 16px 35px rgba(11, 93, 59, 0.08);
          max-height: 450px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-notifications-menu {
          background: #2a2a2a;
          border-color: #444444;
          box-shadow: 0 16px 35px rgba(0, 0, 0, 0.3);
        }

        .admin-notifications-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          border-bottom: 1px solid #e6eee9;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-notifications-header {
          border-bottom-color: #444444;
        }

        .admin-notifications-header h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 800;
          color: #071c1f;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-notifications-header h3 {
          color: #f0f0f0;
        }

        .admin-mark-all-read {
          border: 0;
          background: transparent;
          color: #0B5D3B;
          font-size: 13px;
          font-weight: 700;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-mark-all-read {
          color: #4CAF50;
        }

        .admin-mark-all-read:hover {
          text-decoration: underline;
        }

        .admin-notifications-list {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }

        .admin-notification-item {
          padding: 12px 16px;
          border-bottom: 1px solid #f0f3f1;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .admin-shell.dark-mode .admin-notification-item {
          border-bottom-color: #333333;
        }

        .admin-notification-item:hover {
          background: #f7faf8;
        }

        .admin-shell.dark-mode .admin-notification-item:hover {
          background: #333333;
        }

        .admin-notification-item.unread {
          background: #f0f8f5;
          border-left: 4px solid #0B5D3B;
          padding-left: 12px;
        }

        .admin-shell.dark-mode .admin-notification-item.unread {
          background: #1a3a2a;
          border-left-color: #4CAF50;
        }

        .admin-notification-message {
          margin: 0;
          font-size: 14px;
          font-weight: 700;
          color: #071c1f;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-notification-message {
          color: #f0f0f0;
        }

        .admin-notification-time {
          font-size: 12px;
          color: #999999;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-notification-time {
          color: #888888;
        }

        .admin-notification-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .admin-notifications-empty {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 16px;
          color: #999999;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-notifications-empty {
          color: #666666;
        }

        .admin-notifications-footer {
          padding: 12px 16px;
          border-top: 1px solid #e6eee9;
          display: flex;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-notifications-footer {
          border-top-color: #444444;
        }

        .admin-view-all-notifications {
          border: 0;
          background: transparent;
          color: #0B5D3B;
          font-size: 14px;
          font-weight: 700;
          padding: 8px 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-view-all-notifications {
          color: #4CAF50;
        }

        .admin-view-all-notifications:hover {
          background: #f7faf8;
          text-decoration: underline;
        }

        .admin-shell.dark-mode .admin-view-all-notifications:hover {
          background: #333333;
        }

        .admin-account {
          position: relative;
        }

        .admin-account-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 1px solid #e6eee9;
          border-radius: 0;
          background: #ffffff;
          color: #071c1f;
          font-weight: 700;
          padding: 9px 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-account-button {
          background: #333333;
          border-color: #444444;
          color: #f0f0f0;
        }

        .admin-account-button:hover {
          border-color: #0B5D3B;
        }

        .admin-shell.dark-mode .admin-account-button:hover {
          border-color: #4CAF50;
        }

        .admin-account-button svg:first-child {
          color: #0B5D3B;
          font-size: 24px;
        }

        .admin-account-menu {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          z-index: 10;
          width: 190px;
          background: #ffffff;
          border: 1px solid #e6eee9;
          box-shadow: 0 16px 35px rgba(11, 93, 59, 0.08);
          padding: 8px;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-account-menu {
          background: #2a2a2a;
          border-color: #444444;
          box-shadow: 0 16px 35px rgba(0, 0, 0, 0.3);
        }

        .admin-account-menu button {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;
          border: 0;
          background: transparent;
          color: #071c1f;
          font-weight: 700;
          padding: 10px;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-account-menu button {
          color: #f0f0f0;
        }

        .admin-account-menu button:hover {
          background: #f7faf8;
          color: #0B5D3B;
        }

        .admin-shell.dark-mode .admin-account-menu button:hover {
          background: #333333;
          color: #4CAF50;
        }

        .admin-logout-button:disabled,
        .admin-account-menu button:disabled {
          cursor: not-allowed;
          opacity: 0.78;
        }

        .admin-content {
          padding: 32px;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-content {
          background: #1a1a1a;
        }

        .admin-status-message {
          display: inline-block;
          margin: 0 0 18px;
          border-left: 4px solid #0B5D3B;
          background: #ffffff;
          color: #071c1f;
          font-weight: 700;
          padding: 12px 16px;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-status-message {
          background: #2a2a2a;
          border-left-color: #4CAF50;
          color: #f0f0f0;
        }

        .admin-content h1 {
          margin: 0;
          font-size: 32px;
          color: #0B5D3B;
          transition: all 0.3s ease;
        }

        .admin-shell.dark-mode .admin-content h1 {
          color: #4CAF50;
        }

        @media (max-width: 767px) {
          .admin-shell {
            grid-template-columns: 1fr;
          }

          .admin-shell.sidebar-hidden {
            grid-template-columns: 1fr;
          }

          .admin-sidebar-toggle {
            display: none;
          }

          .admin-sidebar-close {
            display: flex !important;
          }

          .admin-shell .admin-sidebar {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 999;
            width: 220px;
            height: 100vh;
            box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
            overflow-y: auto;
          }

          .admin-shell.sidebar-hidden .admin-sidebar {
            left: -220px;
          }

          .admin-sidebar-section {
            gap: 4px;
          }

          .admin-sidebar-nav,
          .admin-sidebar-bottom {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .admin-topbar {
            align-items: stretch;
            flex-direction: column;
            padding: 16px;
          }

          .admin-topbar-actions {
            justify-content: space-between;
          }

          .admin-content {
            padding: 24px 16px;
          }
        }
      `}</style>
    </>
  );
}

export default AdminWelcome;
