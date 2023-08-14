import Link from "next/link";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegHeart,
  FaExchangeAlt,
  FaInstagram,
  FaDribbble,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const QuickViewModal = ({ productData, onHide, show, slug }) => {
  const onCloseModal = () => {
    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={onCloseModal}
      backdrop="static"
      keyboard={false}
      size="lg"
      className="ltn__modal-area ltn__quick-view-modal-area"
    >
      <Modal.Header>
        <Button className="close" variant="secondary" onClick={onCloseModal}>
          <span aria-hidden="true">&times;</span>
        </Button>
      </Modal.Header>
      <Modal.Body>
        <div className="ltn__quick-view-modal-inner">
          <div className="modal-product-item">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="modal-product-img">
                  <img src="/img/product/4.png" alt="#" />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="modal-product-info">
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <Link href="#">
                          <FaStar />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <FaStar />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <FaStar />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <FaStarHalfAlt />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <FaStar />
                        </Link>
                      </li>
                      <li className="review-total">
                        <Link href="#"> ( 95 Reviews )</Link>
                      </li>
                    </ul>
                  </div>
                  <h3>
                    <Link onClick={onCloseModal} href={`/shop/${slug}`}>{productData.title}</Link>
                  </h3>
                  <div className="product-price">
                    <span>$34,900</span>
                    <del>$36,500</del>
                  </div>
                  <hr />
                  <div className="modal-product-brief">
                    <p>{productData.shortDescription}</p>
                  </div>

                  <div className="ltn__product-details-menu-3">
                    <ul>
                      <li>
                        <Link
                          href="#"
                          className=""
                          title="Wishlist"
                          data-bs-toggle="modal"
                          data-bs-target="#liton_wishlist_modal"
                        >
                          <FaRegHeart className="me-2" />
                          <span>Add to Wishlist</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=""
                          title="Compare"
                          data-bs-toggle="modal"
                          data-bs-target="#quick_view_modal"
                        >
                          <FaExchangeAlt className="me-2" />
                          <span>Compare</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <div className="ltn__social-media">
                    <ul>
                      <li>Share:</li>
                      <li>
                        <Link href="#" title="Facebook">
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="Twitter">
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="Linkedin">
                          <FaDribbble />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="Instagram">
                          <FaInstagram />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <label className="float-end mb-0">
                    <Link onClick={onCloseModal} className="text-decoration" href={`/shop/${slug}`}>
                      <small>View Details</small>
                    </Link>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default QuickViewModal;
