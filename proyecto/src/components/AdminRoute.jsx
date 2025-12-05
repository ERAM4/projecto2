import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const usuarioString = localStorage.getItem("usuario");
  let usuario = null;

  // Intentamos leer el usuario guardado
  if (usuarioString) {
    usuario = JSON.parse(usuarioString);
  }

  console.log("🔍 AdminRoute revisando usuario:", usuario); // <--- MIRA LA CONSOLA (F12)

  // 1. Si no hay token, fuera.
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // 2. Verificación de ROL
  // A veces el backend manda "rol" y otras veces "role". Revisamos ambos.
  const userRole = usuario?.rol || usuario?.role; 

  if (userRole !== "ADMIN") {
    alert(`⛔ Acceso denegado. Tu rol es: ${userRole}`);
    return <Navigate to="/" replace />;
  }

  // 3. Si es Admin, pasa.
  return children;
};

export default AdminRoute;