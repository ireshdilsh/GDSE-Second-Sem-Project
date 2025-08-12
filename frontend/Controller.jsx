import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './src/pages/LandingPage'
import TermsAndConditions from './src/pages/TermsAndConditions'

export default function Controller() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<LandingPage/>}></Route>
                <Route path='/terms/and/conditions' element = {<TermsAndConditions/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
