
import { useSelector } from "react-redux";
import { getProducts, productSlug } from "@/lib/product";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { LayoutFive } from "@/layouts";
import HeroSectionStyleSix from "@/components/hero/styleSix";
import PropertySearchBar from "@/components/hero/PropertySearchBar";
import AboutUsStyleTwo from "@/components/aboutUs/aboutUsStyleTwo";
import AboutUsStyleOne from "@/components/aboutUs/aboutUsStyleOne";
import Feature from "@/components/features";
import TitleSection from "@/components/titleSection";
import FeaturedPropertiesSection from "@/components/property/FeaturedPropertiesSection";
import CallToAction from "@/components/callToAction";
import TestimonialsSection from "@/components/testimonialCarousel/TestimonialsSection";
import featuresData from "@/data/service";
import portfolioData from "@/data/portfolio";
import PortfolioitemThree from "@/components/portfolio/itemThree";
import CounterUp from "@/components/counterUp";

function HomePageSeven() {
    const { products } = useSelector((state) => state.product);
    const featuredProducts = getProducts(products, "buying", "featured", 5);
    const featureData = getProducts(featuresData, "buying", "featured", 4);
    const portfolios = getProducts(portfolioData, "buying", "carousel", 5);

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
    const productCarouselsettings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
            {
                breakpoint: 992,
                settings: {
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
        ],
    };
    const portfolioSettings = {
        rtl: false,
        arrows: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const testiMonialsettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,

        responsive: [
            {
                breakpoint: 992,
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
            <LayoutFive topbar={false}>
                <HeroSectionStyleSix navMenuClass="text-center" />
                {/* <!-- PROPERTY SEARCH BAR AREA START --> */}
                <PropertySearchBar />
                {/* <!-- PROPERTY SEARCH BAR AREA END --> */}

                {/* <!-- ABOUT US AREA START --> */}
                <AboutUsStyleTwo sectionSpace="pt-120 pb-90" />
                {/* <!-- ABOUT US AREA END -->

      <!-- FEATURE AREA START ( Feature - 6) --> */}
                <Feature
                    classes="section-bg-1"
                    servicebtn={true}
                    iconTag={false}
                    data={featureData}
                    headingClasses="section-subtitle-2"
                    titleSectionData={{
                        sectionClasses: "text-center",
                        subTitle: "What We Do",
                        title: "How Sammy Realty Helps You Move Faster",
                    }}
                />

                <CounterUp />

                {/* PRODUCT SLIDER AREA START */}
                <FeaturedPropertiesSection limit={5} />
                {/* PRODUCT SLIDER AREA END */}



                {/* <!-- IMAGE SLIDER AREA START (img-slider-3) --> */}
                <div className="ltn__img-slider-area">
                    <Slider {...portfolioSettings} className="ltn__image-slider-4-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">

                        {
                            portfolios.map((data, key) => {
                                const slug = productSlug(data.title);
                                return (
                                    <PortfolioitemThree key={key}
                                        baseUrl="/portfolio"
                                        data={data}
                                        slug={slug} />
                                )
                            })
                        }

                    </Slider>
                </div>
                {/* <!-- IMAGE SLIDER AREA END --> */}




                {/* <!-- APARTMENTS PLAN AREA END --> */}

                <AboutUsStyleOne sectionSpace="pt-90 pb-70" />


                {/* <!-- TESTIMONIAL AREA START (testimonial-7) -->  */}
                <TestimonialsSection />
                {/* <!-- TESTIMONIAL AREA END --> */}

                <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <CallToAction />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </LayoutFive>
        </>
    );
}


export default HomePageSeven;
