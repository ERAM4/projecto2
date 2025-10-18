import React from 'react'




export default function Product(props) {
const {name,price,description,imageUrl } = props;

  return (
    <>
    <article>
    <img src={imageUrl } alt="" />
    <h2>{name}</h2>
    <p >${price}</p>
    <p>{description}</p>
     <button onClick={()=>{addToCart(props)}}>Añadir al carrito</button>
    </article>
    
    </>
  )
}

function addToCart(props) {
    const productsInCart = JSON.parse(localStorage.getItem("cart")) || [];
    productsInCart.push(props);
    localStorage.setItem("cart", JSON.stringify(productsInCart));
}
