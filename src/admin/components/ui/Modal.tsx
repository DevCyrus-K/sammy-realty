import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";
import { X } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import styles from "../../styles/admin.module.css";

export function Modal({
  open,
  onClose,
  title,
  children,
  footer,
  className,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog className={`${styles.adminSurface} relative z-50`} onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </TransitionChild>
        <div className="fixed inset-0 overflow-y-auto p-4">
          <div className="flex min-h-full items-end justify-center md:items-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-150"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel
                className={cn(
                  "mx-4 w-full max-w-full rounded-[var(--brand-radius)] bg-[var(--brand-card)] p-4 shadow-xl md:mx-auto md:max-w-lg md:p-6",
                  className
                )}
              >
                <div className="mb-4 flex items-center justify-between gap-4">
                  <DialogTitle className="text-lg font-semibold text-[var(--brand-primary)]">{title}</DialogTitle>
                  <Button variant="ghost" className="size-9 px-0" onClick={onClose} aria-label="Close modal">
                    <X size={18} />
                  </Button>
                </div>
                <div className="max-h-[65vh] overflow-y-auto">{children}</div>
                {footer ? <div className="mt-6 flex flex-wrap justify-end gap-2 border-t border-[var(--brand-border)] pt-4">{footer}</div> : null}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
