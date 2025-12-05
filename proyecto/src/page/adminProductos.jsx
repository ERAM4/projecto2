import React, { useState, useEffect } from "react";
import ProductService from "../services/productServices";
import '../styles/paginaInicio.css';
import {Link} from 'react-router-dom'


export default function AdminProductos() {
  const [productos, setProductos] = useState([]);
  
  // Estado para el formulario (coincide con tu Modelo Java)
  const [form, setForm] = useState({
    name: "",
    price: "",
    img: "",
    rating: 5,
    description: "",
    distribuidor: ""
  });

  // 1. Cargar productos al iniciar la página
  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = () => {
    ProductService.findAllProducts()
      .then((res) => setProductos(res.data))
      .catch((err) => console.error("Error al cargar productos", err));
  };

  // 2. Manejar lo que escribes en los inputs
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 3. Guardar Producto (Create)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Llamamos al servicio (que envía el TOKEN automáticamente)
    ProductService.saveProduct(form)
      .then(() => {
        alert("¡Producto guardado con éxito!");
        cargarProductos(); // Refrescar la lista para ver el nuevo
        // Limpiar el formulario
        setForm({ name: "", price: "", img: "", rating: 5, description: "", distribuidor: "" }); 
      })
      .catch((err) => {
        console.error(err);
        alert("Error al guardar. ¿Iniciaste sesión?");
      });
  };

  // 4. Eliminar Producto (Delete)
  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de eliminar este producto?")) {
      ProductService.deleteProduct(id)
        .then(() => {
          alert("Producto eliminado");
          cargarProductos(); // Refrescar la lista
        })
        .catch((err) => alert("Error al eliminar. Verifica tus permisos."));
    }
  };

  return (
    <> 
      {/* --- 2. AQUÍ AGREGAMOS EL HEADER --- */}
      <header>
        <h1> Admin Products </h1>
        <nav>
          <Link to="/ayuda">
            <button className='btnAyuda'>Ayuda</button>
          </Link>
          <Link to="/">
            <button className='btnInicio'>Inicio</button>
          </Link>
          <Link to="/registro">
            <button className='btnRegistro'>Registro</button>
          </Link>
          <Link to="/login">
            <button className='btnLogin'>Login</button>
          </Link>
          <Link to="/categoria">
            <button className='btnCategoria'>Categorias</button>
          </Link>
          <Link to="/carrito">
            <button className='btnCarrito'>🛒</button>
          </Link>
          <Link to="/perfil">
            <button className='btnPerfil'>Perfil</button>
          </Link>
          {/* Botón extra para saber que estamos en Admin */}
          <Link to="/admin-productos">
             <button className='btnAdmin' style={{borderColor:'orange', color:'orange'}}>⚙️ Admin</button>
          </Link>
        </nav>
      </header>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
        
        <h1 style={{ textAlign: "center", color: "#333", marginTop: "20px" }}>Administrar Productos</h1>

        {/* --- FORMULARIO --- */}
        <div style={{ background: "#f8f9fa", padding: "20px", borderRadius: "10px", marginBottom: "30px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h3 style={{ marginTop: 0 }}>Agregar Nuevo Producto</h3>
          <form onSubmit={handleSubmit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
            
            <input name="name" placeholder="Nombre del Producto" value={form.name} onChange={handleChange} required style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }} />
            <input name="price" type="number" placeholder="Precio ($)" value={form.price} onChange={handleChange} required style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }} />
            <input name="distribuidor" placeholder="Distribuidor" value={form.distribuidor} onChange={handleChange} style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }} />
            <input name="rating" type="number" max="5" min="1" placeholder="Rating (1-5)" value={form.rating} onChange={handleChange} style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }} />
            
            <div style={{ gridColumn: "1 / span 2" }}>
              <input name="img" placeholder="URL de la Imagen" value={form.img} onChange={handleChange} style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }} />
            </div>
            <div style={{ gridColumn: "1 / span 2" }}>
              <textarea name="description" placeholder="Descripción del producto" value={form.description} onChange={handleChange} style={{ width: "100%", padding: "8px", height: "60px", border: "1px solid #ccc", borderRadius: "4px" }} />
            </div>

            <button type="submit" style={{ gridColumn: "1 / span 2", padding: "10px", background: "#28a745", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px", fontWeight: "bold" }}>
              Guardar Producto
            </button>
          </form>
        </div>

        {/* --- LISTA --- */}
        <h3>Inventario Actual ({productos.length})</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" }}>
          {productos.map((prod) => (
            <div key={prod.id} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "10px", textAlign: "center", background: "#fff" }}>
              <img src={prod.img || "https://via.placeholder.com/150"} alt={prod.name} style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "5px" }} />
              <h4 style={{ margin: "10px 0" }}>{prod.name}</h4>
              <p style={{ color: "green", fontWeight: "bold", fontSize: "1.2em" }}>${prod.price}</p>
              <p style={{ fontSize: "0.8em", color: "#666" }}>{prod.distribuidor}</p>
              <button 
                onClick={() => handleDelete(prod.id)} 
                style={{ background: "#dc3545", color: "white", border: "none", padding: "8px 15px", borderRadius: "4px", cursor: "pointer" }}>
                Eliminar
              </button>
            </div>
          ))}
        </div>

        {/* --- FOOTER --- */}
        <footer>
          <p>© 2025 Level-UP Gamer<br />Para Ayuda:</p>
          <p>Redes Sociales: <a href="https://www.facebook.com/henrycavill/">Facebook</a> &nbsp;| &nbsp; <a href="https://www.instagram.com/henrycavill/">Instagram</a></p>
          <p>Contacto: <a href="https://wa.me/56912345678">Whatsapp</a></p>
        </footer>

      </div>
    </>
  );
}