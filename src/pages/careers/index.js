import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { LayoutOne } from "@/layouts";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";

const Careers = () => (
  <LayoutOne topbar={false}>
    <ShopBreadCrumb title="Careers" sectionPace="" currentSlug="Careers" />
    <div className="ltn__about-us-area pt-115 pb-90">
      <Container>
        <Row>
          <Col lg={8}>
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2--- mb-30">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                  Join Sammy Realty
                </h6>
                <h1 className="section-title">Help Lagos Clients Find Property Faster</h1>
                <p>
                  Sammy Realty is interested in practical, responsive people who
                  understand property enquiries, inspections, sales follow-up,
                  rentals, management, and client trust.
                </p>
              </div>
              <div className="btn-wrapper mt-0">
                <Link className="theme-btn-1 btn btn-effect-1" href="/contact">
                  Contact Us
                </Link>
              </div>
            </div>
          </Col>
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
);

export default Careers;
