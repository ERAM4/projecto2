import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Categoria from './page/categoria'
import Login from './page/login'
import PaginaInicio from './page/paginaInicio'
import Registro from './page/registro'
import React from 'react'
import Ayuda from './page/ayuda'

import Juegodemesa from './page/juegodemesa'
import Accesorios from './page/accesorios'
import Carrito from './page/carrito'
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
        <Route path ="/carrito" element={<Carrito/>}/>
        <Route path ="/accesorios" element={<Accesorios/>}/>
        <Route path ="/juegodemesa" element={<Juegodemesa/>}/>
      
      </Routes>
    </BrowserRouter>
  )
}

export default App
