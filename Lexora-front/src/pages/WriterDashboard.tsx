import { useEffect, useState } from 'react';
import { useNavigate, type NavigateFunction } from 'react-router-dom';
import { type User } from '../types/User';
import axios from 'axios';

const WriterDashboard = () => {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredArticles, setFilteredArticles] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

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

  const navigate: NavigateFunction = useNavigate()

  const [user, setUser] = useState<User | null>(null);
  const [publishedArticles, setAllPublishedArticles] = useState<any[]>([])

  // Handle search functionality
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      // If search query is empty, show all articles
      setFilteredArticles(publishedArticles);
      return;
    }
    
    // Filter articles based on search query
    const filtered = publishedArticles.filter(article => 
      article.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
      article.subtitle?.toLowerCase().includes(searchQuery.toLowerCase()) || 
      article.content?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setFilteredArticles(filtered);
  };

  // Search when query changes
  useEffect(() => {
    handleSearch();
  }, [searchQuery, publishedArticles]);
  
  useEffect(() => {

    loadAllPublishedArticles()

    const storedUser = localStorage.getItem('userData');
    console.log("Retrieved from localStorage:", storedUser);

    if (storedUser) {
      try {
        const parsedUser: User = JSON.parse(storedUser);
        console.log("Parsed user data:", parsedUser);
        setUser({
          id: parsedUser.id,
          email: parsedUser.email,
          name: parsedUser.name,
          token: parsedUser.token,
          isLoggedIn: parsedUser.isLoggedIn
        });
      } catch (err) {
        console.error("Error parsing stored user:", err);
        localStorage.removeItem("userData");
        navigate("/");
      }
    } else {
      console.log("No user data found in localStorage");
      navigate("/");
    }
  }, [navigate]);

  const loadAllPublishedArticles = async () => {
    try {
      const resp = await axios.get("http://localhost:8080/api/v1/articles/get/published/articles")
      setAllPublishedArticles(resp.data.data)
      setFilteredArticles(resp.data.data) // Initialize filtered articles with all articles
    } catch (error) {
      alert("cannot load published articles")
      console.log(error)
    }
  }

  const increaseLikeCount = async(articleId:number) =>{
    try {
      const resp = await axios.post(`http://localhost:8080/api/v1/articles/like/article/${articleId}`)
      console.log(resp)
      loadAllPublishedArticles()
    } catch (error) {
      console.log(error)
    }
  }

  const increaseViewCount = async(articleId:number) =>{
    try {
      const resp = await axios.post(`http://localhost:8080/api/v1/articles/view/article/${articleId}`)
      console.log('Increase View Count ' + resp.data)
      loadAllPublishedArticles()
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
              {/* Menu Icon */}
              <button
                onClick={toggleOffcanvas}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">L</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">Lexora</span>
              </div>
              <span className="text-gray-400">|</span>
              <span className="text-lg font-medium text-gray-700">Writer Dashboard</span>
            </div>

            <div className="flex items-center space-x-4">
              <button onClick={() => { navigate('/write/article') }} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 cursor-pointer">
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
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="text-gray-700">Overview</span>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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
          className="fixed inset-0 z-40"
          onClick={closeProfile}
        ></div>
      )}

      {/* Article Detail Modal */}
      {isModalOpen && selectedArticle && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header with Close Button */}
              <div className="relative p-6 border-b border-gray-200">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {selectedArticle.authorName ? selectedArticle.authorName.substring(0, 2).toUpperCase() : 'JD'}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{selectedArticle.authorName}</h3>
                    <p className="text-gray-500 text-sm">
                      Published on {new Date(selectedArticle.createdDate || Date.now()).toLocaleDateString()} • 
                      {selectedArticle.estimatedReadTime || '5'} min read
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Modal Body */}
              <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedArticle.title}</h1>
                <h2 className="text-xl font-semibold text-gray-700 mb-6">
                  {selectedArticle.subtitle || selectedArticle.subTitle}
                </h2>
                <div className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {selectedArticle.content}
                  </p>
                </div>
              </div>
              
              {/* Modal Footer with Icons */}
              <div className="p-6 border-t border-gray-200 flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <span className="flex items-center space-x-2 text-gray-500" onClick={()=>increaseLikeCount(selectedArticle.id)} style={{ cursor: 'pointer' }}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>{selectedArticle.likeCount}</span>
                  </span>
                  <span className="flex items-center space-x-2 text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>{selectedArticle.viewCount}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="mb-0">
          <h2 className="text-2xl font-bold text-gray-900">Published Stories</h2>
          <p className="text-gray-600">Explore the latest stories from our writers</p>
        </div>

        {/* Search Bar */}
        <div className="mt-6 mb-0">
          <div className="relative max-w-md mx-auto md:mx-0">
            <input
              type="text"
              placeholder="Search stories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 pl-12 pr-10 border border-gray-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
            />
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button 
              onClick={handleSearch}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-blue-600 hover:text-blue-800"
            >
              <span className="text-sm font-medium">Search</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles && filteredArticles.map((article, index) => (
            <div key={index} className="mt-10 relative">
              <div className="bg-white rounded-2xl border border-gray-100 p-8 max-w-4xl min-h-98  mx-auto">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {article.authorName ? article.authorName.substring(0, 2).toUpperCase() : 'JD'}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{article.title}</h3>
                    <p className="text-gray-500 text-sm">By {article.authorName} • {article.estimatedReadTime || '5'} min read</p>
                    <p>{article.publishedAt}</p>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {article.subtitle || article.subTitle}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {article.content?.substring(0, 200)}...
                </p>
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
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
                  <button 
                    onClick={() => {
                      increaseViewCount(article.id);
                      setSelectedArticle(article);
                      setIsModalOpen(true);
                    }} 
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default WriterDashboard;