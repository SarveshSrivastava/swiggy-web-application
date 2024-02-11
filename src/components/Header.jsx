import { useContext } from "react";
import SwiggyLogo from "../assets/SwiggyLogo";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between w-9/12 mx-auto bg-slate-100 rounded-md drop-shadow-lg p-4 fixed top-0 right-0 left-0 z-50">
      <SwiggyLogo />
      <ul className="flex space-x-6 my-auto">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about-us">
          <li>About Us</li>
        </Link>
        <Link to="/contact-us">
          <li>Contact Us</li>
        </Link>
        <Link to="/cart">
          <li>Cart - ({cartItems.length} items)</li>
        </Link>
        <li>{loggedInUser}</li>
      </ul>
    </div>
  );
};
export default Header;
