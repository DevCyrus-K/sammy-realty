import Link from "next/link";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { LayoutOne } from "@/layouts";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import TitleSection from "@/components/titleSection";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { productSlug } from "@/lib/product";
import BlogItem from "@/components/blog";
import blogData from "@/data/blog";
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
    FaPhoneAlt,
    FaArrowDown,
    FaTrophy,
    FaAward,
    FaMedal,
} from "react-icons/fa";


function HistoryPage() {

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
        <>
            <LayoutOne>
                <ShopBreadCrumb title="Our History" sectionPace="" currentSlug="History" />

                <div className="ltn__our-history-area pb-100">
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <Tab.Container defaultActiveKey="first" className="ltn__our-history-inner">
                                    <div className="ltn__tab-menu text-uppercase">
                                        <Nav classNameName="nav justify-content-center">
                                            <Nav.Link eventKey="first">1900</Nav.Link>
                                            <Nav.Link eventKey="second">1940</Nav.Link>
                                            <Nav.Link eventKey="third">2000</Nav.Link>
                                            <Nav.Link eventKey="fourth">2010</Nav.Link>
                                            <Nav.Link eventKey="five">2021</Nav.Link>
                                        </Nav>
                                    </div>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <div className="ltn__product-tab-content-inner">
                                                <Row>
                                                    <Col xs={12} lg={6} className="align-self-center">
                                                        <div className="about-us-img-wrap about-img-left">
                                                            <img src="/img/img-slide/12.jpg" alt="Image" />
                                                            <div className="ltn__history-icon">
                                                                <FaAward />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xs={12} lg={6} className="align-self-center">
                                                        <div className="about-us-info-wrap">
                                                            <div className="section-title-area">
                                                                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our History</h6>
                                                                <h1 className="section-title">We Started Our Journey</h1>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                                            </div>

                                                            <p>Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. consectetur adipis icing elit, sed do eius mod t</p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <div className="ltn__product-tab-content-inner">
                                                <Row>
                                                    <Col xs={12} lg={6} className="align-self-center">
                                                        <div className="about-us-img-wrap about-img-left">
                                                            <img src="/img/img-slide/11.jpg" alt="Image" />
                                                            <div className="ltn__history-icon">
                                                                <i className="icon-award"></i>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xs={12} lg={6} className="align-self-center">
                                                        <div className="about-us-info-wrap">
                                                            <div className="section-title-area">
                                                                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Get rewards</h6>
                                                                <h1 className="section-title">It Was An Sweet
                                                                    Journey Time</h1>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                                            </div>

                                                            <p>Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. consectetur adipis icing elit, sed do eius mod t</p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <div className="ltn__product-tab-content-inner">
                                                <Row>
                                                    <Col xs={12} lg={6} className="align-self-center">
                                                        <div className="about-us-img-wrap about-img-left">
                                                            <img src="/img/img-slide/13.jpg" alt="Image" />
                                                            <div className="ltn__history-icon">
                                                                <FaMedal />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xs={12} lg={6} className="align-self-center">
                                                        <div className="about-us-info-wrap">
                                                            <div className="section-title-area">
                                                                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Get rewards</h6>
                                                                <h1 className="section-title">It Was An Sweet
                                                                    Journey Time</h1>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                                            </div>

                                                            <p>Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. consectetur adipis icing elit, sed do eius mod t</p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fourth">
                                            <div className="ltn__product-tab-content-inner">
                                                <Row>
                                                    <Col xs={12} lg={6} className="align-self-center">
                                                        <div className="about-us-img-wrap about-img-left">
                                                            <img src="/img/img-slide/12.jpg" alt="Image" />
                                                            <div className="ltn__history-icon">
                                                                <FaAward />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xs={12} lg={6} className="align-self-center">
                                                        <div className="about-us-info-wrap">
                                                            <div className="section-title-area">
                                                                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Get rewards</h6>
                                                                <h1 className="section-title">It Was An Sweet
                                                                    Journey Time</h1>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                                            </div>

                                                            <p>Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. consectetur adipis icing elit, sed do eius mod t</p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="five">
                                            <div className="ltn__product-tab-content-inner">
                                                <Row>
                                                    <Col xs={12} lg={6} className="align-self-center">
                                                        <div className="about-us-img-wrap about-img-left">
                                                            <img src="/img/img-slide/11.jpg" alt="Image" />
                                                            <div className="ltn__history-icon">
                                                                <FaTrophy />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xs={12} lg={6} className="align-self-center">
                                                        <div className="about-us-info-wrap">
                                                            <div className="section-title-area">
                                                                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Get rewards</h6>
                                                                <h1 className="section-title">It Was An Sweet
                                                                    Journey Time</h1>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                                            </div>

                                                            <p>Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. consectetur adipis icing elit, sed do eius mod t</p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="ltn__feature-area section-bg-2 pt-115 pb-90">
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <div className="section-title-area text-center">
                                    <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Features</h6>
                                    <h1 className="section-title">Why Choose Us</h1>
                                </div>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={6} xl={4}>
                                <div className="ltn__feature-item ltn__feature-item-7 ltn__feature-item-7-color-white">
                                    <div className="ltn__feature-icon-title">
                                        <div className="ltn__feature-icon">
                                            <span><i className="flaticon-house-4"></i></span>
                                        </div>
                                        <h3 className="animated fadeIn"><a href="service-details.html">The Perfect Residency</a></h3>
                                    </div>
                                    <div className="ltn__feature-info">
                                        <p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} xl={4}>
                                <div className="ltn__feature-item ltn__feature-item-7 ltn__feature-item-7-color-white">
                                    <div className="ltn__feature-icon-title">
                                        <div className="ltn__feature-icon">
                                            <span><i className="icon-mechanic"></i></span>
                                        </div>
                                        <h3 className="animated fadeIn"><a href="service-details.html">Global Architect Experts</a></h3>
                                    </div>
                                    <div className="ltn__feature-info">
                                        <p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} xl={4}>
                                <div className="ltn__feature-item ltn__feature-item-7 ltn__feature-item-7-color-white">
                                    <div className="ltn__feature-icon-title">
                                        <div className="ltn__feature-icon">
                                            <span><i className="icon-repair-1"></i></span>
                                        </div>
                                        <h3 className="animated fadeIn"><a href="service-details.html">Built-in Storage Cupboards</a></h3>
                                    </div>
                                    <div className="ltn__feature-info">
                                        <p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>


                <div className="call-to-action-area call-to-action-5 bg-image bg-overlay-theme-90 pt-40 pb-25" data-bs-bg="img/bg/13.jpg" style="background-image: url(&quot;img/bg/13.jpg&quot;);">
                    <div className="container">
                        <div className="row">
                            <Col xs={12}>
                                <div className="call-to-action-inner call-to-action-inner-5 text-decoration text-center">
                                    <h2 className="white-color">24/7 Availability, Make <a href="appointment.html">An Appointment</a></h2>
                                </div>
                            </Col>
                        </div>
                    </div>
                </div>


                {/* <!-- BLOG AREA START (blog-3) -->  */}
                <div className="ltn__blog-area pb-70">
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

export default HistoryPage;