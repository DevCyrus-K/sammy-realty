import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

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
              src={`/img/product-3/${productData.productImg}`}
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
                {`$ ${productData.price}`}
                <label>/Month</label>
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
              <span>{productData.propertyDetails.bedrooms}</span>
              <span className="ms-1">Bedrooms</span>
            </li>
            <li>
              <span>{productData.propertyDetails.baths}</span>
              <span className="ms-1">Bathrooms</span>
            </li>
            <li>
              <span>{productData.propertyDetails.area}</span>
              <span className="ms-1">square Ft</span>
            </li>
          </ul>
        </div>
        <div className="product-info-bottom">
          <Link className="property-card-details-btn" href={`/${baseUrl}/${slug}`}>
            View Details <FaArrowRight />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductList;
