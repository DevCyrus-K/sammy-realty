import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import styles from "../../styles/admin.module.css";

export function AdminLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{title} | Sammy Realty Admin</title>
      </Head>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <div className={`${styles.adminSurface} admin-surface bg-[var(--brand-surface)] dark:text-slate-100`}>
          <div className="flex min-h-screen">
            <Sidebar
              collapsed={collapsed}
              onToggle={() => setCollapsed((value) => !value)}
              mobileOpen={mobileOpen}
              onMobileClose={() => setMobileOpen(false)}
            />
            <div className="flex min-w-0 flex-1 flex-col">
              <Topbar onMenu={() => setMobileOpen(true)} />
              <motion.main
                key={title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="mx-auto flex w-full max-w-[1480px] flex-1 flex-col overflow-x-hidden p-4 lg:p-6"
              >
                {children}
              </motion.main>
            </div>
          </div>
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "var(--brand-card)",
                color: "var(--brand-primary)",
                border: "1px solid var(--brand-border)",
                borderRadius: "var(--brand-radius)",
                fontFamily: "var(--brand-font)",
                fontSize: "14px",
                padding: "12px 16px",
              },
            }}
          />
        </div>
      </ThemeProvider>
    </>
  );
}
