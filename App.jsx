import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./src/components/ErrorPage";
import Restaurants from "./src/components/Restaurants";
const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Restaurants />,
      },
      {
        path: "/about-us",
        element: "",
      },
      {
        path: "/contact-us",
        element: "",
      },
      {
        path: "/cart",
        element: "",
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
