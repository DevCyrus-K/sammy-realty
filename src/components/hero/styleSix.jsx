import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhone, FaCalendarAlt } from "react-icons/fa";

function HeroSectionStyleSix({ navMenuClass }) {
  return (
    <>
      <style>{`
        .hero-cta-buttons {
          display: flex;
          gap: 16px;
          margin-bottom: 30px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .hero-cta-button {
          padding: 14px 28px;
          background-color: white;
          color: #0B5D3B;
          border: none;
          border-radius: 0px;
          font-weight: 600;
          cursor: pointer;
          font-size: 15px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s;
          text-decoration: none;
        }
        .hero-cta-button:hover {
          background-color: #f0f0f0;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        .hero-cta-button.primary {
          background-color: #0B5D3B;
          color: white;
          border: none;
        }
        .hero-cta-button.primary:hover {
          background-color: #084630;
          color: white;
        }
        .hero-cta-button.outline {
          background-color: transparent;
          color: white;
          border: 2px solid white;
        }
        .hero-cta-button.outline:hover {
          background-color: white;
          color: #0B5D3B;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        @media (max-width: 767px) {
          .hero-cta-buttons {
            margin-bottom: 20px;
          }
          .hero-cta-button {
            padding: 12px 20px;
            font-size: 13px;
          }
        }
      `}</style>

      <div className="ltn__slider-area ltn__slider-4 position-relative ltn__primary-bg fix" style={{ borderBottom: '1px solid #ccc' }}>
        <div className="ltn__slide-animation-active">
          <video autoPlay muted loop id="myVideo">
            <source src="/media/3.mp4" type="video/mp4" />
          </video>

          <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-7 bg-overlay-theme-black-30">
            <div className="ltn__slide-item-inner text-center" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
              <Container style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Row>
                  <Col xs={12} className="align-self-center">
                    <div style={{color: 'white', textAlign: 'center'}}>
                      <h1 style={{fontSize: 'clamp(2.55rem, 7vw, 3.5rem)', fontWeight: 'bold', marginBottom: '20px', color: 'white'}}>Find Your Perfect Property</h1>
                      <p style={{fontSize: 'clamp(1rem, 3vw, 1.25rem)', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '0'}}>Discover properties that match your lifestyle, budget, and dreams</p>
                      
                      <div className="hero-cta-buttons">
                        <a href="/contact" className="hero-cta-button primary">
                          <FaCalendarAlt />
                          Schedule a Tour
                        </a>
                        <a href="/contact" className="hero-cta-button outline">
                          <FaPhone />
                          Get in Touch
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>

              <Container style={{paddingBottom: '0'}}>
                <Row>
                  <Col xs={12} className="align-self-center">
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSectionStyleSix;
