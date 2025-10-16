import React from 'react'
import {Link} from 'react-router-dom' 
import '../styles/categorias.css'
import Accesorio1 from '../images/accesorio1.jpg'
import Computadora1 from '../images/computadora1.jpg'
import Consolas11 from '../images/consolas11.jpg'
import Juegodemesa1 from '../images/juegodemesa1.jpg'
import Mousegamer1 from '../images/mousegamer1.jpg'
import Mousepadgamer1 from '../images/mousepadgamer1.jpg'
import Poleronesgamer from '../images/poleronesgamer.jpg'
import Polera1 from '../images/polera1.jpg'
import Silla1 from '../images/silla1.jpg'




export default function categoria() {
  return (
    <>
    <header>
        <h1> Categorias </h1>
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
    <Link to = "/carrito">
        <button className='btnCarrito'>carrito</button>
    </Link>
            

        </nav>
    </header>

    <article>
        <img src={Accesorio1} alt="" />        
        <p>Accesorios</p>
    </article>
    <article>
        <img src={Computadora1} alt="" />        
        <p>Computadores Gamers</p>
    </article>
    <article>
        <img src={Consolas11} alt="" />        
        <p>Consolas</p>
    </article>
    <article>
        <img src={Juegodemesa1} alt="" />        
        <p>Juegos de Mesa</p>
    </article>
    <article>
        <img src={Mousegamer1} alt="" />        
        <p>Mouse</p>
    </article>
    <article>
        <img src={Mousepadgamer1} alt="" />        
        <p>Mousepad</p>
    </article>
    <article>
        <img src={Poleronesgamer} alt="" />        
        <p>Polerones Gamers Personalizados</p>
    </article>
    <article>
        <img src={Polera1} alt="" />        
        <p>Poleras Personalizadas</p>
    </article>
    <article>
        <img src={Silla1 } alt="" />        
        <p>Sillas Gamers</p>
    </article>


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
