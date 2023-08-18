import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact"
import Navbar from "./components/Navbar";

const AppLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);