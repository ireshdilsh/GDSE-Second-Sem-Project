import React from 'react';
import '../styles/LegalPages.css';

export default function TermsAndConditions() {
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
          <h1>Terms and Conditions</h1>
          <p className="last-updated">Last updated: August 17, 2025</p>
        </header>

        <div className="legal-content">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please 
              do not use this service.
            </p>
          </section>

          <section>
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on our website 
              for personal, non-commercial transitory viewing only. This is the grant of a license, 
              not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
              <li>attempt to decompile or reverse engineer any software contained on our website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
            <p>
              This license shall automatically terminate if you violate any of these restrictions 
              and may be terminated by us at any time. Upon terminating your viewing of these 
              materials or upon the termination of this license, you must destroy any downloaded 
              materials in your possession whether in electronic or printed format.
            </p>
          </section>

          <section>
            <h2>3. Disclaimer</h2>
            <p>
              The materials on our website are provided on an 'as is' basis. To the fullest extent 
              permitted by law, this Company excludes all representations, warranties, conditions, 
              and terms (whether express or implied) that may apply to our website or any content 
              on it.
            </p>
          </section>

          <section>
            <h2>4. Limitations</h2>
            <p>
              In no event shall our company or its suppliers be liable for any damages (including, 
              without limitation, damages for loss of data or profit, or due to business interruption) 
              arising out of the use or inability to use the materials on our website, even if we or 
              our authorized representative has been notified orally or in writing of the possibility 
              of such damage. Because some jurisdictions do not allow limitations on implied warranties, 
              or limitations of liability for consequential or incidental damages, these limitations 
              may not apply to you.
            </p>
          </section>

          <section>
            <h2>5. Accuracy of Materials</h2>
            <p>
              The materials appearing on our website could include technical, typographical, or 
              photographic errors. The Company does not warrant that any of the materials on its 
              website are accurate, complete, or current. The Company may make changes to the 
              materials contained on its website at any time without notice. However, the Company 
              does not make any commitment to update the materials.
            </p>
          </section>

          <section>
            <h2>6. Links</h2>
            <p>
              Our company has not reviewed all of the sites linked to our website and is not 
              responsible for the contents of any such linked site. The inclusion of any link 
              does not imply endorsement by our company of the site. Use of any such linked 
              website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2>7. Modifications</h2>
            <p>
              Our company may revise these terms of service for its website at any time without notice. 
              By using this website, you are agreeing to be bound by the then current version of these 
              terms of service.
            </p>
          </section>

          <section>
            <h2>8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws 
              and you irrevocably submit to the exclusive jurisdiction of the courts in that state 
              or location.
            </p>
          </section>

          <section>
            <h2>9. Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="contact-info">
              <p>Email: support@yourcompany.com</p>
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
