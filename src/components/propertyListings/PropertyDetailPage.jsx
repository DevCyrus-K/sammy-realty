import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaBath,
  FaBed,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRulerCombined,
  FaWhatsapp,
} from "react-icons/fa";
import { LayoutOne } from "@/layouts";
import BreadCrumb from "@/components/breadCrumbs";
import CallToAction from "@/components/callToAction";
import { formatPrice } from "@/lib/utils";
import {
  getCallHref,
  getPropertyImageSrc,
  getWhatsappHref,
  toStorefrontProduct,
} from "@/lib/listing-format";

const fallbackPhone = "+2348148414913";

function PropertyDetailPage({ backHref = "/properties/all", parentLabel = "Properties" }) {
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!router.isReady) return undefined;

    let active = true;
    const slug = String(router.query.slug || "");

    async function loadProperty() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(`/api/v1/listings?slug=${encodeURIComponent(slug)}`);
        const payload = await response.json();

        if (!response.ok) {
          throw new Error(payload.error || "Property not found");
        }

        if (active) {
          setProduct(toStorefrontProduct(payload.data));
          setSelectedPhotoIndex(0);
        }
      } catch (fetchError) {
        console.error("Property detail fetch failed:", fetchError);
        if (active) {
          setProduct(null);
          setError("This listing could not be loaded. Contact Sammy Realty for the latest availability.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadProperty();

    return () => {
      active = false;
    };
  }, [router.isReady, router.query.slug]);

  const photos = useMemo(() => {
    if (!product) return [];
    const values = product.photo?.length ? product.photo : [product.image || product.productImg];
    return values.map(getPropertyImageSrc).filter(Boolean);
  }, [product]);

  const selectedPhoto = photos[selectedPhotoIndex] || photos[0] || "/img/product-3/1.jpg";
  const phone = product?.phone || product?.agent?.phone || fallbackPhone;
  const whatsappMessage = product ? `Hello, I am interested in ${product.title}` : "Hello, I want to ask about available properties";
  const pageTitle = product?.title || parentLabel;

  return (
    <LayoutOne topbar={false}>
      <BreadCrumb
        title={parentLabel}
        sectionPace="mb-0"
        currentSlug={pageTitle}
        parentHref={backHref}
        parentLabel={parentLabel}
      />

      <section className="property-live-detail-area pt-80 pb-90">
        <Container>
          {loading ? (
            <div className="alert alert-light" role="status">
              Loading latest property details...
            </div>
          ) : null}

          {!loading && error ? (
            <div className="property-live-empty">
              <p>{error}</p>
              <div className="property-live-actions">
                <a className="btn theme-btn-1 btn-effect-1" href={getCallHref(phone)}>
                  <FaPhoneAlt />
                  Call
                </a>
                <a className="btn btn-transparent btn-effect-3" href={getWhatsappHref(phone, whatsappMessage)} target="_blank" rel="noreferrer">
                  <FaWhatsapp />
                  WhatsApp
                </a>
              </div>
            </div>
          ) : null}

          {!loading && product ? (
            <Row className="g-4">
              <Col xs={12} lg={8}>
                <div className="property-detail-heading">
                  <span className="property-detail-badge">{product.rent ? "For Rent" : "For Sale"}</span>
                  <h1>{product.title}</h1>
                  <p>
                    <FaMapMarkerAlt />
                    {product.locantion}
                  </p>
                </div>

                <div className="property-mobile-contact">
                  <strong>{formatPrice(Number(product.price || 0))}</strong>
                  <div className="property-live-actions">
                    <a className="btn theme-btn-1 btn-effect-1" href={getCallHref(phone)}>
                      <FaPhoneAlt />
                      Call
                    </a>
                    <a className="btn btn-transparent btn-effect-3" href={getWhatsappHref(phone, whatsappMessage)} target="_blank" rel="noreferrer">
                      <FaWhatsapp />
                      WhatsApp
                    </a>
                  </div>
                </div>

                <div className="property-detail-photo">
                  <img src={selectedPhoto} alt={product.title} />
                </div>

                {photos.length > 1 ? (
                  <div className="property-detail-thumbs">
                    {photos.map((photo, index) => (
                      <button
                        key={photo}
                        type="button"
                        className={index === selectedPhotoIndex ? "active" : ""}
                        onClick={() => setSelectedPhotoIndex(index)}
                      >
                        <img src={photo} alt={`${product.title} ${index + 1}`} />
                      </button>
                    ))}
                  </div>
                ) : null}

                <div className="property-detail-section">
                  <h4>Description</h4>
                  <p>{product.description?.fullDescription || "Details are available from the seller. Use Call or WhatsApp for the fastest confirmation."}</p>
                </div>

                <div className="property-detail-section">
                  <h4>Property Details</h4>
                  <div className="property-fact-grid">
                    <DetailFact icon={<FaBed />} label="Bedrooms" value={product.propertyDetails.bedrooms} />
                    <DetailFact icon={<FaBath />} label="Bathrooms" value={product.propertyDetails.baths} />
                    <DetailFact icon={<FaRulerCombined />} label="Area" value={`${Number(product.propertyDetails.area || 0).toLocaleString()} sqm`} />
                    <DetailFact label="Status" value={product.propertyDetails.propertyStatus} />
                  </div>
                </div>

                {product.AmenitiesList?.length ? (
                  <div className="property-detail-section">
                    <h4>Amenities</h4>
                    <div className="property-amenity-list">
                      {product.AmenitiesList.map((amenity) => (
                        <span key={amenity}>{amenity}</span>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="property-detail-section">
                  <h4>Location</h4>
                  <div className="property-details-google-map">
                    <iframe
                      src={`https://www.google.com/maps?q=${encodeURIComponent(product.locantion)}&output=embed`}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                </div>
              </Col>

              <Col xs={12} lg={4}>
                <aside className="property-contact-panel">
                  <p className="property-contact-label">{product.rent ? "Rent" : "Price"}</p>
                  <strong>{formatPrice(Number(product.price || 0))}</strong>
                  <p className="property-contact-seller">{product.owner || "Sammy Realty"}</p>
                  <div className="property-live-actions vertical">
                    <a className="btn theme-btn-1 btn-effect-1" href={getCallHref(phone)}>
                      <FaPhoneAlt />
                      Call Seller
                    </a>
                    <a className="btn btn-transparent btn-effect-3" href={getWhatsappHref(phone, whatsappMessage)} target="_blank" rel="noreferrer">
                      <FaWhatsapp />
                      WhatsApp
                    </a>
                  </div>
                </aside>
              </Col>
            </Row>
          ) : null}
        </Container>
      </section>

      <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
        <Container>
          <Row>
            <Col xs={12}>
              <CallToAction />
            </Col>
          </Row>
        </Container>
      </div>

      <style jsx global>{`
        .property-live-detail-area {
          background: #fff;
        }
        .property-detail-heading h1 {
          margin: 10px 0;
          font-size: 42px;
          line-height: 1.15;
        }
        .property-detail-heading p,
        .property-contact-seller {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #5f6f68;
          margin-bottom: 18px;
        }
        .property-detail-badge {
          display: inline-flex;
          background: #0b5d3b;
          color: #fff;
          padding: 8px 12px;
          font-size: 13px;
          font-weight: 800;
        }
        .property-mobile-contact,
        .property-contact-panel,
        .property-live-empty {
          border: 1px solid #e5eee9;
          background: #fff;
          box-shadow: 0 16px 40px rgba(15, 38, 28, 0.08);
        }
        .property-mobile-contact {
          display: none;
          margin-bottom: 20px;
          padding: 16px;
        }
        .property-mobile-contact strong,
        .property-contact-panel strong {
          display: block;
          color: #0b5d3b;
          font-size: 28px;
          line-height: 1.2;
          margin-bottom: 14px;
        }
        .property-live-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .property-live-actions .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .property-live-actions.vertical {
          flex-direction: column;
        }
        .property-detail-photo {
          aspect-ratio: 16 / 10;
          background: #f5f7f6;
          overflow: hidden;
        }
        .property-detail-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .property-detail-thumbs {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding: 14px 0 4px;
        }
        .property-detail-thumbs button {
          width: 92px;
          height: 72px;
          border: 2px solid transparent;
          padding: 0;
          background: transparent;
          flex: 0 0 auto;
        }
        .property-detail-thumbs button.active {
          border-color: #0b5d3b;
        }
        .property-detail-thumbs img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .property-detail-section {
          margin-top: 34px;
        }
        .property-detail-section h4 {
          margin-bottom: 14px;
        }
        .property-fact-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }
        .property-fact {
          display: flex;
          align-items: center;
          gap: 12px;
          border: 1px solid #e5eee9;
          padding: 14px;
        }
        .property-fact svg {
          color: #0b5d3b;
        }
        .property-fact span {
          display: block;
          color: #5f6f68;
          font-size: 13px;
        }
        .property-fact strong {
          display: block;
          color: #123428;
        }
        .property-amenity-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .property-amenity-list span {
          border: 1px solid #e5eee9;
          padding: 9px 12px;
          color: #123428;
        }
        .property-contact-panel {
          position: sticky;
          top: 110px;
          padding: 24px;
        }
        .property-contact-label {
          margin-bottom: 4px;
          color: #5f6f68;
          font-weight: 700;
        }
        .property-live-empty {
          padding: 28px;
        }
        @media (max-width: 991px) {
          .property-mobile-contact {
            display: block;
          }
          .property-contact-panel {
            position: static;
          }
        }
        @media (max-width: 575px) {
          .property-detail-heading h1 {
            font-size: 30px;
          }
          .property-fact-grid {
            grid-template-columns: 1fr;
          }
          .property-mobile-contact strong,
          .property-contact-panel strong {
            font-size: 22px;
          }
        }
      `}</style>
    </LayoutOne>
  );
}

function DetailFact({ icon, label, value }) {
  return (
    <div className="property-fact">
      {icon}
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    </div>
  );
}

export default PropertyDetailPage;
