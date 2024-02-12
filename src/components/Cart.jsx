import { useSelector } from "react-redux";
import RestaurantMenuItems from "./RestaurantMenuItems";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="w-9/12 mx-auto pt-24">
      <h1 className=" flex justify-center text-3xl font-bold">CART</h1>
      <RestaurantMenuItems items={cartItems} addButton={false}/>
    </div>
  );
};

export default Cart;
