import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/privacy.css'

export default function Privacy() {
    const navigate = useNavigate();

    return (
        <div className="privacy-page">
            <nav className='privacy-navbar'>
                <div className="left-side" onClick={() => navigate('/')}>
                    <h1><h1><h4>Lexora</h4></h1></h1>
                    <p>Privacy Policy</p>
                </div>
                <div className="right-side">
                   
                </div>
            </nav>

            <div className="privacy-body">
                <h1>Privacy Policy</h1>
                <p className='last-updated'>Last updated: September 9, 2025</p>
                
                <div className="privacy-section">
                    <h2>1. Introduction</h2>
                    <p>Welcome to Lexora. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
                </div>

                <div className="privacy-section">
                    <h2>2. The Data We Collect</h2>
                    <p>Personal data means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you including your name, email address, username, password, profile information, and content you create on our platform.</p>
                </div>

                <div className="privacy-section">
                    <h2>3. How We Use Your Data</h2>
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                    <ul>
                        <li>To register you as a new customer</li>
                        <li>To manage our relationship with you</li>
                        <li>To enable you to participate in platform features</li>
                        <li>To administer and protect our business and website</li>
                        <li>To deliver relevant content and advertisements to you</li>
                    </ul>
                </div>

                <div className="privacy-section">
                    <h2>4. Data Security</h2>
                    <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We also limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
                </div>

                <div className="privacy-section">
                    <h2>5. Your Legal Rights</h2>
                    <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
                    <ul>
                        <li>Request access to your personal data</li>
                        <li>Request correction of your personal data</li>
                        <li>Request erasure of your personal data</li>
                        <li>Object to processing of your personal data</li>
                        <li>Request restriction of processing your personal data</li>
                        <li>Request transfer of your personal data</li>
                        <li>Right to withdraw consent</li>
                    </ul>
                </div>

                <div className="privacy-section">
                    <h2>6. Contact Us</h2>
                    <p>If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@lexora.com.</p>
                </div>
            </div>
        </div>
    )
}
