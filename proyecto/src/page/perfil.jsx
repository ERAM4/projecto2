import React from 'react'
import '../styles/paginaInicio.css'

import {Link} from 'react-router-dom'


export default function paginaInicio() {
  return (
    <>
    

    <header>
        <h1> Perfil </h1>

       
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

        </nav>
    </header>
    <div className='perfil'>
    <div className="card1">
      <img className="photo" src="https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/43553/square_thumb%402x.jpg" alt="Foto de perfil" />
      <div className="info">
        <div><span className="label">Nombre Completo :</span> Henry Cavil</div>
        <div><span className="label">Teléfono :</span> +56 9 1234 5678</div>
        <div><span className="label">Correo Electrónico :</span> henry.warhammer4k@duocuc.cl</div>
        <div><span className="label">Direccion :</span>Av. Siemore viva</div>
      </div>
    </div>
    <div className="changeInfo">
      <h2 className="changeInfo-title">Editar información del perfil</h2>
      <div className="row">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" placeholder="Cambia tu nombre" />
      </div>
      <div className="row">
        <label htmlFor="apellido">Apellido</label>
        <input type="text" id="apellido" placeholder="Cambia tu apellido" />
      </div>
      <div className="row">
        <label htmlFor="correo">Correo</label>
        <input type="text" id="correo" placeholder="Cambia tu correo" />
      </div>
      <div className="row">
        <label htmlFor="direccion">Dirección</label>
        <input type="text" id="direccion" placeholder="Cambia tu dirección" />
      </div>
      <div className="row">
        <label htmlFor="contraseña">Contraseña</label>
        <input type="password" id="contraseña" placeholder="Cambia tu contraseña" />
      </div>
      <button className="save-btn">Guardar</button>
    </div>
  </div>

        
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
