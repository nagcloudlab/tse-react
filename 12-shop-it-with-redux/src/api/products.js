import axios from "axios";

const baseURL = "http://localhost:8080/api";

export function loadProducts() {
  return axios.get(baseURL + "/products");
}
export function loadReviews(productId) {
  return axios.get(baseURL + "/products/" + productId + "/reviews");
}
export function createNewReview(productId, review) {
  return axios.post(baseURL + "/products/" + productId + "/reviews", review);
}
