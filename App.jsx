import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./src/components/ErrorPage";
import Restaurants from "./src/components/Restaurants";
import RestaurantMenu from "./src/components/RestaurantMenu";
// import AboutUs from "./src/components/AboutUs";
import UserContext from "./src/utils/UserContext";
import { Suspense, lazy, useEffect, useState } from "react";
import Shimmer from "./src/components/Shimmer";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Cart from "./src/components/Cart";

const AboutUs = lazy(() => import("./src/components/AboutUs"));
const Contact = lazy(()=>import("./src/components/Contact"));

const App = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    //authentication logic
    //send username and password to authentication api
    //set the username from the response  received
    const data = {
      name: "Sarvesh Srivastava",
    };
    setUserName(data.name);
  }, []);
  return (
    // to consume i.e., instead of useContext hook we can use <UserContext.Consume/>
    <Provider store={store}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
        element: (
          <Suspense fallback={<Shimmer />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/contact-us",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
