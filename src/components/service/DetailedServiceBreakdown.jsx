import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Link from 'next/link';

function DetailedServiceBreakdown() {
  const [expandedService, setExpandedService] = useState(0);

  const services = [
    {
      id: 0,
      title: 'Property Sales',
      icon: '🏠',
      description: 'We help property owners sell faster at competitive market value through targeted marketing and qualified buyer networks.',
      shortDescription: 'Sell your property with professional marketing and serious buyer connections.',
      includes: [
        'Professional property photography and videography',
        'Listing optimization for visibility and search ranking',
        'Qualified buyer sourcing and lead generation',
        'Organized site visits and property showings',
        'Professional negotiation handling',
        'Legal coordination and documentation support',
        'Transaction oversight to closing',
        'Post-sale follow-up and support'
      ],
      benefits: [
        'Faster property turnover and reduced holding costs',
        'Better market visibility across premium channels',
        'Access to serious, pre-qualified buyers only',
        'Reduced selling stress with professional handling',
        'Clear communication at every step',
        'Competitive pricing that maximizes returns',
        'Legal compliance and secure transactions'
      ],
      cta: 'List Your Property',
      ctaLink: '/'
    },
    {
      id: 1,
      title: 'Property Management',
      icon: '🔑',
      description: 'Keep rentals occupied, maintained, and accountable with practical management designed for landlords and professional property oversight.',
      shortDescription: 'Maximize rental income while we handle tenant coordination and maintenance.',
      includes: [
        'Tenant sourcing and verification',
        'Rent collection and financial reporting',
        'Regular property inspections and maintenance oversight',
        'Vacancy management and quick turnaround',
        'Tenant communication and issue resolution',
        'Property maintenance coordination',
        'Owner reporting and financial statements',
        'Legal documentation and lease management'
      ],
      benefits: [
        'Reduced vacancy periods and lost income',
        'Professional tenant screening and vetting',
        'Timely rent collection and reporting',
        'Maintained property value and curb appeal',
        'Peace of mind with professional oversight',
        'Reduced administrative burden on landlords',
        'Improved tenant satisfaction and retention',
        'Transparent financial tracking'
      ],
      cta: 'Get Management Quote',
      ctaLink: '/'
    },
    {
      id: 2,
      title: 'Real Estate Consulting',
      icon: '📊',
      description: 'Get practical guidance on location, pricing, rental yield, and market fit before you buy, sell, lease, or invest.',
      shortDescription: 'Make confident property decisions with expert market insight.',
      includes: [
        'Market analysis and trend assessment',
        'Property valuation and pricing guidance',
        'ROI and rental yield analysis',
        'Investment opportunity identification',
        'Neighborhood and location assessment',
        'Buyer/seller profile matching',
        'Market comparison and competitive analysis',
        'Documentation and legal guidance'
      ],
      benefits: [
        'Avoid costly investment mistakes',
        'Understand true property value',
        'Calculate realistic returns before committing',
        'Identify investment hotspots and emerging areas',
        'Negotiate from a position of knowledge',
        'Clear market insights for confident decisions',
        'Access to exclusive investment opportunities',
        'Reduced decision-making uncertainty'
      ],
      cta: 'Book Consultation',
      ctaLink: '/'
    },
    {
      id: 3,
      title: 'Rental & Shortlets',
      icon: '🛏️',
      description: 'Find homes for rent and shortlet stays with simple search, quick viewing arrangement, and immediate contact options.',
      shortDescription: 'Discover rental properties and shortlet accommodations quickly and easily.',
      includes: [
        'Wide inventory of rental properties',
        'Area-based search and filtering',
        'Detailed property specifications and visuals',
        'Quick viewing arrangement',
        'Direct landlord/agent contact',
        'Lease preparation and coordination',
        'Move-in support and documentation',
        'Ongoing tenant support'
      ],
      benefits: [
        'Fast rental property discovery by location',
        'Clear property specifications and pricing',
        'Quick viewing without unnecessary delays',
        'Direct contact with landlords and agents',
        'Transparent lease terms upfront',
        'Simple move-in process',
        'Responsive landlord communication',
        'Professional relationship management'
      ],
      cta: 'Browse Rentals',
      ctaLink: '/'
    }
  ];

  return (
    <div style={{ padding: '60px 0', backgroundColor: '#f8f8f8' }}>
      <Container>
        <Row className="text-center">
          <Col xs={12}>
            <h2 style={{ marginBottom: '50px', fontSize: '2.2rem', color: '#333', fontWeight: 'bold' }}>
              Our Services
            </h2>
          </Col>
        </Row>

        {services.map((service, index) => (
          <Row key={service.id} className="mb-4">
            <Col xs={12}>
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s'
                }}
              >
                {/* Service Header */}
                <div
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  style={{
                    padding: '30px',
                    cursor: 'pointer',
                    backgroundColor: expandedService === service.id ? '#0B5D3B' : 'white',
                    color: expandedService === service.id ? 'white' : '#333',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    if (expandedService !== service.id) {
                      e.currentTarget.style.backgroundColor = '#f5f5f5';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (expandedService !== service.id) {
                      e.currentTarget.style.backgroundColor = 'white';
                    }
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1 }}>
                    <div style={{ fontSize: '36px' }}>{service.icon}</div>
                    <div style={{ textAlign: 'left' }}>
                      <h3 style={{ margin: '0', fontSize: '1.3rem', fontWeight: '600' }}>
                        {service.title}
                      </h3>
                      <p style={{ margin: '8px 0 0 0', fontSize: '0.95rem', opacity: 0.9 }}>
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>
                  <div style={{ fontSize: '24px', flexShrink: 0 }}>
                    {expandedService === service.id ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedService === service.id && (
                  <div
                    style={{
                      padding: '30px',
                      backgroundColor: 'white',
                      borderTop: '2px solid #0B5D3B'
                    }}
                  >
                    <Row>
                      <Col xs={12} md={6}>
                        <div style={{ marginBottom: '30px' }}>
                          <h4 style={{ color: '#0B5D3B', marginBottom: '20px', fontSize: '1.1rem', fontWeight: '600' }}>
                            What's Included
                          </h4>
                          <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                            {service.includes.map((item, idx) => (
                              <li
                                key={idx}
                                style={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: '12px',
                                  marginBottom: '12px',
                                  color: '#666',
                                  lineHeight: '1.5'
                                }}
                              >
                                <span style={{ color: '#0B5D3B', flexShrink: 0, marginTop: '2px' }}>
                                  <FaCheck />
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Col>

                      <Col xs={12} md={6}>
                        <div style={{ marginBottom: '30px' }}>
                          <h4 style={{ color: '#0B5D3B', marginBottom: '20px', fontSize: '1.1rem', fontWeight: '600' }}>
                            Key Benefits
                          </h4>
                          <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                            {service.benefits.map((benefit, idx) => (
                              <li
                                key={idx}
                                style={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: '12px',
                                  marginBottom: '12px',
                                  color: '#666',
                                  lineHeight: '1.5'
                                }}
                              >
                                <span style={{ color: '#0B5D3B', flexShrink: 0, marginTop: '2px' }}>
                                  <FaCheck />
                                </span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={12}>
                        <div style={{ marginTop: '30px', paddingTop: '30px', borderTop: '1px solid #e0e0e0' }}>
                          <Link
                            href={service.ctaLink}
                            style={{
                              padding: '12px 28px',
                              backgroundColor: '#0B5D3B',
                              color: 'white',
                              textDecoration: 'none',
                              borderRadius: '6px',
                              fontWeight: '600',
                              display: 'inline-block',
                              transition: 'all 0.3s',
                              cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#084630';
                              e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = '#0B5D3B';
                              e.currentTarget.style.transform = 'translateY(0)';
                            }}
                          >
                            {service.cta}
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
}

export default DetailedServiceBreakdown;
