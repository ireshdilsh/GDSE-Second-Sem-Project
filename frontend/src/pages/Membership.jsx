import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/pricing.css'

export default function Membership() {

    const navigate = useNavigate();

  return (
    <div className='membership-page'>
            <nav className='membership-navbar'>
                <div className="left-side" onClick={() => { navigate('/') }}>
                    <h1><h1><h4>Lexora</h4></h1></h1>
                    <p>Membership</p>
                </div>
                
            </nav>

            <div className="membership-content">
                <div className="hero-section">
                    <h1>Why membership?</h1>
                </div>

                <div className="benefits-section">
                    <div className="benefit-item">
                        <h3>Reward writers</h3>
                        <p>Your membership directly supports the writers, editors, curators, and teams who make Lexora a vibrant, inclusive home for human stories. A portion of your membership is allocated to the writers of the stories you read and interact with.</p>
                    </div>

                    <div className="benefit-item">
                        <h3>Unlock every story</h3>
                        <p>Get access to millions of original stories that spark bright ideas, answer big questions, and fuel bold ambitions.</p>
                    </div>

                    <div className="benefit-item">
                        <h3>Enhance your reading experience</h3>
                        <p>Immerse yourself in audio stories, read offline wherever you go, and connect with the Lexora community on Mastodon.</p>
                    </div>

                    <div className="benefit-item">
                        <h3>Elevate your writing</h3>
                        <p>Create and contribute to publications to collaborate with other writers, create a custom domain for your profile, and level up your writing with our simple but powerful publishing tools.</p>
                    </div>

                    <div className="benefit-item">
                        <h3>Support a mission that matters</h3>
                        <p>Members are creating a world where original, human-crafted stories thrive. As a member-supported platform, quality comes first, not ads or clickbait.</p>
                    </div>
                </div>

                <div className="testimonials-section">
                    <h2>What members are saying</h2>
                    
                    <div className="testimonial">
                        <div className="testimonial-content">
                            <p>"The easy path in social media is promoting the worst content, the cheapest, tackiest, lowest-effort stuff. That's not what you get on Lexora. You can actually find content you can build your brain with. I appreciate that, both as a reader and a writer."</p>
                            <div className="author">
                                <strong>Cassie Kozyrkov</strong>
                                <span>Chief Decision Scientist at Google and Lexora member</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial">
                        <div className="testimonial-content">
                            <p>"Lexora has proved a game-changer for me, and quickly became the subscription I value the most, and I have quite a few. The cost is nothing compared to the value Lexora generates for me month after month."</p>
                            <div className="author">
                                <strong>Enrique Dans</strong>
                                <span>Professor of Innovation at IE Business School and Lexora member</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial">
                        <div className="testimonial-content">
                            <p>"For us tech folks, Lexora membership unlocks a whole treasure trove of high-quality articles. One good technology book could sell for over the Lexora membership fee amount. It's your choice whether to buy one book, or buy hundreds and thousands of books by unlocking member-only reading on Lexora. Investing in a Lexora membership is one of the best investments I have ever made for my career."</p>
                            <div className="author">
                                <strong>Wenqi Glantz</strong>
                                <span>Software Architect at ArisGlobal and Lexora member</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="plans-section">
                    <h2>Membership plans</h2>
                    
                    <div className="plans-container">
                        <div className="plan-card">
                            <div className="plan-header">
                                <h3>Lexora Member</h3>
                                <div className="price">
                                    <span className="amount">$5/month</span>
                                    <span className="yearly">or $50/year</span>
                                </div>
                            </div>
                            
                            <button className="get-started-btn">Get started</button>
                            
                            <div className="plan-features">
                                <ul>
                                    <li>Read member-only stories</li>
                                    <li>Support writers you read most</li>
                                    <li>Earn money for your writing</li>
                                    <li>Listen to audio narrations</li>
                                    <li>Read offline with the Lexora app</li>
                                    <li>Access our Mastodon community</li>
                                    <li>Connect your custom domain</li>
                                    <li>Create your own publications</li>
                                </ul>
                            </div>
                        </div>

                        <div className="plan-card premium">
                            <div className="plan-header">
                                <h3>Friend of Lexora</h3>
                                <div className="price">
                                    <span className="amount">$15/month</span>
                                    <span className="yearly">or $150/year</span>
                                </div>
                            </div>
                            
                            <button className="get-started-btn premium-btn">Get started</button>
                            
                            <div className="plan-features">
                                <p className="all-benefits">All Lexora member benefits</p>
                                <p className="plus">PLUS</p>
                                <ul>
                                    <li>Give 4x more to the writers you read</li>
                                    <li>Share member-only stories with anyone and drive more earnings for writers</li>
                                    <li>Customize app icon</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
