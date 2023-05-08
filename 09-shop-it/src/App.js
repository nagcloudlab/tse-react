import Header from "./components/Header";
import ProductList from "./components/ProductList";

export default function App() {
  return (
    <div className="container">
      <Header title="shop-IT" />
      <hr />
      <ProductList />
    </div>
  );
}
