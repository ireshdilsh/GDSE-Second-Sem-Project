import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './src/pages/LandingPage'

import './src/index.css'
import Help from './src/pages/Help'

export default function Controller() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/help-center' element={<Help/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
