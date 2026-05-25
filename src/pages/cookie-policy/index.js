import { Container, Row, Col } from "react-bootstrap";
import { LayoutOne } from "@/layouts";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";

const CookiePolicy = () => (
  <LayoutOne topbar={false}>
    <ShopBreadCrumb title="Cookie Policy" sectionPace="" currentSlug="Cookie Policy" />
    <Container className="pt-115 pb-120">
      <Row>
        <Col lg={8}>
          <h2>Cookie Policy</h2>
          
          <h4>1. What Are Cookies?</h4>
          <p>
            Cookies are small text files stored on your device (computer, tablet, or smartphone) when you visit our website. They help us remember your preferences, track usage patterns, and enhance your browsing experience. Cookies do not contain personally identifiable information but may link to your personal data if you have created an account.
          </p>

          <h4>2. Types of Cookies We Use</h4>
          
          <h5>Essential Cookies</h5>
          <p>
            These cookies are necessary for the website to function properly. They enable core functionality such as page navigation, account access, and security features. Without these cookies, you may not be able to use certain services on our website.
          </p>
          
          <h5>Performance and Analytics Cookies</h5>
          <p>
            We use these cookies to collect information about how you use our website, including the pages you visit, the links you click, and the time spent on each page. This data helps us understand user behavior and improve website functionality and user experience.
          </p>
          
          <h5>Functional Cookies</h5>
          <p>
            These cookies remember your preferences and choices (such as language, location, or search filters) to personalize your experience and make the website more useful to you.
          </p>
          
          <h5>Marketing and Advertising Cookies</h5>
          <p>
            We may use these cookies to track your interest in our properties and services, deliver targeted advertisements, and measure the effectiveness of marketing campaigns. These cookies are typically set by third-party advertising networks.
          </p>

          <h4>3. Third-Party Cookies</h4>
          <p>
            Our website may use third-party cookies from partners such as Google Analytics, social media platforms, and advertising networks. These third parties have their own cookie policies and privacy practices. We recommend reviewing their policies for more information.
          </p>

          <h4>4. How to Control Cookies</h4>
          <p>
            You can control and manage cookies through your browser settings:
          </p>
          <ul>
            <li><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data</li>
            <li><strong>Firefox:</strong> Preferences &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
            <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies and website data</li>
            <li><strong>Edge:</strong> Settings &gt; Privacy, search, and services &gt; Clear browsing data</li>
          </ul>
          <p>
            You can also use browser extensions to block or manage cookies. However, disabling cookies may affect the functionality of our website.
          </p>

          <h4>5. Cookie Retention</h4>
          <p>
            Cookies have varying expiration times:
          </p>
          <ul>
            <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
            <li><strong>Persistent Cookies:</strong> Remain on your device for a specified period (typically 1 month to 2 years)</li>
          </ul>

          <h4>6. Your Consent</h4>
          <p>
            By continuing to use our website after being informed about cookies, you consent to our use of cookies as described in this policy. You can withdraw this consent at any time by adjusting your browser settings or contacting us.
          </p>

          <h4>7. Do Not Track</h4>
          <p>
            If your browser includes a "Do Not Track" feature, we will respect your preference. However, some website features may not function optimally if tracking is disabled.
          </p>

          <h4>8. GDPR and Data Protection</h4>
          <p>
            We are committed to complying with applicable data protection regulations. If you are located in the EU or other jurisdictions with data protection laws, you have additional rights regarding your data. For more information, see our Privacy Policy.
          </p>

          <h4>9. Changes to This Policy</h4>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We encourage you to review this policy periodically to stay informed about how we use cookies.
          </p>

          <h4>10. Contact Us</h4>
          <p>
            If you have questions about this Cookie Policy or our use of cookies, please contact us at:
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

export default CookiePolicy;
