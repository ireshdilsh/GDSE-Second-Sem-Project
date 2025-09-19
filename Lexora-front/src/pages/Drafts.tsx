import { useEffect, useState } from 'react'
import { useNavigate, type NavigateFunction } from 'react-router-dom'
import { type User } from '../types/User';
import axios from 'axios';

export default function Drafts() {
    const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState<boolean>(false);
    const navigate: NavigateFunction = useNavigate();

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    const closeProfile = () => {
        setIsProfileOpen(false);
    };

    const toggleOffcanvas = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
    };

    const closeOffcanvas = () => {
        setIsOffcanvasOpen(false);
    };

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        loadProfile()
        loadDraftArticlesWithAuthorID()
    }, []);

    const [draftArticles, setDraftArticles] = useState<any[]>([])

    const loadDraftArticlesWithAuthorID = async () => {
        const storedUser = localStorage.getItem('userData');

        if (!storedUser) {
            alert("You need to be logged in to save articles");
            navigate('/');
            return;
        }

        const parsedUser = JSON.parse(storedUser);
        const id = parsedUser.id;
        const token = parsedUser.token;

        try {
            const resp = await axios.get(`http://localhost:8080/api/v1/articles/get/draft/articles/author/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            setDraftArticles(resp.data.data)
            console.log(resp.data)
        } catch (error) {
            console.log(error)
        }
    }

    const loadProfile = async () => {
        const storedUser = localStorage.getItem('userData');
        console.log("Retrieved from localStorage for WriteArticlePage:", storedUser);

        if (storedUser) {
            try {
                const parsedUser: User = JSON.parse(storedUser);
                console.log("Parsed User in Article page in write:", parsedUser);
                setUser({
                    id: parsedUser.id,
                    email: parsedUser.email,
                    name: parsedUser.name,
                    token: parsedUser.token,
                    isLoggedIn: parsedUser.isLoggedIn
                })
            } catch (error) {
                console.error("Error parsing stored user:", error);
                localStorage.removeItem("userData");
                navigate("/");
            }
        }
    }

    const publishArticle = async (articleId: number) => {
        try {
            const resp = await axios.put(`http://localhost:8080/api/v1/articles/publish/article/${articleId}`)
            console.log(resp)
            alert('Article published successfully')
            loadDraftArticlesWithAuthorID()
        } catch (error) {
            console.log(error)
        }
    }

    const deleteArticle = async (articleId: number) => {
        try {
            const resp = await axios.delete(`http://localhost:8080/api/v1/articles/delete/article/${articleId}`)
            console.log(resp)
            alert('Article Delete Successfully !')
            loadDraftArticlesWithAuthorID()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => { navigate('/dashboard') }}>
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">L</span>
                                </div>
                                <span className="text-2xl font-bold text-gray-900">Lexora</span>
                            </div>
                            <span className="text-gray-400">|</span>
                            <span className="text-lg font-medium text-gray-700">My Drafts</span>
                        </div>

                        <div className="flex items-center space-x-4">
                            {/* Menu Icon */}
                            <button
                                onClick={toggleOffcanvas}
                                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                            >
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>

                            <button
                                onClick={() => navigate('/write/article')}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
                            >
                                <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                New Story
                            </button>

                            {/* Notification Icon */}
                            <div className="relative">
                                <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                    {/* Notification Badge */}
                                    <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                                        3
                                    </span>
                                </button>
                            </div>

                            <div className="relative">
                                <button
                                    onClick={toggleProfile}
                                    className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold hover:shadow-lg transition-all duration-300"
                                >
                                    {user?.name ? user.name.substring(0, 2).toUpperCase() : 'JD'}
                                </button>

                                {/* Profile Dropdown */}
                                {isProfileOpen && (
                                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 z-50">
                                        <div className="p-6">
                                            {/* Profile Header */}
                                            <div className="flex items-center space-x-4 mb-6">
                                                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                                    {user?.name ? user.name.substring(0, 2).toUpperCase() : 'JD'}
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900">{user?.name}</h3>
                                                    <p className="text-gray-600">{user?.email}</p>
                                                    <p className="text-sm text-blue-600">Writer since {new Date().getFullYear()}</p>
                                                </div>
                                            </div>

                                            {/* Navigation Menu */}
                                            <nav className="space-y-2">
                                                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3">
                                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                    </svg>
                                                    <span className="text-gray-700">Overview</span>
                                                </button>

                                                <button onClick={() => { navigate('/my-stories') }} className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3">
                                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                    <span className="text-gray-700">My Stories</span>
                                                </button>

                                                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3">
                                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                    </svg>
                                                    <span className="text-gray-700">Analytics</span>
                                                </button>

                                                <button
                                                    onClick={() => navigate('/contact')}
                                                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3"
                                                >
                                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                    <span className="text-gray-700">Contact Us</span>
                                                </button>

                                                <div className="border-t border-gray-200 my-2"></div>

                                                <button onClick={() => { navigate('/settings') }} className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3">
                                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    <span className="text-gray-700">Settings</span>
                                                </button>

                                                <button onClick={() => {
                                                    navigate('/')
                                                    localStorage.removeItem('userData')
                                                    console.log('remove userData')
                                                }}
                                                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-red-50 transition-colors flex items-center space-x-3 text-red-600">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                    </svg>
                                                    <span>Sign Out</span>
                                                </button>
                                            </nav>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Overlay to close dropdown */}
            {isProfileOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={closeProfile}
                ></div>
            )}

            {/* Main Content */}
            <div className="max-w-6xl mx-auto p-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">My Drafts</h1>
                    <p className="text-gray-600">Manage your draft articles - edit, publish, or delete them</p>
                </div>
            </div>

            {draftArticles && draftArticles.map((article) => (
                <div className="mt-5 relative">
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 max-w-4xl mx-auto">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                            <div>
                                <h3 className="font-semibold text-gray-900">{article.title}</h3>
                                <p className="text-gray-500 text-sm">By {article.authorName} • {article.estimatedReadTime} min read</p>
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            {article.subTitle}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            {article.content}
                        </p>
                        <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                            <button className="text-blue-600 hover:text-blue-800 font-medium" onClick={() => publishArticle(article.id)}>Publish Article</button>
                            <button className='text-red-500 hover:text-red-700' onClick={() => deleteArticle(article.id)}>Delete Article</button>
                            <p className='text-gray-500 text-sm'>Created at : {article.createdAt}</p>
                        </div>
                    </div>
                </div>
            ))}

            {/* Offcanvas Sidebar */}
            {isOffcanvasOpen && (
                <div className="fixed inset-0 z-50">
                    {/* Overlay */}
                    <div
                        className="absolute inset-0"
                        style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
                        onClick={closeOffcanvas}
                    ></div>

                    {/* Sidebar */}
                    <div className="absolute left-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300">
                        {/* Close Button */}
                        <button
                            onClick={closeOffcanvas}
                            className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                        >
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Profile Section */}
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                                    {user?.name ? user.name.substring(0, 2).toUpperCase() : 'JD'}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">{user?.name}</h3>
                                    <p className="text-sm text-gray-500">{user?.email}</p>
                                    <p className="text-sm text-blue-600">Writer since {new Date().getFullYear()}</p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Menu */}
                        <div className="p-4">
                            <nav className="space-y-2">
                                <button
                                    onClick={() => { navigate('/dashboard'); closeOffcanvas(); }}
                                    className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 1v6h8V1" />
                                    </svg>
                                    <span>Dashboard</span>
                                </button>

                                <button
                                    onClick={() => { navigate('/write/article'); closeOffcanvas(); }}
                                    className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                    <span>Write Article</span>
                                </button>

                                <button
                                    onClick={() => { navigate('/drafts'); closeOffcanvas(); }}
                                    className="w-full flex items-center space-x-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-lg"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span>Drafts</span>
                                </button>

                                <button
                                    onClick={() => { navigate('/my-stories'); closeOffcanvas(); }}
                                    className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                    <span>My Stories</span>
                                </button>

                                <button
                                    onClick={() => { navigate('/settings'); closeOffcanvas(); }}
                                    className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>Settings</span>
                                </button>

                                <button
                                    onClick={() => { navigate('/contact'); closeOffcanvas(); }}
                                    className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span>Contact Us</span>
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}