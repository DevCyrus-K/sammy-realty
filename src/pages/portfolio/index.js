import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import { getProducts, productSlug } from "@/lib/product";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import BlogItem from "@/components/blog";
import blogData from "@/data/blog";
import CallToAction from "@/components/callToAction";
import portfolioData from '@/data/portfolio';
import Portfolioitem from "@/components/portfolio";

function Portfolio() {
  const portfolios = getProducts(portfolioData, "fashion", "featured", 6);


  return (
    <>
      <LayoutOne>
        <ShopBreadCrumb
          title="Our Portfolio"
          sectionPace=""
          currentSlug="Portfolio"
        />


        {/* <!-- BLOG AREA START (blog-3) -->  */}
        <div className="ltn__blog-area pb-70">
          <Container>
            <Row>
              <Col lg={12}>
                {portfolios.map((data, key) => {
                  const slug = productSlug(data.title);
                  return (
                    <>
                      <Portfolioitem key={key} baseUrl="portfolio" data={data} slug={slug} />
                    </>
                  );
                })}
              </Col>
            </Row>

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

export default Portfolio;
