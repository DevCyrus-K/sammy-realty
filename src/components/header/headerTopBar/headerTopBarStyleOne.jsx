import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeaderSocialLinks from "../elements/headerSocialLinks";

const HeaderTopBarOne = function () {
  return (
    <>
      <div className="ltn__header-top-area section-bg-6 top-area-color-white---">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="top-bar-right text-center">
                <div className="ltn__top-bar-menu mx-auto">
                  <ul>
                    <li>
                      {/* <!-- ltn__social-media --> */}
                      <HeaderSocialLinks/>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HeaderTopBarOne;
