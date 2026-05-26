import { Modal } from "./Modal";
import { Button } from "./Button";

export function ConfirmModal({
  open,
  title,
  description,
  confirmLabel = "Confirm",
  onCancel,
  onConfirm,
  children,
}: {
  open: boolean;
  title: string;
  description?: string;
  confirmLabel?: string;
  onCancel: () => void;
  onConfirm: () => void;
  children?: React.ReactNode;
}) {
  return (
    <Modal
      open={open}
      onClose={onCancel}
      title={title}
      footer={
        <>
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={onConfirm}>
            {confirmLabel}
          </Button>
        </>
      }
    >
      {description ? <p className="mb-4 text-sm text-[var(--brand-muted)]">{description}</p> : null}
      {children}
    </Modal>
  );
}
