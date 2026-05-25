import Link from "next/link";
import { FaFilm, FaCamera, FaArrowRight } from "react-icons/fa";

const ProductItem = ({
  productData,
  slug,
  baseUrl,
}) => {
  let badgeText = "";

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
              src={`/img/product-3/${productData.productImg}`}
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
                    {productData.photo.length}
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-flex align-items-center justify-content-center"
                    href={`/${baseUrl}/${slug}`}
                  >
                    <FaFilm className="me-2" />
                    {productData.video.length}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="product-info">
          <div className="product-price">
            <span>
              {`$ ${productData.price}`}
              <label>/Month</label>
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
                {productData.propertyDetails.bedrooms}
                <i className="flaticon-bed"></i>
              </span>
              Bedrooms
            </li>
            <li>
              <span>
                {productData.propertyDetails.baths}
                <i className="flaticon-clean"></i>
              </span>
              Bathrooms
            </li>
            <li>
              <span>
                {productData.propertyDetails.area}
                <i className="flaticon-square-shape-design-interface-tool-symbol"></i>
              </span>
              square Ft
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

export default ProductItem;
