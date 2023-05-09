import axios from "axios";

export async function loadProducts() {
  const response = await axios.get("http://localhost:8080/products");
  return response.data;
}

export async function loadProduct({ params }) {
  const { id } = params;
  const response = await axios.get(`http://localhost:8080/products/${id}`);
  return response.data;
}
