import Link from "next/link";
import { FaFilm, FaCamera, FaArrowRight, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { formatPrice } from "@/lib/utils";
import { getCallHref, getPropertyImageSrc, getWhatsappHref } from "@/lib/listing-format";

const ProductItem = ({
  productData,
  slug,
  baseUrl,
}) => {
  let badgeText = "";
  const imageSrc = getPropertyImageSrc(productData.image || productData.productImg);
  const phone = productData.phone || productData.agent?.phone || "+2348148414913";
  const whatsappMessage = `Hello, I am interested in ${productData.title}`;

  if (productData.rent) {
    badgeText = "For Rent";
  } else {
    badgeText = "For Sale";
  }

  return (
    <>
      <div className="ltn__product-item ltn__product-item-4">
        <div className="product-img">
          <Link href={`/${baseUrl}/${slug}`}>
            <img
              src={imageSrc}
              alt={`${productData.title}`}
            />
          </Link>
          <div className="product-badge">
            <ul>
              <li
                className={`sale-badge ${productData.rent ? "bg-green" : ""}`}
              >
                {badgeText}
              </li>
            </ul>
          </div>
          <div className="product-img-location-gallery">
            <div className="product-img-location">
              <ul>
                <li>
                  <Link href="/map/all">
                    <i className="flaticon-pin"></i>
                    {productData.locantion}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="product-img-gallery">
              <ul>
                <li>
                  <Link
                    className="d-flex align-items-center justify-content-center"
                    href={`/${baseUrl}/${slug}`}
                  >
                    <FaCamera className="me-2" />
                    {productData.photo?.length || 1}
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-flex align-items-center justify-content-center"
                    href={`/${baseUrl}/${slug}`}
                  >
                    <FaFilm className="me-2" />
                    {productData.video?.length || 0}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="product-info">
          <div className="product-price">
            <span>
              {formatPrice(Number(productData.price || 0))}
              {productData.rent ? <label>/Month</label> : null}
            </span>
          </div>
          <h2 className="product-title">
            <Link href={`/${baseUrl}/${slug}`}>{productData.title}</Link>
          </h2>
          <div className="product-description">
            <p>{productData.fullDescription}</p>
          </div>
          <ul className="ltn__list-item-2 ltn__list-item-2-before">
            <li>
              <span>
                {productData.propertyDetails?.bedrooms || 0}
                <i className="flaticon-bed"></i>
              </span>
              Bedrooms
            </li>
            <li>
              <span>
                {productData.propertyDetails?.baths || 0}
                <i className="flaticon-clean"></i>
              </span>
              Bathrooms
            </li>
            <li>
              <span>
                {productData.propertyDetails?.area || 0}
                <i className="flaticon-square-shape-design-interface-tool-symbol"></i>
              </span>
              sqm
            </li>
          </ul>
        </div>
        <div className="product-info-bottom">
          <div className="property-card-contact-actions">
            <a className="property-card-contact-btn" href={getCallHref(phone)}>
              <FaPhoneAlt />
              Call
            </a>
            <a className="property-card-contact-btn whatsapp" href={getWhatsappHref(phone, whatsappMessage)} target="_blank" rel="noreferrer">
              <FaWhatsapp />
              WhatsApp
            </a>
          </div>
          <Link className="property-card-details-btn" href={`/${baseUrl}/${slug}`}>
            View Details <FaArrowRight />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
