import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section>
          <h2>1. Information We Collect</h2>
          <p>
            TempoDrill is designed to be privacy-focused. We collect minimal information to provide our service:
          </p>
          <ul>
            <li><strong>Usage Data:</strong> We use Google Analytics to understand how our website is used, including pages visited, time spent, and general location data.</li>
            <li><strong>No Personal Information:</strong> We do not collect names, email addresses, or other personally identifiable information unless you voluntarily provide it through our contact feature.</li>
            <li><strong>Cookies:</strong> We use essential cookies for website functionality and analytics cookies to improve our service.</li>
          </ul>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and improve our tennis drill recommendation service</li>
            <li>Analyze website usage to enhance user experience</li>
            <li>Respond to contact inquiries when provided</li>
            <li>Ensure website security and prevent abuse</li>
          </ul>
        </section>

        <section>
          <h2>3. Cookies and Tracking Technologies</h2>
          <p>We use the following types of cookies:</p>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
            <li><strong>Analytics Cookies:</strong> Google Analytics cookies to understand website usage patterns</li>
          </ul>
          <p>
            You can control cookie settings through your browser preferences. 
            Note that disabling certain cookies may affect website functionality.
          </p>
        </section>

        <section>
          <h2>4. Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul>
            <li><strong>Google Analytics:</strong> To analyze website traffic and usage patterns. 
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                View Google's Privacy Policy
              </a>
            </li>
            <li><strong>Hosting Services:</strong> Our website is hosted on secure servers with appropriate data protection measures.</li>
          </ul>
        </section>

        <section>
          <h2>5. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your information:
          </p>
          <ul>
            <li>HTTPS encryption for all data transmission</li>
            <li>Secure hosting infrastructure</li>
            <li>Regular security updates and monitoring</li>
            <li>Limited access to any collected data</li>
          </ul>
        </section>

        <section>
          <h2>6. Your Rights</h2>
          <p>You have the following rights regarding your data:</p>
          <ul>
            <li><strong>Access:</strong> Request information about what data we have collected</li>
            <li><strong>Deletion:</strong> Request deletion of your data</li>
            <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
            <li><strong>Opt-out:</strong> Disable analytics tracking through your browser settings</li>
          </ul>
        </section>

        <section>
          <h2>7. Data Retention</h2>
          <p>
            We retain data only as long as necessary for the purposes outlined in this policy:
          </p>
          <ul>
            <li>Analytics data is retained for up to 26 months</li>
            <li>Contact information is retained only as long as needed to respond to inquiries</li>
            <li>We regularly review and delete unnecessary data</li>
          </ul>
        </section>

        <section>
          <h2>8. Children's Privacy</h2>
          <p>
            Our service is not directed to children under 13. We do not knowingly collect 
            personal information from children under 13. If you believe we have collected 
            information from a child under 13, please contact us immediately.
          </p>
        </section>

        <section>
          <h2>9. International Users</h2>
          <p>
            If you are accessing our website from outside the United States, please be aware 
            that your information may be transferred to, stored, and processed in the United States 
            where our servers are located.
          </p>
        </section>

        <section>
          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any 
            material changes by posting the new privacy policy on this page and updating 
            the "Last updated" date.
          </p>
        </section>

        <section>
          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our data practices, 
            please contact us at:
          </p>
          <p>
            <strong>Email:</strong> tempotennisdrills@gmail.com
          </p>
        </section>

        <section>
          <h2>12. Legal Compliance</h2>
          <p>
            This privacy policy is designed to comply with applicable privacy laws, including:
          </p>
          <ul>
            <li>General Data Protection Regulation (GDPR) for EU users</li>
            <li>California Consumer Privacy Act (CCPA) for California residents</li>
            <li>Other applicable state and federal privacy laws</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
