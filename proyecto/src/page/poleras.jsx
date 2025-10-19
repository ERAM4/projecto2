import React from 'react'
import '../styles/categorias.css'
import {Link} from 'react-router-dom' 
import Polera111 from '../images/polera111.jpg'
import Polera222 from '../images/polera222.jpg'
import Polera333 from '../images/polera333.jpg'

import Product from '../components/Product'

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
        <button className='btnCarrito'>🛒</button>
    </Link>
            

        </nav>
    </header>

    <Product
        name="Polera SI LO VE ¡DENUNCIELO! "
        price={13000}
        description="Polera para denunciar a un delincuente por estafa, fraude al fisco, homicidio de 3°, robo a mano armada, canibalismo, delitos contra la propiedad y traición a la patria. "
        imageUrl={Polera111 }
        rating={5}
        distribuidor= "Ministerio del Interior"
    />
    <Product
        name="Polera ultra seria "
        price={1000000}
        description="Un verdadero hombre no paga el cae 🙏. "
        imageUrl={Polera222 }
        rating={10}
        distribuidor= "Asociacion de hombres ultra serios"
    />
    <Product
        name="Polera BABY DON´T HURT ME,DON´T HURT ME, NO MORE "
        price={24990}
        description="Polera del BABY DON´T HURT ME, DON´T HURT ME, NO MORE. "
        imageUrl={Polera333 }
        rating={8 }
        distribuidor= "Haddaway Inc"
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
