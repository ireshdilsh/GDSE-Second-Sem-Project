import React from 'react'
import '../src/index.css'
import Landing from './pages/Landing'
import About from './pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Membership from './pages/Membership'

export default function Controller() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Landing/>}></Route>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='/membership' element={<Membership/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
