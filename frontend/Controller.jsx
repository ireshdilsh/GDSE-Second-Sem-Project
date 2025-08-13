import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './src/pages/LandingPage'
import TermsAndConditions from './src/pages/TermsAndConditions'
import PricingPage from './src/pages/PricingPage'
import CareersPage from './src/pages/CareersPage'
import PartnersPage from './src/pages/PartnersPage'
import BlogsPage from './src/pages/BlogsPage'
import PressPage from './src/pages/PressPage'
import AboutUsPage from './src/pages/AboutUsPage'
import SuccessStoriesPage from './src/pages/SuccessStoriesPage'

export default function Controller() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<LandingPage/>}></Route>
                <Route path='/terms/and/conditions' element = {<TermsAndConditions/>}></Route>
                <Route path='/pricing' element = {<PricingPage/>}></Route>
                <Route path='/career' element = {<CareersPage/>}></Route>
                <Route path='/partners' element = {<PartnersPage/>}></Route>
                <Route path='/blogs' element = {<BlogsPage/>}></Route>
                <Route path='/press' element = {<PressPage/>}></Route>
                <Route path='/about' element = {<AboutUsPage/>}></Route>
                <Route path='/success/stories' element = {<SuccessStoriesPage/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
