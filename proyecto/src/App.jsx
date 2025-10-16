import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Categoria from './page/categoria'
import Login from './page/login'
import PaginaInicio from './page/paginaInicio'
import Registro from './page/registro'
import React from 'react'
import Ayuda from './page/ayuda'

import Silla from './page/silla'
import Poleras from './page/poleras'
import Polerones from './page/polerones'
import Mousepad from './page/mousepad'
import Mouse from './page/mouse'
import Consolas from './page/consolas'
import Computadora from './page/computadora'
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
        <Route path ="/computadora" element={<Computadora/>}/>
        <Route path ="/consolas" element={<Consolas/>}/>
        <Route path ="/mouse" element={<Mouse/>}/>
        <Route path ="/mousepad" element={<Mousepad/>}/>
        <Route path ="/polerones" element={<Polerones/>}/>
        <Route path ="/poleras" element={<Poleras/>}/>
        <Route path ="/silla" element={<Silla/>}/>
      
      </Routes>
    </BrowserRouter>
  )
}

export default App
