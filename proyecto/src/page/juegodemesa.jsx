import React from 'react'
import '../styles/categorias.css'
import {Link} from 'react-router-dom' 
import Juegomesa111 from '../images/juegomesa111.jpg';
import Juegomesa222 from '../images/juegomesa222.jpg';
import Juegomesa333 from '../images/juegomesa333.jpg';
import Juegomesa444 from '../images/juegomesa444.jpg';
import Juegomesa555 from '../images/juegomesa555.jpg';

export default function juegodemesa() {
  return (
    <>
    <header>
        <h1> Juego de Mesa </h1>
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
     <img src={Juegomesa111} alt="" />   
     <h2>Warhammer 40K: Set introductorio</h2>
                <p >64.990</p>
                <p>Un set introductorio de Warhammer 40,000 
                    es una caja pensada para que principiantes 
                    puedan iniciarse en el juego de miniaturas, 
                    ya que incluye miniaturas (normalmente Marines Espaciales vs. Tiránidos), 
                    un tapete de juego, dados, medidor de distancia, 
                    reglas básicas y a veces herramientas de montaje y pintura,
                     todo lo necesario para comenzar a jugar. </p>


    </article>
    <article>
     <img src={Juegomesa222} alt="" />   
     <h2>Monopoly: The Lord of the Rings</h2>
                <p >79.990</p>
                <p>En el juego de mesa Monopoly: Edición El Señor de los Anillos, 
                    los jugadores imaginan estar en la Tierra Media
                     como un miembro de la Comunidad. 
                     Compra propiedades para proteger las tierras de los malvados
                      ejércitos de Mordor y gana dinero cobrando alquileres
                       y controlando el Anillo de Poder. </p>


    </article>
    <article>
     <img src={Juegomesa333} alt="" />   
     <h2>Zathura: Adventure is waiting</h2>
                <p >134.990</p>
                <p>Juego de mesa mágico y un juego de mesa que lleva
                     a sus jugadores a un viaje espacial al planeta
                      "Zathura", activando peligros y criaturas del espacio exterior, 
                      incluyendo al astronauta, un robot descontrolado 
                      y alienígenas de aspecto de lagarto. </p>


    </article>
    
    <article>
     <img src={Juegomesa444} alt="" />   
     <h2>Catan</h2>
                <p >29.990</p>
                <p>Juego de mesa Clasico de estrategia 
                    en el que los jugadores compiten 
                    por colonizar una isla rica en recursos,
                     construyendo asentamientos, 
                     ciudades y carreteras para alcanzar los 10 puntos de victoria. </p>


    </article>
    <article>
     <img src={Juegomesa555} alt="" />   
     <h2>Jumanji</h2>
                <p >34.990</p>
                <p>Este juego te llevará a un mundo lleno de peligros y desafíos.
                     Supera obstáculos, enfrenta animales salvajes 
                     y trabaja en equipo para alcanzar la victoria. 
                     ¡Ofrece diversión para toda la familia y te transporta 
                     a una emocionante aventura que nunca olvidarás! </p>


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
