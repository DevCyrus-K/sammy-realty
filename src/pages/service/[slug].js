import Link from "next/link";
import {
  FaDribbble,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaCheck,
  FaCalendarAlt,
  FaUserAlt,
  FaEnvelope,
  FaGlobe,
  FaPencilAlt,
  FaComments,
} from "react-icons/fa";
import { FaPhoneAlt, FaArrowDown } from "react-icons/fa";

import serviceData from "@/data/service";
import { LayoutOne } from "@/layouts";
import { productSlug } from "@/lib/product";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import ServiceItemOne from "@/components/service/serviceItemOne";
import CallToAction from "@/components/callToAction";

function ServiceDetails({ service }) {
  const firstLetter = service.shortDescription.slice(0, 1);
  const firstToEnd = service.shortDescription.slice(1);

  return (
    <>
      <LayoutOne>
        {/* <!-- BREADCRUMB AREA START --> */}

        <ShopBreadCrumb
          title="Service Details"
          sectionPace=""
          currentSlug="Property Management"
        />

        {/* <!-- BREADCRUMB AREA END --> */}

        {/* <!-- PAGE DETAILS AREA START (service-details) --> */}
        <div class="ltn__page-details-area ltn__service-details-area mb-105">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="ltn__page-details-inner ltn__service-details-inner">
                  <div class="ltn__blog-img">
                    <img
                      src={`/img/service/${service.thumbImage}`}
                      alt="Image"
                    />
                  </div>
                  <p>
                    {
                      // service.shortDescription;
                    }
                    <span class="ltn__first-letter">{firstLetter}</span>
                    {firstToEnd}
                  </p>
                  <p>{service.fullDescription}</p>
                  <div class="row">
                    <div class="col-lg-6">
                      <img
                        src={`/img/service/${service.captions.image1}`}
                        alt="image"
                      />
                      <label>{service.captions.caption}</label>
                    </div>
                    <div class="col-lg-6">
                      <img
                        src={`/img/service/${service.captions.image2}`}
                        alt="image"
                      />
                    </div>
                  </div>
                  <p>{service.captions.captionFullDescription}</p>
                  <p>{service.captions.captionShortDescription}</p>
                </div>
              </div>
              <div class="col-lg-4">
                <aside class="sidebar-area ltn__right-sidebar">
                  {/* <!-- Menu Widget --> */}
                  <div class="widget-2 ltn__menu-widget ltn__menu-widget-2 text-uppercase">
                    <ul>
                      <li>
                        <a href="#">
                          Property Management
                          <span>
                            <i class="fas fa-arrow-right"></i>
                          </span>
                        </a>
                      </li>
                      <li class="active">
                        <a href="#">
                          Mortgage Service
                          <span>
                            <i class="fas fa-arrow-right"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Consulting Service
                          <span>
                            <i class="fas fa-arrow-right"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Home Buying
                          <span>
                            <i class="fas fa-arrow-right"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Home Selling
                          <span>
                            <i class="fas fa-arrow-right"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Escrow Services
                          <span>
                            <i class="fas fa-arrow-right"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Newsletter Widget --> */}
                  <div class="widget ltn__search-widget ltn__newsletter-widget">
                    <h6 class="ltn__widget-sub-title">{`// subscribe`}</h6>
                    <h4 class="ltn__widget-title">Get Newsletter</h4>
                    <form action="#">
                      <input type="text" name="search" placeholder="Search" />
                      <button type="submit">
                        <i class="fas fa-search"></i>
                      </button>
                    </form>
                    <div class="ltn__newsletter-bg-icon">
                      <i class="fas fa-envelope-open-text"></i>
                    </div>
                  </div>
                  {/* <!-- Banner Widget --> */}
                  <div class="widget ltn__banner-widget">
                    <a href="shop.html">
                      <img src="img/banner/banner-1.jpg" alt="Banner Image" />
                    </a>
                  </div>
                </aside>
              </div>
            </div>
          </div>
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
