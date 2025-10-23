import React from 'react'
import '../styles/paginaInicio.css'
import Noti1 from '../images/noti1.jpg'
import Noti2 from '../images/noti2.jpg'
import Noti3 from '../images/noti3.jpg'
import Noti4 from '../images/noti4.jpg'
import {Link} from 'react-router-dom'
import Product from '../components/Product'
import {ProductTrue} from '../components/ProductTrue'

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
    <Link to = "/carrito">
            <button className='btnCarrito'>🛒</button>
        </Link>
    <Link to = "/perfil">
        <button className='btnPerfil'>Perfil</button>
    </Link>

        </nav>
    </header>
    
    <h1>Productos mas vendidos</h1>
    <div className="contenedorCategoria">
    {ProductTrue.map((product) => (
        <Product
            
            name={product.name}
            price={product.price}
            description={product.description}
            imageUrl={product.imageUrl}
            rating={product.rating}
            categoria={product.categoria}
            distribuidor={product.distribuidor}
            masVentas={product.masVentas}
            
            />
         ) )  }
    </div>
        <h1> 😍Contenido Educativo y de Comunidad</h1>
        <br />
        <br />
        <br />
    <article>
        <img src={Noti1} alt="" />
        <p>
            <a href="https://vandal.elespanol.com/noticia/1350778969/hopetown-uno-de-los-muchos-sucesores-de-disco-elysium-ya-ha-sido-financiado-en-kickstarter/"
            >Disco Elysium </a>
            fue uno de los juegos más queridos de 2019 
            y el declive de su estudio fue una triste noticia para sus fans.
             Sin embargo, algunos exempleados han formado nuevos equipos y 
             ahora tenemos varios sucesores espirituales; uno de ellos, Hopetown, 
             estrenará pronto su campaña en Kickstarter -el 11 de marzo-.</p>
    </article>
    <article>
        <img src={Noti2} alt="" />
        <p>Si buscas una aventura indie cooperativa, 
            original y con mucho encanto para este otoño, 
            entonces presta atención a <a href="https://as.com/meristation/mexico/unrailed-2-back-on-track-revela-nuevas-caracteristicas-y-su-fecha-de-lanzamiento-n/
            Esta es la secuela para un carismático juego de acción y e">Unrailed 2: Back on Track</a>, cuyo estreno en PC es inminente.
            
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
            <a href="https://vandal.elespanol.com/noticia/1350775116/el-popular-factorio-se-expande-al-espacio-con-su-nuevo-dlc-que-ya-esta-disponible-en-steam/"
             >Factorio (2020) </a>
             es un exitoso juego de simulación y gestión en el que tenemos que construir y gestionan fábricas automatizadas en un planeta alienígena, acaba de lanzar hoy su primera expansión titulada Factorio: Space Age, que ya está a la venta en Steam.
        </p>
    </article>
    <article>
        <img src={Noti4} alt="" />
        <p>
            ¡Bienvenido/a , a nuestra guía oficial de <a href="https://vandal.elespanol.com/guias/guia-hades-2-trucos-consejos-y-secretos">Hades 2!</a> La primera y 
            esperada secuela de Supergiant Games ya está disponible tras haber terminado 
            su acceso anticipado para los jugadores de PC y Nintendo Switch 1-2,
             e incluye una fantástica aventura protagonizada por Melínoe en su misión 
             por vengar a su familia y derrocar al Titán del Tiempo. ¿Quieres embarcarte por el Inframundo
              (o la superficie) con buen pie? Entonces echa un vistazo a 
              los contenidos que te hemos preparado en nuestra guía para descubrir 
              todas las bendiciones de los dioses, cómo progresar y derrotar a los jefes finales,
               obtener recuerdos, conseguir materiales y mejoras y... ¡mucho, mucho más!
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
    <p>Redes Sociales:<a href="https://www.facebook.com/henrycavill/" >Facebook</a>
    &nbsp;| &nbsp;
    <a href="https://www.instagram.com/henrycavill/" >Instagram</a> </p>
    <p>Contacto:<a href="https://wa.me/56912345678" >Whatsaap</a> </p>
    



</footer>
    
    </>
  )
}
