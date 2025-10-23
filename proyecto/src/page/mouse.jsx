import React from 'react'

import {Link} from 'react-router-dom' 
import Mouse111 from '../images/mouse111.jpg'
import Mouse222 from '../images/mouse222.jpg'
import Product from '../components/Product'

export default function mouse() {
  return (
    <>
    <header>
        <h1> Mouse Gamer  </h1>
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
    <Link to = "/perfil">
        <button className='btnPerfil'>Perfil</button>
    </Link>
            

        </nav>
    </header>
<div className="productosEnCategoria">
    <Product 
    name="Razer Cobra Pro "
    price={152990}
    description="El Razer Cobra Pro Blanco es un ratón gaming inalámbrico diseñado para ofrecer un
     rendimiento excepcional y una personalización avanzada. Con 10 botones personalizables 
     y un sensor óptico Razer Focus Pro de 30,000 PPP, este ratón proporciona precisión 
     y control en cada movimiento. Su diseño ligero de 77 gramos y las 11 zonas de iluminación
      Chroma RGB con iluminación inferior completa añaden una experiencia visual envolvente. "
    imageUrl={Mouse111 }
    rating={5}
    distribuidor="Razer"
    />
    <Product
    name="Logitech G502 X Plus - Black (910-006161)"
    price={141990}
    description=" Diseñado para un desempeño avanzado en los juegos. G502 X Plus
        cuenta con un sensor de juegos HERO 25K con seguimiento de precisión submicrométrica,
        LIGHTSYNC RGB personalizable, perfiles integrados, pesos reposicionables y mucho más. "
    imageUrl={Mouse222 }
    rating={6  }
    distribuidor="Logitech"

    />
     </div>

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
