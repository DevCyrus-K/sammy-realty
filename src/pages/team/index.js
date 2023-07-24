import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import { getProducts, productSlug } from "@/lib/product";
import TitleSection from "@/components/titleSection";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import TestimonialCarouselItem from "@/components/testimonialCarousel";
import testimonialData from "@/data/testimonial";
import BlogItem from "@/components/blog";
import blogData from "@/data/blog";
import CallToAction from "@/components/callToAction";
import AboutUsStyleOne from "@/components/aboutUs/aboutUsStyleOne";
import Feature from "@/components/features";
import featureData from "@/data/features";
import TeamItem from "@/components/team";
import TeamData from "@/data/team";

function TeamPage() {
  const agents = getProducts(TeamData, "fashion", "featured", 6);

  return (
    <>
      <LayoutOne>
        <ShopBreadCrumb title="Our Agent" sectionPace="" currentSlug="Agent" />

        <div className="ltn__team-area pb-90">
          <Container>
            <Row>
              {agents.map((data, key) => {
                const slug = productSlug(data.name, {
                  replacement: "-", // replace spaces with replacement character, defaults to `-`
                  remove: /[*+~.()'"!:@]/g, // remove characters that match regex, defaults to `undefined`
                  lower: true, // convert to lower case, defaults to `false`
                  strict: false, // strip special characters except replacement, defaults to `false`
                  locale: "vi", // language code of the locale to use
                  trim: true, // trim leading and trailing replacement chars, defaults to `true`
                });
                return (
                  <Col key={key} xs={12} sm={6} lg={4}>
                    <TeamItem
                      baseUrl="team"
                      data={data}
                      slug={slug}
                      additionalClassname=""
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>

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

export default TeamPage;
