import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

function WhyChooseUsHome() {
  const reasons = [
    "Verified Listings - Every property is verified for authenticity",
    "Area-Based Search - Find properties by location with ease",
    "Direct Seller Contact - Connect immediately with property owners",
    "Local Market Guidance - Expert advice on Lagos neighborhoods",
    "Fast Response Time - Quick turnaround on all enquiries",
    "Professional Support - Experienced team guiding you throughout"
  ];

  return (
    <div style={{ padding: '90px 0', backgroundColor: 'white' }}>
      <Container>
        <Row className="text-center">
          <Col xs={12}>
            <h6 style={{ color: '#0B5D3B', fontWeight: '600', marginBottom: '15px', fontSize: '0.95rem' }}>
              Why Choose Us
            </h6>
            <h2 style={{ marginBottom: '50px', fontSize: '2.2rem', color: '#333', fontWeight: 'bold' }}>
              Real Estate Help Built Around Faster Contact
            </h2>
            <p style={{ fontSize: '1rem', color: '#666', marginBottom: '50px', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 50px' }}>
              From Greenville Estate in Ajah, we connect serious buyers, renters, landlords, and sellers with trusted property options across Lagos.
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={8} className="mx-auto">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
              {reasons.map((reason, index) => (
                <div key={index} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '28px', color: '#0B5D3B', flexShrink: 0, marginTop: '4px' }}>
                    <FaCheckCircle />
                  </div>
                  <div>
                    <p style={{ margin: '0', color: '#333', fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '500' }}>
                      {reason}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WhyChooseUsHome;
