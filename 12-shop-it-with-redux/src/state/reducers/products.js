export function productsReducer(state = [], action) {
  let { type } = action;
  switch (type) {
    case "LOAD_PRODUCTS": {
      let { payload: products } = action;
      return [...products];
    }
    default:
      return state;
  }
}
