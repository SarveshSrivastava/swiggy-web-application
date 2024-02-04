import { useContext, useEffect, useState } from "react";
import RestaurantCard, { pureVegRestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";
const Restaurants = () => {
  const [restaurantsInfo, setRestaurantsInfo] = useState(null);
  const { loggedInUser,setUserName } = useContext(UserContext);
  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.34991224864122&lng=78.41912437230349&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(
      jsonData.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setRestaurantsInfo(jsonData.data.cards);
  };
  const PureVegRestaurantCard = pureVegRestaurantCard(RestaurantCard);
  return restaurantsInfo === null ? (
    <Shimmer />
  ) : (
    <>
      <p className="w-9/12 mx-auto text-3xl font-bold pt-24">
        {restaurantsInfo[1]?.card?.card?.header?.title}
      </p>
      {/* Context API modify context api via input field */}
      {/* <input
        type="text"
        value={loggedInUser}
        onChange={(e) => setUserName(e.target.value)}
      /> */}
      <div className="flex w-9/12 mx-auto flex-wrap justify-center">
        {restaurantsInfo[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
          (restaurant) => {
            return restaurant.info.veg ? (
              <PureVegRestaurantCard
                key={restaurant.info.id}
                name={restaurant.info.name}
                cuisines={restaurant.info.cuisines}
                avgRating={restaurant.info.avgRating}
                areaName={restaurant.info.areaName}
                cloudinaryImageId={restaurant.info.cloudinaryImageId}
                slaString={restaurant.info.sla.slaString}
                css=""
                restaurantId={restaurant.info.id}
              />
            ) : (
              <RestaurantCard
                key={restaurant.info.id}
                name={restaurant.info.name}
                cuisines={restaurant.info.cuisines}
                avgRating={restaurant.info.avgRating}
                areaName={restaurant.info.areaName}
                cloudinaryImageId={restaurant.info.cloudinaryImageId}
                slaString={restaurant.info.sla.slaString}
                css="w-1/5 mx-9 my-5 rounded-xl ease-out hover:scale-95 cursor-pointer"
                restaurantId={restaurant.info.id}
              />
            );
          }
        )}
      </div>
      <p className="w-9/12 mx-auto text-3xl font-bold mt-2">
        {restaurantsInfo[2]?.card?.card?.title}
      </p>
      <div className="flex w-9/12 mx-auto flex-wrap justify-center">
        {restaurantsInfo[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
          (restaurant) => {
            return restaurant.info.veg ? (
              <PureVegRestaurantCard
                key={restaurant.info.id}
                name={restaurant.info.name}
                cuisines={restaurant.info.cuisines}
                avgRating={restaurant.info.avgRating}
                areaName={restaurant.info.areaName}
                cloudinaryImageId={restaurant.info.cloudinaryImageId}
                slaString={restaurant.info.sla.slaString}
                css=""
                restaurantId={restaurant.info.id}
              />
            ) : (
              <RestaurantCard
                key={restaurant.info.id}
                name={restaurant.info.name}
                cuisines={restaurant.info.cuisines}
                avgRating={restaurant.info.avgRating}
                areaName={restaurant.info.areaName}
                cloudinaryImageId={restaurant.info.cloudinaryImageId}
                slaString={restaurant.info.sla.slaString}
                css="w-1/5 mx-9 my-5 rounded-xl ease-out hover:scale-95 cursor-pointer"
                restaurantId={restaurant.info.id}
              />
            );
          }
        )}
      </div>
    </>
  );
};
export default Restaurants;
