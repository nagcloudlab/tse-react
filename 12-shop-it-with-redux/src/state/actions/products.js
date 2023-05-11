import * as productsApi from "../../api/products";

// action creator
export function loadProducts() {
  return function (dispatch) {
    // Async Action
    productsApi.loadProducts().then((response) => {
      // Async Action
      let action = {
        type: "LOAD_PRODUCTS",
        payload: response.data,
      };
      dispatch(action); // Async Action
    });
  };
}
