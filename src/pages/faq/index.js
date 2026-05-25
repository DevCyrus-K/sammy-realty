import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";

function Faq() {
  const faqItems = [
    { id: "1", question: "How do I book a property inspection?", answer: "Open a listing, tap View Details, then call or send a WhatsApp message to Sammy Realty. We will confirm availability and help you schedule a viewing." },
    { id: "2", question: "Can Sammy Realty help me sell my property?", answer: "Yes. Use the Sell Your Property button and share the county, sub-county, area, price expectation, and basic property details. We keep the listing process simple." },
    { id: "3", question: "Do I need latitude and longitude to list a property?", answer: "No. Sammy Realty works with simple location details: county, sub-county, and area. Extra map links or GPS details are optional." },
    { id: "4", question: "Which locations do you cover?", answer: "We are based at Greenville Estate, Ajah, Lagos, and support property enquiries across Ajah, Sangotedo, Lekki, Ibeju-Lekki, and wider Lagos corridors." },
    { id: "5", question: "Do you handle shortlets and rentals?", answer: "Yes. We help renters find available homes and shortlet options, then move quickly to inspection and contact." },
    { id: "6", question: "Can you manage my rental property?", answer: "Yes. Sammy Realty supports landlords with tenant coordination, vacancy follow-up, and practical property management." },
    { id: "7", question: "How do I contact Sammy Realty?", answer: "Call +234-814-841-4913, send WhatsApp to the same number, or email info@sammyrealty.com." },
  ];

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
                  <Accordion>
                    {faqItems.map((item) => (
                      <Accordion.Item key={item.id} eventKey={item.id}>
                        <Accordion.Header>{item.question}</Accordion.Header>
                        <Accordion.Body>
                          <p>{item.answer}</p>
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>

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
        {/* <!-- FAQ AREA START --> */}

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
