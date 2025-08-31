import App from "@/App";
import { createBrowserRouter } from "react-router-dom";

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
        element: <p>login </p>,
      },
      {
        path: "/register",
        element: <p>register </p>,
      },
      {
        path: "/about",
        element: <p>about us </p>,
      },
    ],
  },
]);

export default router;
