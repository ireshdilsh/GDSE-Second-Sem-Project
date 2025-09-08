import React, { useState, useEffect } from 'react'
import '../style/dashboard.css'
import { useNavigate } from 'react-router-dom'

interface UserInfo {
    name: string;
    email: string;
    picture?: string;
}

export default function Dashboard() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    useEffect(() => {
        // Get user info from localStorage
        const storedUserInfo = localStorage.getItem('userInfo')
        if (storedUserInfo) {
            try {
                const parsedUserInfo = JSON.parse(storedUserInfo)
                setUserInfo(parsedUserInfo)
            } catch (error) {
                console.error('Error parsing user info:', error)
                // Redirect to landing if no valid user info
                navigate('/')
            }
        } else {
            // Redirect to landing if no user info
            navigate('/')
        }
    }, [navigate])

    // Default user info if not provided (for testing)
    const displayUser = userInfo || {
        name: 'John Doe',
        email: 'john.doe@example.com',
    picture: '/src/assets/react.svg'
    }

    const handleSignOut = () => {
        // Clear user data and navigate back to landing
        localStorage.removeItem('userInfo')
        navigate('/');
    }

    return (
        <div className='dashboard-page'>
            <nav className='dashboard-navbar'>
                <div className="left-side" onClick={() => { navigate('/') }}>
                    <h1>Lexora</h1>
                    <span>Dashboard</span>
                </div>
                <div className="right-side">
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
            </nav>

            <div className="dashboard-content">
                <div className="welcome-section">
                    <div className="user-info">
                        <img src={displayUser.picture} alt="Profile" className="profile-picture" />
                        <div className="user-details">
                            <h1>Welcome, {displayUser.name}!</h1>
                            <h3>{displayUser.email}</h3>
                        </div>
                    </div>
                </div>

                <div className="dashboard-main">
                    <div className="dashboard-cards">
                        <div className="card">
                            <h3>Your Stories</h3>
                            <p>Start writing your first story</p>
                            <button>Write Story</button>
                        </div>
                        
                        <div className="card">
                            <h3>Reading List</h3>
                            <p>Discover amazing stories</p>
                            <button>Browse Stories</button>
                        </div>
                        
                        <div className="card">
                            <h3>Following</h3>
                            <p>Follow your favorite writers</p>
                            <button>Find Writers</button>
                        </div>
                    </div>

                    <div className="recent-activity">
                        <h2>Recent Activity</h2>
                        <div className="activity-list">
                            <p>No recent activity yet. Start exploring Lexora!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
