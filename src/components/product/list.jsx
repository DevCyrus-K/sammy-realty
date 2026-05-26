import Link from "next/link";
import { FaArrowRight, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { formatPrice } from "@/lib/utils";
import { getCallHref, getPropertyImageSrc, getWhatsappHref } from "@/lib/listing-format";

const truncateDescription = (description) => {
  if (!description) {
    return "";
  }

  return description.length > 150
    ? `${description.slice(0, 147).trim()}...`
    : description;
};

const ProductList = ({
  productData,
  slug,
  baseUrl,
}) => {
  let badgeText = "";
  const imageSrc = getPropertyImageSrc(productData.image || productData.productImg);
  const phone = productData.phone || productData.agent?.phone || "+2348148414913";
  const whatsappMessage = `Hello, I am interested in ${productData.title}`;
  const shortDescription = truncateDescription(
    productData.description?.shortDescription ||
      productData.description?.fullDescription ||
      productData.fullDescription
  );

  if (productData.rent) {
    badgeText = "For Rent";
  } else {
    badgeText = "For Sale";
  }
  return (
    <>
      <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
        <div className="product-img">
          <Link href={`/${baseUrl}/${slug}`}>
            <img
              src={imageSrc}
              alt={`${productData.title}`}
            />
          </Link>
        </div>

        <div className="product-info">
          <div className="product-badge-price">
            <div className="product-badge">
              <ul>
                <li
                  className={`sale-badge ${productData.rent ? "bg-green" : ""}`}
                >
                  {badgeText}
                </li>
              </ul>
            </div>

            <div className="product-price">
              <span>
                {formatPrice(Number(productData.price || 0))}
                {productData.rent ? <label>/Month</label> : null}
              </span>
            </div>
          </div>

          <h2 className="product-title">
            <Link href={`/${baseUrl}/${slug}`}>{productData.title}</Link>
          </h2>

          <div className="product-img-location">
            <ul>
              <li>
                <Link href={`/${baseUrl}/${slug}`}>
                  <i className="flaticon-pin"></i>
                  {productData.locantion}
                </Link>
              </li>
            </ul>
          </div>

          {shortDescription ? (
            <div className="product-description">
              <p>{shortDescription}</p>
            </div>
          ) : null}

          <ul className="ltn__plot-brief">
            <li>
              <span>{productData.propertyDetails?.bedrooms || 0}</span>
              <span className="ms-1">Bedrooms</span>
            </li>
            <li>
              <span>{productData.propertyDetails?.baths || 0}</span>
              <span className="ms-1">Bathrooms</span>
            </li>
            <li>
              <span>{productData.propertyDetails?.area || 0}</span>
              <span className="ms-1">sqm</span>
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

export default ProductList;
