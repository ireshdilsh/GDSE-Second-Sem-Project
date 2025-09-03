import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/logo.png"
import '../styles/PrivacyPolicy.css'

export default function PrivacyPolicy() {
  const navigate = useNavigate();
  const [lastUpdated] = useState('September 3, 2025')
  const [expandedSection, setExpandedSection] = useState(null)

  // Navigation handlers
  const handleHomeClick = () => {
    navigate('/');
  };

  const handleHelpCenterClick = () => {
    navigate('/help');
  };

  const sections = [
    {
      id: 1,
      title: 'Information We Collect',
      icon: '📋',
      content: `We collect information you provide directly to us, such as when you create an account, enroll in courses, or contact us for support. This may include:
      • Personal Information: Name, email address, phone number, and profile information
      • Payment Information: Credit card details and billing information (processed securely through third-party providers)
      • Educational Data: Course progress, quiz results, certificates earned, and learning preferences
      • Communication Data: Messages you send us and feedback you provide
      • Technical Information: IP address, browser type, device information, and usage analytics`
    },
    {
      id: 2,
      title: 'How We Use Your Information',
      icon: '🔄',
      content: `We use your information to provide, maintain, and improve our services, including:
      • Account Management: Creating and managing your user account and profile
      • Course Delivery: Providing access to courses, tracking progress, and issuing certificates
      • Communication: Sending important updates, course notifications, and marketing communications
      • Payment Processing: Processing payments and maintaining billing records
      • Customer Support: Responding to your inquiries and providing technical assistance
      • Platform Improvement: Analyzing usage patterns to enhance user experience and develop new features
      • Legal Compliance: Meeting legal obligations and protecting our rights and those of our users`
    },
    {
      id: 3,
      title: 'Information Sharing and Disclosure',
      icon: '🤝',
      content: `We do not sell or rent your personal information to third parties. We may share your information only in the following circumstances:
      • Service Providers: With trusted third-party vendors who help us operate our platform (payment processors, email services, analytics providers)
      • Instructors: Course instructors may see student progress and engagement data for their courses
      • Legal Requirements: When required by law, legal process, or to protect the rights and safety of EduSpark and our users
      • Business Transfers: In connection with any merger, acquisition, or sale of assets
      • Consent: With your explicit consent for any other purpose`
    },
    {
      id: 4,
      title: 'Data Security',
      icon: '🔒',
      content: `We implement robust security measures to protect your personal information:
      • Encryption: All sensitive data is encrypted in transit and at rest using industry-standard protocols
      • Access Controls: Limited access to personal information on a need-to-know basis
      • Regular Audits: Periodic security assessments and vulnerability testing
      • Secure Infrastructure: Hosting on secure, compliant cloud platforms
      • Employee Training: Regular security training for all staff members
      • Incident Response: Established procedures for responding to any security incidents
      However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`
    },
    {
      id: 5,
      title: 'Your Rights and Choices',
      icon: '⚖️',
      content: `You have several rights regarding your personal information:
      • Access: Request a copy of the personal information we hold about you
      • Correction: Update or correct inaccurate personal information
      • Deletion: Request deletion of your personal information (subject to certain exceptions)
      • Portability: Request a copy of your data in a machine-readable format
      • Opt-out: Unsubscribe from marketing communications at any time
      • Account Closure: Delete your account and associated data
      To exercise these rights, please contact us at privacy@eduspark.com or through your account settings.`
    },
    {
      id: 6,
      title: 'Cookies and Tracking Technologies',
      icon: '🍪',
      content: `We use cookies and similar technologies to enhance your experience:
      • Essential Cookies: Required for basic platform functionality and security
      • Analytics Cookies: Help us understand how you use our platform to improve it
      • Preference Cookies: Remember your settings and preferences
      • Marketing Cookies: Deliver relevant advertisements and measure campaign effectiveness
      You can control cookie preferences through your browser settings. Note that disabling certain cookies may affect platform functionality.`
    },
    {
      id: 7,
      title: 'International Data Transfers',
      icon: '🌍',
      content: `EduSpark operates globally, and your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place:
      • Adequacy Decisions: Transfers to countries with adequate data protection laws
      • Standard Contractual Clauses: Legal agreements ensuring proper data protection
      • Certification Programs: Participation in recognized privacy frameworks
      • Your Consent: Explicit consent for certain international transfers
      We are committed to protecting your information regardless of where it is processed.`
    },
    {
      id: 8,
      title: 'Children\'s Privacy',
      icon: '👶',
      content: `EduSpark is committed to protecting children's privacy:
      • Age Restrictions: Our platform is intended for users 13 years and older
      • Parental Consent: Users under 18 require parental consent to create accounts
      • Limited Data Collection: We collect minimal information from users under 18
      • Special Protections: Additional safeguards for educational data from minors
      • COPPA Compliance: Full compliance with the Children's Online Privacy Protection Act
      If we become aware that we have collected information from a child under 13 without proper consent, we will delete it immediately.`
    }
  ]

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  return (
    <div className="privacy-policy">
      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="privacy-hero-content">
          <div className="hero-badge">
            <span className="badge-icon">🔐</span>
            <span>Your Privacy Matters</span>
          </div>
          <h1>Privacy Policy</h1>
          <p id='description'>
            At EduSpark, we are committed to protecting your privacy and ensuring the security 
            of your personal information. This policy explains how we collect, use, and safeguard your data.
          </p>
          <div className="last-updated">
            <span className="update-icon">📅</span>
            <span>Last Updated: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="privacy-overview">
        <div className="overview-container">
          <h2>Privacy at a Glance</h2>
          <div className="overview-grid">
            <div className="overview-card">
              <div className="card-icon">🛡️</div>
              <h3>Data Protection</h3>
              <p>We use industry-standard encryption and security measures to protect your information</p>
            </div>
            <div className="overview-card">
              <div className="card-icon">🎯</div>
              <h3>Purpose Limitation</h3>
              <p>We only collect and use data necessary to provide you with the best learning experience</p>
            </div>
            <div className="overview-card">
              <div className="card-icon">⚡</div>
              <h3>Transparency</h3>
              <p>We're transparent about what data we collect, how we use it, and who we share it with</p>
            </div>
            <div className="overview-card">
              <div className="card-icon">👤</div>
              <h3>Your Control</h3>
              <p>You have full control over your data with easy access, correction, and deletion options</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="privacy-content">
        <div className="content-container">
          <div className="content-header">
            <h2>Privacy Policy Details</h2>
            <p>Click on any section below to learn more about our privacy practices</p>
          </div>
          
          <div className="sections-list">
            {sections.map(section => (
              <div key={section.id} className={`section-item ${expandedSection === section.id ? 'expanded' : ''}`}>
                <button 
                  className="section-header"
                  onClick={() => toggleSection(section.id)}
                >
                  <div className="section-title">
                    <span className="section-icon">{section.icon}</span>
                    <span>{section.title}</span>
                  </div>
                  <img 
                    src="https://img.icons8.com/?size=100&id=2760&format=png&color=6366f1" 
                    alt="expand"
                    className="expand-icon"
                  />
                </button>
                <div className="section-content">
                  <div className="content-text">
                    {section.content.split('•').map((item, index) => {
                      if (index === 0) {
                        return <p key={index}>{item.trim()}</p>
                      }
                      return item.trim() ? (
                        <div key={index} className="bullet-point">
                          <span className="bullet">•</span>
                          <span>{item.trim()}</span>
                        </div>
                      ) : null
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="privacy-contact">
        <div className="contact-container">
          <div className="contact-content">
            <h2>Questions About Privacy?</h2>
            <p>We're here to help you understand how we protect your privacy and data</p>
            
            <div className="contact-grid">
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <h3>Email Us</h3>
                <p>privacy@eduspark.com</p>
                <span className="response-time">Response within 24 hours</span>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">📞</div>
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
                <span className="response-time">Available 24/7</span>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">📍</div>
                <h3>Visit Us</h3>
                <p>123 Education Street<br/>San Francisco, CA 94105</p>
                <span className="response-time">Mon-Fri 9AM-5PM</span>
              </div>
            </div>
            
            <div className="policy-links">
              <h3>Related Policies</h3>
              <div className="links-grid">
                <a href="/terms" className="policy-link">
                  <span className="link-icon">📜</span>
                  <span>Terms of Service</span>
                  <img src="https://img.icons8.com/?size=100&id=VjUxG2ZHfWSs&format=png&color=6366f1" alt="arrow" />
                </a>
                <a href="/cookies" className="policy-link">
                  <span className="link-icon">🍪</span>
                  <span>Cookie Policy</span>
                  <img src="https://img.icons8.com/?size=100&id=VjUxG2ZHfWSs&format=png&color=6366f1" alt="arrow" />
                </a>
                <a href="/security" className="policy-link">
                  <span className="link-icon">🔐</span>
                  <span>Security Policy</span>
                  <img src="https://img.icons8.com/?size=100&id=VjUxG2ZHfWSs&format=png&color=6366f1" alt="arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="privacy-footer">
        <div className="footer-content">
          <h2>Ready to Start Learning?</h2>
          <p>Join thousands of learners who trust EduSpark with their educational journey</p>
          <div className="footer-actions">
            <button className="cta-primary">
              Get Started Today
              <img src="https://img.icons8.com/?size=100&id=VjUxG2ZHfWSs&format=png&color=ffffff" alt="arrow" />
            </button>
            <button className="cta-secondary">Browse Courses</button>
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
              <p className="footer-description" style={{fontSize: '14px'}}>
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
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Refund Policy</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Newsletter</h4>
              <p className="newsletter-text">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
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
                <a href="#">Privacy</a>
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
