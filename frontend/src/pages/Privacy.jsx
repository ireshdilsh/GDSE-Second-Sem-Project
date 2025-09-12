import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/privacy.css'
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Privacy() {
    const navigate = useNavigate();

    const [showContactModal, setShowContactModal] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const submitReq = async (e) => {
        e.preventDefault();

        const data = {
            "name": name,
            "email": email,
            "subject": subject,
            "message": message
        }

        try {
            const resp = await axios.post('http://localhost:8080/api/v1/contacts/request', data);
            console.log(resp.data);
            clearFields();
            successMsg();
            closeContactModal();
        } catch (err) {
            clearFields();
            errorMsg();
            console.log(err);
        }
    }

    const clearFields = () => {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    const successMsg = () => {
        Swal.fire({
            icon: 'success',
            title: 'Request Submitted',
            text: 'Your request has been submitted successfully.'
        })
    }

    const errorMsg = () => {
        Swal.fire({
            icon: 'error',
            title: 'Submission Failed',
            text: 'There was an error submitting your request. Please try again later.'
        })
    }

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleSubject = (e) => {
        setSubject(e.target.value);
    }
    const handleMsg = (e) => {
        setMessage(e.target.value);
    }

    const openContactModal = () => {
        setShowContactModal(true);
    };

    const closeContactModal = () => {
        setShowContactModal(false);
    };

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

            <div className="contact-form">
                <p>Can't find what you're looking for?</p>
                <button onClick={openContactModal}>Submit a request</button>
            </div>

            {/* Contact Form Modal */}
            {showContactModal && (
                <div className="contact-modal-overlay" onClick={closeContactModal}>
                    <div className="contact-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-modal" onClick={closeContactModal}>&times;</button>
                        <h2>Contact Us</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    // value={formData.name}
                                    onChange={handleName}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    // value={formData.email}
                                    onChange={handleEmail}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    // value={formData.subject}
                                    onChange={handleSubject}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    // value={formData.message}
                                    onChange={handleMsg}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" onClick={submitReq} className="submit-button">Send Request</button>
                        </form>
                    </div>
                </div>
            )}

        </div>
    )
}
