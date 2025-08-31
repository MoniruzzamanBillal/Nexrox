import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import Login from "./../pages/Login";
import Register from "./../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <p>home </p>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <p>about us </p>,
      },
    ],
  },
]);

export default router;
