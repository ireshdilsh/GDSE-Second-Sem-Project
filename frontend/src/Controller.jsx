import React from 'react'
import '../src/index.css'
import Landing from './pages/Landing'
import About from './pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Membership from './pages/Membership'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Dashboard from './pages/Dashboard'
import Write from './pages/Write'
import ProtectedRoutes from './utils/ProtectedRoutes'
import DrarfPage from './pages/DrarfPage'

export default function Controller() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Landing />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/membership' element={<Membership />}></Route>
                    <Route path='/privacy' element={<Privacy />}></Route>
                    <Route path='/terms' element={<Terms />}></Route>
                    <Route element={<ProtectedRoutes />}>
                        <Route path='/writer/dashboard' element={<Dashboard />}></Route>
                        <Route path='/writer/write' element={<Write />}></Route>
                        <Route path='/writer/article/draft' element={<DrarfPage/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
