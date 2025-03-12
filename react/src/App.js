import {
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
  useLoaderData,
  useRevalidator,
} from "react-router-dom";
import "./App.css";
import { Footer } from "./component/Footer";
import { Header } from "./component/Header";
import { Hero } from "./component/Hero";
import About from "./component/About";
import Contact from "./component/Contact";
import Products from "./component/Products";
import SingleProduct from "./component/SingleProduct";
import SignUp from "./component/SignUp";
import { Login } from "./component/Login";
import { Dashboard } from "./component/Dashboard";
import { Users } from "./component/Users";
import ProductsDash from "./component/dashboard/ProductsDash";
import { useEffect, useState } from "react";
import { Cart } from "./component/Cart";
import ListProducts from "./component/ListProducts";
import { FormProduct } from "./component/dashboard/FormProduct";
import axios from "axios";
import { getCurrent, getOneProduct, getProducts } from "./Api";
import { ToastContainer } from "react-toastify";
import Animation from "./component/Animation";
import { ValidationCode } from "./component/ValidationCode";
import { ProtectedRoute } from "./component/ProtectedRoute";

function App() {
  const [cart, setCart] = useState([]);

  const [list, setList] = useState(ListProducts);
  useEffect(() => {
    console.log("App: Cart state updated:", cart);
  }, [cart]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {" "}
          <Header />{" "}
          <>
            {" "}
            <Outlet />{" "}
          </>{" "}
          <Footer /> <ToastContainer position="top-right" />
        </>
      ),
      loader: getCurrent,
      children: [
        { path: "/", element: <Hero /> },
        { path: "/code", element: <ValidationCode /> },
        { path: "/about", element: <About /> },
        { path: "/cards", element: <Animation />, loader: getProducts },
        { path: "contact", element: <Contact /> },
        { path: "/products", element: <Products />, loader: getProducts },
        {
          path: "/prod/:id",
          element: <SingleProduct />,
          loader: getOneProduct,
        },
        { path: "/cart", element: <Cart /> },
        {
          path: "/login",
          element: <Login />,
        },
        { path: "/signup", element: <SignUp /> },
        {
          path: "/admin",
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
          loader: getCurrent,
          children: [
            {
              index: true,
              element: <ProductsDash cart={cart} setCart={setCart} />,
              loader: getProducts,
            },
            { path: "/admin/users", element: <Users /> },
            {
              path: "/admin/form",
              element: <FormProduct list={list} setList={setList} />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
