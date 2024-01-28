import RatingLogo from "../assets/RatingLogo";

const RestaurantCard = ({
  name,
  avgRating,
  cuisines,
  areaName,
  slaString,
  cloudinaryImageId,
}) => {
  return (
    <div className="w-1/5 mx-9 my-5 rounded-xl ease-out hover:scale-95 cursor-pointer">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
          cloudinaryImageId
        }
        alt={name}
        className="w-96 h-64 rounded-xl"
      />
      <p className="text-xl font-semibold">{name}</p>
      {/* <RatingLogo /> */}
      <h2 className="flex">
        {avgRating}{" "}
        <span className="inline-block h-1 w-1 bg-black rounded-full my-auto mx-5"></span>{" "}
        {slaString}
      </h2>
      <p className="overflow-hidden overflow-ellipsis whitespace-nowrap">{cuisines.join(", ")}</p>
      <p>{areaName}</p>
    </div>
  );
};
export default RestaurantCard;
