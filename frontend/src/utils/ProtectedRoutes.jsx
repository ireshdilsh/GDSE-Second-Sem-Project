import axios from 'axios';
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

export default function ProtectedRoutes() {

    const authToken = localStorage.getItem('authToken');
    const navigate = useNavigate();

    if (!authToken) {
        navigate('/')
    }else{
        axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
        return <Outlet />
    }

  return (
    <div>
        
    </div>
  )
}
