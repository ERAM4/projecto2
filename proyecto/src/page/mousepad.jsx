import React from 'react'
import '../styles/categorias.css'
import {Link} from 'react-router-dom' 
import Mousepad111 from '../images/mousepad111.jpg'
import Mousepad222 from '../images/mousepad222.jpg'
import Product from '../components/Product'

export default function mousepad() {
  return (
    <>
    <header>
        <h1> Mouse Pad  </h1>
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
        name="Mouse Pad Nicolas Cage "
        price={100000}
        description="Mouse pad de uno de los mas conocidos en la industria de las peliculas. "
        imageUrl={Mousepad111 }
        rating={7 }
        distribuidor="Nicolas Cage Productions"

    />
    <Product
        name="Mouse Pad WHAT IS LOVE? "
        price={349990}
        description="What is love? Oh, baby, don't hurt me Don't hurt me no more Oh, baby, don't hurt me Don't hurt me no more "
        imageUrl={Mousepad222 }
        rating={9 }
        distribuidor="Haddaway Inc"
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
