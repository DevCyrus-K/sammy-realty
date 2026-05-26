import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import styles from "../../styles/admin.module.css";

function useDesktopDrawer() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsDesktop(query.matches);

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return isDesktop;
}

export function Drawer({
  open,
  onClose,
  title,
  children,
  footer,
  widthClass = "max-w-[480px]",
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  widthClass?: string;
}) {
  const isDesktop = useDesktopDrawer();

  return (
    <AnimatePresence>
      {open ? (
        <Dialog static className={`${styles.adminSurface} relative z-50`} open={open} onClose={onClose}>
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className={isDesktop ? `fixed right-0 top-0 h-full w-full ${widthClass}` : "fixed bottom-0 left-0 right-0 max-h-[90vh]"}
            initial={isDesktop ? { x: "100%" } : { y: "100%" }}
            animate={isDesktop ? { x: 0 } : { y: 0 }}
            exit={isDesktop ? { x: "100%" } : { y: "100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 34 }}
          >
            <DialogPanel className={`flex ${isDesktop ? "h-full" : "max-h-[90vh] rounded-t-2xl"} flex-col overflow-hidden bg-[var(--brand-card)] shadow-2xl`}>
              {!isDesktop ? <div className="mx-auto mt-3 h-1 w-8 rounded-full bg-[var(--brand-border)]" /> : null}
              <div className="sticky top-0 flex items-center justify-between border-b border-[var(--brand-border)] bg-[var(--brand-card)] p-4 md:p-5">
                <DialogTitle className="text-lg font-semibold text-[var(--brand-primary)]">{title}</DialogTitle>
                <Button variant="ghost" className="size-9 px-0" onClick={onClose} aria-label="Close drawer">
                  <X size={18} />
                </Button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 md:p-6">{children}</div>
              {footer ? <div className="sticky bottom-0 flex flex-wrap justify-end gap-2 border-t border-[var(--brand-border)] bg-[var(--brand-card)] p-4 md:p-5">{footer}</div> : null}
            </DialogPanel>
          </motion.div>
        </Dialog>
      ) : null}
    </AnimatePresence>
  );
}
