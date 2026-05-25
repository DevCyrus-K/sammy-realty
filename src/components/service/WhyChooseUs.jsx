import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCheckCircle, FaShieldAlt, FaChartLine, FaHeadset, FaGlobeAmericas, FaBullhorn } from 'react-icons/fa';

function WhyChooseUs() {
  const reasons = [
    {
      id: 1,
      icon: <FaShieldAlt />,
      title: 'Verified Listings',
      description: 'Every property in our database is verified for authenticity and market accuracy.'
    },
    {
      id: 2,
      icon: <FaCheckCircle />,
      title: 'Market Expertise',
      description: 'Deep knowledge of Lagos markets, pricing trends, and investment hotspots.'
    },
    {
      id: 3,
      icon: <FaHeadset />,
      title: 'Fast Response Time',
      description: 'Quick turnaround on enquiries, viewings, and property information requests.'
    },
    {
      id: 4,
      icon: <FaBullhorn />,
      title: 'Premium Marketing',
      description: 'Professional photography, videography, and multi-channel promotional support.'
    },
    {
      id: 5,
      icon: <FaChartLine />,
      title: 'Investment Guidance',
      description: 'Clear insight on ROI, rental yield, and market positioning for investors.'
    },
    {
      id: 6,
      icon: <FaGlobeAmericas />,
      title: 'Transparent Process',
      description: 'Clear communication at every step with no hidden fees or surprise costs.'
    }
  ];

  return (
    <div style={{ padding: '60px 0', backgroundColor: '#f8f8f8' }}>
      <Container>
        <Row className="text-center">
          <Col xs={12}>
            <h2 style={{ marginBottom: '50px', fontSize: '2.2rem', color: '#333', fontWeight: 'bold' }}>
              Why Choose Sammy Realty
            </h2>
          </Col>
        </Row>
        <Row>
          {reasons.map((reason) => (
            <Col xs={12} sm={6} lg={4} key={reason.id} className="mb-4">
              <div
                style={{
                  padding: '30px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s',
                  height: '100%'
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
                <div style={{ fontSize: '36px', color: '#0B5D3B', marginBottom: '15px' }}>
                  {reason.icon}
                </div>
                <h4 style={{ color: '#333', marginBottom: '12px', fontSize: '1.1rem', fontWeight: '600' }}>
                  {reason.title}
                </h4>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6', margin: '0' }}>
                  {reason.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default WhyChooseUs;
