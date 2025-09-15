import React, { useEffect, useState, useRef } from 'react'
import '../styles/write.css'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function DrarfPage() {
    const [loadDraftCards, setLoadDraftCards] = useState([])
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [activeCardMenu, setActiveCardMenu] = useState(null); // Track which card's menu is open
    const profileRef = useRef(null);
    const cardMenuRef = useRef(null);
    const [userData, setUserData] = useState({
        firstName: 'User',
        lastName: '',
        username: '@user',
        email: 'user@example.com'
    });
    useEffect(() => {
        getAllArticlesByAuthor();

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

    const getDisplayName = () => {
        return userData.firstName && userData.lastName
            ? `${userData.firstName} ${userData.lastName}`
            : userData.firstName || 'User';
    };

    const toggleProfileMenu = (e) => {
        if (e) e.stopPropagation(); // Stop event propagation
        setShowProfileMenu(!showProfileMenu);
    };

    // Toggle the card menu
    const toggleCardMenu = (cardId, e) => {
        e.stopPropagation(); // Prevent event bubbling
        setActiveCardMenu(activeCardMenu === cardId ? null : cardId);
    };

    // Handle card actions
    const handleCardAction = (action, cardId, e) => {
        e.stopPropagation(); // Prevent event bubbling
        setActiveCardMenu(null); // Close the menu

        switch(action) {
            case 'view':
                // Navigate to view the article
                navigate(`/writer/article/view/${cardId}`);
                break;
            case 'edit':
                // Navigate to edit the article
                navigate(`/writer/article/edit/${cardId}`);
                break;
            case 'publish':
                // Confirm and publish the article
                Swal.fire({
                    title: 'Publish Article?',
                    text: "Are you sure you want to publish this article?",
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#1a8917',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, publish it!'
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        try {
                            const response = await axios.put(`http://localhost:8080/api/v1/articles/${cardId}/publish`);
                            
                            if (response.status === 200) {
                                Swal.fire({
                                    title: 'Published!',
                                    text: 'Your article has been published successfully.',
                                    icon: 'success',
                                    confirmButtonColor: '#1a8917'
                                });
                                
                                // Refresh the drafts list to update the UI
                                getAllArticlesByAuthor();
                            } else {
                                throw new Error('Failed to publish article');
                            }
                        } catch (error) {
                            console.error('Error publishing article:', error);
                            Swal.fire({
                                title: 'Publication Failed',
                                text: error.response?.data?.message || 'Could not publish the article. Please try again later.',
                                icon: 'error',
                                confirmButtonColor: '#1a8917'
                            });
                        }
                    }
                });
                break;
            case 'delete':

            Swal.fire({
                    title: 'Delete Article?',
                    text: "This action cannot be undone!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#d33',
                    cancelButtonColor: '#3085d6',
                    confirmButtonText: 'Yes, delete it!'
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        try {
                            const response = await axios.delete(`http://localhost:8080/api/v1/articles/${cardId}`);
                            
                            if (response.status === 200) {
                                Swal.fire({
                                    title: 'Deleted!',
                                    text: 'Your article has been deleted successfully.',
                                    icon: 'success',
                                    confirmButtonColor: '#1a8917'
                                });
                                
                                // Refresh the drafts list to update the UI
                                getAllArticlesByAuthor();
                            } else {
                                throw new Error('Failed to delete article');
                            }
                        } catch (error) {
                            console.error('Error deleting article:', error);
                            Swal.fire({
                                title: 'Deletion Failed',
                                text: error.response?.data?.message || 'Could not delete the article. Please try again later.',
                                icon: 'error',
                                confirmButtonColor: '#1a8917'
                            });
                        }
                    }
                });
                break;
            default:
                break;
        }
    };

    // Close profile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target) && showProfileMenu) {
                setShowProfileMenu(false);
            }
            if (cardMenuRef.current && !cardMenuRef.current.contains(event.target) && activeCardMenu !== null) {
                setActiveCardMenu(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showProfileMenu, activeCardMenu]);

    const navigate = useNavigate()

    return (
        <div>
            <div className='write-page'>
                <nav className="write-nav">
                    <div className="left-side" onClick={() => navigate('/writer/dashboard')}>
                        <h1><h3><h4>Lexora</h4></h3></h1>
                        <p>Draft</p>
                    </div>
                    <div className="right-side">
                        {/* <button onClick={handleSaveDraft}>Add to Draft</button> */}
                        <img src="https://img.icons8.com/?size=100&id=83989&format=png&color=5D5D5D" alt="notification-img" />
                        <div className="profile" ref={profileRef}>
                            <div className="profile-trigger" onClick={(e) => {
                                e.stopPropagation();
                                toggleProfileMenu(e);
                            }}>
                                <img src="https://img.icons8.com/?size=100&id=7819&format=png&color=5D5D5D" alt="profile-img" />
                                <span>{getDisplayName()}</span>
                            </div>
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
                        <p>Your article is directly saved to drafts as you write. This gives you time to review and correct any grammatical errors or improve content before publishing. Once ready, you can publish directly from your drafts. <Link to="/writer/write" className="writer-link">Create a new article</Link></p>
                    </div>
                </div>


                <section id='draft-cards'>

                    {loadDraftCards && loadDraftCards.map((draftCard) => (
                        <div className="card" key={draftCard.id}>
                            <div className="card-body">
                                <div className="card-actions">
                                    <img 
                                        src="https://img.icons8.com/?size=100&id=98963&format=png&color=333333" 
                                        alt="options-icon" 
                                        className="edit-icon" 
                                        onClick={(e) => toggleCardMenu(draftCard.id, e)}
                                    />
                                    {activeCardMenu === draftCard.id && (
                                        <div className="card-action-menu" ref={cardMenuRef}>
                                            <div className="card-action-item" onClick={(e) => handleCardAction('view', draftCard.id, e)}>
                                                <img src="https://img.icons8.com/?size=100&id=11779&format=png&color=333333" alt="view" />
                                                <span>View</span>
                                            </div>
                                            <div className="card-action-item" onClick={(e) => handleCardAction('edit', draftCard.id, e)}>
                                                <img src="https://img.icons8.com/?size=100&id=12082&format=png&color=333333" alt="edit" />
                                                <span>Edit</span>
                                            </div>
                                            <div className="card-action-item" onClick={(e) => handleCardAction('publish', draftCard.id, e)}>
                                                <img src="https://img.icons8.com/?size=100&id=12148&format=png&color=333333" alt="publish" />
                                                <span>Publish</span>
                                            </div>
                                            <div className="card-action-item delete" onClick={(e) => handleCardAction('delete', draftCard.id, e)}>
                                                <img src="https://img.icons8.com/?size=100&id=67884&format=png&color=333333" alt="delete" />
                                                <span>Delete</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <h1>{draftCard.title}</h1>
                                <h3>{draftCard.subtitle}</h3>
                                <h5>{draftCard.createdAt}</h5>
                                <h5>Astimated Reading Time: {draftCard.readTime}</h5>
                                <p id='categoryName'>{draftCard.categoryName}</p>
                                <p>{draftCard.content}</p>
                            </div>
                        </div>
                    ))}
                    {/* </div> */}
                </section>
            </div>
        </div>
    )
}
