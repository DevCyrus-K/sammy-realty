import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { LayoutOne } from "@/layouts";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";

const SubmitReview = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <LayoutOne topbar={false}>
      <ShopBreadCrumb
        title="Share Your Story"
        sectionPace=""
        currentSlug="Share Your Story"
      />

      <div className="ltn__appointment-area pt-115 pb-120">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} lg={8}>
              <div className="ltn__form-box contact-form-box box-shadow white-bg">
                <h4 className="title-2">Submit Your Review</h4>
                <p>
                  Share what Sammy Realty helped you do, and we may feature
                  your story on the testimonials page.
                </p>

                {submitted ? (
                  <div className="alert alert-success" role="alert">
                    Thanks. Sammy Realty has received your review.
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
                    <Col md={12}>
                      <div className="input-item">
                        <Form.Select name="clientType" className="nice-select" required>
                          <option value="">What best describes you?</option>
                          <option value="Home Buyer">Home Buyer</option>
                          <option value="Property Owner">Property Owner</option>
                          <option value="Rental Client">Rental Client</option>
                          <option value="Land Investor">Land Investor</option>
                        </Form.Select>
                      </div>
                    </Col>
                  </Row>
                  <div className="input-item input-item-textarea">
                    <textarea
                      name="review"
                      placeholder="Tell us about your experience"
                      required
                    ></textarea>
                  </div>
                  <div className="btn-wrapper mt-0">
                    <button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">
                      Submit Review
                    </button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
};

export default SubmitReview;
