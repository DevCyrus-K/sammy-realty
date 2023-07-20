import Link from "next/link";
const ProductList = ({
  productData,
  slug,
  baseUrl,
  showQuickViewHandle,
  showWishlistHandle,
}) => {
  let badgeText = "";

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
          <div className="real-estate-agent">
            <div className="agent-img">
              <Link href={`/${baseUrl}/${slug}`}>
                <img
                  src={`/img/blog/author.jpg`}
                  alt={`${productData.title}`}
                />
              </Link>
            </div>
          </div>

          <div className="product-hover-action">
            <ul>
              <li>
                <button onClick={showQuickViewHandle}>
                  <i className="flaticon-expand"></i>
                </button>
              </li>
              <li>
                <button onClick={showWishlistHandle}>
                  <i className="flaticon-heart-1"></i>
                </button>
              </li>
              <li>
                <button>
                  <i className="flaticon-add"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
