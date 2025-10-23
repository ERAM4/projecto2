import React from 'react'
import '../styles/categorias.css'
import {Link} from 'react-router-dom'




export default function carrito() {
 const productsInCart = JSON.parse(localStorage.getItem("cart")) || [];
 const totalCarrito = productsInCart.reduce((total, product) => total + parseInt(product.price), 0);
 

  return (
    <>
    <header>
        <h1> Carrito </h1>
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
       <Link to = "/perfil">
        <button className='btnPerfil'>Perfil</button>
    </Link>
            

        </nav>
    </header>
    



    <button onClick={()=>{

        localStorage.removeItem("cart");
        window.location.reload();


    }}>Vacias Carrito</button>

    <div clasName="contenido">



    {
        productsInCart.length === 0 ? (
            <p>El carrito está vacío.</p>
        ) : (<>{
                <>
                <p>Productos en el carrito:{productsInCart.length}</p>
                <p>Total:$ { totalCarrito}</p>
                </>
                }

            {productsInCart.map((product, index) => (
                <article key={index}>
                    <img src={product.imageUrl} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>${product.price}</p>
                    <p>{product.description}</p>
                    <button onClick={()=>{removeProductFromCart(index)}}>✖</button>
                </article>
            ))}
      </>

            
       )

    }

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

function removeProductFromCart(index) {
    const productsInCart = JSON.parse(localStorage.getItem("cart")) || [];
    productsInCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(productsInCart));
}
