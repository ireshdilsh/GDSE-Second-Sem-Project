import axios from 'axios';
import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom';

export default function ProtectedRoutes() {

  const authToken = localStorage.getItem('authToken');
  const userData = localStorage.getItem('userData');

  useEffect(() => {
    if (authToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
    }
  }, [authToken]);

  // If no token or userData, immediately redirect to landing page
  if (!authToken || !userData) {
    return <Navigate to="/" replace />;
  }

  // If token and userData exist, render the protected routes
  return <Outlet />;
}