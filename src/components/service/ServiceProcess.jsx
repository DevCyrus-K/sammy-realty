import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaClipboardList, FaCamera, FaUsers, FaFileContract } from 'react-icons/fa';

function ServiceProcess() {
  const steps = [
    {
      id: 1,
      icon: <FaPhone />,
      title: 'Initial Consultation',
      description: 'We understand your property goals, timeline, and specific requirements.'
    },
    {
      id: 2,
      icon: <FaClipboardList />,
      title: 'Property Evaluation',
      description: 'Comprehensive assessment of pricing, location value, and market positioning.'
    },
    {
      id: 3,
      icon: <FaCamera />,
      title: 'Professional Marketing',
      description: 'Your property is promoted across premium channels with professional visuals.'
    },
    {
      id: 4,
      icon: <FaUsers />,
      title: 'Buyer/Tenant Matching',
      description: 'We connect you with qualified prospects who match your property profile.'
    },
    {
      id: 5,
      icon: <FaFileContract />,
      title: 'Closing & Documentation',
      description: 'We oversee negotiations, documentation, and ensure smooth transaction completion.'
    }
  ];

  return (
    <div style={{ padding: '60px 0', backgroundColor: 'white' }}>
      <Container>
        <Row className="text-center">
          <Col xs={12}>
            <h2 style={{ marginBottom: '50px', fontSize: '2.2rem', color: '#333', fontWeight: 'bold' }}>
              Our Process
            </h2>
          </Col>
        </Row>
        <Row>
          {steps.map((step, index) => (
            <Col xs={12} md={6} lg={12} key={step.id} className="mb-4">
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    minWidth: '60px',
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#0B5D3B',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '24px',
                    flexShrink: 0
                  }}
                >
                  {step.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <h4 style={{ margin: '0', color: '#333', fontSize: '1.1rem', fontWeight: '600' }}>
                      Step {step.id} — {step.title}
                    </h4>
                  </div>
                  <p style={{ margin: '0', color: '#666', lineHeight: '1.6' }}>
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div style={{ height: '30px', marginLeft: '30px', borderLeft: '2px solid #e0e0e0', margin: '15px 0 0 30px' }}></div>
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ServiceProcess;
