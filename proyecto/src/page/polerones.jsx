import React from 'react'
import '../styles/categorias.css'
import {Link} from 'react-router-dom' 
import Poleron111 from '../images/poleron111.jpg'
import Poleron222 from '../images/poleron222.jpg'
import Product from '../components/Product'

export default function polerones() {
  return (
    <>
    <header>
        <h1> Polerones Gamers Personalizados  </h1>
        <nav>
        <Link to = "/ayuda">
        <button className='btnAyuda'>Ayuda</button>
    </Link>
    <Link to = "/">
        <button className='btnInicio'>Inicio</button>
    </Link>
    <Link to = "/registro">
        <button className='btnRegistro'>Registro</button>
    </Link>
    <Link to = "/login">
        <button className='btnLogin'>Login</button>
    </Link>
    <Link to = "/categoria">
        <button className='btnCategoria'>Categorias</button>
    </Link>
    <Link to = "/carrito">
        <button className='btnCarrito'>carrito</button>
    </Link>
            

        </nav>
    </header>

    <Product
        name="Poleron Gamer Nintendo 64 "
        price={49990}
        description="Poleron Gamer de la famosa consola Nintendo 64."
        imageUrl={Poleron111 }
    />
    <Product
        name="Poleron Gamer de Shrek"
        price={39990}
        description="Poleron Gamer del famoso Shrek, waos. "
        imageUrl={Poleron222 }
    />


    

    <footer>
    <p>© 2025 Level-UP Gamer
    <br />
        Para Ayuda:</p>
    <p>Redes Sociales:<a href="https://www.facebook.com/henrycavill/" >Facebook</a>
    &nbsp;| &nbsp;
    <a href="https://www.instagram.com/henrycavill/" >Instagram</a> </p>
    <p>Contacto:<a href="https://wa.me/56912345678" >Whatsaap</a> </p>
    



</footer>
</>
  )
}
