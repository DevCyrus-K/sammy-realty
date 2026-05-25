import Link from "next/link";
import { FaArrowRight, FaPhone } from "react-icons/fa";
import serviceData from "@/data/service";
import { LayoutOne } from "@/layouts";
import { productSlug } from "@/lib/product";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";

function ServiceDetails({ service }) {
  const firstLetter = service.shortDescription.slice(0, 1);
  const firstToEnd = service.shortDescription.slice(1);

  return (
    <>
      <LayoutOne topbar={false}>
        {/* <!-- BREADCRUMB AREA START --> */}

        <ShopBreadCrumb
          title={service.title}
          sectionPace=""
          currentSlug={service.title}
        />

        {/* <!-- BREADCRUMB AREA END --> */}

        {/* <!-- PAGE DETAILS AREA START (service-details) --> */}
        <div className="ltn__page-details-area ltn__service-details-area mb-105">
          <Container>
            <Row>
              <Col xs={12} lg={8}>
                <div className="ltn__page-details-inner ltn__service-details-inner">
                  <div className="ltn__blog-img">
                    <img
                      src={`/img/service/${service.thumbImage}`}
                      alt="Image"
                    />
                  </div>
                  <p className="overflow-hidden">
                    <span className="ltn__first-letter">{firstLetter}</span>
                    {firstToEnd}
                  </p>
                  <p>{service.fullDescription}</p>
                  <Row>
                    <Col xs={12} lg={6}>
                      <img
                        src={`/img/service/${service.captions.image1}`}
                        alt="image"
                      />
                      <label>{service.captions.caption}</label>
                    </Col>
                    <Col xs={12} lg={6}>
                      <img
                        src={`/img/service/${service.captions.image2}`}
                        alt="image"
                      />
                    </Col>
                  </Row>
                  <p>{service.captions.captionFullDescription}</p>
                  <p>{service.captions.captionShortDescription}</p>
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <aside className="sidebar-area ltn__right-sidebar">
                  {/* <!-- Menu Widget --> */}
                  <div className="widget-2 ltn__menu-widget ltn__menu-widget-2 text-uppercase">
                    <ul>
                      {serviceData.map((item) => {
                        const slug = productSlug(item.title);
                        return (
                          <li
                            key={item.id}
                            className={item.title === service.title ? "active" : ""}
                          >
                            <Link href={`/service/${slug}`}>
                              {item.title}
                              <span>
                                <FaArrowRight />
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  {/* <!-- Call CTA Widget --> */}
                  <div className="widget ltn__search-widget ltn__newsletter-widget">
                    <style>{`
                      .service-contact-widget {
                        background-color: #0B5D3B;
                        padding: 30px;
                        border-radius: 4px;
                        text-align: center;
                        color: white;
                      }
                      .service-contact-widget h6 {
                        font-size: 12px;
                        color: rgba(255, 255, 255, 0.8);
                        text-transform: uppercase;
                        margin-bottom: 15px;
                        letter-spacing: 1px;
                      }
                      .service-contact-text {
                        font-size: 20px;
                        color: white;
                        font-weight: 700;
                        margin-bottom: 20px;
                      }
                      .service-contact-button {
                        display: inline-block;
                        padding: 12px 28px;
                        background-color: white;
                        color: #0B5D3B;
                        border: 2px solid white;
                        border-radius: 0px;
                        text-decoration: none;
                        font-weight: 600;
                        font-size: 14px;
                        transition: all 0.3s ease;
                        margin-bottom: 20px;
                      }
                      .service-contact-button:hover {
                        background-color: transparent;
                        color: white;
                        border: 2px solid white;
                      }
                      .service-email-text {
                        font-size: 14px;
                        color: rgba(255, 255, 255, 0.9);
                        margin-bottom: 20px;
                      }
                      .service-email-link {
                        color: white;
                        text-decoration: none;
                        font-weight: 600;
                        transition: color 0.3s ease;
                      }
                      .service-email-link:hover {
                        color: #f0f0f0;
                        text-decoration: underline;
                      }
                      .service-call-cta {
                        display: inline-block;
                        padding: 12px 28px;
                        background-color: transparent;
                        color: white;
                        border: 2px solid white;
                        border-radius: 0px;
                        text-decoration: none;
                        font-weight: 600;
                        font-size: 14px;
                        transition: all 0.3s ease;
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                      }
                      .service-call-cta:hover {
                        background-color: white;
                        color: #0B5D3B;
                        border: 2px solid white;
                      }
                      .ltn__newsletter-bg-icon {
                        position: absolute;
                        right: 30px;
                        top: 30px;
                        font-size: 40px;
                        opacity: 0.1;
                        color: white;
                      }
                    `}</style>
                    <div className="service-contact-widget" style={{ position: "relative" }}>
                      <p className="service-contact-text">Need this service?</p>
                      <Link
                        href="/contact"
                        className="service-contact-button"
                      >
                        Contact
                      </Link>
                      <div className="service-email-text">
                        Or email us at{" "}
                        <Link href="mailto:info@sammyrealty.com" className="service-email-link">
                          info@sammyrealty.com
                        </Link>
                      </div>
                      <Link
                        href="tel:+2348148414913"
                        className="service-call-cta"
                      >
                        <FaPhone />
                        Call Us Now
                      </Link>
                      <div className="ltn__newsletter-bg-icon">
                        <FaPhone />
                      </div>
                    </div>
                  </div>
                  {/* <!-- Banner Widget --> */}
                  <div className="widget ltn__banner-widget">
                    <Link href="/properties/all">
                      <img src="/img/banner/banner-1.jpg" alt="Banner Image" />
                    </Link>
                  </div>
                </aside>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <!-- PAGE DETAILS AREA END --> */}

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

export default ServiceDetails;

export async function getStaticProps({ params }) {
  // get blog data based on slug
  const service = serviceData.filter(
    (single) => productSlug(single.title) === params.slug
  )[0];

  return { props: { service } };
}

export async function getStaticPaths() {
  // get the paths we want to pre render based on blogs
  const paths = serviceData.map((data) => ({
    params: {
      slug: productSlug(data.title, {
        lower: true, // convert to lower case, defaults to `false`
      }),
    },
  }));

  return { paths, fallback: false };
}
