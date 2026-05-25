import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { FaPhone, FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';

function FinalCTA() {
  return (
    <div
      style={{
        backgroundImage: 'linear-gradient(rgba(11, 93, 59, 0.9), rgba(11, 93, 59, 0.9))',
        backgroundColor: '#0B5D3B',
        padding: '80px 0',
        color: 'white',
        textAlign: 'center'
      }}
    >
      <Container>
        <Row>
          <Col xs={12}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
              Ready to Find Your Next Property Opportunity?
            </h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '40px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.95)' }}>
              Speak with our team today for expert guidance on buying, selling, leasing, or managing property in Lagos and beyond.
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/"
                style={{
                  padding: '16px 32px',
                  backgroundColor: 'white',
                  color: '#0B5D3B',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'all 0.3s',
                  fontSize: '1rem',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#e8e8e8';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FaCalendarAlt />
                Schedule Consultation
              </Link>

              <a
                href="https://wa.me/2348012345678?text=Hi%20Sammy%20Realty%2C%20I%20need%20property%20assistance"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '16px 32px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  border: '2px solid white',
                  transition: 'all 0.3s',
                  fontSize: '1rem',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#0B5D3B';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FaWhatsapp />
                WhatsApp Us
              </a>

              <a
                href="tel:+2348012345678"
                style={{
                  padding: '16px 32px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  border: '2px solid white',
                  transition: 'all 0.3s',
                  fontSize: '1rem',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#0B5D3B';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FaPhone />
                Call Now
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FinalCTA;
