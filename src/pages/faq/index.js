import { useState, useEffect } from "react";
import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";
import { FaqItemSkeleton } from "@/components/ui/skeletons";
import toast from "react-hot-toast";

function Faq() {
  const [faqItems, setFaqItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/faqs?limit=50");
      const result = await response.json();
      
      if (result.success && result.data) {
        setFaqItems(result.data);
      } else {
        toast.error("Failed to load FAQs");
      }
    } catch (error) {
      console.error("Error fetching FAQs:", error);
      toast.error("Error loading FAQs");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <LayoutOne topbar={false}>
        <ShopBreadCrumb
          title="Frequently Asked Questions"
          sectionPace=""
          currentSlug="FAQs"
        />

        {/* <!-- FAQ AREA START (faq-2) (ID > accordion_2) --> */}
        <div className="ltn__faq-area mb-100">
          <div className="container">
            <Row>
              <Col xs={12}>
                <div className="ltn__faq-inner ltn__faq-inner-2">
                  {loading ? (
                    <div>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <FaqItemSkeleton key={index} />
                      ))}
                    </div>
                  ) : faqItems.length > 0 ? (
                    <Accordion>
                      {faqItems.map((item) => (
                        <Accordion.Item key={item.id} eventKey={String(item.id)}>
                          <Accordion.Header>{item.question}</Accordion.Header>
                          <Accordion.Body>
                            <p>{item.answer}</p>
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  ) : (
                    <p className="text-center">No FAQs available at the moment.</p>
                  )}

                  <div className="need-support text-center mt-100">
                    <h2>Still need help? Speak with Sammy Realty:</h2>
                    <div className="btn-wrapper mb-30">
                      <Link href="/contact" className="theme-btn-1 btn">
                        Contact Us
                      </Link>
                    </div>
                    <h3>
                      <FaPhoneAlt />
                      +234-814-841-4913
                    </h3>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        {/* <!-- FAQ AREA END --> */}

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

export default Faq;
