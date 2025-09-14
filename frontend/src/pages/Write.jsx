import React, { useState, useEffect } from 'react'
import '../styles/write.css'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Write() {
    const navigate = useNavigate();
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [userData, setUserData] = useState({
        firstName: 'User',
        lastName: '',
        username: '@user',
        email: 'user@example.com'
    });

    const [categories, setCategories] = useState([])

    const getAllCategories = async () => {
        try {
            const resp = await axios.get('http://localhost:8080/api/v1/categories/all')
            setCategories(resp.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    // Load user data from localStorage
    useEffect(() => {

        getAllCategories()

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
    const [title, setTitle] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const [category, setCategory] = useState('')

    const clearFields = () => {
        setContent('')
        setTitle('')
        setSubtitle('')
    }

    const handleSaveDraft = async (e) => {

        e.preventDefault();
        // Get user data from localStorage
        const storedUserData = localStorage.getItem('userData');

        if (storedUserData) {
            const parsedData = JSON.parse(storedUserData);
            const userId = parsedData.id;

            const draftData = {
                "title": title,
                "subtitle": subtitle,
                "content": content,
                "authorId": userId,
                "categoryId": category
            }
            try {
                const resp = await axios.post('http://localhost:8080/api/v1/articles/create', draftData)
                console.log(resp.data)
                clearFields()
                Swal.fire({
                    icon: 'success',
                    title: 'Draft Saved',
                    text: 'Your article has been saved in Draft successfully.',
                    timer: 5000
                })
            } catch (error) {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Something Wrong',
                    text: 'Cannot be save your article in draft.try again later',
                    timer: 5000
                })
            }
        } else {
            console.log('No user data found in localStorage');
            Swal.fire({
                icon: 'error',
                title: 'Something Wrong',
                text: 'Please login again.',
                timer: 5000
            })
        }
    };

    return (
        <div className='write-page'>
            <nav className="write-nav">
                <div className="left-side" onClick={() => navigate('/writer/dashboard')}>
                    <h1><h3><h4>Lexora</h4></h3></h1>
                    <p>Draft</p>
                </div>
                <div className="right-side">
                    <button onClick={handleSaveDraft}>Add to Draft</button>
                    <img src="https://img.icons8.com/?size=100&id=83989&format=png&color=5D5D5D" alt="notification-img" />
                    <div className="profile" onClick={toggleProfileMenu}>
                        <img src="https://img.icons8.com/?size=100&id=7819&format=png&color=5D5D5D" alt="profile-img" />
                        <span>{getDisplayName()}</span>
                        {showProfileMenu && (
                            <div className="profile-popup" style={{ width: '330px' }}>
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
                    <input value={title} type="text" placeholder='Title' onChange={(e) => { setTitle(e.target.value) }} />
                    <input value={subtitle} id='subtitle' type="text" placeholder='Subtitle' onChange={(e) => { setSubtitle(e.target.value) }} />
                    <select name="" id="" onChange={(e) => { setCategory(e.target.value) }}>
                        <option value="">Select Category</option>
                        {categories && categories.map((cate) => (
                            <option value={cate.id} key={cate.id}>
                                {cate.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="description-area">
                    <textarea value={content} onChange={(e) => { setContent(e.target.value) }} placeholder='Tell your story...'></textarea>
                </div>

            </section>
        </div>
    )
}
