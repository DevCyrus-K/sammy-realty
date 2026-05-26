import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import ProductItem from "@/components/product";
import TitleSection from "@/components/titleSection";
import { GridSkeleton } from "@/components/ui/skeletons";
import { toStorefrontProduct } from "@/lib/listing-format";
import toast from "react-hot-toast";

const FeaturedPropertiesSection = ({ limit = 5 }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProperties();
  }, []);

  const fetchFeaturedProperties = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/v1/listings?featured=true&limit=${limit}&status=active`);
      const result = await response.json();
      
      if (result.data && Array.isArray(result.data)) {
        // Transform raw API data to storefront product format
        const transformedProducts = result.data.map(toStorefrontProduct);
        setProducts(transformedProducts);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error("Error fetching featured properties:", error);
      toast.error("Error loading featured properties");
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

  const settings = {
    slidesToShow: 5,
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

  if (loading) {
    return (
      <div className="ltn__product-slider-area ltn__product-gutter pt-115 pb-90 plr--7">
        <Container>
          <Row>
            <Col lg={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses="section-subtitle-2"
                titleSectionData={{
                  subTitle: "Featured Properties",
                  title: "Find Your Perfect Property",
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <GridSkeleton count={5} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return (
    <div className="ltn__product-slider-area ltn__product-gutter pt-115 pb-90 plr--7">
      <Container>
        <Row>
          <Col lg={12}>
            <TitleSection
              sectionClasses="text-center"
              headingClasses="section-subtitle-2"
              titleSectionData={{
                subTitle: "Featured Properties",
                title: "Find Your Perfect Property",
              }}
            />
          </Col>
        </Row>

        {products.length > 0 ? (
          <Slider {...settings} className="ltn__product-slider-5-active">
            {products.map((product) => {
              const slug = product.slug || product.id;
              return (
                <ProductItem
                  key={product.id}
                  baseUrl="property"
                  productData={product}
                  slug={slug}
                />
              );
            })}
          </Slider>
        ) : (
          <Row>
            <Col lg={12} className="text-center">
              <p>No featured properties available at the moment.</p>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default FeaturedPropertiesSection;
