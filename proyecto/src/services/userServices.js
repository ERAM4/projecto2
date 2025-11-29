import axios from "axios";

const API_BASE_URL = "https://localhost:9090/api/usuarios";


class UserService {
  findAllUsuarios() {
    return axios.get(API_BASE_URL);
  }

getUsuarioById(id) {
    return axios.get(`${API_BASE_URL}/${id}`);
  }

saveUsuario(usuario) {
    return axios.post(API_BASE_URL, usuario);
    }
updateUsuario(id, usuario) {
    return axios.put(`${API_BASE_URL}/${id}`, usuario);
  }

deleteUsuario(id) {
    return axios.delete(`${API_BASE_URL}/${id}`);
  }


}


export default new UserService();