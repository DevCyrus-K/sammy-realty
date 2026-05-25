import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { FaPhone, FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';

function ServiceHero() {
  return (
    <div
      style={{
        backgroundImage: 'linear-gradient(rgba(11, 93, 59, 0.8), rgba(11, 93, 59, 0.8)), url(/img/home-demos/home-3.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 0',
        color: 'white',
        textAlign: 'center'
      }}
    >
      <Container>
        <Row>
          <Col xs={12}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>
              Real Estate Solutions Tailored for You
            </h1>
            <p style={{ fontSize: '1.3rem', marginBottom: '40px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.95)' }}>
              Whether you're buying, selling, leasing, or investing in property, Sammy Realty provides expert guidance with proven results across Lagos and beyond.
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('.service-consultation')?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  padding: '14px 28px',
                  backgroundColor: 'white',
                  color: '#0B5D3B',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#e8e8e8';
                  e.currentTarget.style.transform = 'translateY(-2px)';
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
                  padding: '14px 28px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  border: '2px solid white',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#0B5D3B';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
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
                  padding: '14px 28px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  border: '2px solid white',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#0B5D3B';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
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

export default ServiceHero;
