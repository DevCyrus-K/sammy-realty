import { useState } from "react";
import Slider from "react-slick";
import path from "path";
import fs from "fs/promises";
import { LayoutTwo } from "@/layouts";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { getProducts, productSlug, getDiscountPrice } from "@/lib/product";
import TitleSection from "@/components/titleSection";
import Feature from "@/components/features";
import featuresData from "@/data/service";
import HeroSectionStyleThree from "@/components/hero/styleThree";
import AboutUsSectionOne from "@/components/aboutUs/aboutUsSectionOne";
import AboutUsSectionTwo from "@/components/aboutUs/aboutUsSectionTwo";
import UpCommingcarousel from "@/components/upCommingCarousel";
import PropertyItem from "@/components/product/properties";
import { useSelector } from "react-redux";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import AminitiesItemTwo from "@/components/aminities/itemTwo";
import aminitiesData from "@/data/aminities/index.json";
import TestimonialCarouselItemTwo from "@/components/testimonialCarousel/indexTwo";
import testimonialData from "@/data/testimonial";
import blogData from "@/data/blog";
import BlogItem from "@/components/blog";
import CallToAction from "@/components/callToAction";
import VideoBanner from "@/components/banner/videoBanner";
import ProductItem from "@/components/product";
import CarDealerSearchForm from "@/components/carDealerSearchForm";



function HomeVersionThree(props) {
  const [isOpen, setOpen] = useState(false);
  const { products } = useSelector((state) => state.product);
  const featureData = getProducts(featuresData, "fashion", "featured", 3);
  const countryProducts = getProducts(products, "fashion", "country", 5);
  const featuredProducts = getProducts(products, "fashion", "featured", 5);
  const { data } = props;

  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
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

  const productsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  const testiMonialsettings = {
    arrows: true,
    dots: false,
    centerMode: false,
    centerPadding: '80px',
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          dots: true,
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const productCarouselsettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1799,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const blogSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <LayoutTwo topbar={true}>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="LjCzPp-MK48"
        onClose={() => setOpen(false)}
      />
      {/* <!-- SLIDER AREA START (slider-11) --> */}
      <div className="ltn__slider-area ltn__slider-3 section-bg-2">
        <HeroSectionStyleThree data={data} />
      </div>

      {/* <!-- SLIDER AREA END --> */}
      <CarDealerSearchForm navMenuClass="d-none" />
      {/* <!-- CAR DEALER FORM AREA END --> */}


      {/* <!-- FEATURE AREA START ( Feature - 6) --> */}
      <Feature
        servicebtn={true}
        iconTag={false}
        data={featureData}
        classes=""
        sectionClasses=""
        headingClasses=""
        titleSectionData={{
          subTitle: "Our Services",
          title: "Our Main Focus",
        }}
      />
      {/* <!-- FEATURE AREA END -->

    <!-- SEARCH BY PLACE AREA START (testimonial-7) --> */}
      <div
        className="ltn__search-by-place-area before-bg-top pt-115 pb-70"


      >
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section-title-area">
                <h6 className="section-subtitle ltn__secondary-color">
                  Area Properties
                </h6>
                <h1 className="section-title">
                  Find Your Dream House <br />
                  Search By Area
                </h1>
              </div>
            </Col>
          </Row>

          {!!countryProducts?.length ? (
            <Slider
              {...productsettings}
              className="ltn__product-slider-item-four-active-full-width slick-arrow-1"
            >
              {countryProducts.map((product, key) => {
                const slug = productSlug(product.title);

                return (
                  <PropertyItem
                    key={key}
                    product={product}
                    slug={slug}
                    baseUrl="/shop"
                  />
                );
              })}
            </Slider>
          ) : null}




        </Container>
      </div>
      {/* <!-- SEARCH BY PLACE AREA END -->


        {/* <!-- VIDEO AREA START --> */}
      <div className="ltn__video-popup-area">
        <VideoBanner />
      </div>
      {/* <!-- VIDEO AREA END --> */}

      {/* PRODUCT SLIDER AREA START */}
      <div className="ltn__product-slider-area ltn__product-gutter pt-115 pb-90 plr--7">
        <Container fluid>
          <Row>
            <Col lg={12}>
              <TitleSection
                sectionClasses=""
                headingClasses="section-subtitle-2"
                titleSectionData={{
                  subTitle: "Properties",
                  title: "Featured Listings",
                }}
              />
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              {!!featuredProducts?.length ? (
                <Slider
                  {...productCarouselsettings}
                  className="ltn__product-slider-item-four-active-full-width slick-arrow-1"
                >
                  {featuredProducts.map((product, key) => {
                    const slug = productSlug(product.title);

                    const discountedPrice = getDiscountPrice(
                      product.price,
                      product.discount
                    ).toFixed(2);
                    const productPrice = product.price.toFixed(2);
                    const cartItem = cartItems.find(
                      (cartItem) => cartItem.id === product.id
                    );
                    const wishlistItem = wishlistItems.find(
                      (wishlistItem) => wishlistItem.id === product.id
                    );
                    const compareItem = compareItems.find(
                      (compareItem) => compareItem.id === product.id
                    );

                    return (
                      <ProductItem
                        key={product.id}
                        productData={product}
                        slug={slug}
                        baseUrl="shop"
                        discountedPrice={discountedPrice}
                        productPrice={productPrice}
                        cartItem={cartItem}
                        wishlistItem={wishlistItem}
                        compareItem={compareItem}
                      />
                    );
                  })}
                </Slider>
              ) : null}
            </Col>
          </Row>
        </Container>
      </div>
      {/* PRODUCT SLIDER AREA END */}


      {/* <!-- BLOG AREA START (blog-3) -->  */}
      <div className="ltn__blog-area pb-70">
        <Container>
          <Row>
            <Col lg={12}>
              <TitleSection
                sectionClasses=""
                headingClasses=""
                titleSectionData={{
                  subTitle: "News & Blogs",
                  title: "Leatest News Feeds",
                }}
              />
            </Col>
          </Row>
          <Slider
            {...blogSettings}
            className="ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal"
          >
            {blogData.map((data, key) => {
              const slug = productSlug(data.title);
              return (
                <BlogItem key={key} baseUrl="blog" data={data} slug={slug} />
              );
            })}
          </Slider>
        </Container>
      </div>
      {/* <!-- BLOG AREA END -->

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
    </LayoutTwo>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src/data/hero/", "index-three.json");
  const data = JSON.parse(await fs.readFile(filePath));

  return {
    props: {
      data,
    },
  };
}
export default HomeVersionThree;
