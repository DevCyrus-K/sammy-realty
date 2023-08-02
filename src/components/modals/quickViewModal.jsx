import ReactDom from "react-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const QuickViewModal = ({ children, open, onClose }) => {
  console.log(children, "children");
  if (!open) return null;

  if (open) {
    return ReactDom.createPortal(
      // <Modal
      //   backdrop="static"
      //   keyboard={false}
      //   size="lg"
      //   className="ltn__modal-area ltn__quick-view-modal-area"
      // >
      //   {/* <Modal.Header>
      //     <Button className="close" variant="secondary" onClick={onClose}>
      //       <span aria-hidden="true">&times;</span>
      //     </Button>
      //   </Modal.Header> */}
      //   <Modal.Body>{children}</Modal.Body>
      // </Modal>,
      { children },
      document.getElementById("quickview-root")
    );
  }
};

export default QuickViewModal;
