import { useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import { useRouter } from "next/router";
import Slider from "react-slick";
import {
  FaArrowRight,
  FaArrowLeft,
  FaPlay,
  FaStar,
  FaSearch,
  FaRegStar,
  FaUserAlt,
  FaEnvelope,
  FaGlobe,
  FaPencilAlt,
  FaPhone,
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import BreadCrumb from "@/components/breadCrumbs";

import { LayoutOne } from "@/layouts";
import { useSelector } from "react-redux";
import { getProducts, productSlug, getDiscountPrice } from "@/lib/product";
import products from "@/data/products.json";
import { Container, Row, Col } from "react-bootstrap";
import RelatedProduct from "@/components/product/related-product";
import CallToAction from "@/components/callToAction";

function ProductDetails({ product }) {
  const router = useRouter();
  const { products } = useSelector((state) => state.product);
  const isLandRoute = router.pathname.startsWith("/lands");
  const isPropertyRoute = router.pathname.startsWith("/properties");
  const detailParentHref = isLandRoute
    ? "/lands/for-sale"
    : isPropertyRoute
    ? "/properties/all"
    : "/shop";
  const detailParentLabel = isLandRoute
    ? "Lands"
    : isPropertyRoute
    ? "Properties"
    : "Shop";
  const detailTitle = isLandRoute
    ? "Lands"
    : isPropertyRoute
    ? "Properties"
    : "Product Details";
  const relatedBaseUrl = isLandRoute
    ? "lands"
    : isPropertyRoute
    ? "properties"
    : "shop";

  const relatedProducts = getProducts(
    products,
    product.category[0],
    "popular",
    2
  );

  const topRatedProducts = getProducts(
    products,
    product.category[0],
    "topRated",
    2
  );
  const popularProducts = getProducts(
    products,
    product.category[0],
    "popular",
    4
  );

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <FaArrowLeft />
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <FaArrowRight />
    </button>
  );
  const productDetailsCarouselSettings = {
    centerMode: true,
    infinite: true,
    centerPadding: "450px",
    slidesToShow: 1,
    dots: false,
    speed: 500,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "250px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "250px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
          dots: true,
        },
      },
    ],
  };

  const popular_product = {
    infinite: true,
    slidesToShow: 1,
    dots: true,
    speed: 500,
    arrows: false,
  };

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <LayoutOne topbar={false}>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="X7R-q9rsrtU"
          onClose={() => setOpen(false)}
        />
        {/* <!-- BREADCRUMB AREA START --> */}

        <BreadCrumb
          title={detailTitle}
          sectionPace="mb-0"
          currentSlug={product.title}
          parentHref={detailParentHref}
          parentLabel={detailParentLabel}
        />

        {/* <!-- BREADCRUMB AREA END --> */}

        {/* <!-- IMAGE SLIDER AREA START (img-slider-3) --> */}
        <div className="ltn__img-slider-area mb-90">
          <Container fluid className="px-0">
            <Slider
              {...productDetailsCarouselSettings}
              className="ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner"
            >
              {product.carousel.map((single, key) => {
                return (
                  <div className="ltn__img-slide-item-4" key={key}>
                    <Link href="#">
                      <img
                        src={`/img/img-slide/${single.img}`}
                        alt={`${single.title}`}
                      />
                    </Link>
                  </div>
                );
              })}
            </Slider>
          </Container>
        </div>
        {/* <!-- IMAGE SLIDER AREA END -->

    <!-- SHOP DETAILS AREA START --> */}
        <div className="ltn__shop-details-area pb-10">
          <Container>
            <Row>
              <Col xs={12} lg={8}>
                <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                  <div className="ltn__blog-meta">
                    <ul>
                      {
                        (product.featured ? (
                          <li className="ltn__blog-category">
                            <Link href="#">Featured</Link>
                          </li>
                        ) : (
                          ""
                        ),
                          product.rent ? (
                            <li className="ltn__blog-category">
                              <Link style={{ backgroundColor: '#0B5D3B' }} href="#">
                                For Sale
                              </Link>
                            </li>
                          ) : (
                            ""
                          ))
                      }

                      <li className="ltn__blog-date">
                        <i className="far fa-calendar-alt"></i>
                        {product.date}
                      </li>
                      <li>
                        <a href="#">
                          <FaStar className="me-1" />
                          {product.comments}
                          Reviews
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h1> {product.title}</h1>
                  <label>
                    <span className="ltn__secondary-color">
                      <i className="flaticon-pin"></i>
                    </span>{" "}
                    {product.locantion}
                  </label>
                  <h4 className="title-2"> {product.description.title}</h4>
                  <p>{product.description.fullDescription}</p>
                  <p>{product.description.shortDescription}</p>

                  <h4 className="title-2">Property Detail</h4>
                  <div className="property-detail-info-list section-bg-1 clearfix mb-60">
                    <ul>
                      <li>
                        <label>Property ID:</label>{" "}
                        <span>{product.propertyDetails.propertyId}</span>
                      </li>
                      <li>
                        <label>Home Area: </label>{" "}
                        <span>{product.propertyDetails.area} sqft</span>
                      </li>
                      <li>
                        <label>Rooms:</label>{" "}
                        <span>{product.propertyDetails.rooms}</span>
                      </li>
                      <li>
                        <label>Baths:</label>{" "}
                        <span>{product.propertyDetails.baths}</span>
                      </li>
                      <li>
                        <label>Year built:</label>{" "}
                        <span>{product.propertyDetails.createdYear}</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <label>Lot Area:</label>{" "}
                        <span>{product.propertyDetails.propertyId}</span>
                      </li>
                      <li>
                        <label>Lot dimensions:</label>{" "}
                        <span>{product.propertyDetails.area} sqft</span>
                      </li>
                      <li>
                        <label>Beds:</label>{" "}
                        <span>{product.propertyDetails.bedrooms}</span>
                      </li>
                      <li>
                        <label>Price:</label> <span>{product.price}</span>
                      </li>
                      <li>
                        <label>Property Status:</label>{" "}
                        <span>{product.propertyDetails.propertyStatus}</span>
                      </li>
                    </ul>
                  </div>

                  <h4 className="title-2">Facts and Features</h4>
                  <div className="property-detail-feature-list clearfix mb-45">
                    <ul>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Living Room</h6>
                            <small>{product.factsAndFeatures.livingRoom}</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Garage</h6>
                            <small>{product.factsAndFeatures.garage}</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Dining Area</h6>
                            <small>{product.factsAndFeatures.diningArea}</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Bedroom</h6>
                            <small>{product.factsAndFeatures.bedroom}</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Bathroom</h6>
                            <small>{product.factsAndFeatures.bathroom}</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Gym Area</h6>
                            <small>{product.factsAndFeatures.gymArea}</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Garden</h6>
                            <small>{product.factsAndFeatures.garden}</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Parking</h6>
                            <small>{product.factsAndFeatures.parking}</small>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <h4 className="title-2">From Our Gallery</h4>
                  <div className="ltn__property-details-gallery mb-30">
                    <div className="row">
                      <div className="col-md-6">
                        <Link
                          href={`/img/others/${product.gallery.img1}`}
                          data-rel="lightcase:myCollection"
                        >
                          <img
                            className="mb-30"
                            src={`/img/others/${product.gallery.img1}`}
                            alt={`${product.title}`}
                          />
                        </Link>
                        <Link
                          href={`/img/others/${product.gallery.img2}`}
                          data-rel="lightcase:myCollection"
                        >
                          <img
                            className="mb-30"
                            src={`/img/others/${product.gallery.img2}`}
                            alt={`${product.title}`}
                          />
                        </Link>
                      </div>
                      <div className="col-md-6">
                        <Link
                          href={`/img/others/${product.gallery.img3}`}
                          data-rel="lightcase:myCollection"
                        >
                          <img
                            className="mb-30"
                            src={`/img/others/${product.gallery.img3}`}
                            alt={`${product.title}`}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <h4 className="title-2 mb-10">Amenities</h4>

                  <div className="property-details-amenities mb-60">
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="ltn__menu-widget">
                          <ul>
                            {product.amenities1.map((single, key) => {
                              return (
                                <li key={key}>
                                  <label className="checkbox-item">
                                    {single}
                                    <input
                                      type="checkbox"
                                      defaultChecked="checked"
                                    />
                                    <span className="checkmark"></span>
                                  </label>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="ltn__menu-widget">
                          <ul>
                            {product.amenities2.map((single, key) => {
                              return (
                                <li key={key}>
                                  <label className="checkbox-item">
                                    {single}
                                    <input
                                      type="checkbox"
                                      defaultChecked="checked"
                                    />
                                    <span className="checkmark"></span>
                                  </label>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="ltn__menu-widget">
                          <ul>
                            {product.amenities3.map((single, key) => {
                              return (
                                <li key={key}>
                                  <label className="checkbox-item">
                                    {single}
                                    <input
                                      type="checkbox"
                                      defaultChecked="checked"
                                    />
                                    <span className="checkmark"></span>
                                  </label>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h4 className="title-2">Location</h4>
                  <div className="property-details-google-map mb-60">
                    <iframe
                      src="https://www.google.com/maps?q=Greenville%20Estate%2C%20Ajah%2C%20Lagos%2C%20Nigeria&output=embed"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allowFullScreen=""
                    ></iframe>
                  </div>

                  <h4 className="title-2">Property Video</h4>
                  <div
                    className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50 bg-image mb-60"
                    style={{ backgroundImage: `url("../../img/others/5.jpg")` }}
                  >
                    <button
                      className="ltn__video-icon-2 ltn__video-icon-2-border---"
                      onClick={() => setOpen(true)}
                    >
                      <FaPlay />
                    </button>
                  </div>

                  <div className="ltn__shop-details-tab-content-inner--- ltn__shop-details-tab-inner-2 ltn__product-details-review-inner mb-60">
                    <h4 className="title-2">Reviews</h4>
                    <div className="product-ratting">
                      <ul>
                        <li>
                          <a href="#">
                            <FaStar />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaStar />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaStar />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaStar />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaRegStar />
                          </a>
                        </li>
                        <li className="review-total">
                          <a href="#"> ( 95 Reviews )</a>
                        </li>
                      </ul>
                    </div>
                    <hr />
                    {/* <!-- review-area --> */}
                    <div className="ltn__comment-area mb-30">
                      <div className="ltn__comment-inner">
                        <ul>
                          <li>
                            <div className="ltn__comment-item clearfix">
                              <div className="ltn__commenter-img">
                                <div className="testimonial-initial-avatar">JD</div>
                              </div>
                              <div className="ltn__commenter-comment">
                                <h6>
                                  <a href="#">Adam Smit</a>
                                </h6>
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaRegStar />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Doloribus, omnis fugit
                                  corporis iste magnam ratione.
                                </p>
                                <span className="ltn__comment-reply-btn">
                                  September 3, 2020
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="ltn__comment-item clearfix">
                              <div className="ltn__commenter-img">
                                <div className="testimonial-initial-avatar">TM</div>
                              </div>
                              <div className="ltn__commenter-comment">
                                <h6>
                                  <a href="#">Adam Smit</a>
                                </h6>
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaRegStar />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Doloribus, omnis fugit
                                  corporis iste magnam ratione.
                                </p>
                                <span className="ltn__comment-reply-btn">
                                  September 2, 2020
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="ltn__comment-item clearfix">
                              <div className="ltn__commenter-img">
                                <div className="testimonial-initial-avatar">AY</div>
                              </div>
                              <div className="ltn__commenter-comment">
                                <h6>
                                  <a href="#">Adam Smit</a>
                                </h6>
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaRegStar />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Doloribus, omnis fugit
                                  corporis iste magnam ratione.
                                </p>
                                <span className="ltn__comment-reply-btn">
                                  September 2, 2020
                                </span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- review-reply --> */}
                    <div className="ltn__comment-reply-area ltn__form-box mb-30">
                      <form action="#">
                        <h4>Add a Review</h4>
                        <div className="mb-30">
                          <div className="add-a-review">
                            <h6>Your Ratings:</h6>
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <FaStar />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <FaStar />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <FaStar />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <FaStar />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <FaStar />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="input-item input-item-textarea ltn__custom-icon">
                          <textarea placeholder="Type your review..."></textarea>
                          <span className="inline-icon">
                            <FaPencilAlt />
                          </span>
                        </div>
                        <div className="input-item input-item-name ltn__custom-icon">
                          <input type="text" placeholder="Type your name...." />
                          <span className="inline-icon">
                            <FaUserAlt />
                          </span>
                        </div>
                        <div className="input-item input-item-email ltn__custom-icon">
                          <input
                            type="email"
                            placeholder="Type your email...."
                          />
                          <span className="inline-icon">
                            <FaEnvelope />
                          </span>
                        </div>
                        <div className="input-item input-item-website ltn__custom-icon">
                          <input
                            type="text"
                            name="website"
                            placeholder="Type your website...."
                          />
                          <span className="inline-icon">
                            <FaGlobe />
                          </span>
                        </div>
                        <label className="mb-0">
                          <input type="checkbox" name="agree" /> Save my name,
                          email, and website in this browser for the next time I
                          review.
                        </label>
                        <div className="btn-wrapper">
                          <button
                            className="btn theme-btn-1 btn-effect-1 text-uppercase"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <h4 className="title-2">Related Properties</h4>
                  <Row>
                    {relatedProducts.map((data, key) => {
                      const slug = productSlug(data.title);
                      return (
                        <Col xs={12} sm={6} key={key}>
                          <RelatedProduct
                            productData={data}
                            slug={slug}
                            baseUrl={relatedBaseUrl}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </Col>

              <Col xs={12} lg={4}>
                <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
                  {/* <!-- Search Widget --> */}
                  <div className="widget ltn__search-widget">
                    <h4 className="ltn__widget-title ltn__widget-title-border-2">
                      Search Properties
                    </h4>
                    <form action="#">
                      <input
                        type="text"
                        name="search"
                        placeholder="Search your keyword..."
                      />
                      <button type="submit">
                        <FaSearch />
                      </button>
                    </form>
                  </div>
                  {/* <!-- Contact Widget --> */}
                  <div className="widget ltn__form-widget">
                    <h4 className="ltn__widget-title ltn__widget-title-border-2">
                      Contact Agent
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <a href="tel:+234-814-841-4913" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '12px',
                        backgroundColor: '#0B5D3B',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '0px',
                        fontWeight: 'bold',
                        gap: '8px'
                      }}>
                        <FaPhone /> Call Now
                      </a>
                      <a href="https://wa.me/234814841491" target="_blank" rel="noopener noreferrer" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '12px',
                        backgroundColor: '#25D366',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '0px',
                        fontWeight: 'bold',
                        gap: '8px'
                      }}>
                        <FaWhatsapp /> WhatsApp
                      </a>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #ddd' }}>
                      <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#0B5D3B', marginBottom: '8px' }}>Ask About This Property</p>
                      <p style={{ fontSize: '13px', color: '#666' }}>Contact Sammy Realty for more information about this property.</p>
                    </div>
                  </div>
                  {/* <!-- Top Rated Properties Widget --> */}
                  <div className="widget ltn__top-rated-product-widget">
                    <h4 className="ltn__widget-title ltn__widget-title-border-2">
                      Top Rated Properties
                    </h4>
                    <ul>
                      {topRatedProducts.map((product, keys) => {
                        const slug = productSlug(product.title);
                        const discountedPrice = getDiscountPrice(
                          product.price,
                          product.discount
                        ).toFixed(2);
                        let key = keys + 1;
                        return (
                          <li key={product.id}>
                            <div className="top-rated-product-item clearfix">
                              <div className="top-rated-product-img">
                                <a href={`/${relatedBaseUrl}/${slug}`}>
                                  <img
                                    src={`/img/product/${key}.png`}
                                    alt={product.title}
                                  />
                                </a>
                              </div>
                              <div className="top-rated-product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h6>
                                  <a href={`/${relatedBaseUrl}/${slug}`}>
                                    {product.title}
                                  </a>
                                </h6>
                                <div className="product-price">
                                  <span>${product.price}</span>
                                  <del>${discountedPrice}</del>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  {/* <!-- Menu Widget (Category) --> */}
                  <div className="widget ltn__menu-widget ltn__menu-widget-2--- ltn__menu-widget-2-color-2---">
                    <h4 className="ltn__widget-title ltn__widget-title-border-2">
                      Top Categories
                    </h4>
                    <ul>
                      <li>
                        <Link href="#">
                          Apartments <span>(26)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Picture Stodio <span>(30)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Office <span>(71)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Luxary Vilas <span>(56)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Duplex House <span>(60)</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Popular Product Widget --> */}
                  <div className="widget ltn__popular-product-widget">
                    <h4 className="ltn__widget-title ltn__widget-title-border-2">
                      Popular Properties
                    </h4>

                    <Slider
                      {...popular_product}
                      className="row ltn__popular-product-widget-active slick-arrow-1"
                    >
                      {/* <!-- ltn__product-item --> */}

                      {popularProducts.map((product, key) => {
                        const slug = productSlug(product.title);
                        return (
                          <div
                            key={key}
                            className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---"
                          >
                            <div className="product-img">
                              <Link href={`/${relatedBaseUrl}/${slug}`}>
                                <img
                                  src={`/img/product-3/${product.productImg}`}
                                  alt={slug}
                                />
                              </Link>
                            </div>
                            <div className="product-info">
                              <div className="product-price">
                                <span>
                                  ${product.price}
                                  <label>/Month</label>
                                </span>
                              </div>
                              <h2 className="product-title">
                                <Link href={`/${relatedBaseUrl}/${slug}`}>
                                  {product.title}
                                </Link>
                              </h2>
                              <div className="product-img-location">
                                <ul>
                                  <li>
                                    <Link href="product-details">
                                      <i className="flaticon-pin"></i>
                                      {product.locantion}
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                                <li>
                                  <span>
                                    {product.propertyDetails.bedrooms}
                                  </span>
                                  <span className="ms-1">Bedrooms</span>
                                </li>
                                <li>
                                  <span>{product.propertyDetails.baths}</span>
                                  <span className="ms-1">Bathrooms</span>
                                </li>
                                <li>
                                  <span>{product.propertyDetails.area}</span>
                                  <span className="ms-1">square Ft</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                  {/* <!-- Social Links Widget --> */}
                  <div className="widget">
                    <h4 className="ltn__widget-title ltn__widget-title-border-2">
                      Follow Us
                    </h4>
                    <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#0B5D3B',
                        color: 'white',
                        borderRadius: '50%',
                        textDecoration: 'none',
                        fontSize: '18px'
                      }}><FaInstagram /></a>
                      <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#0B5D3B',
                        color: 'white',
                        borderRadius: '50%',
                        textDecoration: 'none',
                        fontSize: '18px'
                      }}><FaTiktok /></a>
                      <a href="https://wa.me/234814841491" target="_blank" rel="noopener noreferrer" style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#25D366',
                        color: 'white',
                        borderRadius: '50%',
                        textDecoration: 'none',
                        fontSize: '18px'
                      }}><FaWhatsapp /></a>
                    </div>
                  </div>
                </aside>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <!-- SHOP DETAILS AREA END -->

    <!-- CALL TO ACTION START (call-to-action-6) --> */}
        <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
          <Container>
            <Row>
              <Col xs={12}>
                <CallToAction />
              </Col>
            </Row>
          </Container>
        </div>
        {/* <!-- CALL TO ACTION END --> */}
      </LayoutOne>

    </>
  );
}

export default ProductDetails;

export async function getStaticProps({ params }) {
  // get product data based on slug
  const product = products.filter(
    (single) => productSlug(single.title) === params.slug
  )[0];

  return { props: { product } };
}

export async function getStaticPaths() {
  // get the paths we want to pre render based on products
  const paths = products.map((product) => ({
    params: { slug: productSlug(product.title) },
  }));

  return { paths, fallback: false };
}
