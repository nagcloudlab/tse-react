export function addToCart(product) {
  // sync action
  const action = {
    type: "ADD_TO_CART",
    payload: {
      id: product.id,
      name: product.name,
      price: product.price,
    },
  };
  return action;
}
