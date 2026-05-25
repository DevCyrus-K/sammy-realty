import { useState } from "react";
import Link from "next/link";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { LayoutOne } from "@/layouts";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";

function AddListingPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <LayoutOne topbar={false}>
      <ShopBreadCrumb
        title="Sell Your Property"
        sectionPace=""
        currentSlug="Sell Your Property"
      />

      <div className="ltn__appointment-area pt-115 pb-120">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} lg={8}>
              <div className="ltn__form-box contact-form-box box-shadow white-bg">
                <h4 className="title-2">List With Sammy Realty</h4>
                <p>
                  Share the basics. Sammy Realty will call you to confirm
                  details, price, and inspection availability.
                </p>

                {submitted ? (
                  <div className="alert alert-success" role="alert">
                    Thanks. Sammy Realty has received your property details and
                    will contact you shortly.
                  </div>
                ) : null}

                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <div className="input-item">
                        <input type="text" name="name" placeholder="Your name" required />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="input-item">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone or WhatsApp number"
                          required
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="input-item">
                        <input type="text" name="county" placeholder="County / State" />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="input-item">
                        <input type="text" name="subCounty" placeholder="Sub-county / LGA" />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="input-item">
                        <input type="text" name="area" placeholder="Area, estate, or landmark" required />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="input-item">
                        <Form.Select name="propertyType" className="nice-select" required>
                          <option value="">Property type</option>
                          <option value="House">House</option>
                          <option value="Apartment">Apartment</option>
                          <option value="Land">Land</option>
                          <option value="Shortlet">Shortlet</option>
                        </Form.Select>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="input-item">
                        <input type="text" name="price" placeholder="Expected price or rent" />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="input-item">
                        <Form.Select name="status" className="nice-select">
                          <option value="">Listing goal</option>
                          <option value="sale">Sell</option>
                          <option value="rent">Rent</option>
                          <option value="management">Manage</option>
                        </Form.Select>
                      </div>
                    </Col>
                  </Row>
                  <div className="input-item input-item-textarea">
                    <textarea
                      name="details"
                      placeholder="Bedrooms, bathrooms, vacant status, access notes, and best inspection time"
                    ></textarea>
                  </div>
                  <div className="btn-wrapper mt-0">
                    <button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">
                      Submit Property
                    </button>
                    <Link className="btn btn-transparent btn-effect-3" href="tel:+2348148414913">
                      <FaPhoneAlt className="me-2" />
                      Call
                    </Link>
                    <Link className="btn btn-transparent btn-effect-3" href="https://wa.me/2348148414913">
                      <FaWhatsapp className="me-2" />
                      WhatsApp
                    </Link>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
}

export default AddListingPage;
