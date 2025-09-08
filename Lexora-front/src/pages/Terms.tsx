import React from 'react'
import '../style/terms.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Terms() {

    const navigate = useNavigate()

  return (
    <div className="terms-page">
      <nav className='terms-nav'>
        <div className="left-side" onClick={()=>{navigate('/')}}>
          <h1>Lexora</h1>
          <p style={{fontFamily:'Sohne, -apple-system, BlinkMacSystemFont, sans-serif',fontSize:'13px',fontWeight:'500'}}>Terms of Service</p>
        </div>
        <div className="right-side">
          <Link to="/">Back to lexora.com</Link>
          <Link to="/help">Help Center</Link>
        </div>
      </nav>

      <div className="terms-content">
        <header className="terms-header">
          <h1>Lexora Terms of Service</h1>
          <p className="last-updated">Effective Date: September 8, 2025</p>
        </header>

        <div className="terms-intro">
          <p>
            Welcome to Lexora. These Terms of Service ("Terms") govern your use of the Lexora website, mobile applications, and other online products and services (collectively, the "Services") provided by Lexora Corporation ("Lexora," "we," or "us").
          </p>
          <p>
            By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Services.
          </p>
        </div>

        <div className="table-of-contents">
          <h2>CONTENTS</h2>
          <ul>
            <li><a href="#acceptance">Acceptance of Terms</a></li>
            <li><a href="#description">Description of Service</a></li>
            <li><a href="#accounts">User Accounts</a></li>
            <li><a href="#content">User Content</a></li>
            <li><a href="#conduct">Acceptable Use</a></li>
            <li><a href="#intellectual">Intellectual Property</a></li>
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#termination">Termination</a></li>
            <li><a href="#disclaimers">Disclaimers</a></li>
            <li><a href="#limitation">Limitation of Liability</a></li>
            <li><a href="#governing">Governing Law</a></li>
            <li><a href="#changes">Changes to Terms</a></li>
            <li><a href="#contact">Contact Information</a></li>
          </ul>
        </div>

        <section id="acceptance" className="terms-section">
          <h2>ACCEPTANCE OF TERMS</h2>
          <p>
            By creating an account or using any part of the Services, you confirm that you accept these Terms of Service and that you agree to comply with them. If you do not agree to these Terms, you must not use our Services.
          </p>
          <p>
            These Terms apply to all visitors, users, and others who access or use the Services. You must be at least 13 years old to use our Services. If you are under 18, you may use the Services only with the consent and supervision of a parent or guardian.
          </p>
        </section>

        <section id="description" className="terms-section">
          <h2>DESCRIPTION OF SERVICE</h2>
          <p>
            Lexora is a platform for reading, writing, and sharing stories and ideas. Our Services allow users to:
          </p>
          <ul>
            <li>Create and publish articles, stories, and other written content</li>
            <li>Read and discover content from other users</li>
            <li>Follow authors and publications</li>
            <li>Engage with content through comments, highlights, and claps</li>
            <li>Subscribe to premium content and features</li>
            <li>Participate in the Lexora community</li>
          </ul>
          <p>
            We reserve the right to modify, suspend, or discontinue any part of our Services at any time with or without notice.
          </p>
        </section>

        <section id="accounts" className="terms-section">
          <h2>USER ACCOUNTS</h2>
          <h3>Account Creation</h3>
          <p>
            To access certain features of our Services, you must create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
          </p>
          <h3>Account Security</h3>
          <p>
            You are responsible for safeguarding the password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
          </p>
          <h3>Account Restrictions</h3>
          <p>
            You may not create multiple accounts to evade suspension, ban, or other enforcement actions. You may not sell, transfer, or assign your account or username to another party without our prior written consent.
          </p>
        </section>

        <section id="content" className="terms-section">
          <h2>USER CONTENT</h2>
          <h3>Your Content</h3>
          <p>
            You retain ownership of any intellectual property rights that you hold in content you submit, post, or display on or through the Services ("User Content"). By submitting User Content, you grant Lexora a worldwide, non-exclusive, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such content.
          </p>
          <h3>Content Standards</h3>
          <p>
            You agree that your User Content will not:
          </p>
          <ul>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon the rights of any third party</li>
            <li>Contain hate speech, harassment, or discriminatory content</li>
            <li>Include spam, malware, or malicious code</li>
            <li>Contain false or misleading information</li>
            <li>Violate our Community Guidelines</li>
          </ul>
          <h3>Content Moderation</h3>
          <p>
            We reserve the right to review, moderate, or remove User Content that violates these Terms or our Community Guidelines. We may also limit the distribution of content that we determine may be harmful to our community.
          </p>
        </section>

        <section id="conduct" className="terms-section">
          <h2>ACCEPTABLE USE</h2>
          <p>
            You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to:
          </p>
          <ul>
            <li>Use the Services in any way that violates any applicable federal, state, local, or international law or regulation</li>
            <li>Impersonate or attempt to impersonate Lexora, a Lexora employee, another user, or any other person or entity</li>
            <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Services</li>
            <li>Use any robot, spider, crawler, scraper, or other automated means to access the Services</li>
            <li>Attempt to gain unauthorized access to any portion of the Services or any other systems or networks</li>
            <li>Interfere with or disrupt the Services or servers or networks connected to the Services</li>
          </ul>
        </section>

        <section id="intellectual" className="terms-section">
          <h2>INTELLECTUAL PROPERTY</h2>
          <h3>Lexora's Rights</h3>
          <p>
            The Services and their original content, features, and functionality are and will remain the exclusive property of Lexora and its licensors. The Services are protected by copyright, trademark, and other laws.
          </p>
          <h3>Trademarks</h3>
          <p>
            Lexora's name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Lexora or its affiliates or licensors. You must not use such marks without our prior written permission.
          </p>
          <h3>Copyright Policy</h3>
          <p>
            We respect the intellectual property rights of others. If you believe that any User Content infringes upon your copyright, please contact us with a detailed description of the alleged infringement.
          </p>
        </section>

        <section id="privacy" className="terms-section">
          <h2>PRIVACY</h2>
          <p>
            Your privacy is important to us. Please review our <Link to="/privacy">Privacy Policy</Link>, which also governs your use of the Services, to understand our practices.
          </p>
          <p>
            By using our Services, you consent to the collection and use of your information as described in our Privacy Policy.
          </p>
        </section>

        <section id="termination" className="terms-section">
          <h2>TERMINATION</h2>
          <h3>Termination by You</h3>
          <p>
            You may terminate your account at any time by following the instructions in your account settings or by contacting our support team.
          </p>
          <h3>Termination by Us</h3>
          <p>
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
          <h3>Effect of Termination</h3>
          <p>
            Upon termination, your right to use the Services will cease immediately. We may delete your account and all associated content, though some content may remain visible to others if it was shared publicly.
          </p>
        </section>

        <section id="disclaimers" className="terms-section">
          <h2>DISCLAIMERS</h2>
          <p>
            The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, Lexora excludes all representations, warranties, conditions, and terms (whether express or implied by statute, common law, or otherwise) except as expressly set out in these Terms.
          </p>
          <p>
            We do not guarantee that the Services will be secure or free from bugs or viruses. You are responsible for configuring your information technology, computer programs, and platform to access our Services.
          </p>
        </section>

        <section id="limitation" className="terms-section">
          <h2>LIMITATION OF LIABILITY</h2>
          <p>
            To the fullest extent permitted by applicable law, in no event will Lexora, its affiliates, agents, directors, employees, suppliers, or licensors be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data, or other intangible losses.
          </p>
          <p>
            In no event shall Lexora's total liability to you for all damages exceed the amount you paid Lexora, if any, in the twelve (12) months preceding the event giving rise to the liability.
          </p>
        </section>

        <section id="governing" className="terms-section">
          <h2>GOVERNING LAW</h2>
          <p>
            These Terms shall be interpreted and governed by the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the Services shall be resolved in the courts of California.
          </p>
          <p>
            If you are a consumer residing in the European Union, you will benefit from any mandatory provisions of the law of the country in which you are resident.
          </p>
        </section>

        <section id="changes" className="terms-section">
          <h2>CHANGES TO TERMS</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
          </p>
          <p>
            What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised terms.
          </p>
        </section>

        <section id="contact" className="terms-section">
          <h2>CONTACT INFORMATION</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <div className="contact-info">
            <p>Email: legal@lexora.com</p>
            <p>Support: <Link to="/help">Help Center</Link></p>
            <p>Address: Lexora Corporation, 123 Main Street, San Francisco, CA 94105</p>
          </div>
        </section>
      </div>
    </div>
  )
}
