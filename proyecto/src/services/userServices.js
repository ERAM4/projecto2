import axios from "axios";

const API_BASE_URL = "http://localhost:9090/api/usuarios";
const API_AUTH_URL = "http://localhost:9090/auth";

class UserService {

  // ✔ Obtener todos los usuarios
  findAllUsuarios() {
    return axios.get(API_BASE_URL);
  }

  // ✔ Obtener usuario por id
  getUsuarioById(id) {
    return axios.get(`${API_BASE_URL}/${id}`);
  }

  // ✔ Crear usuario
  saveUsuario(usuario) {
    return axios.post(API_BASE_URL, usuario);
  }

  // ✔ Actualizar usuario
  updateUsuario(id, usuario) {
    return axios.put(`${API_BASE_URL}/${id}`, usuario);
  }

  // ✔ Eliminar usuario
  deleteUsuario(id) {
    return axios.delete(`${API_BASE_URL}/${id}`);
  }

  // ✔ LOGIN con Spring Security
  loginUsuario(credenciales) {
    return axios.post(`${API_AUTH_URL}/login`, credenciales);
  }
}

export default new UserService();