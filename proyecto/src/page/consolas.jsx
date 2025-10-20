import React from 'react'

import {Link} from 'react-router-dom' 
import Consola111 from '../images/consola111.jpg'
import Consola222 from '../images/consola222.jpg'
import Consola333 from '../images/consola333.jpg'

import Product from '../components/Product'

export default function consolas() {
  return (
    <>
    <header>
        <h1> Consolas </h1>
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
        name="PS4 Pro 2Tb 500 Million Limited Edition"
        price={1965956}
        description="La PS4 Pro 2TB 500 Million Limited Edition 
        representa la cumbre de las consolas de juegos domésticas, 
        diseñada no solo para jugar sino para sumergirte en un mundo de entretenimiento.
         Con su diseño elegante de edición limitada, esta consola celebra 500 millones de unidades vendidas,
          lo que la convierte en el sueño de cualquier coleccionista. "
        imageUrl={Consola111}
        rating={7}
        distribuidor="Sony Interactive Entertainment"
    />

    <Product
        name="Microsoft Xbox Series X 1TB Halo Infinite"
        price={1243659}
        description="La Microsoft Xbox Series X 1TB Halo Infinite (color gris)
            es una edición limitada de la potente consola de nueva generación de Microsoft. 
            Incluye un diseño exclusivo inspirado en Halo Infinite, un disco SSD ultrarrápido de 1 TB,
            soporte para juegos en resolución 4K hasta 120 FPS y un control inalámbrico temático a juego.
            Ideal para fanáticos de Halo y jugadores que buscan máximo rendimiento y estilo."
        imageUrl={Consola222}
        rating={8}
        distribuidor="Microsoft"
    />
    <Product
        name="Nintendo Switch 2 "
        price={619990}
        description="Prepárate para la evolución del gaming portátil con la nueva Nintendo Switch 2.
         Diseñada para llevar tu experiencia de juego a un nivel completamente nuevo, 
         esta consola redefine la versatilidad y el rendimiento,
          permitiéndote disfrutar de tus juegos favoritos en cualquier lugar y en cualquier momento.
           Sumérgete en mundos vibrantes con gráficos impresionantes y una fluidez sin precedentes."
        imageUrl={Consola333}   
        rating={9 }
        distribuidor="Nintendo Co., Ltd"
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
