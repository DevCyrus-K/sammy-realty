import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPlay, FaCheckCircle } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { useState } from "react";
function AboutUsStyleOne({ sectionSpace }) {
  const [isOpen, setOpen] = useState(false);

  const whyChooseReasons = [
    "Verified Listings - Every property is verified for authenticity",
    "Area-Based Search - Find properties by location with ease",
    "Direct Seller Contact - Connect immediately with property owners",
    "Local Market Guidance - Expert advice on Lagos neighborhoods",
    "Fast Response Time - Quick turnaround on all enquiries",
    "Professional Support - Experienced team guiding you throughout"
  ];

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="X7R-q9rsrtU"
        onClose={() => setOpen(false)}
      />
      <div className={`ltn__about-us-area ${sectionSpace}`}>
        <Container>
          <Row>
            <Col xs={12} lg={6} className="align-self-center">
              <div className="about-us-img-wrap about-img-left">
                <img src="/img/others/7.png" alt="About Us Image" />
                <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
                  <div className="ltn__video-img ltn__animation-pulse1">
                    <img src="/img/others/8.png" alt="video popup bg image" />
                    <button
                      onClick={() => setOpen(true)}
                      className="ltn__video-icon-2"
                    >
                      <FaPlay />
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} className="align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area mb-20">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                    Why Choose Us
                  </h6>
                  <h1 className="section-title">
                    Real Estate Help Built Around Faster Contact<span>.</span>
                  </h1>
                  <p>
                    From Greenville Estate in Ajah, we connect serious buyers,
                    renters, landlords, and sellers with trusted property options
                    across Lagos.
                  </p>
                </div>
                <ul style={{ listStyle: 'none', padding: '0', margin: '0 0 30px 0' }}>
                  {whyChooseReasons.map((reason, index) => (
                    <li key={index} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '12px' }}>
                      <span style={{ color: '#0B5D3B', fontSize: '18px', flexShrink: 0, marginTop: '2px' }}>
                        <FaCheckCircle />
                      </span>
                      <span style={{ color: '#333', fontSize: '0.95rem', lineHeight: '1.6' }}>{reason}</span>
                    </li>
                  ))}
                </ul>
                <div className="ltn__callout bg-overlay-theme-05  mt-30">
                  <p>
                    Find a property, understand the location, <br />
                    and contact Sammy Realty in one clear flow.
                  </p>
                </div>
                <div className="btn-wrapper animated">
                  <Link
                    href="/service#faq"
                    className="theme-btn-1 btn btn-effect-1"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutUsStyleOne;
