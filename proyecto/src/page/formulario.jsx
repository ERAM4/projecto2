import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../services/userServices";

export default function Formulario() {
  const [username, setUsername] = useState("");
  const [correo, setCorreo] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errores, setErrores] = useState("");
  const [emailDuoc, setEmailDuoc] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const verificarEmailDuoc = (correo) => {
    if (correo.endsWith("@duocuc.cl")) {
      setEmailDuoc("Email institucional de Duoc UC encontrado.");
    } else {
      setEmailDuoc("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // VALIDACIONES
    if (username.length < 3) {
      setErrores("Ingrese mínimo 3 letras en el nombre.");
      return;
    }
    if (!correo.includes("@")) {
      setErrores("El correo debe contener @");
      return;
    }
    if (password1 !== password2) {
      setErrores("Las contraseñas no coinciden.");
      return;
    }

    setErrores("");

    // OBJETO EXACTO DEL MODELO
    const nuevoUsuario = {
      username: username,
      correo: correo,
      password: password1,
      rol: "USER" // puedes cambiarlo si quieres
    };

    // ENVIAR AL BACKEND
    UserService.saveUsuario(nuevoUsuario)
      .then((response) => {
        alert("Usuario registrado correctamente");
        handleLogin();
      })
      .catch((error) => {
        console.error("Error al registrar usuario:", error);
        setErrores("Hubo un error al registrar el usuario.");
      });
  };

  return (
    <form id="formulario" onSubmit={handleSubmit}>
      <h1>Crear una cuenta</h1>

      <div className="row">
        <label htmlFor="username">Nombre de usuario</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="JuanPerez"
          className={username.length > 0 && username.length < 3 ? "error" : ""}
        />
      </div>

      <div className="row">
        <label htmlFor="correo">Correo</label>
        <input
          type="text"
          id="correo"
          value={correo}
          onChange={(e) => {
            setCorreo(e.target.value);
            verificarEmailDuoc(e.target.value);
          }}
          placeholder="usuario@duocuc.cl"
          className={correo.length > 0 && !correo.includes("@") ? "error" : ""}
        />
      </div>

      <div className="row">
        <label htmlFor="password1">Contraseña</label>
        <input
          type="password"
          id="password1"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
          placeholder="Clave1234"
        />
      </div>

      <div className="row">
        <label htmlFor="password2">Repetir contraseña</label>
        <input
          type="password"
          id="password2"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          className={password2.length > 0 && password1 !== password2 ? "error" : ""}
          placeholder="Clave1234"
        />
      </div>

      {emailDuoc && (
        <p style={{ color: "green" }}>{emailDuoc}</p>
      )}

      {errores && (
        <p style={{ color: "red" }}>{errores}</p>
      )}

      <button type="submit" className="btn submit">
        Registrar
      </button>
    </form>
  );
}
