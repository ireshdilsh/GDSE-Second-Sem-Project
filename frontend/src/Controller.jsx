import React from 'react'

import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'

export default function Controller() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
          <Route path='/goto/user/auth/signin' element = {<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
