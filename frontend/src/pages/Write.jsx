import React, { useState } from 'react'
import '../styles/write.css'
import { useNavigate, Link } from 'react-router-dom';

export default function Write() {
    const navigate = useNavigate();
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const toggleProfileMenu = () => {
        setShowProfileMenu(!showProfileMenu);
    };

    return (
        <div className='write-page'>
            <nav className="write-nav">
                <div className="left-side" onClick={() => navigate('/writer/dashboard')}>
                    <h1><h1><h4>Lexora</h4></h1></h1>
                    <p>Draft</p>
                </div>
                <div className="right-side">
                    <button>Add to Draft</button>
                    <img src="https://img.icons8.com/?size=100&id=83989&format=png&color=5D5D5D" alt="notification-img" />
                    <div className="profile" onClick={toggleProfileMenu}>
                        <img src="https://img.icons8.com/?size=100&id=7819&format=png&color=5D5D5D" alt="profile-img" /><span>Iresh Dilshan</span>
                        {showProfileMenu && (
                            <div className="profile-popup">
                                <div className="profile-popup-header">
                                    <div className="popup-user-container">
                                        <img src="https://img.icons8.com/?size=100&id=7819&format=png&color=5D5D5D" alt="profile-img" />
                                        <div className="profile-popup-info">
                                            <h4>Iresh Dilshan</h4>
                                            <p>@ireshdilshan</p>
                                        </div>
                                    </div>
                                    <button className="close-popup" onClick={(e) => {
                                        e.stopPropagation();
                                        toggleProfileMenu();
                                    }}>
                                        &times;
                                    </button>
                                </div>
                                <div className="profile-popup-menu">
                                    <Link to="/profile">Profile</Link>
                                    <Link to="/library">Library</Link>
                                    <Link to="/stories">Stories</Link>
                                    <Link to="/stats">Stats</Link>
                                    <div className="divider"></div>
                                    <Link to="/settings">Settings</Link>
                                    <Link to="/referrals">Referrals</Link>
                                    <div className="divider"></div>
                                    <Link to="/help">Help</Link>
                                    <Link to="/">Sign out</Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            <div className="info-message">
                <div className="info-icon">
                    <img src="https://img.icons8.com/?size=100&id=12115&format=png&color=5D5D5D" alt="info-icon" />
                </div>
                <div className="info-content">
                    <h4>Draft Mode Active</h4>
                    <p>Your article is directly saved to drafts as you write. This gives you time to review and correct any grammatical errors or improve content before publishing. Once ready, you can publish directly from your drafts.</p>
                </div>
                <button className="close-info" onClick={(e) => {
                    e.target.closest('.info-message').style.display = 'none';
                }}>
                    &times;
                </button>
            </div>
        </div>
    )
}
