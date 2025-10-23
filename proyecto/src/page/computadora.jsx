import React from 'react'

import {Link} from 'react-router-dom' 
import Compu111 from '../images/compu111.jpg'
import Product from '../components/Product'



export default function computadora() {
  return (
    <>
    <header>
        <h1> Computadoras Gamers </h1>
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

    <Product 
        name="Notebook Asus Rog Strix Scar 18"
        price={6399990}
        description="El 2025 Strix SCAR 18 ofrece la mejor experiencia de juego con Windows 11 Home,
        con procesador Intel® Core™ de última generación
        y GPU NVIDIA® GeForce RTX™ para portátiles de última generación con Advanced Optimus.
         Este excelente hardware se complementa con hasta
         64 GB de RAM DDR5 a 5600 MHz y 2 TB de almacenamiento PCIe 4.0,
          con ranuras de memoria actualizables a RAM DDR5 a 6400 MHz
           y ranuras SSD totalmente compatibles con PCIe Gen 5,
            lo que garantiza que siempre tendrás ventaja sobre la competencia."
        imageUrl={Compu111}
        rating={7}
        distribuidor="Asus"
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
