import axios from "axios";

const API_BASE_URL = "https://localhost:9090/api/productos";


class ProductService {
  findAllProducts() {
    return axios.get(API_BASE_URL);
  }

getProductById(id) {
    return axios.get(`${API_BASE_URL}/${id}`);
  }

saveProduct(product) {
    return axios.post(API_BASE_URL, product);
    }
updateProduct(id, product) {
    return axios.put(`${API_BASE_URL}/${id}`, product);
  }

deleteProduct(id) {
    return axios.delete(`${API_BASE_URL}/${id}`);
  }


}


export default new ProductService();