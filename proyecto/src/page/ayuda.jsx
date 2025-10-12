import React from 'react'
import {Link} from 'react-router-dom'
import Ayuda1 from '../images/ayuda1.jpg'
import Ayuda2 from '../images/ayuda2.jpg'
import Ayuda3 from '../images/ayuda3.jpg'

export default function ayuda() {
  return (
    <>
    <header>
        <h1> Ayuda </h1>
        <nav>
    <Link to = "/">
        <button className='btnInicio'>Inicio</button>
    </Link>        
    <Link to = "/categoria">
        <button className='btnCategoria'>Categorias</button>
    </Link>
    
    <Link to = "/registro">
        <button className='btnRegistro'>Registro</button>
    </Link>
    <Link to = "/login">
        <button className='btnLogin'>Login</button>
    </Link>
            
    <article>
        <h1>🎮Quienes Somos?</h1>
    <p>Level-Up Gamer es una tienda online dedicada a satisfacer las necesidades de los entusiastas de los
videojuegos en Chile. Lanzada hace dos años como respuesta a la creciente demanda durante la
pandemia, Leves-Up Gamer ofrece una amplia gama de productos para gamers, desde consolas y
accesorios hasta computadores y sillas especializadas. Aunque no cuenta con una ubicación física,
realiza despachos a todo el país.</p>
        <img src={Ayuda1} alt="" />
    </article>
    <article>
        <h1>🎯Cual es Nuestra Mision?</h1>
    <p>Proporcionar productos de alta calidad para gamers en todo Chile, ofreciendo una experiencia de
compra única y personalizada, con un enfoque en la satisfacción del cliente y el crecimiento de la
comunidad gamer.</p>
        <img src={Ayuda2} alt="" />
    </article>
    <article>
        <h1>🎲Cual es Nuestra Vision?</h1>
    <p>Ser la tienda online líder en productos para gamers en Chile, reconocida por su innovación, servicio
al cliente excepcional, y un programa de fidelización basado en gamificación que recompense a
nuestros clientes más fieles.</p>
<img src={Ayuda3} alt="" />
    </article>
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
