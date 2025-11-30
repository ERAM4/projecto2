import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import UserService from "../services/userServices";
  // IMPORTANTE

export default function FormularioLogin({ verificarLogin }) {
  const [email, setEmail] = useState("");
  const [clave, setClave] = useState("");
  const [errores, setErrores] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (!email.includes("@")) {
      setErrores("El correo debe contener un signo arroba (@).");
      return;
    }

    if (clave.length < 6) {
      setErrores("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setErrores("");

    // 🔥 AQUÍ SE HACE EL LOGIN REAL

    UserService.loginUsuario({
      correo: email,
      password: clave
    })
      .then((response) => {
        console.log("LOGIN OK:", response.data);
        localStorage.setItem("usuario", JSON.stringify(response.data));
        verificarLogin();  // si quieres marcar autenticado en tu app
        navigate("/"); // redirige donde tú quieras
      })
      .catch((error) => {
        console.error("LOGIN ERROR:", error);
        setErrores(error.response?.data || "Error al iniciar sesión");
      });


  };

  const handleReset = () => {
    setEmail("");
    setClave("");
    setErrores("");
  };

  return (
    <form id="formulario-login" onSubmit={handleSubmit}>
      <h1>Iniciar sesión</h1>

      <div className="row">
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={email.length > 0 && !email.includes("@") ? "error" : ""}
          placeholder="tuemail@gmail.com"
        />
      </div>

      <div className="row">
        <label htmlFor="clave">Contraseña</label>
        <input
          type="password"
          id="clave"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          className={clave.length > 0 && clave.length < 6 ? "error" : ""}
          placeholder="Tu contraseña"
        />
      </div>

      <button type="button" className="btn reset" onClick={handleReset}>
        Limpiar
      </button>
      <button type="submit" className="btn submit">
        Ingresar
      </button>

      {errores && <p id="errores" style={{ color: "red" }}>{errores}</p>}
    </form>
  );
}
