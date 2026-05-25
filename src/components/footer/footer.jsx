import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = function () {
  return (
    <>
      <style>{`
        .ltn__copyright-design ul {
          display: flex;
          gap: 30px;
          list-style: none;
          padding: 0;
          margin: 0;
          flex-wrap: wrap;
        }
        .ltn__copyright-design {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .ltn__copyright-design ul li {
          margin: 0;
        }
        .ltn__copyright-design p {
          color: #666;
          margin: 0;
          flex: 0 0 auto;
        }
        .ltn__copyright-design ul li a {
          color: #666;
          text-decoration: none;
          transition: color 0.3s;
        }
        .ltn__copyright-design ul li a:hover {
          color: #0B5D3B;
        }
        .ltn__copyright-menu p {
          margin: 0;
          color: #666;
        }
        .ltn__copyright-menu a {
          color: #0B5D3B;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s;
        }
        .ltn__copyright-menu a:hover {
          color: #084630;
        }
        @media (max-width: 768px) {
          .ltn__copyright-design ul {
            gap: 20px;
          }
          .ltn__copyright-menu {
            text-align: left !important;
            margin-top: 15px;
          }
        }
      `}</style>
      {/* <!-- FOOTER AREA START --> */}
      <footer className="ltn__footer-area  ">
        <div className="footer-top-area  section-bg-2 plr--5">
          <Container fluid>
            <Row>
              <Col xs={12} sm={6} xl={3}>
                <div className="footer-widget footer-about-widget">
                  <div className="footer-logo">
                    <div className="site-logo">
                      <img src="/img/main-logo.png" alt="Sammy Realty" style={{maxWidth: "120px", height: "auto"}} />
                    </div>
                  </div>
                  <p>
                    Sammy Realty helps people find, view, and contact sellers
                    faster across Ajah and Lagos.
                  </p>
                  <div className="ltn__social-media mt-20">
                    <ul>
                      <li>
                        <Link href="https://instagram.com" target="_blank" title="Instagram">
                          <FaInstagram />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://tiktok.com" target="_blank" title="TikTok">
                          <FaTiktok />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://wa.me/2348148414913" target="_blank" title="WhatsApp">
                          <FaWhatsapp />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} xl={2}>
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Company</h4>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li>
                        <Link href="/testimonials">Testimonials</Link>
                      </li>
                      <li>
                        <Link href="/careers">Careers</Link>
                      </li>
                      <li>
                        <Link href="/faq">FAQs</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} xl={2}>
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Services</h4>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <Link href="/service/property-sales">Property Sales</Link>
                      </li>
                      <li>
                        <Link href="/service/property-management">Property Management</Link>
                      </li>
                      <li>
                        <Link href="/service/real-estate-consulting">Real Estate Consulting</Link>
                      </li>
                      <li>
                        <Link href="/service/rental-and-shortlets">Rental & Shortlets</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} xl={2}>
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Properties</h4>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <Link href="/properties/all">All Properties</Link>
                      </li>
                      <li>
                        <Link href="/properties/for-sale">For Sale</Link>
                      </li>
                      <li>
                        <Link href="/properties/for-rent">For Rent</Link>
                      </li>
                      <li>
                        <Link href="/lands/for-sale">Lands</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} xl={3}>
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Get In Touch</h4>
                  <div className="footer-address">
                    <ul>
                      <li>
                        <div className="footer-address-icon">
                          <FaMapMarkerAlt />
                        </div>
                        <div className="footer-address-info">
                          <p>Greenville Estate, Ajah, Lagos, Nigeria</p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <FaPhoneAlt />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            <Link href="tel:+2348148414913">+234-814-841-4913</Link>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <FaEnvelope />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            <Link href="mailto:info@sammyrealty.com">
                              info@sammyrealty.com
                            </Link>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="ltn__copyright-area ltn__copyright-2 section-bg-7  plr--5">
          <div className="container-fluid ltn__border-top-2">
            <Row>
              <Col xs={12} md={6}>
                <div className="ltn__copyright-design clearfix">
                  <p>&copy; 2026 Sammy Realty. All rights reserved.</p>
                  <ul>
                    <li>
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/terms-conditions">Terms & Conditions</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} md={6} className="align-self-center">
                <div className="ltn__copyright-menu text-end">
                  <p>
                    Designed and developed by{" "}
                    <Link href="https://hydrasoft.co.ke" target="_blank">
                      Hydrasoft Technologies
                    </Link>{" "}
                  
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </footer>
      {/* <!-- FOOTER AREA END --> */}
    </>
  );
};

export default Footer;
