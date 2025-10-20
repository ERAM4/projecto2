import React from 'react'

import {Link} from 'react-router-dom' 
import Acs1 from '../images/acesorios111.jpg'
import Acs2 from '../images/acesorios222.jpg'
import Acs3 from '../images/acesorios333.jpg'
import Product from '../components/Product'



export default function accesorios() {
  return (
    <>
    <header>
        <h1> Accesorios  </h1>
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
        name="Razer Blackwidow V4 Pro "
        price={449990}
        description="El Razer BlackWidow V4 Pro 75% Wireless es un teclado
        gaming inalámbrico con diseño 75%, switches intercambiables en caliente,
         conexión USB de 4K Hz y tecnología Bluetooth. Incluye una pantalla OLED,
          un dial multifunción Razer Command Dial para control avanzado, iluminación RGB Chroma,
           y es compatible con switches de 3 o 5 pines. "
        imageUrl={Acs1 }
        rating={7}
        distribuidor="Razer"
    
    />
    <Product
        name="Audífonos Gamer Inalámbrico Corsair VOID "
        price={149990}
        description="Sumérjase en la acción con los CORSAIR VOID RGB ELITE Wireless,
         con transductores de audio de neodimio de 50 mm de ajuste personalizado,
          un cómodo tejido de rejilla de microfibra con 
          almohadillas de espuma con memoria y una conexión inalámbrica de 2,4 GHz."
        imageUrl={Acs2 }
        rating={4}
        distribuidor="Corsair"

        />

    <Product
        name="MICROFONO GAMER PRIMUS ETHOS 100T USB P/N PMI-101"
        price={21950}
        description="El Micrófono Gamer Primus
    Ethos100T USB (PMI-101)
    es un micrófono de condensador con patrón polar cardioide,
     diseñado para videojuegos, transmisiones en vivo y creación de contenido,
    que ofrece conexión USB-C, control de ganancia y mute,
    una resolución de 16 bits/48KHz
     y una estructura de aluminio con accesorios
        como filtro de espuma y trípode. "
        imageUrl={Acs3 }
        rating={5}

        distribuidor="Primus"
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
