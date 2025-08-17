import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PricingPage.css';

export default function PricingPage() {
  return (
    <div className="pricing-page">
      {/* Wave Effects */}
      <div className="pricing-wave-container">
        <div className="pricing-wave pricing-wave-1"></div>
        <div className="pricing-wave pricing-wave-2"></div>
        <div className="pricing-wave pricing-wave-3"></div>
        <div className="pricing-wave pricing-wave-4"></div>
      </div>
      
      <div className="pricing-container">
        {/* Header Section */}
        <div className="pricing-header">
          <div className="section-badge">
            <span>🌿 Choose Your Plan</span>
          </div>
          <h1 className="pricing-title">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="pricing-description">
            Join thousands of urban gardeners who are growing, sharing, and building sustainable communities
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-cards">
          {/* Free Plan */}
          <div className="pricing-card free-card">
            <div className="card-badge">Free</div>
            <div className="card-header">
              <h3>Garden Starter</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">0</span>
                <span className="period">/month</span>
              </div>
              <p>Perfect for getting started with urban gardening</p>
            </div>
            
            <div className="card-features">
              <ul>
                <li><i className="fas fa-check"></i> Basic garden planning tools</li>
                <li><i className="fas fa-check"></i> Access to community forums</li>
                <li><i className="fas fa-check"></i> Plant care reminders</li>
                <li><i className="fas fa-check"></i> Up to 5 plant tracking</li>
                <li><i className="fas fa-check"></i> Basic weather alerts</li>
              </ul>
            </div>
            
            <button className="pricing-btn btn-free">
              <span>Get Started Free</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>

          {/* Pro Plan */}
          <div className="pricing-card pro-card popular">
            <div className="card-badge popular-badge">Most Popular</div>
            <div className="card-header">
              <h3>Garden Pro</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">9.99</span>
                <span className="period">/month</span>
              </div>
              <p>For serious gardeners ready to maximize their harvest</p>
            </div>
            
            <div className="card-features">
              <ul>
                <li><i className="fas fa-check"></i> Everything in Garden Starter</li>
                <li><i className="fas fa-check"></i> Advanced garden analytics</li>
                <li><i className="fas fa-check"></i> Unlimited plant tracking</li>
                <li><i className="fas fa-check"></i> Crop rotation planning</li>
                <li><i className="fas fa-check"></i> Pest & disease identification</li>
                <li><i className="fas fa-check"></i> Harvest optimization</li>
                <li><i className="fas fa-check"></i> Priority community support</li>
              </ul>
            </div>
            
            <button className="pricing-btn btn-pro">
              <span>Start Pro Trial</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>

          {/* Premium Plan */}
          <div className="pricing-card premium-card">
            <div className="card-badge">Premium</div>
            <div className="card-header">
              <h3>Garden Master</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">19.99</span>
                <span className="period">/month</span>
              </div>
              <p>Complete solution for professional urban farmers</p>
            </div>
            
            <div className="card-features">
              <ul>
                <li><i className="fas fa-check"></i> Everything in Garden Pro</li>
                <li><i className="fas fa-check"></i> AI-powered garden recommendations</li>
                <li><i className="fas fa-check"></i> Multi-location management</li>
                <li><i className="fas fa-check"></i> Advanced marketplace access</li>
                <li><i className="fas fa-check"></i> Custom reporting & insights</li>
                <li><i className="fas fa-check"></i> 1-on-1 expert consultations</li>
                <li><i className="fas fa-check"></i> Early access to new features</li>
              </ul>
            </div>
            
            <button className="pricing-btn btn-premium">
              <span>Go Premium</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="pricing-faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Can I change my plan anytime?</h4>
              <p>Yes! You can upgrade, downgrade, or cancel your subscription at any time. Changes take effect at your next billing cycle.</p>
            </div>
            <div className="faq-item">
              <h4>Is there a free trial for paid plans?</h4>
              <p>Absolutely! All paid plans come with a 14-day free trial. No credit card required to start.</p>
            </div>
            <div className="faq-item">
              <h4>What payment methods do you accept?</h4>
              <p>We accept all major credit cards, PayPal, and bank transfers for annual subscriptions.</p>
            </div>
            <div className="faq-item">
              <h4>Do you offer refunds?</h4>
              <p>Yes, we offer a 30-day money-back guarantee for all paid subscriptions. No questions asked!</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="pricing-cta">
          <h2>Ready to Start Your Garden Journey?</h2>
          <p>Join thousands of urban gardeners who are already growing sustainably</p>
          <div className="cta-buttons">
            <Link to="/signup" className="btn-cta primary">
              <span>Start Free Today</span>
              <i className="fas fa-seedling"></i>
            </Link>
            <Link to="/contact" className="btn-cta secondary">
              <span>Contact Sales</span>
              <i className="fas fa-phone"></i>
            </Link>
          </div>
        </div>

        {/* Back Button */}
        <div className="pricing-footer">
          <button className="back-btn" onClick={() => window.history.back()}>
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
