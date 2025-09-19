import React, { useEffect, useState } from 'react';
import { useNavigate, type NavigateFunction } from 'react-router-dom';
import { type User } from '../types/User';
import axios from 'axios';

const MyStories = () => {
    const navigate: NavigateFunction = useNavigate();
    const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState<boolean>(false);

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
    const [loadArticles, setLoadArticles] = useState<any[]>([])

    useEffect(() => {
        loadProfile()
        loadAllArticlesAuthorByID()
    }, []);

    const loadAllArticlesAuthorByID = async () => {
        // Fix: Change 'userDat' to 'userData'
        const storedUser = localStorage.getItem('userData')
        if (!storedUser) {
            alert("You need to logging first get all articles")
            navigate('/dashboard')
            return;
        }

        const parsedUser = JSON.parse(storedUser)
        const id = parsedUser.id

        try {
            // Add authorization header with token
            const token = parsedUser.token;
            const resp = await axios.get(
                `http://localhost:8080/api/v1/articles/get/articles/author/${id}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
            setLoadArticles(resp.data.data)
            console.log(resp.data)
        } catch (error) {
            console.error("Error loading articles:", error)
            if (axios.isAxiosError(error) && error.response?.status === 401) {
                alert("Your session has expired. Please log in again.")
                localStorage.removeItem('userData')
                navigate('/')
            } else {
                alert("Cannot load articles by authorID")
            }
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
                            <span className="text-lg font-medium text-gray-700">My Stories</span>
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
                                                    LE
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900">{user?.name}</h3>
                                                    <p className="text-gray-600">{user?.email}</p>
                                                    <p className="text-sm text-blue-600">Writer since {new Date().getFullYear()}</p>
                                                </div>
                                            </div>

                                            {/* Navigation Menu */}
                                            <nav className="space-y-2">
                                                <button
                                                    onClick={() => navigate('/dashboard')}
                                                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3"
                                                >
                                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                    </svg>
                                                    <span className="text-gray-700">Dashboard</span>
                                                </button>

                                                <button
                                                    onClick={() => navigate('/my-stories')}
                                                    className="w-full text-left px-4 py-3 rounded-lg bg-blue-50 text-blue-700 transition-colors flex items-center space-x-3"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                    <span>My Stories</span>
                                                </button>

                                                <button
                                                    onClick={() => navigate('/drafts')}
                                                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3"
                                                >
                                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                    </svg>
                                                    <span className="text-gray-700">Drafts</span>
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
                                                </button>                                                <div className="border-t border-gray-200 my-2"></div>

                                                <button
                                                    onClick={() => navigate('/settings')}
                                                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3"
                                                >
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
                                                }} className="w-full text-left px-4 py-3 rounded-lg hover:bg-red-50 transition-colors flex items-center space-x-3 text-red-600">
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
                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">My Published Stories</h1>
                    <p className="text-gray-600">Manage and track your published articles</p>
                </div>

                {/* Info Message */}
                <div className="mb-8">
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <h3 className="text-lg font-medium text-blue-800 mb-2">Welcome to Your Story Collection!</h3>
                                <div className="text-blue-700">
                                    <p className="mb-3">
                                        This is where all your published stories will appear. Here you can:
                                    </p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center">
                                            <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            View and edit your published articles
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            Track views, likes, and engagement
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            Manage publication settings and visibility
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            Share your stories on social media
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-4">
                                    <button
                                        onClick={() => navigate('/write/article')}
                                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                                    >
                                        Write Your Owned Story
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                                    <h3 className="font-semibold text-gray-900">{user?.name || 'John Doe'}</h3>
                                    <p className="text-sm text-gray-500">{user?.email || 'john.doe@example.com'}</p>
                                    <p className="text-xs text-blue-600">Writer since {new Date().getFullYear()}</p>
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
                                    className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span>Drafts</span>
                                </button>

                                <button
                                    onClick={() => { navigate('/my-stories'); closeOffcanvas(); }}
                                    className="w-full flex items-center space-x-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-lg"
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

            <section id='my-stories'>
                {loadArticles.length > 0 ? (
                    loadArticles.map((article, index) => (
                        <div key={index} className="mt-5 relative">
                            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 max-w-4xl mx-auto">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                                        {user?.name ? user.name.substring(0, 2).toUpperCase() : 'JD'}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{article.title}</h3>
                                        <p className="text-gray-500 text-sm">By {article.authorName} • {article.estimatedReadTime || '5'} min read</p>
                                        <p className='text-gray-500 text-sm'>{article.publishedAt}</p>
                                    </div>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    {article.subtitle || article.subTitle}
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    {article.content?.substring(0, 200)}...
                                </p>
                                <p className='text-gray-800 leading-relaxed mt-5 text-sm pt-1 pl-2.5 pr-2.5 pb-1 bg-gray-200 rounded-2xl w-22 mb-6'>{article.status}</p>

                                <div className="p-6 border-t border-gray-200 flex items-center justify-between">
                                    <div className="flex items-center space-x-6">
                                        <span className="flex items-center space-x-2 text-gray-500">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                            <span>{article.likeCount}</span>
                                        </span>
                                        <span className="flex items-center space-x-2 text-gray-500">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                            <span>{article.viewCount}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    // Keep your existing empty state
                    <div className="text-center py-12">
                        <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">No Published Stories Yet</h2>
                        <p className="text-gray-600 mb-6 max-w-md mx-auto">
                            Once you publish your first story, it will appear here. Start writing and share your thoughts with the world!
                        </p>
                        <button
                            onClick={() => navigate('/write/article')}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
                        >
                            <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Create New Story
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default MyStories;