import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // 1. Buscamos el token en el almacenamiento local
  const token = localStorage.getItem("token");

  // 2. Si NO hay token, lo mandamos de vuelta al Login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // 3. Si hay token, lo dejamos ver la página protegida
  return children;
};

export default ProtectedRoute;