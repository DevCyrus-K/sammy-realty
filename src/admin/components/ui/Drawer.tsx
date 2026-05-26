import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";
import { X } from "lucide-react";
import { Button } from "./Button";
import styles from "../../styles/admin.module.css";

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
  return (
    <Transition show={open} as={Fragment}>
      <Dialog className={`${styles.adminSurface} relative z-50`} onClose={onClose}>
        <TransitionChild as={Fragment} enter="duration-150" enterFrom="opacity-0" enterTo="opacity-100" leave="duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </TransitionChild>
        <div className="fixed inset-0 overflow-hidden">
          <TransitionChild
            as={Fragment}
            enter="transform transition duration-200"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition duration-150"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <DialogPanel className={`fixed right-0 top-0 flex h-full w-full ${widthClass} flex-col bg-[var(--brand-card)] shadow-2xl`}>
              <div className="sticky top-0 flex items-center justify-between border-b border-[var(--brand-border)] bg-[var(--brand-card)] p-5">
                <DialogTitle className="text-lg font-semibold text-[var(--brand-primary)]">{title}</DialogTitle>
                <Button variant="ghost" className="size-9 px-0" onClick={onClose} aria-label="Close drawer">
                  <X size={18} />
                </Button>
              </div>
              <div className="flex-1 overflow-y-auto p-6">{children}</div>
              {footer ? <div className="sticky bottom-0 flex justify-end gap-2 border-t border-[var(--brand-border)] bg-[var(--brand-card)] p-5">{footer}</div> : null}
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}
