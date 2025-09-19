import React, { useEffect, useState } from 'react';
import { useNavigate, type NavigateFunction } from 'react-router-dom';
import axios from "axios";
import { type ContactDetails } from '../types/ContactDetails';
import { type User } from '../types/User';

const Contact = () => {
    const navigate: NavigateFunction = useNavigate();
    const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState<boolean>(false);

    // useStates for Contact Form
    const [firstName, setirstName] = useState<ContactDetails["firstName"]>("")
    const [lastName, setastName] = useState<ContactDetails["lastName"]>("")
    const [email, setEmail] = useState<ContactDetails["email"]>("")
    const [phone, setPhone] = useState<ContactDetails["phone"]>(0)
    const [subject, setSubject] = useState<ContactDetails["subject"]>("")
    const [message, setMessage] = useState<ContactDetails["message"]>("")

    const sendContactRequest = async (e: any) => {
        e.preventDefault()

        if (!phone.toString().match(/^(?:7)[01245678]{1}[0-9]{7}|(0|(?:\+94))[7]{1}[01245678]{1}[0-9]{7}$/gm)) {
            alert("Please enter a valid phone number.")
            return
        }

        const data: ContactDetails = {
            firstName, lastName, email, phone, subject, message
        }

        try {
            const resp = axios.post<ContactDetails>("http://localhost:8080/api/v1/contacts/send/contact/request", data)
            console.log((await resp).data)
            clearFields()
            alert("success")
        } catch (error) {
            console.log(error);
            clearFields()
            alert("Failed to send message. Please try again later.");
        }
    }

    const clearFields = () => {
        setirstName('')
        setastName('')
        setEmail('')
        setPhone(0)
        setSubject('')
        setMessage('')
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

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
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
                            <span className="text-lg font-medium text-gray-700">Contact Us</span>
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
                                                    <h3 className="text-xl font-bold text-gray-900">{user?.name || 'John Doe'}</h3>
                                                    <p className="text-gray-600">{user?.email || 'john.doe@example.com'}</p>
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
                                                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3"
                                                >
                                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                    <span className="text-gray-700">My Stories</span>
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

                                                <button
                                                    onClick={() => navigate('/contact')}
                                                    className="w-full text-left px-4 py-3 rounded-lg bg-blue-50 text-blue-700 transition-colors flex items-center space-x-3"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                    <span>Contact Us</span>
                                                </button>

                                                <div className="border-t border-gray-200 my-2"></div>

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
            <div className="max-w-4xl mx-auto p-8">
                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h1>
                    <p className="text-gray-600">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                </div>

                {/* Info Message */}
                <div className="mb-8">
                    <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <h3 className="text-lg font-medium text-green-800 mb-2">Get in Touch!</h3>
                                <div className="text-green-700">
                                    <p className="mb-3">
                                        Have questions, suggestions, or need support? We're here to help! Our team typically responds within 24 hours.
                                    </p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center">
                                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            General inquiries and support
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            Feature requests and feedback
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            Technical issues and bug reports
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            Partnership and collaboration opportunities
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-xl overflow-hidden">
                    <div className="px-8 py-6">
                        <div className="flex items-center space-x-3 mb-6">
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <h2 className="text-2xl font-bold text-gray-800">Send us a Message</h2>
                        </div>

                        <form className="space-y-6">
                            {/* Personal Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                                    <input
                                        value={firstName}
                                        onChange={(e) => { setirstName(e.target.value) }}
                                        type="text"
                                        placeholder="Enter your first name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                                    <input
                                        value={lastName}
                                        onChange={(e) => { setastName(e.target.value) }}
                                        type="text"
                                        placeholder="Enter your last name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                    <input
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        type="email"
                                        placeholder="your.email@example.com"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        value={phone}
                                        onChange={(e) => { setPhone(Number(e.target.value)) }}
                                        type="tel"
                                        placeholder="011 123 4561"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                                <select value={subject} onChange={(e) => { setSubject(e.target.value) }} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
                                    <option value="">Select a subject</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="support">Technical Support</option>
                                    <option value="feedback">Feedback & Suggestions</option>
                                    <option value="bug">Bug Report</option>
                                    <option value="partnership">Partnership</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                                <textarea
                                    value={message}
                                    onChange={(e) => { setMessage(e.target.value) }}
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Tell us how we can help you..."
                                    required
                                />
                                <p className="text-sm text-gray-500 mt-1">Please provide as much detail as possible</p>
                            </div>

                            {/* Priority Level */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Priority Level</label>
                                <div className="flex space-x-4">
                                    <label className="flex items-center">
                                        <input type="radio" name="priority" value="low" className="text-blue-600" />
                                        <span className="ml-2 text-sm text-gray-700">Low</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="priority" value="medium" className="text-blue-600" defaultChecked />
                                        <span className="ml-2 text-sm text-gray-700">Medium</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="priority" value="high" className="text-blue-600" />
                                        <span className="ml-2 text-sm text-gray-700">High</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="priority" value="urgent" className="text-blue-600" />
                                        <span className="ml-2 text-sm text-gray-700">Urgent</span>
                                    </label>
                                </div>
                            </div>

                            {/* Newsletter Subscription */}
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="newsletter"
                                    className="rounded text-blue-600 focus:ring-blue-500"
                                />
                                <label htmlFor="newsletter" className="ml-2 text-sm text-gray-700">
                                    Subscribe to our newsletter for updates and writing tips
                                </label>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4 border-t border-gray-200">
                                <button
                                    onClick={sendContactRequest}
                                    type="submit"
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
                                >
                                    <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                    Send Message
                                </button>
                                <p className="text-sm text-gray-500 mt-2">
                                    By sending this message, you agree to our terms of service and privacy policy.
                                </p>
                            </div>
                        </form>
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
                                    className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
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
                                    className="w-full flex items-center space-x-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-lg"
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
    );
};

export default Contact;