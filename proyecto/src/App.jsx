import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Categoria from './page/categoria'
import Login from './page/login'
import PaginaInicio from './page/paginaInicio'
import Registro from './page/registro'
import React from 'react'
import Ayuda from './page/ayuda'

import './App.css'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registro" element={<Registro/>} />
        <Route path="/categoria" element={<Categoria/>} />
        <Route path="/ayuda" element={<Ayuda/>} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
