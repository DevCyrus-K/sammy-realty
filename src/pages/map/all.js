import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";

const MapAll = () => (
  <LayoutOne topbar={false}>
    <ShopBreadCrumb title="Map" sectionPace="" currentSlug="All Locations" />
    <div className="google-map mb-120">
      <iframe
        src="https://www.google.com/maps?q=Greenville%20Estate%2C%20Ajah%2C%20Lagos%2C%20Nigeria&output=embed"
        width="100%"
        height="100%"
        title="Sammy Realty locations map"
      ></iframe>
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

export default MapAll;
