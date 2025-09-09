import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/terms.css'

export default function Terms() {
    const navigate = useNavigate();

    return (
        <div className="terms-page">
            <nav className='terms-navbar'>
                <div className="left-side" onClick={() => navigate('/')}>
                    <h1><h1><h4>Lexora</h4></h1></h1>
                    <p>Terms of Service</p>
                </div>
                <div className="right-side">
                   
                </div>
            </nav>

            <div className="terms-body">
                <h1>Terms of Service</h1>
                <p className='last-updated'>Last updated: September 9, 2025</p>
                
                <div className="terms-section">
                    <h2>1. Acceptance of Terms</h2>
                    <p>By accessing and using Lexora, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                </div>

                <div className="terms-section">
                    <h2>2. Description of Service</h2>
                    <p>Lexora provides users with access to a rich collection of resources, including various communications tools, forums, and personalized content. The service includes the Lexora site and platform, all content, software, and services made available on the site.</p>
                </div>

                <div className="terms-section">
                    <h2>3. Registration and Account Security</h2>
                    <p>You are responsible for maintaining the confidentiality of your password and account, and are fully responsible for all activities that occur under your password or account. You agree to immediately notify Lexora of any unauthorized use of your password or account or any other breach of security.</p>
                </div>

                <div className="terms-section">
                    <h2>4. User Content</h2>
                    <p>You understand that all information, data, text, software, music, sound, photographs, graphics, video, messages or other materials ("Content"), whether publicly posted or privately transmitted, are the sole responsibility of the person from whom such Content originated.</p>
                    <p>By submitting Content to Lexora for inclusion on the platform, you grant Lexora a world-wide, royalty-free, and non-exclusive license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, and display such Content.</p>
                </div>

                <div className="terms-section">
                    <h2>5. Conduct</h2>
                    <p>You agree to not use the Service to:</p>
                    <ul>
                        <li>Upload, post, email, transmit or otherwise make available any Content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically or otherwise objectionable</li>
                        <li>Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity</li>
                        <li>Forge headers or otherwise manipulate identifiers in order to disguise the origin of any Content transmitted through the Service</li>
                        <li>Upload, post, email, transmit or otherwise make available any Content that you do not have a right to make available under any law</li>
                        <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
                    </ul>
                </div>

                <div className="terms-section">
                    <h2>6. Modifications to Service</h2>
                    <p>Lexora reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. You agree that Lexora shall not be liable to you or to any third party for any modification, suspension or discontinuance of the Service.</p>
                </div>

                <div className="terms-section">
                    <h2>7. Contact Information</h2>
                    <p>If you have any questions about these Terms, please contact us at terms@lexora.com.</p>
                </div>
            </div>
        </div>
    )
}
