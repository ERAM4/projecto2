import React from 'react'

import {Link} from 'react-router-dom' 
import Juegomesa111 from '../images/juegomesa111.jpg';
import Juegomesa222 from '../images/juegomesa222.jpg';
import Juegomesa333 from '../images/juegomesa333.jpg';
import Juegomesa444 from '../images/juegomesa444.jpg';
import Juegomesa555 from '../images/juegomesa555.jpg';

import Product from '../components/Product'

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
        <button className='btnCarrito'>🛒</button>
    </Link>
    <Link to = "/perfil">
        <button className='btnPerfil'>Perfil</button>
    </Link>
            

        </nav>
    </header>

    <Product
        name="Warhammer 40K: Set introductorio"
        price={64990}
        description="Un set introductorio de Warhammer 40,000 
        es una caja pensada para que principiantes 
        puedan iniciarse en el juego de miniaturas, 
        ya que incluye miniaturas (normalmente Marines Espaciales vs. Tiránidos), 
        un tapete de juego, dados, medidor de distancia, 
        reglas básicas y a veces herramientas de montaje y pintura,
         todo lo necesario para comenzar a jugar."
        imageUrl={Juegomesa111} 
        rating={10}
        distribuidor="Games Workshop"
    />

    <Product
        name="Monopoly: The Lord of the Rings"
        price={79990}
        description="En el juego de mesa Monopoly: Edición El Señor de los Anillos,
        los jugadores imaginan estar en la Tierra Media
         como un miembro de la Comunidad. 
         Compra propiedades para proteger las tierras de los malvados
          ejércitos de Mordor y gana dinero cobrando alquileres
           y controlando el Anillo de Poder."
        imageUrl={Juegomesa222 }
        rating={9}
        distribuidor="Hasbro"
        />

    <Product
        name="Zathura: Adventure is waiting"
        price={134990}
        description="Juego de mesa mágico y un juego de mesa que lleva
            a sus jugadores a un viaje espacial al planeta
            Zathura, activando peligros y criaturas del espacio exterior, 
            incluyendo al astronauta, un robot descontrolado 
            y alienígenas de aspecto de lagarto."
        imageUrl={Juegomesa333 }
        rating={8}
        distribuidor="Distribuidora Zathura"
    />


    <Product 
        name="Catan"
        price={29990}
        description="Juego de mesa Clasico de estrategia
        en el que los jugadores compiten
        por colonizar una isla rica en recursos,
         construyendo asentamientos,
         ciudades y carreteras para alcanzar los 10 puntos de victoria. "
        imageUrl={Juegomesa444 }
        rating={7}
        distribuidor="Distribuidora Catan"
    />
    <Product

        name="Jumanji"
        price={34990}
        description="Este juego te llevará a un mundo lleno de peligros y desafíos.
         Supera obstáculos, enfrenta animales salvajes
         y trabaja en equipo para alcanzar la victoria.
          ¡Ofrece diversión para toda la familia y te transporta
          a una emocionante aventura que nunca olvidarás! "
        imageUrl={Juegomesa555 }
        rating={6}
        distribuidor="TriStar Pictures"
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
