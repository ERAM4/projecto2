import React from 'react'

import {Link} from 'react-router-dom' 
import Silla111 from '../images/silla111.jpg'
import Silla222 from '../images/silla222.jpg'

import Product from '../components/Product'


export default function silla() {
  return (
    <>
    <header>
        <h1> Sillas  </h1>
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
        <button className='btnCarrito'>🛒</button>
    </Link>
            

        </nav>
    </header>

    <Product
        name="Silla Game Cockpit de Oficina y Juego, Ergonómica, Diseño Scorpion de Cápsula Espacial, para Computadora y Ver Video "
        price={9931641}
        description="Una silla gaming for cabina de ordenador con forma de escorpión adecuada for 
        jugadores profesionales y trabajadores de oficina, que puede colgar hasta 3 pantallas 
        y tiene una tira de luz RGB ajustable de 16 colores incorporada en la cabina. "
        imageUrl={Silla111 }
        rating={9}
        distribuidor="SpaceX Incorporated"
        />
    <Product
        name="Silla Gamer Premium "
        price={100000}
        description="Una silla gaming Premium de un plastico resistente y de la mas alta calidad, perfecta para jugar y descansar, la silla perfecta para todo. "
        imageUrl={Silla222 }
        rating={8}
        distribuidor="Level-UP Gamer Co."
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
