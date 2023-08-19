import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import { getProducts, productSlug } from "@/lib/product";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import TitleSection from "@/components/titleSection";
import BlogItem from "@/components/blog";
import blogData from "@/data/blog";
import CallToActionstyleTwo from "@/components/callToAction/callToActionstyleTwo";
import portfolioData from "@/data/portfolio";
import Portfolioitem from "@/components/portfolio";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import CallToAction from "@/components/callToAction";
import brandLogoData from "@/data/brand-logo";
import LightGallery from "lightgallery/react";

function Portfolio() {
  const portfolios = getProducts(portfolioData, "fashion", "featured", 6);
  const blogSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: (
      <a>
        <FaArrowLeft />
      </a>
    ),
    nextArrow: (
      <a>
        <FaArrowRight />
      </a>
    ),
  };
  const LogoSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: (
      <a>
        <FaArrowLeft />
      </a>
    ),
    nextArrow: (
      <a>
        <FaArrowRight />
      </a>
    ),
  };

  const icons = [
    { icon: <FaArrowRight /> },
    { icon: <FaArrowLeft /> },
    { icon: <FaArrowRight /> },
    { icon: <FaArrowRight /> },
    { icon: <FaArrowLeft /> },
  ];

  return (
    <>
      <LayoutOne topbar={true}>
        <ShopBreadCrumb
          title="Our Portfolio"
          sectionPace=""
          currentSlug="Portfolio"
        />

        {/*  <!-- Gallery area start -->  */}
        <div className="ltn__gallery-area mb-120">
          <Container>
            <LightGallery elementClassNames="row ltn__gallery-active ltn__gallery-style-2">
              {portfolios.map((data, key) => {
                const slug = productSlug(data.title);

                return (
                  <Portfolioitem
                    key={key}
                    baseUrl="portfolio"
                    data={data}
                    slug={slug}
                  />
                );
              })}
            </LightGallery>
            <div className="btn-wrapper text-center">
              <button className="btn btn-transparent btn-effect-3 btn-border">
                LOAD MORE +
              </button>
            </div>
          </Container>
        </div>
        {/*  <!-- Gallery area end --> */}

        <CallToActionstyleTwo />

        {/* <!-- BLOG AREA START (blog-3) -->  */}
        <div className="ltn__blog-area pt-120 pb-70">
          <Container>
            <Row>
              <Col lg={12}>
                <TitleSection
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
        {/* <!-- BLOG AREA END --> */}

        {/* <!-- BRAND LOGO AREA START --> */}
        <div className="ltn__brand-logo-area ltn__brand-logo-1 pt-80--- pb-110 plr--9">
          <Container fluid>
            <Row className="ltn__brand-logo-active">
              <Col xs={12}>
                <Slider {...LogoSettings}>
                  {brandLogoData.map((logo, key) => {
                    return (
                      <div key={key} className="ltn__brand-logo-item">
                        <img
                          src={`/img/brand-logo/${logo.image}`}
                          alt="Brand Logo"
                        />
                      </div>
                    );
                  })}
                </Slider>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <!-- BRAND LOGO AREA END --> */}

        <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
          <Container>
            <Row>
              <Col xs={12}>
                <CallToAction />
              </Col>
            </Row>
          </Container>
        </div>
      </LayoutOne>
    </>
  );
}

export default Portfolio;
