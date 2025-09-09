import React from 'react'
import '../src/index.css'
import Landing from './pages/Landing'
import About from './pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Controller() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Landing/>}></Route>
                    <Route path='/about' element={<About/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
