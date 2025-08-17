import React from 'react';
import '../styles/LegalPages.css';

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      {/* Wave Effects */}
      <div className="legal-wave-container">
        <div className="legal-wave legal-wave-1"></div>
        <div className="legal-wave legal-wave-2"></div>
        <div className="legal-wave legal-wave-3"></div>
        <div className="legal-wave legal-wave-4"></div>
      </div>
      
      <div className="legal-container">
        <header className="legal-header">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: August 17, 2025</p>
        </header>

        <div className="legal-content">
          <section>
            <h2>1. Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul>
              <li>Register for an account</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us through our contact forms</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            <p>
              This information may include your name, email address, phone number, and any other 
              information you choose to provide.
            </p>

            <h3>Usage Information</h3>
            <p>
              We automatically collect certain information when you visit our website, including:
            </p>
            <ul>
              <li>IP address and device identifiers</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section>
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Communicate with you about products, services, and promotions</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Personalize and improve your experience</li>
              <li>Protect against fraud and other illegal activities</li>
            </ul>
          </section>

          <section>
            <h2>3. Information Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. 
              We may share your information in the following circumstances:
            </p>
            <ul>
              <li><strong>With your consent:</strong> We may share your information with your explicit consent</li>
              <li><strong>Service providers:</strong> We may share information with trusted third-party service providers</li>
              <li><strong>Legal requirements:</strong> We may disclose information if required by law or legal process</li>
              <li><strong>Business transfers:</strong> Information may be transferred in connection with a merger or acquisition</li>
              <li><strong>Protection of rights:</strong> We may share information to protect our rights, property, or safety</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or 
              destruction. However, no method of transmission over the internet or electronic 
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2>5. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to collect and track information 
              and to improve our services. You can control the use of cookies through your 
              browser settings, but disabling cookies may affect the functionality of our website.
            </p>
            <h3>Types of Cookies We Use:</h3>
            <ul>
              <li><strong>Essential cookies:</strong> Necessary for the website to function properly</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors use our website</li>
              <li><strong>Functionality cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
            </ul>
          </section>

          <section>
            <h2>6. Your Privacy Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your information in a portable format</li>
              <li><strong>Objection:</strong> Object to the processing of your information</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section>
            <h2>7. Children's Privacy</h2>
            <p>
              Our services are not intended for children under the age of 13. We do not 
              knowingly collect personal information from children under 13. If we become 
              aware that we have collected personal information from a child under 13, 
              we will take steps to delete such information.
            </p>
          </section>

          <section>
            <h2>8. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than 
              your country of residence. These countries may have different data protection 
              laws. We ensure appropriate safeguards are in place to protect your information.
            </p>
          </section>

          <section>
            <h2>9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of 
              any changes by posting the new Privacy Policy on this page and updating the 
              "Last updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section>
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, 
              please contact us at:
            </p>
            <div className="contact-info">
              <p>Email: privacy@yourcompany.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Main Street, City, State, ZIP Code</p>
            </div>
          </section>
        </div>

        <div className="legal-footer">
          <button className="back-btn" onClick={() => window.history.back()}>
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}
