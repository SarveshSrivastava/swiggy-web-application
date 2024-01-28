import SwiggyLogo from "../assets/SwiggyLogo";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between w-9/12 mx-auto bg-slate-100 rounded-md drop-shadow-lg p-4 fixed top-0 right-0 left-0">
      <SwiggyLogo />
      <ul className="flex space-x-6 my-auto">
        <Link to="/"><li>Home</li></Link>
        <Link to="/about-us"><li>About Us</li></Link>
        <Link to="/contact-us"><li>Contact Us</li></Link>
        <Link to="/cart"><li>Cart</li></Link>
      </ul>
    </div>
  );
};
export default Header;
