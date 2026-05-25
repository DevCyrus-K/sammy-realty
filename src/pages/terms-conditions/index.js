import { Container, Row, Col } from "react-bootstrap";
import { LayoutOne } from "@/layouts";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";

const TermsConditions = () => (
  <LayoutOne topbar={false}>
    <ShopBreadCrumb title="Terms & Conditions" sectionPace="" currentSlug="Terms & Conditions" />
    <Container className="pt-4 pb-120">
      <Row>
        <Col lg={8}>
          <h2>Terms & Conditions</h2>
          
          <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '4px', marginBottom: '30px' }}>
            <p style={{ marginBottom: '0' }}>
              These Terms & Conditions govern your use of Sammy Realty's website and services. Please read them carefully. By accessing our website and using our services, you agree to be bound by these terms. If you do not agree, please do not use our services.
            </p>
          </div>
          
          <h4>1. Acceptance of Terms</h4>
          <p>
            By accessing and using Sammy Realty's website and services, you agree to be bound by these terms and conditions. If you do not agree to abide by the above, please do not use this service.
          </p>

          <h4>2. Use License</h4>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on Sammy Realty's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to reverse engineer, decompile, or disassemble any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>

          <h4>3. Property Information Accuracy</h4>
          <p>
            Sammy Realty provides property listings, prices, availability, and other information as a service to help users make property enquiries. While we strive for accuracy, property details, prices, and availability are subject to change. All information should be verified directly with Sammy Realty or property owners before making commitments.
          </p>

          <h4>4. Inspection and Viewing Terms</h4>
          <p>
            Property inspections and viewings must be scheduled in advance through Sammy Realty. Inspections are conducted during agreed times at the property owner's discretion. Sammy Realty reserves the right to cancel or reschedule inspections as needed.
          </p>

          <h4>5. Disclaimer of Warranties</h4>
          <p>
            The materials on Sammy Realty's website are provided on an 'as is' basis. Sammy Realty makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h4>6. Limitations of Liability</h4>
          <p>
            In no event shall Sammy Realty or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Sammy Realty's website, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <h4>7. Accuracy of Materials</h4>
          <p>
            The materials appearing on Sammy Realty's website could include technical, typographical, or photographic errors. Sammy Realty does not warrant that any of the materials on the website are accurate, complete, or current. Sammy Realty may make changes to the materials contained on its website at any time without notice.
          </p>

          <h4>8. Materials and Links</h4>
          <p>
            Sammy Realty has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Sammy Realty of the site. Use of any such linked website is at the user's own risk.
          </p>

          <h4>9. Modifications to Terms</h4>
          <p>
            Sammy Realty may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
          </p>

          <h4>10. Governing Law</h4>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of Nigeria, and you irrevocably submit to the exclusive jurisdiction of the courts located in Lagos, Nigeria.
          </p>

          <h4>11. Contact Information</h4>
          <p>
            If you have any questions about these Terms & Conditions, please contact us at:
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

export default TermsConditions;
