import React from 'react'
import '../styles/paginaInicio.css'
import Noti1 from '../images/noti1.jpg'
import Noti2 from '../images/noti2.jpg'
import Noti3 from '../images/noti3.jpg'
import {Link} from 'react-router-dom'

export default function paginaInicio() {
  return (
    <>
    



    <header>
        <h1> Bienvenido a Level-UP Gamer! </h1>
        <nav>
            
            <Link to = "/ayuda">
        <button className='btnAyuda'>Ayuda</button>
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

        </nav>
    </header>
    <article>
        <img src={Noti1} alt="" />
        <p>Disco Elysium fue uno de los juegos más queridos de 2019 
            y el declive de su estudio fue una triste noticia para sus fans.
             Sin embargo, algunos exempleados han formado nuevos equipos y 
             ahora tenemos varios sucesores espirituales; uno de ellos, Hopetown, 
             estrenará pronto su campaña en Kickstarter -el 11 de marzo-.</p>
    </article>
    <article>
        <img src={Noti2} alt="" />
        <p>Si buscas una aventura indie cooperativa, 
            original y con mucho encanto para este otoño, 
            entonces presta atención a Unrailed 2: Back on Track, cuyo estreno en PC es inminente.

            Esta es la secuela para un carismático juego de acción y e
            strategia cooperativo, el cual te pone a construir vías de tren,
             con el pequeño detalle de que la locomotora que corre sobre ellas nunca se detiene. 
             ¡Construye rápido y mantén el tren frío o te descarrilarás!</p>
    </article>
    <article>
        <img src={Noti3} alt="" />
        <p>
            Esta expansión continúa la aventura tras el lanzamiento de 
            cohetes al espacio, permitiendo gestionar plataformas espaciales y 
            explorar nuevos planetas, que ofrecen nuevos desafíos y posibilidades.

            Factorio (2020) es un exitoso juego de simulación y gestión en el que tenemos que construir y gestionan fábricas automatizadas en un planeta alienígena, acaba de lanzar hoy su primera expansión titulada Factorio: Space Age, que ya está a la venta en Steam.
        </p>
    </article>
    <article>
        <h1>La comunidad Gamer se Reune!!</h1>
        <p>Descubre eventos, torneos y grupos donde conectarte con otros jugadores.</p>
    <iframe src="https://www.google.com/maps/embed?pb=!4v1760136112763!6m8!1m7!1sHkk26gxCcL02QagH0LYIsQ!2m2!1d-33.59853324551458!2d-71.60724299941361!3f252.46300647012822!4f-7.6544488285382215!5f0.7820865974627469"
        width="600" height="450" style={{width:'45rem', height:'25rem', border:0}} 
        allowFullScreen="" loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">

     </iframe>
    </article>
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
