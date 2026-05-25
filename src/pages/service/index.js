import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CounterUp from "@/components/counterUp";
import Feature from "@/components/features";
import CallToAction from "@/components/callToAction";
import { getProducts } from "@/lib/product";
import featuresData from "@/data/service";

function Service() {
  const featureData = getProducts(featuresData, "buying", "featured", 4);

  return (
    <>
      <LayoutOne topbar={false}>
        <ShopBreadCrumb
          title="Our Services"
          sectionPace=""
          currentSlug="Services"
        />

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

export default Service;
