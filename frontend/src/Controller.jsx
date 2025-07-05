import React from 'react'

import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Landing from './pages/Landing'

export default function Controller() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
