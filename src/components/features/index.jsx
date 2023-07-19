import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TitleSection from "../titleSection";
function Feature({ data, titleSectionData }) {
  return (
    <>
      <div className="ltn__feature-area section-bg-1 pt-115 pb-90 mb-120---">
        <Container>
          <Row>
            <Col xs={12}>
              <TitleSection titleSectionData={titleSectionData} />
            </Col>
          </Row>
          <Row className="justify-content-center">
            {data.map((item, key) => {
              return (
                <>
                  <Col key={key} xs={12} sm={6} lg={4}>
                    <div
                      className={`ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 ${
                        item.active ? "active" : ""
                      }`}
                    >
                      <div className="ltn__feature-icon">
                        <img
                          src={`img/icons/icon-img/${item.img}`}
                          alt={`${item.title}`}
                        />
                      </div>
                      <div className="ltn__feature-info">
                        <h3>
                          <Link href={`${item.link}`}>{item.title}</Link>
                        </h3>
                        <p>{item.description}</p>
                        <Link
                          className="ltn__service-btn"
                          href={`${item.link}`}
                        >
                          {item.buttonText}

                          <i className="flaticon-right-arrow"></i>
                        </Link>
                      </div>
                    </div>
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Feature;
