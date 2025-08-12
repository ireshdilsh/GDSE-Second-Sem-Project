import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/TermsAndConditions.css';

const TermsAndConditions = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div className="terms-container">
            
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-8">
                        <div className="card terms-card">
                            {/* Header */}
                            <div className="terms-header text-center py-5">
                                <h1 className="display-4 fw-bold mb-3">Terms and Conditions</h1>
                                <p className="lead mb-0">Please read these terms carefully before using our services</p>
                                <small className="text-white-50">Last updated: August 12, 2025</small>
                            </div>

                            {/* Content */}
                            <div className="card-body p-5">
                                {/* Introduction */}
                                <section className="mb-5">
                                    <h2 className="section-title">1. Introduction</h2>
                                    <p className="terms-text">
                                        Welcome to our platform. These Terms and Conditions ("Terms", "Terms and Conditions") 
                                        govern your use of our website and services operated by us. By accessing or using our 
                                        service, you agree to be bound by these Terms.
                                    </p>
                                    <div className="highlight-box">
                                        <strong>Important:</strong> If you disagree with any part of these terms, 
                                        then you may not access the service.
                                    </div>
                                </section>

                                {/* Acceptance of Terms */}
                                <section className="mb-5">
                                    <h2 className="section-title">2. Acceptance of Terms</h2>
                                    <p className="terms-text">
                                        By accessing and using this website, you accept and agree to be bound by the terms 
                                        and provision of this agreement. Additionally, when using this website's particular 
                                        services, you shall be subject to any posted guidelines or rules applicable to such services.
                                    </p>
                                </section>

                                {/* Use License */}
                                <section className="mb-5">
                                    <h2 className="section-title">3. Use License</h2>
                                    <p className="terms-text">
                                        Permission is granted to temporarily download one copy of the materials on our website 
                                        for personal, non-commercial transitory viewing only. This is the grant of a license, 
                                        not a transfer of title, and under this license you may not:
                                    </p>
                                    <ul className="terms-text">
                                        <li>modify or copy the materials</li>
                                        <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                                        <li>attempt to decompile or reverse engineer any software contained on the website</li>
                                        <li>remove any copyright or other proprietary notations from the materials</li>
                                    </ul>
                                    <p className="terms-text">
                                        This license shall automatically terminate if you violate any of these restrictions 
                                        and may be terminated by us at any time.
                                    </p>
                                </section>

                                {/* User Accounts */}
                                <section className="mb-5">
                                    <h2 className="section-title">4. User Accounts</h2>
                                    <p className="terms-text">
                                        When you create an account with us, you must provide information that is accurate, 
                                        complete, and current at all times. You are responsible for safeguarding the password 
                                        and for all activities that occur under your account.
                                    </p>
                                    <div className="highlight-box">
                                        <strong>Account Security:</strong> You agree not to disclose your password to any third party. 
                                        You must notify us immediately upon becoming aware of any breach of security or 
                                        unauthorized use of your account.
                                    </div>
                                </section>

                                {/* Privacy Policy */}
                                <section className="mb-5">
                                    <h2 className="section-title">5. Privacy Policy</h2>
                                    <p className="terms-text">
                                        Your privacy is important to us. Please review our Privacy Policy, which also governs 
                                        your use of the service, to understand our practices regarding the collection and use 
                                        of your personal information.
                                    </p>
                                </section>

                                {/* Prohibited Uses */}
                                <section className="mb-5">
                                    <h2 className="section-title">6. Prohibited Uses</h2>
                                    <p className="terms-text">
                                        You may not use our service:
                                    </p>
                                    <ul className="terms-text">
                                        <li>For any unlawful purpose or to solicit others to perform illegal acts</li>
                                        <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                                        <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                                        <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                                        <li>To submit false or misleading information</li>
                                        <li>To upload or transmit viruses or any other type of malicious code</li>
                                    </ul>
                                </section>

                                {/* Content */}
                                <section className="mb-5">
                                    <h2 className="section-title">7. Content</h2>
                                    <p className="terms-text">
                                        Our service allows you to post, link, store, share and otherwise make available certain 
                                        information, text, graphics, videos, or other material. You are responsible for the content 
                                        that you post to the service, including its legality, reliability, and appropriateness.
                                    </p>
                                    <p className="terms-text">
                                        By posting content to the service, you grant us the right and license to use, modify, 
                                        publicly perform, publicly display, reproduce, and distribute such content on and through the service.
                                    </p>
                                </section>

                                {/* Termination */}
                                <section className="mb-5">
                                    <h2 className="section-title">8. Termination</h2>
                                    <p className="terms-text">
                                        We may terminate or suspend your account immediately, without prior notice or liability, 
                                        for any reason whatsoever, including without limitation if you breach the Terms. Upon 
                                        termination, your right to use the service will cease immediately.
                                    </p>
                                </section>

                                {/* Disclaimer */}
                                <section className="mb-5">
                                    <h2 className="section-title">9. Disclaimer</h2>
                                    <p className="terms-text">
                                        The materials on our website are provided on an 'as is' basis. We make no warranties, 
                                        expressed or implied, and hereby disclaim and negate all other warranties including 
                                        without limitation, implied warranties or conditions of merchantability, fitness for 
                                        a particular purpose, or non-infringement of intellectual property or other violation of rights.
                                    </p>
                                </section>

                                {/* Limitations */}
                                <section className="mb-5">
                                    <h2 className="section-title">10. Limitations</h2>
                                    <p className="terms-text">
                                        In no event shall our company or its suppliers be liable for any damages (including, 
                                        without limitation, damages for loss of data or profit, or due to business interruption) 
                                        arising out of the use or inability to use the materials on our website, even if we or 
                                        our authorized representative has been notified orally or in writing of the possibility of such damage.
                                    </p>
                                </section>

                                {/* Changes to Terms */}
                                <section className="mb-5">
                                    <h2 className="section-title">11. Changes to Terms</h2>
                                    <p className="terms-text">
                                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                                        If a revision is material, we will try to provide at least 30 days notice prior to any new 
                                        terms taking effect.
                                    </p>
                                    <div className="highlight-box">
                                        <strong>Stay Updated:</strong> What constitutes a material change will be determined at our 
                                        sole discretion. By continuing to access or use our service after those revisions become 
                                        effective, you agree to be bound by the revised terms.
                                    </div>
                                </section>

                                {/* Contact Information */}
                                <section className="mb-5">
                                    <h2 className="section-title">12. Contact Information</h2>
                                    <p className="terms-text">
                                        If you have any questions about these Terms and Conditions, please contact us at:
                                    </p>
                                    <div className="highlight-box">
                                        <strong>Email:</strong> support@yourcompany.com<br/>
                                        <strong>Phone:</strong> +1 (555) 123-4567<br/>
                                        <strong>Address:</strong> 123 Business Street, City, State 12345
                                    </div>
                                </section>

                                {/* Back Button */}
                                <div className="text-center mt-5">
                                    <button 
                                        className="btn btn-primary back-btn"
                                        onClick={handleGoBack}
                                    >
                                        ← Back to Previous Page
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
