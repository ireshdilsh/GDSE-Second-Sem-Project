import React from 'react'
import '../style/help.css'
import { Link } from 'react-router-dom'

export default function Help() {
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
        <div className="left-side">
          <h1>Lexora</h1>
          <p>Help Center</p>
        </div>
        <div className="right-side">
          <Link to="/">Back to lexora.com</Link>
          <button>Submit a request</button>
        </div>
      </nav>

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
    </div>
  )
}
