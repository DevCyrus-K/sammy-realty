import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBuilding, FaClock, FaMapMarkerAlt, FaSmile } from 'react-icons/fa';

function TrustIndicators() {
  const indicators = [
    {
      id: 1,
      icon: <FaBuilding />,
      number: '250+',
      label: 'Properties Sold',
      description: 'Successful transactions across Lagos'
    },
    {
      id: 2,
      icon: <FaClock />,
      number: '8+',
      label: 'Years Experience',
      description: 'Proven track record in real estate'
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt />,
      number: '15+',
      label: 'Locations Served',
      description: 'Coverage across Lagos communities'
    },
    {
      id: 4,
      icon: <FaSmile />,
      number: '500+',
      label: 'Happy Clients',
      description: 'Trusted by investors and homeowners'
    }
  ];

  return (
    <div style={{ padding: '60px 0', backgroundColor: '#f8f8f8' }}>
      <Container>
        <Row className="text-center">
          <Col xs={12}>
            <h2 style={{ marginBottom: '50px', fontSize: '2.2rem', color: '#333', fontWeight: 'bold' }}>
              Why Trust Sammy Realty
            </h2>
          </Col>
        </Row>
        <Row>
          {indicators.map((indicator) => (
            <Col xs={12} sm={6} lg={3} key={indicator.id} className="mb-4">
              <div
                style={{
                  padding: '30px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={{ fontSize: '40px', color: '#0B5D3B', marginBottom: '15px' }}>
                  {indicator.icon}
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0B5D3B', marginBottom: '10px' }}>
                  {indicator.number}
                </div>
                <div style={{ fontSize: '1rem', fontWeight: '600', color: '#333', marginBottom: '8px' }}>
                  {indicator.label}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>
                  {indicator.description}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default TrustIndicators;
