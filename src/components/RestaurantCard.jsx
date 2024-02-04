import { Link } from "react-router-dom";
import RatingLogo from "../assets/RatingLogo";
import errorImage from "../assets/No-image-found.jpg";

const RestaurantCard = ({
  name,
  avgRating,
  cuisines,
  areaName,
  slaString,
  cloudinaryImageId,
  css,
  restaurantId,
}) => {
  const handleErrorImage = (event) => {
    event.target.src = errorImage;
  };

  return (
    <div className={css}>
      <Link to={"restaurant/" + restaurantId}>
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
            cloudinaryImageId
          }
          onError={handleErrorImage}
          alt={name}
          className="w-96 h-64 rounded-xl"
        />
        <p className="text-xl font-semibold">{name}</p>
        {/* <RatingLogo /> */}
        <span className="flex items-center">
          <RatingLogo />
          <h2 className="flex px-0.5">
            {avgRating}
            <span className="inline-block h-1 w-1 bg-black rounded-full my-auto mx-5"></span>
            {slaString}
          </h2>
        </span>
        <p className="overflow-hidden overflow-ellipsis whitespace-nowrap">
          {cuisines.join(", ")}
        </p>
        <p>{areaName}</p>
      </Link>
    </div>
  );
};

export const pureVegRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <span className="w-1/5 mx-9 my-5 rounded-xl ease-out hover:scale-95 cursor-pointer">
        <label className="absolute rounded-lg bg-green-300 font-semibold p-2 mt-4 -ml-4">
          Pure Veg
        </label>
        <RestaurantCard {...props} />
      </span>
    );
  };
};
export default RestaurantCard;
