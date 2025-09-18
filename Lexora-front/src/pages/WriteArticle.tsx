import React, { useEffect, useState } from 'react'
import { useNavigate, type NavigateFunction } from 'react-router-dom'
import '../style/WriteArticle.css'
import { type User } from '../types/User';
import { type Write } from '../types/Write';
import axios from 'axios';

export default function WriteArticle() {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState<boolean>(false);
  const navigate: NavigateFunction = useNavigate();

  const [categories, setCategories] = useState<any[]>([]);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getAllCategories();
    loadProfile()
  }, []);

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

  const getAllCategories = async () => {
    try {
      const resp = await axios.get("http://localhost:8080/api/v1/category/get/all/categories")
      setCategories(resp.data.data);
      console.log(resp.data.data);
    } catch (error) {
      console.log(error);
    }
  }

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

  // Write Articles For useStates
  const [title, setTitle] = useState<Write["title"]>('');
  const [subtitle, setSubtitle] = useState<Write["subTitle"]>('');
  const [content, setContent] = useState<Write["content"]>('');
  const [categoryID, setCategoryID] = useState<Write["categoryID"]>(0);

  const saveArticleInDraft = async (e: any) => {
    e.preventDefault();

    const storedUser = localStorage.getItem('userData');
    if (!storedUser) {
      alert("You need to be logged in to save articles");
      navigate('/');
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    const id = parsedUser.id;
    const token = parsedUser.token;

    const newArticle: Write = {
      title,
      subTitle: subtitle,
      content,
      categoryID,
      authorID: id
    }

    try {
      // Include the authentication token in the request header
      const resp = await axios.post<Write>(
        "http://localhost:8080/api/v1/articles/add/new/article",
        newArticle,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      console.log(resp.data)
      alert("Article saved in Drafts successfully!")
      setTitle('');
      setSubtitle('');
      setContent('');
      setCategoryID(0);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        alert("Your session has expired. Please log in again.");
        localStorage.removeItem('userData');
        navigate('/');
      } else {
        alert("Something went wrong while saving the article in Drafts.");
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
              {/* Menu Icon */}
              <button
                onClick={toggleOffcanvas}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              <div className="flex items-center space-x-2 cursor-pointer" onClick={() => { navigate('/dashboard') }}>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">L</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">Lexora</span>
              </div>
              <span className="text-gray-400">|</span>
              <span className="text-lg font-medium text-gray-700">Write New Article</span>
            </div>

            <div className="flex items-center space-x-4">
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

      {/* Offcanvas Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-xl transform ${isOffcanvasOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col h-full">
          {/* Offcanvas Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Menu</h2>
            <button
              onClick={closeOffcanvas}
              className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Profile Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {user?.name ? user.name.substring(0, 2).toUpperCase() : 'JD'}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{user?.name}</h3>
                <p className="text-gray-600">{user?.email}</p>
                <p className="text-sm text-blue-600">Writer since {new Date().getFullYear()}</p>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="flex-1 p-6 overflow-y-auto">
            <nav className="space-y-2">
              <button onClick={() => { navigate('/dashboard'); closeOffcanvas(); }} className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="text-gray-700">Dashboard</span>
              </button>

              <button onClick={() => { navigate('/my-stories'); closeOffcanvas(); }} className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-gray-700">My Stories</span>
              </button>

              <button onClick={() => { navigate('/drafts'); closeOffcanvas(); }} className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-700">Drafts</span>
              </button>

              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 712-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="text-gray-700">Analytics</span>
              </button>

              <button onClick={() => { navigate('/contact'); closeOffcanvas(); }} className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-700">Contact Us</span>
              </button>

              <div className="border-t border-gray-200 my-4"></div>

              <button onClick={() => { navigate('/settings'); closeOffcanvas(); }} className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-700">Settings</span>
              </button>

              <button onClick={() => { navigate('/'); closeOffcanvas(); }} className="w-full text-left px-4 py-3 rounded-lg hover:bg-red-50 transition-colors flex items-center space-x-3 text-red-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>Sign Out</span>
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Offcanvas Overlay */}
      {isOffcanvasOpen && (
        <div
          className="fixed inset-0 z-40"
          style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
          onClick={closeOffcanvas}
        ></div>
      )}

      {/* Overlay to close dropdown */}
      {isProfileOpen && (
        <div
          className="fixed inset-0 z-40 "
          onClick={closeProfile}
        ></div>
      )}

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white rounded-xl p-8 md:p-12 space-y-8 backdrop-blur-lg ">
          {/* Info Message for Drafts */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Manage Your Drafts
                </h3>
                <p className="text-blue-800 mb-4">
                  Need to edit, publish, or delete your existing articles? Visit your drafts page to manage all your saved articles in one place.
                </p>
                <button
                  onClick={() => navigate('/drafts')}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View My Drafts
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <label htmlFor="title" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Article Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="title"
              name="title"
              className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl text-lg font-semibold bg-gray-50 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:bg-white transition-all duration-300 hover:border-gray-300 hover:bg-white transform focus:-translate-y-0.5"
              placeholder="Enter your article title..."
            />
          </div>

          <div className="space-y-3">
            <label htmlFor="subtitle" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Subtitle
            </label>
            <input
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              type="text"
              id="subtitle"
              name="subtitle"
              className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl text-lg bg-gray-50 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:bg-white transition-all duration-300 hover:border-gray-300 hover:bg-white transform focus:-translate-y-0.5"
              placeholder="A brief description of your article..."
            />
          </div>

          <div className="space-y-3">
            <label htmlFor="category" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Category
            </label>
            <select
              value={categoryID || ""}
              onChange={(e) => setCategoryID(Number(e.target.value))}
              id="category"
              name="category"
              className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl text-lg bg-gray-50 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:bg-white transition-all duration-300 hover:border-gray-300 hover:bg-white cursor-pointer"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-3">
            <label htmlFor="content" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Article Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              id="content"
              name="content"
              rows={16}
              className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl text-base leading-relaxed bg-gray-50 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:bg-white transition-all duration-300 hover:border-gray-300 hover:bg-white resize-y min-h-[300px] font-serif"
              placeholder="Start writing your article here..."
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-end pt-8 border-t border-gray-200">
            <button
              onClick={saveArticleInDraft}
              type="button"
              className="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:bg-gray-200 hover:text-gray-800 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 uppercase tracking-wide text-sm"
            >
              Save Draft
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
