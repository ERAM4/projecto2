import axios from "axios";

const API_URL = "http://localhost:9090/api/productos";

class ProductService {

  // --- AYUDANTES PARA EL TOKEN ---
  getToken() {
    return localStorage.getItem("token");
  }

  getAuthHeader() {
    const token = this.getToken();
    return { headers: { Authorization: `Bearer ${token}` } };
  }

  // --- MÉTODOS PÚBLICOS (Cualquiera puede usarlos) ---
  findAllProducts() {
    return axios.get(API_URL);
  }

  getProductById(id) {
    return axios.get(`${API_URL}/${id}`);
  }

  // --- MÉTODOS PRIVADOS (Envían el Token) ---
  saveProduct(product) {
    return axios.post(API_URL, product, this.getAuthHeader());
  }

  updateProduct(id, product) {
    return axios.put(`${API_URL}/${id}`, product, this.getAuthHeader());
  }

  deleteProduct(id) {
    return axios.delete(`${API_URL}/${id}`, this.getAuthHeader());
  }
}

export default new ProductService();