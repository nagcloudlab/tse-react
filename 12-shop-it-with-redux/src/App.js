import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./ui/layouts/RootLayout";
import Home from "./ui/pages/Home";
import ProductList from "./ui/pages/ProductList";
import CartView from "./ui/pages/CartView";
import NotFound from "./ui/components/NotFound";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="cart" element={<CartView />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
