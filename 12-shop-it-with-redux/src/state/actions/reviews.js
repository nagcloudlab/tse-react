import * as productsApi from "../../api/products";

export function loadReviews(productId) {
  return function (dispatch) {
    productsApi.loadReviews(productId).then((res) => {
      dispatch({
        type: "LOAD_REVIEWS",
        payload: { productId, reviews: res.data },
      });
    });
  };
}

export function addNewReview(productId, review) {
  return function (dispatch) {
    productsApi.createNewReview(productId, review).then((res) => {
      dispatch({
        type: "ADD_NEW_REVIEW",
        payload: { productId, review: res.data },
      });
    });
  };
}
