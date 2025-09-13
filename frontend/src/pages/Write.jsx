import React, { useState, useEffect } from 'react'
import '../styles/write.css'
import { useNavigate, Link } from 'react-router-dom';

export default function Write() {
    const navigate = useNavigate();
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [userData, setUserData] = useState({
        firstName: 'User',
        lastName: '',
        username: '@user',
        email: 'user@example.com'
    });

    // Load user data from localStorage
    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            const parsedData = JSON.parse(storedUserData);
            setUserData({
                firstName: parsedData.firstName || 'User',
                lastName: parsedData.lastName || '',
                username: parsedData.username ? `@${parsedData.username}` : '@user',
                email: parsedData.email || 'user@example.com'
            });
        }
    }, []);

    const getDisplayName = () => {
        return userData.firstName && userData.lastName 
            ? `${userData.firstName} ${userData.lastName}` 
            : userData.firstName || 'User';
    };

    const toggleProfileMenu = () => {
        setShowProfileMenu(!showProfileMenu);
    };

    const [content, setContent] = useState('')

    const estimateReadingTime = (text) => {
        const words = text.trim().split(/\s+/).filter(Boolean).length;
        return Math.max(0, Math.ceil(words / 15));
    }

    // mathana implements karanna thiyenawa
    const handleSaveDraft = () => {
        // Get user data from localStorage
        const storedUserData = localStorage.getItem('userData');
        
        if (storedUserData) {
            const parsedData = JSON.parse(storedUserData);
            const userId = parsedData.id;
            
            // Console log the user ID
            console.log('User ID:', userId);
            console.log('Saving draft for user:', parsedData);
            
            // Here you can add your draft saving logic
            alert('Draft saved successfully!');
        } else {
            console.log('No user data found in localStorage');
            alert('Please sign in to save drafts');
        }
    };

    return (
        <div className='write-page'>
            <nav className="write-nav">
                <div className="left-side" onClick={() => navigate('/writer/dashboard')}>
                    <h1><h1><h4>Lexora</h4></h1></h1>
                    <p>Draft</p>
                </div>
                <div className="right-side">
                    <button onClick={handleSaveDraft}>Add to Draft</button>
                    <img src="https://img.icons8.com/?size=100&id=83989&format=png&color=5D5D5D" alt="notification-img" />
                    <div className="profile" onClick={toggleProfileMenu}>
                        <img src="https://img.icons8.com/?size=100&id=7819&format=png&color=5D5D5D" alt="profile-img" />
                        <span>{getDisplayName()}</span>
                        {showProfileMenu && (
                            <div className="profile-popup" style={{width: '330px'}}>
                                <div className="profile-popup-header">
                                    <div className="popup-user-container">
                                        <img src="https://img.icons8.com/?size=100&id=7819&format=png&color=5D5D5D" alt="profile-img" />
                                        <div className="profile-popup-info">
                                            <h4>{getDisplayName()}</h4>
                                            <p>{userData.email}</p>
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
                                    <button 
                                      onClick={() => {
                                        localStorage.removeItem('authToken');
                                        localStorage.removeItem('userData');
                                        window.location.href = '/';
                                      }}
                                      style={{
                                        background: 'none',
                                        border: 'none',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                        cursor: 'pointer',
                                        padding: 0,
                                        font: 'inherit'
                                      }}
                                    >
                                      Sign out
                                    </button>
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
            </div>
            <section className="write-area">
                <div className="title-area">
                    <input type="text" placeholder='Title' />
                </div>

                <div className="description-area">
                    <textarea value={content} onChange={(e) => { setContent(e.target.value) }} name="" id="" placeholder='Tell your story...'></textarea>
                </div>

            </section>
            <div className="reading-time-display">
                <p>Estimated Reading Time: {estimateReadingTime(content)} min</p>
            </div>
        </div>
    )
}
