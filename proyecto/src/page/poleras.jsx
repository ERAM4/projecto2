import React from 'react'
import '../styles/categorias.css'
import {Link} from 'react-router-dom' 
import Polera111 from '../images/polera111.jpg'
import Polera222 from '../images/polera222.jpg'
import Polera333 from '../images/polera333.jpg'



export default function poleras() {
  return (
    <>
    <header>
        <h1> Poleras Personalizadas  </h1>
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
    <article>
        <img src={Polera111 } alt="" />
        <h2>Polera SI LO VE ¡DENUNCIELO! </h2>
        <p >13.000</p>
        <p>
         Polera para denunciar a un delincuente por estafa, fraude al fisco, homicidio de 3°, robo a mano armada, canibalismo, delitos contra la propiedad y traición a la patria. </p>
        </article>
    <article>
        <img src={Polera222 } alt="" />
        <h2>Polera ultra seria </h2>
        <p >10.000.000</p>
        <p>
         Un verdadero hombre no paga el cae 🙏. </p>
        </article>
    <article>
        <img src={Polera333 } alt="" />
        <h2>Polera BABY DON´T HURT ME,DON´T HURT ME, NO MORE </h2>
        <p >24.990</p>
        <p>
         Polera del BABY DON´T HURT ME, DON´T HURT ME, NO MORE. </p>
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
