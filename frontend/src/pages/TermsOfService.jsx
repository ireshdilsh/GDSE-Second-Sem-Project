import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/logo.png"
import '../styles/LegalPages.css'

export default function TermsOfService() {
  const navigate = useNavigate();
  const [lastUpdated] = useState('September 4, 2025')
  const [expandedSection, setExpandedSection] = useState(null)

  // Navigation handlers
  const handleHomeClick = () => {
    navigate('/');
  };

  const handleHelpCenterClick = () => {
    navigate('/help');
  };

  const handlePrivacyPolicyClick = () => {
    navigate('/privacy');
  };

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  const sections = [
    {
      id: 1,
      title: 'Acceptance of Terms',
      icon: '📋',
      content: `By accessing and using EduSpark's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between you and EduSpark.
      
      • You must be at least 18 years old to use our services
      • If you are under 18, you must have parental consent
      • You agree to provide accurate and complete information
      • You are responsible for maintaining the confidentiality of your account
      • You agree to notify us immediately of any unauthorized use of your account`
    },
    {
      id: 2,
      title: 'User Accounts and Registration',
      icon: '👤',
      content: `To access certain features of our platform, you must create an account. You are responsible for maintaining the security and confidentiality of your account information.
      
      • Account Information: You must provide accurate, current, and complete information
      • Account Security: You are responsible for all activities that occur under your account
      • Account Termination: We reserve the right to suspend or terminate accounts that violate our terms
      • Multiple Accounts: Users are not permitted to create multiple accounts
      • Account Transfer: Accounts are non-transferable and cannot be shared with others`
    },
    {
      id: 3,
      title: 'Course Access and Usage',
      icon: '📚',
      content: `EduSpark grants you a limited, non-exclusive, non-transferable license to access and use our courses for personal, non-commercial educational purposes only.
      
      • Lifetime Access: Most courses come with lifetime access unless otherwise specified
      • Personal Use Only: Course content is for your personal use and cannot be shared
      • Download Restrictions: Downloaded content is for offline viewing only
      • Course Updates: We may update course content at our discretion
      • Content Removal: We reserve the right to remove courses from the platform
      • Geographic Restrictions: Some content may not be available in certain regions`
    },
    {
      id: 4,
      title: 'Payment and Billing',
      icon: '💳',
      content: `All payments are processed securely through our trusted payment providers. By making a purchase, you agree to our payment terms and policies.
      
      • Payment Methods: We accept major credit cards, PayPal, and other approved payment methods
      • Pricing: Course prices are subject to change without prior notice
      • Taxes: You are responsible for any applicable taxes
      • Currency: Prices are displayed in USD unless otherwise specified
      • Billing Disputes: Contact our support team for any billing inquiries
      • Failed Payments: Access may be suspended for failed or disputed payments`
    },
    {
      id: 5,
      title: 'Intellectual Property Rights',
      icon: '©️',
      content: `All course content, including videos, text, images, and other materials, are protected by intellectual property laws and belong to EduSpark or our content partners.
      
      • Copyright Protection: All content is protected by copyright and other intellectual property laws
      • Limited License: You receive only a limited license to access and use the content
      • Prohibited Uses: You may not reproduce, distribute, or create derivative works
      • User-Generated Content: Content you upload remains your property but grants us usage rights
      • DMCA Compliance: We comply with the Digital Millennium Copyright Act
      • Trademark Rights: EduSpark trademarks and logos are our exclusive property`
    },
    {
      id: 6,
      title: 'User Conduct and Prohibited Activities',
      icon: '🚫',
      content: `Users must conduct themselves appropriately and refrain from activities that violate our community standards or applicable laws.
      
      • Prohibited Conduct: No harassment, spam, or inappropriate behavior
      • Content Sharing: Do not share course content outside the platform
      • Account Misuse: Do not use your account for unauthorized commercial purposes
      • System Integrity: Do not attempt to hack, disrupt, or damage our systems
      • False Information: Do not provide false or misleading information
      • Legal Compliance: You must comply with all applicable laws and regulations`
    },
    {
      id: 7,
      title: 'Refunds and Cancellations',
      icon: '💰',
      content: `We offer a 30-day money-back guarantee on most courses. Refund eligibility depends on various factors and our refund policy terms.
      
      • 30-Day Guarantee: Request refunds within 30 days of purchase
      • Eligibility Criteria: Refunds are subject to our refund policy conditions
      • Processing Time: Refunds typically process within 5-10 business days
      • Partial Refunds: May be available in certain circumstances
      • Bundle Courses: Special terms may apply to course bundles
      • Promotional Purchases: Different terms may apply to discounted courses`
    },
    {
      id: 8,
      title: 'Platform Modifications and Termination',
      icon: '⚙️',
      content: `EduSpark reserves the right to modify, suspend, or discontinue any aspect of our services at any time, with or without notice.
      
      • Service Changes: We may modify or discontinue services at our discretion
      • Account Termination: We may terminate accounts for terms violations
      • Data Preservation: We will make reasonable efforts to preserve your learning progress
      • Notice Period: We will provide reasonable notice for significant changes
      • Survival Clauses: Certain terms will survive account termination
      • Platform Updates: Regular updates may change functionality or features`
    }
  ]

  return (
    <div className="terms-page">
      {/* Hero Section */}
      <section className="terms-hero">
        <div className="terms-hero-content">
          <div className="hero-badge">
            <span className="badge-icon">⚖️</span>
            <span>Legal Document</span>
          </div>
          <h1 className="hero-title">Terms of Service</h1>
          <p className="hero-description">
            Please read these terms carefully before using our platform. 
            By using EduSpark, you agree to be bound by these terms and conditions.
          </p>
          <p className="last-updated">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="terms-overview">
        <div className="overview-container">
          <h2>Important Information</h2>
          <div className="overview-grid">
            <div className="overview-card">
              <div className="card-icon">📄</div>
              <h3>Legal Agreement</h3>
              <p>These terms constitute a binding legal agreement between you and EduSpark.</p>
            </div>
            <div className="overview-card">
              <div className="card-icon">🔄</div>
              <h3>Regular Updates</h3>
              <p>We may update these terms periodically. Continued use means acceptance of changes.</p>
            </div>
            <div className="overview-card">
              <div className="card-icon">📞</div>
              <h3>Questions?</h3>
              <p>Contact our legal team if you have any questions about these terms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="terms-content">
        <div className="content-container">
          <div className="content-header">
            <h2>Terms and Conditions</h2>
            <p>Click on any section below to expand and read the full terms</p>
          </div>
          
          <div className="terms-sections">
            {sections.map(section => (
              <div key={section.id} className={`section-item ${expandedSection === section.id ? 'expanded' : ''}`}>
                <div 
                  className="section-header"
                  onClick={() => toggleSection(section.id)}
                >
                  <div className="section-title">
                    <span className="section-icon">{section.icon}</span>
                    <h3>{section.title}</h3>
                  </div>
                  <span className="expand-icon">
                    {expandedSection === section.id ? '−' : '+'}
                  </span>
                </div>
                {expandedSection === section.id && (
                  <div className="section-content">
                    <p>{section.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="terms-contact">
        <div className="contact-container">
          <div className="contact-content">
            <h2>Need Legal Assistance?</h2>
            <p>If you have questions about these terms or need legal clarification, our team is here to help.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <h3>Email Support</h3>
                <p>legal@eduspark.com</p>
                <span>Response within 48 hours</span>
              </div>
              <div className="contact-method">
                <div className="method-icon">📞</div>
                <h3>Legal Hotline</h3>
                <p>+1 (555) 123-LEGAL</p>
                <span>Mon-Fri, 9 AM - 5 PM EST</span>
              </div>
              <div className="contact-method">
                <div className="method-icon">📍</div>
                <h3>Mailing Address</h3>
                <p>123 Education St, Suite 100<br />Learning City, LC 12345</p>
                <span>For formal legal notices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="terms-footer">
        <div className="footer-content">
          <h2>Ready to Start Learning?</h2>
          <p>By continuing, you agree to our Terms of Service and Privacy Policy</p>
          <div className="footer-actions">
            <button className="cta-primary">
              I Agree - Start Learning
              <img src="https://img.icons8.com/?size=100&id=VjUxG2ZHfWSs&format=png&color=ffffff" alt="arrow" />
            </button>
            <button className="cta-secondary" onClick={handlePrivacyPolicyClick}>Review Privacy Policy</button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-column">
              <div className="footer-logo">
                <img src={logo} alt="eduspark-logo" />
              </div>
              <p className="footer-description">
                Empowering learners worldwide with cutting-edge courses and expert-led training programs. Join thousands of students achieving their career goals.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <img src="https://img.icons8.com/?size=100&id=8824&format=png&color=ffffff" alt="facebook" />
                </a>
                <a href="#" className="social-link">
                  <img src="https://img.icons8.com/?size=100&id=5MQ0gPAYYx7a&format=png&color=ffffff" alt="twitter" />
                </a>
                <a href="#" className="social-link">
                  <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=ffffff" alt="linkedin" />
                </a>
                <a href="#" className="social-link">
                  <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=ffffff" alt="instagram" />
                </a>
              </div>
            </div>
            
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#" onClick={handleHomeClick}>Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Categories</h4>
              <ul>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Mobile Apps</a></li>
                <li><a href="#">Data Science</a></li>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">Digital Marketing</a></li>
                <li><a href="#">Business</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Support</h4>
              <ul>
                <li><a href="#" onClick={handleHelpCenterClick}>Help Center</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#" onClick={handlePrivacyPolicyClick}>Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Refund Policy</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Newsletter</h4>
              <p className="newsletter-text" style={{fontSize: '14px'}}>Subscribe to our newsletter for the latest updates and exclusive offers.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" className="newsletter-input" />
                <button className="newsletter-btn">
                  <img src="https://img.icons8.com/?size=100&id=VjUxG2ZHfWSs&format=png&color=fcfcfc" alt="subscribe" />
                </button>
              </div>
              <div className="contact-info">
                <div className="contact-item">
                  <img src="https://img.icons8.com/?size=100&id=9659&format=png&color=ffffff" alt="email" />
                  <span>support@eduspark.com</span>
                </div>
                <div className="contact-item">
                  <img src="https://img.icons8.com/?size=100&id=9730&format=png&color=ffffff" alt="phone" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; 2025 EduSpark. All rights reserved.</p>
              <div className="footer-bottom-links">
                <a href="#" onClick={handlePrivacyPolicyClick}>Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
