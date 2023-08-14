import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "contact",
    element: <div>Contact</div>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);