// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import WriterDashboard from './pages/WriterDashboard'
import WriteArticle from './pages/WriteArticle'
import Drafts from './pages/Drafts'
import Settings from './pages/Settings'
import MyStories from './pages/MyStories'
import Contact from './pages/Contact'

export default function Controller() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<WriterDashboard />} />
        <Route path='/write/article' element={<WriteArticle/>}></Route>
        <Route path='/drafts' element={<Drafts/>}></Route>
        <Route path='/my-stories' element={<MyStories/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/settings' element={<Settings/>}></Route>
      </Routes>
    </Router>
  )
}
