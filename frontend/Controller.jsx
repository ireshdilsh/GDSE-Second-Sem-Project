import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './src/pages/LandingPage'
import HelpCenter from './src/pages/HelpCenter'
import PrivacyPolicy from './src/pages/PrivacyPolicy'
import TermsOfService from './src/pages/TermsOfService'
import RefundPolicy from './src/pages/RefundPolicy'
import FAQs from './src/pages/FAQs'
import './src/index.css'

export default function Controller() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/help' element={<HelpCenter />}></Route>
          <Route path='/privacy' element={<PrivacyPolicy />}></Route>
          <Route path='/terms' element={<TermsOfService />}></Route>
          <Route path='/refund' element={<RefundPolicy />}></Route>
          <Route path='/faqs' element={<FAQs />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
