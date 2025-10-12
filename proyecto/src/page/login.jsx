import React from 'react'
import {Link} from 'react-router-dom'

export default function login() {
  return (
    <>
    <header>
        <h1> Login a la cuenta </h1>
        <nav>

    <Link to = "/">
        <button className='btnInicio'>Inicio</button>
    </Link>        
            <Link to = "/ayuda">
        <button className='btnAyuda'>Ayuda</button>
    </Link>
    <Link to = "/categoria">
        <button className='btnCategoria'>Categorias</button>
    </Link>
    
    <Link to = "/registro">
        <button className='btnRegistro'>Registro</button>
    </Link>

        </nav>
    </header>
    <footer>
    <p>© 2025 Level-UP Gamer
    <br />
        Para Ayuda:</p>
    <a href="https://www.facebook.com/henrycavill/" >Facebook</a>
    &nbsp;| &nbsp;
    <a href="https://www.instagram.com/henrycavill/" >Instagram</a>
    &nbsp;| &nbsp;
    <a href="https://wa.me/56912345678" >Whatsaap</a>



</footer>
    </>
  )
}
