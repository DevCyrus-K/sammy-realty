import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function ServiceFAQ() {
  const [activeItem, setActiveItem] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'How long does a typical property sale take?',
      answer: 'Most property sales take 4-12 weeks from listing to closing, depending on market conditions, asking price, and buyer interest. We prioritize speed and quality.'
    },
    {
      id: 2,
      question: 'Do you handle legal paperwork and documentation?',
      answer: 'Yes, we coordinate with legal professionals and guide clients through all documentation required. We ensure compliance and clear title transfer.'
    },
    {
      id: 3,
      question: 'Are all your listings verified?',
      answer: 'Absolutely. Every property in our database undergoes verification for authenticity, ownership, and current market value before listing.'
    },
    {
      id: 4,
      question: 'What are your commission rates?',
      answer: 'Our commission structure is competitive and transparent. We discuss fees upfront with no hidden charges. Contact us for specific rates.'
    },
    {
      id: 5,
      question: 'Can foreigners invest in properties through you?',
      answer: 'Yes, we assist foreign investors with property acquisition, though some restrictions apply based on Nigerian regulations. We provide guidance on legal requirements.'
    },
    {
      id: 6,
      question: 'Do you provide property management services?',
      answer: 'Yes. We offer full property management including tenant coordination, maintenance oversight, vacancy management, and owner reporting.'
    },
    {
      id: 7,
      question: 'What makes your pricing accurate?',
      answer: 'We conduct comparative market analysis, consider location factors, property condition, and current demand. This ensures competitive pricing for faster sales.'
    },
    {
      id: 8,
      question: 'How can I get a free property valuation?',
      answer: 'Schedule a consultation through our website or WhatsApp. We provide free property assessments to help you understand current market value.'
    }
  ];

  return (
    <div style={{ padding: '60px 0', backgroundColor: 'white' }}>
      <Container>
        <Row className="text-center">
          <Col xs={12}>
            <h2 style={{ marginBottom: '50px', fontSize: '2.2rem', color: '#333', fontWeight: 'bold' }}>
              Frequently Asked Questions
            </h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={8} className="mx-auto">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                style={{
                  marginBottom: '16px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  backgroundColor: activeItem === faq.id ? '#f9f9f9' : 'white',
                  transition: 'all 0.3s'
                }}
              >
                <div
                  onClick={() => setActiveItem(activeItem === faq.id ? null : faq.id)}
                  style={{
                    padding: '18px 24px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: activeItem === faq.id ? '#f0f0f0' : 'white',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f5f5f5';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = activeItem === faq.id ? '#f0f0f0' : 'white';
                  }}
                >
                  <h5 style={{ margin: '0', color: '#333', fontSize: '1rem', fontWeight: '600' }}>
                    {faq.question}
                  </h5>
                  <div style={{ color: '#0B5D3B', fontSize: '18px', flexShrink: 0, marginLeft: '16px' }}>
                    {activeItem === faq.id ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>
                {activeItem === faq.id && (
                  <div
                    style={{
                      padding: '0 24px 18px 24px',
                      borderTop: '1px solid #e0e0e0',
                      color: '#666',
                      lineHeight: '1.6',
                      fontSize: '0.95rem'
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ServiceFAQ;
