import { Container, Row, Col } from "react-bootstrap";
import { LayoutOne } from "@/layouts";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";

const PrivacyPolicy = () => (
  <LayoutOne topbar={false}>
    <ShopBreadCrumb title="Privacy Policy" sectionPace="" currentSlug="Privacy Policy" />
    <Container className="pt-4 pb-120">
      <Row>
        <Col lg={8}>
          <h2>Privacy Policy</h2>
          
          <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '4px', marginBottom: '30px' }}>
            <p style={{ marginBottom: '0' }}>
              Sammy Realty values your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services. We encourage you to read this policy carefully.
            </p>
          </div>
          
          <h4>1. Introduction</h4>
          <p>
            At Sammy Realty, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
          </p>

          <h4>2. Information We Collect</h4>
          <p>
            We collect information that you provide directly to us, including:
          </p>
          <ul>
            <li>Name and contact information (email, phone number, WhatsApp)</li>
            <li>Location preferences and property requirements</li>
            <li>Property details when you list properties for sale or rent</li>
            <li>Communication preferences and interaction history</li>
            <li>Payment and transaction information when applicable</li>
          </ul>
          <p>
            We also automatically collect certain information about your device and browsing activity, including IP address, browser type, pages visited, and referring URLs.
          </p>

          <h4>3. How We Use Your Information</h4>
          <p>
            We use your information to:
          </p>
          <ul>
            <li>Respond to your property enquiries and coordinate inspections</li>
            <li>Facilitate communication between buyers, sellers, renters, and landlords</li>
            <li>Send you updates about properties matching your preferences</li>
            <li>Improve our website functionality and user experience</li>
            <li>Comply with legal obligations and prevent fraud</li>
            <li>Send marketing communications (only with your consent)</li>
          </ul>

          <h4>4. Data Sharing</h4>
          <p>
            We do not sell your personal data. However, we may share information with:
          </p>
          <ul>
            <li>Property owners and agents to facilitate property transactions</li>
            <li>Service providers who assist us in operating our website (hosting, analytics, payment processing)</li>
            <li>Legal authorities when required by law</li>
          </ul>

          <h4>5. Data Protection and Security</h4>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure. We encourage you to use strong passwords and keep your account credentials confidential.
          </p>

          <h4>6. Your Rights</h4>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access, correct, or delete your personal data</li>
            <li>Withdraw consent for data processing</li>
            <li>Request a copy of your information in a portable format</li>
            <li>Opt-out of marketing communications at any time</li>
          </ul>
          <p>
            To exercise these rights, please contact us at info@sammyrealty.com.
          </p>

          <h4>7. Cookies and Tracking Technologies</h4>
          <p>
            Our website uses cookies and similar tracking technologies to enhance your experience. See our Cookie Policy for more details.
          </p>

          <h4>8. Third-Party Links</h4>
          <p>
            Our website may contain links to external websites. We are not responsible for the privacy practices of third-party websites. We encourage you to review the privacy policies of any site before providing personal information.
          </p>

          <h4>9. Children's Privacy</h4>
          <p>
            Our website is not intended for individuals under 18 years old. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will delete such information and remove the child's account.
          </p>

          <h4>10. Data Retention</h4>
          <p>
            We retain your personal data for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. You may request deletion of your data at any time, subject to legal requirements.
          </p>

          <h4>11. International Data Transfers</h4>
          <p>
            If your data is transferred internationally, we ensure appropriate safeguards are in place to protect your information in compliance with applicable laws.
          </p>

          <h4>12. Contact Us</h4>
          <p>
            If you have questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p>
            Email: info@sammyrealty.com<br />
            Phone: +234-814-841-4913<br />
            Address: Greenville Estate, Ajah, Lagos, Nigeria
          </p>
        </Col>
      </Row>
    </Container>
  </LayoutOne>
);

export default PrivacyPolicy;
