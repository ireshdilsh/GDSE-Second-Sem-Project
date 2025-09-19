import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  // Get user data from localStorage
  const storedUser = localStorage.getItem('userData');
  
  if (!storedUser) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};