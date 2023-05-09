import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import ProductForm from "./pages/ProductForm";
import ProductsTable from "./pages/ProductsTable";
import ProductView from "./pages/ProductView";

import { loadProducts, loadProduct } from "./api/products";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" exact element={<RootLayout />}>
        <Route index element={<Navigate to="/products" replace />} />
        <Route
          path={"products"}
          element={<ProductsTable />}
          loader={loadProducts}
        />
        <Route
          path={"products/:id"}
          element={<ProductView />}
          loader={loadProduct}
        />
        <Route
          path={"products/edit/:id"}
          element={<ProductForm />}
          loader={loadProduct}
        />
        <Route path={"new"} element={<ProductForm />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
