import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/PricingPage.css';

const PricingPage = () => {
    const pricingPlans = [
        {
            name: "Free",
            price: "$0",
            period: "/month",
            description: "Perfect for getting started",
            features: [
                "Up to 3 plant listings",
                "Basic messaging",
                "Community access",
                "Plant care tips",
                "Standard support"
            ],
            isPopular: false,
            buttonText: "Get Started Free",
            buttonClass: "btn-outline-success"
        },
        {
            name: "Basic",
            price: "$9.99",
            period: "/month",
            description: "Great for casual gardeners",
            features: [
                "Up to 15 plant listings",
                "Unlimited messaging",
                "Priority community access",
                "Advanced plant care guides",
                "Email support",
                "Basic analytics"
            ],
            isPopular: false,
            buttonText: "Choose Basic",
            buttonClass: "btn-success"
        },
        {
            name: "Premium",
            price: "$19.99",
            period: "/month",
            description: "Best for active gardeners",
            features: [
                "Unlimited plant listings",
                "Premium messaging features",
                "Expert plant identification",
                "Personalized care schedules",
                "Priority support",
                "Detailed analytics",
                "Swap recommendations",
                "Trade history tracking"
            ],
            isPopular: true,
            buttonText: "Choose Premium",
            buttonClass: "btn-success"
        },
        {
            name: "Pro",
            price: "$39.99",
            period: "/month",
            description: "For professional growers",
            features: [
                "Everything in Premium",
                "Business profile",
                "Bulk listing tools",
                "Advanced marketplace features",
                "24/7 phone support",
                "Custom integrations",
                "White-label options",
                "Dedicated account manager",
                "API access"
            ],
            isPopular: false,
            buttonText: "Choose Pro",
            buttonClass: "btn-success"
        }
    ];

    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div className="pricing-container">
            {/* Navigation Header */}
            <div className="pricing-header">
                <div className="container">
                    <div className="row align-items-center py-4">
                        <div className="col-auto">
                            <button onClick={handleGoBack} className="btn back-btn">
                                <i className="fas fa-arrow-left me-2"></i>
                                Back
                            </button>
                        </div>
                        <div className="col text-center">
                            <h1 className="pricing-title mb-0">
                                <i className="fas fa-leaf me-3"></i>
                                Choose Your Plan
                            </h1>
                        </div>
                        <div className="col-auto">
                            {/* Spacer for centering */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <div className="container py-5">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8 text-center">
                        <h2 className="section-title">Flexible Plans for Every Gardener</h2>
                        <p className="section-description">
                            Whether you're just starting your plant journey or running a garden business, 
                            we have the perfect plan for you. All plans include our core features with 
                            varying limits and premium additions.
                        </p>
                    </div>
                </div>

                <div className="row g-4 justify-content-center">
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className="col-lg-3 col-md-6">
                            <div className={`pricing-card h-100 ${plan.isPopular ? 'popular' : ''}`}>
                                {plan.isPopular && (
                                    <div className="popular-badge">
                                        <i className="fas fa-star me-1"></i>
                                        Most Popular
                                    </div>
                                )}
                                
                                <div className="pricing-card-header">
                                    <h3 className="plan-name">{plan.name}</h3>
                                    <div className="price-section">
                                        <span className="price">{plan.price}</span>
                                        <span className="period">{plan.period}</span>
                                    </div>
                                    <p className="plan-description">{plan.description}</p>
                                </div>

                                <div className="pricing-card-body">
                                    <ul className="features-list">
                                        {plan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="feature-item">
                                                <i className="fas fa-check feature-check"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pricing-card-footer">
                                    <button className={`btn ${plan.buttonClass} pricing-btn w-100`}>
                                        {plan.buttonText}
                                        <i className="fas fa-arrow-right ms-2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="row justify-content-center mt-5 pt-5">
                    <div className="col-lg-8">
                        <div className="faq-section">
                            <h3 className="faq-title text-center mb-4">Frequently Asked Questions</h3>
                            
                            <div className="faq-item">
                                <h5 className="faq-question">
                                    <i className="fas fa-question-circle me-2"></i>
                                    Can I change my plan anytime?
                                </h5>
                                <p className="faq-answer">
                                    Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                                    and you'll be charged or credited accordingly.
                                </p>
                            </div>

                            <div className="faq-item">
                                <h5 className="faq-question">
                                    <i className="fas fa-question-circle me-2"></i>
                                    Is there a free trial?
                                </h5>
                                <p className="faq-answer">
                                    Our Free plan is available forever with no time limit. For premium plans, 
                                    we offer a 14-day free trial so you can explore all features.
                                </p>
                            </div>

                            <div className="faq-item">
                                <h5 className="faq-question">
                                    <i className="fas fa-question-circle me-2"></i>
                                    What payment methods do you accept?
                                </h5>
                                <p className="faq-answer">
                                    We accept all major credit cards, PayPal, and bank transfers. 
                                    All payments are processed securely through our payment partners.
                                </p>
                            </div>

                            <div className="faq-item">
                                <h5 className="faq-question">
                                    <i className="fas fa-question-circle me-2"></i>
                                    Can I cancel my subscription anytime?
                                </h5>
                                <p className="faq-answer">
                                    Absolutely! You can cancel your subscription at any time from your account settings. 
                                    You'll continue to have access until the end of your billing period.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Support */}
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-6 text-center">
                        <div className="support-section">
                            <h4 className="support-title">Need Help Choosing?</h4>
                            <p className="support-description">
                                Our team is here to help you find the perfect plan for your gardening needs.
                            </p>
                            <button className="btn btn-outline-success">
                                <i className="fas fa-comments me-2"></i>
                                Contact Support
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPage;
