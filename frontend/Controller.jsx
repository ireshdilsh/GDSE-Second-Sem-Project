import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './src/pages/LandingPage'
import SignInPage from './src/pages/SignInPage'
import SignUpPage from './src/pages/SignUpPage'
import TermsAndConditions from './src/pages/TermsAndConditions'
import PrivacyPolicy from './src/pages/PrivacyPolicy'
import PricingPage from './src/pages/PricingPage'
import SuccessStoriesPage from './src/pages/SuccessStoriesPage'
import EventsPage from './src/pages/EventsPage'
import BlogPage from './src/pages/BlogPage'
import AdminPage from './src/pages/AdminPage'
import Blog from './src/pages/admin/pages/Blog'
import Customer from './src/pages/admin/pages/Customer'
import Order from './src/pages/admin/pages/Order'
import Product from './src/pages/admin/pages/Product'
import Event from './src/pages/admin/pages/Event'

export default function Controller() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/signin' element={<SignInPage />}></Route>
          <Route path='/signup' element={<SignUpPage />}></Route>
          <Route path='/terms' element={<TermsAndConditions />}></Route>
          <Route path='/privacy' element={<PrivacyPolicy />}></Route>
          <Route path='/pricing' element={<PricingPage />}></Route>
          <Route path='/success-stories' element={<SuccessStoriesPage />}></Route>
          <Route path='/events' element={<EventsPage />}></Route>
          <Route path='/blog' element={<BlogPage />}></Route>
          <Route path='/admin' element={<AdminPage />}></Route>

          {/* Admin for page paths */}
          <Route path='/admin/event' element={<Event />}></Route>
          <Route path='/admin/customer' element={<Customer />}></Route>
          <Route path='/admin/blog' element = {<Blog/>}></Route>
          <Route path='/admin/orders' element={<Order />}></Route>
          <Route path='/admin/product' element={<Product />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}
