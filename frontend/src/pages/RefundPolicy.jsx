import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import '../styles/LegalPages.css'

export default function RefundPolicy() {
  const navigate = useNavigate();
  const [lastUpdated] = useState('September 4, 2025')
  const [expandedSection, setExpandedSection] = useState(null)

  // Navigation handlers
  const handleHomeClick = () => {
    navigate('/');
  };

  const handleTermsClick = () => {
    navigate('/terms');
  };

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  const sections = [
    {
      id: 1,
      title: '30-Day Money-Back Guarantee',
      icon: '💰',
      content: `We offer a comprehensive 30-day money-back guarantee on all course purchases. This gives you ample time to explore the course content and ensure it meets your learning expectations.
      
      • Full refund available within 30 days of purchase
      • No questions asked policy for qualifying refunds
      • Refund applies to individual courses and course bundles
      • Money-back guarantee starts from the date of purchase
      • You can request a refund through your account dashboard or customer support
      • Refunds are processed to the original payment method`
    },
    {
      id: 2,
      title: 'Refund Eligibility Criteria',
      icon: '✅',
      content: `To qualify for a refund, your course purchase must meet certain criteria. These guidelines help us maintain fair access to our educational content while protecting both students and instructors.
      
      • Course must be purchased within the last 30 days
      • Less than 30% of course content has been consumed
      • No certificates of completion have been downloaded
      • Account must be in good standing with no policy violations
      • Refund request must be submitted through official channels
      • Course must not have been purchased using promotional credits or gift cards (special terms apply)`
    },
    {
      id: 3,
      title: 'Non-Refundable Items',
      icon: '🚫',
      content: `Certain purchases and services are not eligible for refunds due to their nature or specific terms. Please review this list carefully before making a purchase.
      
      • Courses purchased more than 30 days ago
      • Courses where more than 30% of content has been accessed
      • Downloaded certificates and completion credentials
      • Subscription services after the first billing cycle
      • Gift card purchases and promotional credit redemptions
      • Third-party certification exam fees
      • Services marked as "final sale" at time of purchase`
    },
    {
      id: 4,
      title: 'How to Request a Refund',
      icon: '📝',
      content: `Requesting a refund is simple and can be done through multiple channels. We've streamlined the process to make it as convenient as possible for our students.
      
      • Log into your account and go to "My Learning" or "Purchase History"
      • Click on the course you want to refund and select "Request Refund"
      • Fill out the brief refund request form with your reason
      • Submit the request and you'll receive a confirmation email
      • Alternative: Contact customer support directly via email or chat
      • Include your order number and reason for refund in your request`
    },
    {
      id: 5,
      title: 'Refund Processing Times',
      icon: '⏰',
      content: `We process refund requests as quickly as possible, though processing times may vary depending on your payment method and financial institution policies.
      
      • Refund approval: Typically within 2-3 business days
      • Credit card refunds: 5-10 business days to appear on statement
      • PayPal refunds: Usually immediate once processed
      • Bank transfers: 3-7 business days depending on your bank
      • International payments: May take up to 15 business days
      • You'll receive email confirmation once the refund is processed
      • Contact support if you don't see the refund after the expected timeframe`
    },
    {
      id: 6,
      title: 'Special Circumstances',
      icon: '⭐',
      content: `We understand that sometimes special situations arise that may fall outside our standard refund policy. We review each case individually and may offer alternative solutions.
      
      • Technical issues preventing course access may qualify for extended refund periods
      • Medical emergencies or family situations are considered on a case-by-case basis
      • Course quality issues reported within 7 days receive priority review
      • Instructor-initiated course removals may result in automatic refunds
      • Subscription billing errors are resolved with appropriate refunds or credits
      • Bundle purchases may qualify for partial refunds in specific circumstances`
    },
    {
      id: 7,
      title: 'Subscription and Recurring Billing',
      icon: '🔄',
      content: `For subscription-based services, different refund terms apply. Understanding these terms helps you manage your subscription effectively and avoid unwanted charges.
      
      • Monthly subscriptions: Cancel anytime, no refund for current month
      • Annual subscriptions: Refund available within first 30 days only
      • Pro-rated refunds may be available for annual plans in special circumstances
      • Cancelled subscriptions remain active until the end of billing period
      • Auto-renewal can be disabled in your account settings
      • Refund requests for recurring charges must be made within 48 hours of billing`
    },
    {
      id: 8,
      title: 'Appeal Process',
      icon: '⚖️',
      content: `If your refund request is denied and you believe the decision was made in error, you have the right to appeal. Our appeals process ensures fair review of all refund decisions.
      
      • Submit appeal within 14 days of refund denial
      • Provide additional documentation or context for your request
      • Appeals are reviewed by senior customer service managers
      • Response to appeals typically within 5-7 business days
      • Final decisions are communicated via email with detailed explanation
      • Alternative dispute resolution options available for unresolved appeals`
    }
  ]

  return (
    <div className="refund-page">
      {/* Hero Section */}
      <section className="refund-hero">
        <div className="refund-hero-content">
          <div className="hero-badge">
            <span className="badge-icon">💰</span>
            <span>Money Back Guarantee</span>
          </div>
          <h1 className="hero-title">Refund Policy</h1>
          <p className="hero-description">
            We stand behind our courses with a 30-day money-back guarantee. 
            Learn about our refund process and how we protect your investment in education.
          </p>
          <p className="last-updated">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="refund-overview">
        <div className="overview-container">
          <h2>Refund Promise</h2>
          <div className="overview-grid">
            <div className="overview-card">
              <div className="card-icon">🛡️</div>
              <h3>30-Day Guarantee</h3>
              <p>Full refund available within 30 days of purchase, no questions asked.</p>
            </div>
            <div className="overview-card">
              <div className="card-icon">⚡</div>
              <h3>Fast Processing</h3>
              <p>Most refunds are processed within 2-3 business days of approval.</p>
            </div>
            <div className="overview-card">
              <div className="card-icon">🤝</div>
              <h3>Fair Policy</h3>
              <p>Our policy balances student protection with fair treatment of instructors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Refund Content */}
      <section className="refund-content">
        <div className="content-container">
          <div className="content-header">
            <h2>Refund Terms & Conditions</h2>
            <p>Click on any section below to learn more about our refund policy</p>
          </div>
          
          <div className="refund-sections">
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

      {/* Refund Process */}
      <section className="refund-process">
        <div className="process-container">
          <h2>How to Request a Refund</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Login to Account</h3>
                <p>Access your EduSpark account and navigate to "My Learning" section</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Select Course</h3>
                <p>Find the course you want to refund and click "Request Refund"</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Submit Request</h3>
                <p>Fill out the refund form with your reason and submit</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Get Confirmation</h3>
                <p>Receive email confirmation and refund within 5-10 business days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="refund-contact">
        <div className="contact-container">
          <div className="contact-content">
            <h2>Need Help with Refunds?</h2>
            <p>Our customer support team is ready to assist you with any refund questions or concerns.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">💬</div>
                <h3>Live Chat</h3>
                <p>Instant support available 24/7</p>
                <button className="contact-btn">Start Chat</button>
              </div>
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <h3>Email Support</h3>
                <p>refunds@eduspark.com</p>
                <button className="contact-btn">Send Email</button>
              </div>
              <div className="contact-method">
                <div className="method-icon">📞</div>
                <h3>Phone Support</h3>
                <p>+1 (555) 123-REFUND</p>
                <button className="contact-btn">Call Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="refund-footer">
        <div className="footer-content">
          <h2>Shop with Confidence</h2>
          <p>With our 30-day money-back guarantee, you can enroll in courses risk-free</p>
          <div className="footer-actions">
            <button className="cta-primary">
              Browse Courses
              <img src="https://img.icons8.com/?size=100&id=VjUxG2ZHfWSs&format=png&color=ffffff" alt="arrow" />
            </button>
            <button className="cta-secondary" onClick={handleTermsClick}>View Terms of Service</button>
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
                <li><Link to="/help">Help Center</Link></li>
                <li><a href="#">Contact Us</a></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/refund">Refund Policy</Link></li>
                <li><Link to="/faqs">FAQs</Link></li>
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
                <Link to="/privacy">Privacy</Link>
                <Link to="/terms">Terms</Link>
                <a href="#">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
