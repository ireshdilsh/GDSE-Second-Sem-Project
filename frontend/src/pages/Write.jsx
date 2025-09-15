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

    const [loadDraftCards, setLoadDraftCards] = useState([])

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
        getAllArticlesByAuthor()

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

    const getAllArticlesByAuthor = async () => {
        const id = getUserID();
        console.log("getAllArticlesByAuthor" + id);

        try {
            const resp = await axios.get(`http://localhost:8080/api/v1/articles/all/drafts/${id}`);
            setLoadDraftCards(resp.data.data)
            console.log(resp.data.data);
        } catch (error) {
            console.log(error);
        }

    }

    const getUserID = () => {
        const storedUserData = localStorage.getItem('userData');

        if (storedUserData) {
            const parsedData = JSON.parse(storedUserData);
            return parsedData.id;
        } else {
            return null;
        }
    }

    const handleSaveDraft = async (e) => {
        e.preventDefault();

        // Validate all fields
        if (!title.trim()) {
            Swal.fire({
                icon: 'error',
                title: 'Title Required',
                text: 'Please enter a title for your article.',
                confirmButtonColor: '#1a8917'
            });
            return;
        }

        if (!subtitle.trim()) {
            Swal.fire({
                icon: 'error',
                title: 'Subtitle Required',
                text: 'Please enter a subtitle for your article.',
                confirmButtonColor: '#1a8917'
            });
            return;
        }

        if (!content.trim()) {
            Swal.fire({
                icon: 'error',
                title: 'Content Required',
                text: 'Please write some content for your article.',
                confirmButtonColor: '#1a8917'
            });
            return;
        }

        if (!category) {
            Swal.fire({
                icon: 'error',
                title: 'Category Required',
                text: 'Please select a category for your article.',
                confirmButtonColor: '#1a8917'
            });
            return;
        }

        const userId = getUserID();

        if (!userId) {
            Swal.fire({
                icon: 'error',
                title: 'Authentication Error',
                text: 'You need to be logged in to save drafts.',
                confirmButtonColor: '#1a8917'
            });
            return;
        }

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
            getAllArticlesByAuthor()
            clearFields()
            Swal.fire({
                icon: 'success',
                title: 'Draft Saved',
                text: 'Your article has been saved in Draft successfully.',
                timer: 5000,
                confirmButtonColor: '#1a8917'
            })
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Something Went Wrong',
                text: error.response?.data?.message || 'Cannot save your article in draft. Please try again later.',
                confirmButtonColor: '#1a8917'
            })
        }

    };

    return (
        <div className='write-page'>
            <nav className="write-nav">
                <div className="left-side" onClick={() => navigate('/writer/dashboard')}>
                    <h1><h3><h4>Lexora</h4></h3></h1>
                    <p>Write</p>
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
                    <div className="input-field">
                        <input id="title-input" value={title} type="text" placeholder='Enter article title' onChange={(e) => { setTitle(e.target.value) }} />
                    </div>
                    <div className="input-field">
                        <input id="subtitle-input" value={subtitle} className="subtitle-input" type="text" placeholder='Enter article subtitle' onChange={(e) => { setSubtitle(e.target.value) }} />
                    </div>
                    <div className="category-selector">
                        <select name="category" id="category-select" onChange={(e) => { setCategory(e.target.value) }}>
                            <option value="">Select Category</option>
                            {categories && categories.map((cate) => (
                                <option value={cate.id} key={cate.id}>
                                    {cate.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="description-area">
                    <textarea 
                        id="content-textarea"
                        style={{textAlign:'justify'}} 
                        value={content} 
                        onChange={(e) => { setContent(e.target.value) }} 
                        placeholder='Tell your story...'
                    ></textarea>
                </div>

                <div className="additional-info">
                    <h3>Your Drafts</h3>
                    <p>
                        You can access all your draft articles from your dashboard. Continue working on your existing drafts or create new content anytime.
                    </p>
                    <div className="draft-info">
                        <img src="https://img.icons8.com/?size=100&id=12115&format=png&color=5D5D5D" alt="draft-icon" />
                        <span>You have saved drafts</span>
                        <span className="draft-count">{loadDraftCards ? loadDraftCards.length : 0}</span>
                    </div>
                    <button onClick={() => navigate('/writer/article/draft')} className="view-drafts-btn">View all drafts</button>
                </div>
            </section>

          
        </div>
    )
}
