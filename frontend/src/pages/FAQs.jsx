import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import '../styles/LegalPages.css'

export default function FAQs() {
  const navigate = useNavigate();
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Navigation handlers
  const handleHomeClick = () => {
    navigate('/');
  };

  const handleHelpCenterClick = () => {
    navigate('/help');
  };

  const toggleFaq = (faqId) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId)
  }

  const categories = [
    { id: 'all', name: 'All Questions', icon: '❓' },
    { id: 'account', name: 'Account & Billing', icon: '👤' },
    { id: 'courses', name: 'Courses & Learning', icon: '📚' },
    { id: 'technical', name: 'Technical Issues', icon: '🔧' },
    { id: 'certificates', name: 'Certificates', icon: '🏆' },
    { id: 'refunds', name: 'Refunds & Payments', icon: '💰' }
  ]

  const faqs = [
    {
      id: 1,
      category: 'account',
      question: 'How do I create an account on EduSpark?',
      answer: `Creating an account on EduSpark is simple and free! Follow these steps:

      1. Click the "Sign Up" button in the top navigation
      2. Enter your full name, email address, and create a secure password
      3. Verify your email address by clicking the link we send to your inbox
      4. Complete your profile by adding additional information (optional)
      5. Start browsing and enrolling in courses!

      You can also sign up using your Google or Facebook account for faster registration.`
    },
    {
      id: 2,
      category: 'courses',
      question: 'Do I get lifetime access to courses?',
      answer: `Yes! Most courses on EduSpark come with lifetime access, which means:

      • You can access the course content anytime, anywhere
      • All future updates and additional content are included
      • You can learn at your own pace without time restrictions
      • Access works across all devices (desktop, tablet, mobile)
      • Download videos for offline viewing (where available)

      Note: Some subscription-based courses or live workshops may have different access terms, which will be clearly indicated before purchase.`
    },
    {
      id: 3,
      category: 'certificates',
      question: 'How do I get my course certificate?',
      answer: `Earning your course certificate is straightforward:

      1. Complete all course lectures and materials (100% completion required)
      2. Pass all quizzes and assignments with the minimum required score
      3. Complete the final assessment if applicable
      4. Your certificate will be automatically generated within 24 hours
      5. Download your certificate from your dashboard

      Certificates include:
      • Your name and course completion date
      • Course title and duration
      • EduSpark verification seal
      • Unique certificate ID for verification`
    },
    {
      id: 4,
      category: 'technical',
      question: 'Why can\'t I access my course videos?',
      answer: `If you're having trouble accessing course videos, try these solutions:

      **Common fixes:**
      • Check your internet connection stability
      • Clear your browser cache and cookies
      • Disable browser extensions that might block videos
      • Try a different browser or device
      • Ensure you're logged into your account

      **Still not working?**
      • Contact our technical support team with details about your issue
      • Include information about your browser, device, and error messages
      • Our team typically responds within 2 hours

      We support all modern browsers and regularly test video compatibility.`
    },
    {
      id: 5,
      category: 'refunds',
      question: 'What is your refund policy?',
      answer: `We offer a comprehensive 30-day money-back guarantee:

      **Full Refund Conditions:**
      • Request within 30 days of purchase
      • Less than 30% of course content consumed
      • No certificate downloaded
      • Account in good standing

      **Refund Process:**
      • Submit request through your account dashboard
      • Refunds processed within 2-3 business days
      • Money returned to original payment method
      • Receive confirmation email when processed

      **Non-refundable items:**
      • Courses purchased over 30 days ago
      • Courses with >30% completion
      • Gift card purchases`
    },
    {
      id: 6,
      category: 'account',
      question: 'How do I reset my password?',
      answer: `Forgot your password? No problem! Here's how to reset it:

      1. Go to the sign-in page and click "Forgot Password?"
      2. Enter the email address associated with your account
      3. Check your email for a password reset link (check spam folder too)
      4. Click the link and create a new strong password
      5. Log in with your new password

      **Password requirements:**
      • At least 8 characters long
      • Include uppercase and lowercase letters
      • Include at least one number
      • Special characters recommended for security

      If you don't receive the reset email, contact our support team.`
    },
    {
      id: 7,
      category: 'courses',
      question: 'Can I download courses for offline viewing?',
      answer: `Yes! Many of our courses support offline viewing through our mobile app:

      **Mobile App Features:**
      • Download individual lectures or entire courses
      • Watch offline without internet connection
      • Automatic sync when you're back online
      • Progress tracking works offline too

      **Download Limitations:**
      • Available only through mobile apps (iOS/Android)
      • Some courses may not support downloads due to licensing
      • Downloaded content expires if subscription lapses
      • Maximum storage depends on your device

      **Getting Started:**
      1. Download the EduSpark mobile app
      2. Log into your account
      3. Navigate to your course and tap the download icon
      4. Choose video quality to manage storage space`
    },
    {
      id: 8,
      category: 'technical',
      question: 'What are the system requirements?',
      answer: `EduSpark works on virtually any modern device with internet access:

      **Web Browsers (Recommended):**
      • Google Chrome (latest version)
      • Mozilla Firefox (latest version)
      • Safari (latest version)
      • Microsoft Edge (latest version)

      **Internet Connection:**
      • Minimum: 2 Mbps for standard quality
      • Recommended: 5 Mbps for HD quality
      • Mobile data friendly with quality adjustment

      **Mobile Apps:**
      • iOS 12.0 or later (iPhone/iPad)
      • Android 6.0 or later
      • Available on Google Play and App Store

      **Hardware Requirements:**
      • Any device capable of running modern browsers
      • Minimum 2GB RAM recommended
      • Speakers/headphones for audio content`
    },
    {
      id: 9,
      category: 'certificates',
      question: 'Are EduSpark certificates recognized by employers?',
      answer: `EduSpark certificates demonstrate your commitment to learning and skill development:

      **Certificate Value:**
      • Shows completion of structured learning programs
      • Demonstrates practical skills in specific areas
      • Includes detailed curriculum information
      • Verifiable through our certificate verification system

      **Industry Recognition:**
      • Many employers value online learning certificates
      • Particularly valuable when combined with practical experience
      • Great for showcasing continuous learning mindset
      • Useful for career advancement and job applications

      **Maximizing Certificate Value:**
      • Include in your LinkedIn profile and resume
      • Combine with portfolio projects
      • Highlight specific skills learned
      • Continue learning to build comprehensive skill sets

      While not accredited like university degrees, our certificates represent real skills and knowledge.`
    },
    {
      id: 10,
      category: 'account',
      question: 'Can I change my email address?',
      answer: `Yes, you can update your email address in your account settings:

      **To Change Your Email:**
      1. Log into your EduSpark account
      2. Go to Account Settings or Profile
      3. Click "Edit" next to your email address
      4. Enter your new email address
      5. Verify the new email address through confirmation link
      6. Your account will be updated once verified

      **Important Notes:**
      • You'll need access to both old and new email addresses during the process
      • All future communications will go to the new email
      • Your course access and progress remain unchanged
      • Login credentials will use the new email address

      **Need Help?**
      If you no longer have access to your old email, contact our support team with:
      • Account details and course purchase information
      • Government-issued ID for verification
      • New email address you want to use`
    },
    {
      id: 11,
      category: 'courses',
      question: 'How long are the courses?',
      answer: `Course lengths vary depending on the subject and depth of content:

      **Typical Course Lengths:**
      • Short courses: 2-5 hours (skill-focused)
      • Standard courses: 8-20 hours (comprehensive topics)
      • Masterclasses: 20-50 hours (extensive coverage)
      • Specialization series: 100+ hours (multiple courses)

      **Course Information Includes:**
      • Total video content duration
      • Estimated completion time with practice
      • Number of lectures and sections
      • Level of difficulty (beginner/intermediate/advanced)

      **Learning at Your Pace:**
      • All courses have lifetime access
      • Progress is automatically saved
      • Learn in multiple sessions
      • Speed up or slow down playback as needed

      Course duration is clearly displayed on each course page before purchase.`
    },
    {
      id: 12,
      category: 'refunds',
      question: 'How long does it take to process a refund?',
      answer: `Refund processing times depend on your payment method and financial institution:

      **Our Processing Time:**
      • Refund approval: 1-3 business days
      • Refund initiated: Same day after approval

      **Payment Method Processing:**
      • Credit/Debit Cards: 5-10 business days
      • PayPal: 1-3 business days (usually instant)
      • Bank transfers: 3-7 business days
      • International payments: Up to 15 business days

      **Refund Status Updates:**
      • Email confirmation when request is submitted
      • Notification when refund is approved
      • Final confirmation when payment is processed

      **If Your Refund is Delayed:**
      • Check with your bank or payment provider
      • Contact our support team with your refund reference number
      • We can provide processing confirmation for bank inquiries

      Most refunds appear within the expected timeframe, but contact us if you have concerns.`
    }
  ]

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="faqs-page">
      {/* Hero Section */}
      <section className="faqs-hero">
        <div className="faqs-hero-content">
          <div className="hero-badge">
            <span className="badge-icon">❓</span>
            <span>Help Center</span>
          </div>
          <h1 className="hero-title">Frequently Asked Questions</h1>
          <p className="hero-description">
            Find quick answers to the most common questions about EduSpark. 
            Can't find what you're looking for? Contact our support team.
          </p>
          
          {/* Search Box */}
          <div className="search-container">
            <div className="search-box">
              <input 
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <img src="https://img.icons8.com/?size=100&id=132&format=png&color=6D6C80" 
                   alt="search" className="search-icon" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="faqs-categories">
        <div className="categories-container">
          <h2>Browse by Category</h2>
          <div className="categories-grid">
            {categories.map(category => (
              <div 
                key={category.id}
                className={`category-card ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-name">{category.name}</h3>
                <span className="category-count">
                  {category.id === 'all' 
                    ? faqs.length 
                    : faqs.filter(faq => faq.category === category.id).length} questions
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faqs-content">
        <div className="content-container">
          <div className="content-header">
            <h2>
              {activeCategory === 'all' 
                ? 'All Questions' 
                : categories.find(cat => cat.id === activeCategory)?.name}
            </h2>
            <p>{filteredFaqs.length} questions found</p>
          </div>
          
          <div className="faqs-list">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map(faq => (
                <div key={faq.id} className={`faq-item ${expandedFaq === faq.id ? 'expanded' : ''}`}>
                  <div 
                    className="faq-question"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <h3>{faq.question}</h3>
                    <span className="expand-icon">
                      {expandedFaq === faq.id ? '−' : '+'}
                    </span>
                  </div>
                  {expandedFaq === faq.id && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="no-results">
                <div className="no-results-icon">🔍</div>
                <h3>No questions found</h3>
                <p>Try adjusting your search terms or browse a different category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="faqs-stats">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">❓</div>
              <div className="stat-number">500+</div>
              <div className="stat-label">Questions Answered</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⚡</div>
              <div className="stat-number">&lt; 2 min</div>
              <div className="stat-label">Average Response Time</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">😊</div>
              <div className="stat-number">98%</div>
              <div className="stat-label">Customer Satisfaction</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🕒</div>
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="faqs-contact">
        <div className="contact-container">
          <div className="contact-content">
            <h2>Still Need Help?</h2>
            <p>Can't find the answer you're looking for? Our support team is here to help you succeed.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">💬</div>
                <h3>Live Chat</h3>
                <p>Get instant help from our support team</p>
                <button className="contact-btn">Start Chat</button>
              </div>
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <h3>Email Support</h3>
                <p>Send us your questions anytime</p>
                <button className="contact-btn">Send Email</button>
              </div>
              <div className="contact-method">
                <div className="method-icon">📚</div>
                <h3>Help Center</h3>
                <p>Browse our comprehensive guides</p>
                <button className="contact-btn" onClick={handleHelpCenterClick}>Visit Help Center</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="faqs-footer">
        <div className="footer-content">
          <h2>Ready to Start Learning?</h2>
          <p>Join thousands of students and start your educational journey today</p>
          <div className="footer-actions">
            <button className="cta-primary">
              Browse Courses
              <img src="https://img.icons8.com/?size=100&id=VjUxG2ZHfWSs&format=png&color=ffffff" alt="arrow" />
            </button>
            <button className="cta-secondary" onClick={handleHomeClick}>Back to Home</button>
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
