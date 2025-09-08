import React, { useState } from 'react'
import '../style/help.css'
import { Link, useNavigate, } from 'react-router-dom'

export default function Help() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const navigate = useNavigate();

  const helpSections = [
    {
      title: 'Getting started',
      description: 'Learn more about Medium and set up your account',
      items: [
        'Sign in or sign up to Medium',
        'Using Medium',
        'Medium membership',
        'Medium glossary',
      ],
    },
    {
      title: 'Managing your account',
      description: 'Everything you need to know about your account settings and profile page',
      items: [
        'Your profile page',
        'Your profile page URL',
        'Adjust email preferences',
        'Manage your subscription',
        'Connect social media accounts',
      ],
    },
    {
      title: 'Reading',
      description: 'Control your reading experience on Medium',
      items: [
        'Your homepage',
        'Create and manage lists',
        'Control your recommendations',
        'Mute an author or publication',
        'About Audio',
      ],
    },
    {
      title: 'Managing stories',
      description: 'Manage your content',
      items: [
        'Your stats',
        'Your audience stats',
        'About Friend Links',
        'Your publications',
        'Email subscriptions',
      ],
    },
    {
      title: 'Writing & editing',
      description: 'Master the story editor',
      items: [
        'Writing and publishing your first story',
        'Create, edit, or delete a story',
        'Using the story editor',
        'Using images',
        'Using embeds',
        'Using tags',
        'Sharing drafts and getting feedback',
      ],
    },
    {
      title: 'Distribution',
      description: 'Learn more about distribution on Medium',
      items: [
        'What happens to your post when you publish on Medium',
        "Medium's quality standards: how we review stories for distribution",
      ],
    },
    {
      title: 'Partner Program',
      description: 'Start earning for your content',
      items: [
        'Partner Program Guide',
        'Make a post eligible to earn money',
        'Your Partner Program dashboard',
        'Calculating earnings in the Partner Program',
      ],
    },
    {
      title: 'Publications',
      description: 'Learn how to set up and manage a Medium publication',
      items: [
        'Getting started with a Medium publication',
        'How to submit a story to a publication',
        'How to manage story submissions',
        'Publication settings and layout',
        'Submission settings',
        'How to use Newsletters',
      ],
    },
    {
      title: 'Terms & Policies',
      description: 'The fine print',
      items: [
        'Terms of Service',
        'Medium Rules',
        'Privacy Policy',
        'Partner Program Terms',
      ],
    },
    {
      title: 'Content',
      description: 'Content policies',
      items: [
        'COVID-19 Content Policy',
        'Controversial, Suspect, and Extreme Content',
        'Best practices for journalism on Medium',
      ],
    },
    {
      title: 'Safety',
      description: 'Learn about Medium\'s safety tools',
      items: [
        'Block a user',
        'Manage responses',
        'Report posts & users',
        'Report copyright infringement',
        'User data protection',
      ],
    },
  ];

  return (
    <div>
      <nav className='help-nav'>
        <div className="left-side" onClick={() => { navigate('/') }}>
          <h1>Lexora</h1>
          <p>Help Center</p>
        </div>
        <div className="right-side">
          <Link to="/">Back to lexora.com</Link>
          <button onClick={openModal}>Submit a request</button>
        </div>
      </nav>

      <div className="search-bar">
        <h1>How can we help?</h1>
        <input type="text" placeholder='Search for help topics...' />
      </div>

      <div className="warning-msg">
        <img src="https://img.icons8.com/?size=100&id=5tH5sHqq0t2q&format=png&color=000000" alt="warning-logo" />
        <p>We are working to fix several issues related to the recent publication changes. Thanks for your patience as we work through them. We'd still like to hear about issues you're having with these changes and appreciate you submitting them here.</p>
      </div>

      <div className="help-cards-container">
        {helpSections.map((section, idx) => (
          <div className="help-card" key={idx}>
            <h1>{section.title}</h1>
            <p className="help-description">{section.description}</p>
            <ul>
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="last-card">
        <h1>Can't find what you're looking for?</h1>
        <button onClick={openModal}>Submit a request</button>
      </div>

      <footer className='help-footer'>
        <a href="">Status</a>
        <a href="">Writer</a>
        <a href="">Blog</a>
        <a href="">Careers</a>
        <a href="">Privacy</a>
        <a href="">Terms</a>
        <a href="">About</a>
      </footer>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="contact-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Submit a Request</h2>
              <button className="close-btn" onClick={closeModal}>&times;</button>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="email">Your email address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Brief description of your issue"
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select id="category" name="category">
                  <option value="">Select a category</option>
                  <option value="account">Account Issues</option>
                  <option value="technical">Technical Problems</option>
                  <option value="billing">Billing & Payments</option>
                  <option value="content">Content & Publishing</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Description *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Describe your issue in detail..."
                ></textarea>
              </div>
              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={closeModal}>
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
