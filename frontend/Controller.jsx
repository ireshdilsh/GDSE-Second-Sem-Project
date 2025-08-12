import React from 'react'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import LandingPage from './src/pages/LandingPage'
import TermsAndConditions from './src/pages/TermsAndConditions'

export default function Controller() {
  return (
    <div>
        <BrowserRouter>
            <Router>
                <Route path='/' element = {<LandingPage/>}></Route>
                <Route path='/terms/and/conditions' element = {<TermsAndConditions/>}></Route>
            </Router>
        </BrowserRouter>
    </div>
  )
}
