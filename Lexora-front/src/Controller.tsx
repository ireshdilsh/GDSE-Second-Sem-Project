import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Help from './pages/Help'
import About from './pages/About'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Membership from './pages/Membership'
import Dashboard from './pages/Dashboard'

export default function Controller() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/help' element={<Help/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/privacy' element={<Privacy/>}/>
                <Route path='/terms' element={<Terms/>}/>
                <Route path='/membership' element={<Membership/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
