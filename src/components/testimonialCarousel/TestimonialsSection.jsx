import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import TitleSection from "@/components/titleSection";
import TestimonialCarouselItem from "@/components/testimonialCarousel";
import { TestimonialCardSkeleton, CarouselSkeleton } from "@/components/ui/skeletons";
import toast from "react-hot-toast";

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/testimonials?status=published&limit=10");
      const result = await response.json();
      
      if (result.success && result.data) {
        setTestimonials(result.data);
      } else {
        toast.error("Failed to load testimonials");
      }
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      toast.error("Error loading testimonials");
    } finally {
      setLoading(false);
    }
  };

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
    <div
      className="ltn__testimonial-area bg-image-top pt-115 pb-70"
      style={{ backgroundImage: `url("../img/bg/20.jpg")` }}
    >
      <Container>
        <Row>
          <Col lg={12}>
            <TitleSection
              sectionClasses="text-center"
              headingClasses="section-subtitle-2"
              titleSectionData={{
                subTitle: "Testimonials",
                title: "What Clients Say About Sammy Realty",
              }}
            />
          </Col>
        </Row>

        {loading ? (
          <Row>
            <Col lg={12}>
              <CarouselSkeleton count={3} />
            </Col>
          </Row>
        ) : testimonials.length > 0 ? (
          <Slider
            {...testiMonialsettings}
            className="ltn__testimonial-slider-5-active slick-arrow-1"
          >
            {testimonials.map((data) => (
              <TestimonialCarouselItem key={data.id} data={data} />
            ))}
          </Slider>
        ) : (
          <Row>
            <Col lg={12} className="text-center">
              <p>No testimonials available at the moment.</p>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default TestimonialsSection;
