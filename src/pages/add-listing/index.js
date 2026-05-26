import { useState } from "react";
import Link from "next/link";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { LayoutOne } from "@/layouts";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";

function AddListingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [createdListing, setCreatedListing] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);
    setError("");

    const formData = new FormData(form);
    const propertyType = String(formData.get("propertyType") || "House");
    const listingGoal = String(formData.get("status") || "sale");
    const county = String(formData.get("county") || "").trim();
    const subCounty = String(formData.get("subCounty") || "").trim();
    const area = String(formData.get("area") || "").trim();
    const location = [area, subCounty, county].filter(Boolean).join(", ");
    const mappedType =
      propertyType === "Land"
        ? "Land"
        : listingGoal === "rent" || propertyType === "Shortlet"
        ? "Rent"
        : listingGoal === "management"
        ? "Commercial"
        : "Sale";

    try {
      const response = await fetch("/api/v1/listings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: `${propertyType} in ${area || county || "Nigeria"}`,
          owner: formData.get("name"),
          phone: formData.get("phone"),
          address: location,
          propertyType: mappedType,
          type: mappedType,
          price: formData.get("price"),
          description: formData.get("details"),
          status: "active",
          image: "/img/product-3/1.jpg",
        }),
      });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "Could not submit this property");
      }

      setCreatedListing(payload.data);
      setSubmitted(true);
      form.reset();
    } catch (submitError) {
      console.error("Listing submission failed:", submitError);
      setError("We could not save this listing online. Please call or WhatsApp Sammy Realty and the team will add it manually.");
    } finally {
      setSubmitting(false);
    }
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
                    Thanks. Your property is now saved and ready on Sammy Realty.
                    {createdListing?.slug ? (
                      <>
                        {" "}
                        <Link href={`/${createdListing.propertyType === "Land" ? "lands" : "properties"}/${createdListing.slug}`}>
                          View listing
                        </Link>
                      </>
                    ) : null}
                  </div>
                ) : null}

                {error ? (
                  <div className="alert alert-warning" role="alert">
                    {error}
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
                        <input type="text" name="price" placeholder="Expected price or rent in NGN" required />
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
                    <button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit" disabled={submitting}>
                      {submitting ? "Submitting..." : "Submit Property"}
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
