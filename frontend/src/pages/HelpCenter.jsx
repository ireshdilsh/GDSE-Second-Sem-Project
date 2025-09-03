import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/logo.png"
import '../styles/HelpCenter.css'

export default function HelpCenter() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedFaq, setExpandedFaq] = useState(null)

  // Navigation handlers
  const handleHomeClick = () => {
    navigate('/');
  };

  const handlePrivacyPolicyClick = () => {
    navigate('/privacy');
  };

  const categories = [
    { id: 'all', name: 'All Topics', icon: '📚' },
    { id: 'account', name: 'Account & Billing', icon: '👤' },
    { id: 'courses', name: 'Courses & Learning', icon: '📖' },
    { id: 'technical', name: 'Technical Support', icon: '🔧' },
    { id: 'certificates', name: 'Certificates', icon: '🏆' },
    { id: 'mobile', name: 'Mobile App', icon: '📱' }
  ]

  const faqs = [
    {
      id: 1,
      category: 'account',
      question: 'How do I create an account on EduSpark?',
      answer: 'To create an account, click the "Register" button in the top navigation, fill in your details including name, email, and password, then verify your email address through the confirmation link we send you.'
    },
    {
      id: 2,
      category: 'courses',
      question: 'How do I enroll in a course?',
      answer: 'Browse our course catalog, click on the course you\'re interested in, review the course details and curriculum, then click "Enroll Now". You can pay securely through our payment gateway.'
    },
    {
      id: 3,
      category: 'account',
      question: 'How do I reset my password?',
      answer: 'Click "Forgot Password" on the sign-in page, enter your email address, and we\'ll send you a password reset link. Click the link in your email and create a new password.'
    },
    {
      id: 4,
      category: 'technical',
      question: 'Why can\'t I access my course videos?',
      answer: 'Ensure you have a stable internet connection and are logged into your account. Try refreshing the page or clearing your browser cache. If issues persist, contact our technical support team.'
    },
    {
      id: 5,
      category: 'certificates',
      question: 'How do I get my course certificate?',
      answer: 'Complete all course modules and pass the final assessment with a score of 70% or higher. Your certificate will be automatically generated and available in your dashboard within 24 hours.'
    },
    {
      id: 6,
      category: 'courses',
      question: 'Can I access courses on mobile devices?',
      answer: 'Yes! All our courses are optimized for mobile viewing. You can also download our mobile app from the App Store or Google Play for an enhanced learning experience.'
    },
    {
      id: 7,
      category: 'account',
      question: 'How do I cancel my subscription?',
      answer: 'Go to Account Settings > Subscription Management, click "Cancel Subscription", and follow the prompts. You\'ll retain access until your current billing period ends.'
    },
    {
      id: 8,
      category: 'technical',
      question: 'What browsers are supported?',
      answer: 'EduSpark works best on the latest versions of Chrome, Firefox, Safari, and Edge. For the best experience, ensure JavaScript is enabled and your browser is up to date.'
    }
  ]

  const guides = [
    {
      id: 1,
      title: 'Getting Started with EduSpark',
      description: 'A complete guide to setting up your account and taking your first course',
      icon: '🚀',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Maximizing Your Learning Experience',
      description: 'Tips and tricks to get the most out of your online learning journey',
      icon: '💡',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Understanding Certificates and Progress',
      description: 'Learn how our certification system works and track your progress',
      icon: '📊',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Troubleshooting Common Issues',
      description: 'Quick solutions to the most common technical problems',
      icon: '🔍',
      readTime: '10 min read'
    }
  ]

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs.filter(faq => 
        faq.category === selectedCategory &&
        (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
         faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
      )

  const toggleFaq = (faqId) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId)
  }

  return (
    <div className="help-center">
      {/* Hero Section */}
      <section className="help-hero">
        <div className="help-hero-content">
          <h1>How can we help you today?</h1>
          <p>Search our knowledge base or browse categories to find answers</p>
          
          <div className="search-container">
            <div className="search-box">
              <img src="https://img.icons8.com/?size=100&id=132&format=png&color=6D6C80" alt="search" />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="help-stats">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon">📚</div>
            <div className="stat-number">500+</div>
            <div className="stat-label">Help Articles</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">❓</div>
            <div className="stat-number">98%</div>
            <div className="stat-label">Issues Resolved</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⚡</div>
            <div className="stat-number">&lt; 2hrs</div>
            <div className="stat-label">Avg Response Time</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="help-categories">
        <div className="categories-container">
          <h2>Browse by Category</h2>
          <div className="categories-grid">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-card ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="category-icon">{category.icon}</div>
                <h3>{category.name}</h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="help-guides">
        <div className="guides-container">
          <h2>Popular Guides</h2>
          <div className="guides-grid">
            {guides.map(guide => (
              <div key={guide.id} className="guide-card">
                <div className="guide-icon">{guide.icon}</div>
                <div className="guide-content">
                  <h3>{guide.title}</h3>
                  <p>{guide.description}</p>
                  <div className="guide-meta">
                    <span className="read-time">{guide.readTime}</span>
                    <button className="guide-btn">
                      Read Guide
                      <img src="https://img.icons8.com/?size=100&id=VjUxG2ZHfWSs&format=png&color=6366f1" alt="arrow" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="help-faqs">
        <div className="faqs-container">
          <h2>Frequently Asked Questions</h2>
          <div className="faqs-list">
            {filteredFaqs.map(faq => (
              <div key={faq.id} className={`faq-item ${expandedFaq === faq.id ? 'expanded' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span>{faq.question}</span>
                  <img 
                    src="https://img.icons8.com/?size=100&id=2760&format=png&color=6366f1" 
                    alt="expand"
                    className="expand-icon"
                  />
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="help-contact">
        <div className="contact-container">
          <div className="contact-content">
            <h2 style={{color: '#fcfcfc'}}>Still need help?</h2>
            <p style={{color: '#fcfcfc',fontSize: '16px'}}>Can't find what you're looking for? Our support team is here to help you 24/7</p>

            <div className="contact-options">
              <div className="contact-card">
                <div className="contact-icon">💬</div>
                <h3>Live Chat</h3>
                <p>Get instant help from our support team</p>
                <button className="contact-btn primary">Start Chat</button>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">📧</div>
                <h3>Email Support</h3>
                <p>Send us an email and we'll respond within 2 hours</p>
                <button className="contact-btn secondary">Send Email</button>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">📞</div>
                <h3>Phone Support</h3>
                <p>Speak directly with our support specialists</p>
                <button className="contact-btn secondary">Call Now</button>
              </div>
            </div>
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
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#" onClick={handlePrivacyPolicyClick}>Privacy Policy</a></li>
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
