import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
const Restaurants = () => {
  const [restaurantsInfo, setRestaurantsInfo] = useState(null);

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

  return restaurantsInfo === null ? (
    <Shimmer/>
  ) : (
    <>
      <p className="w-9/12 mx-auto text-3xl font-bold pt-24">
        {restaurantsInfo[1]?.card?.card?.header?.title}
      </p>
      <div className="flex w-9/12 mx-auto flex-wrap justify-center">
        {restaurantsInfo[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
          (restaurant) => {
            return (
              <RestaurantCard
                key={restaurant.info.id}
                name={restaurant.info.name}
                cuisines={restaurant.info.cuisines}
                avgRating={restaurant.info.avgRating}
                areaName={restaurant.info.areaName}
                cloudinaryImageId={restaurant.info.cloudinaryImageId}
                slaString={restaurant.info.sla.slaString}
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
            return (
              <RestaurantCard
                key={restaurant.info.id}
                name={restaurant.info.name}
                cuisines={restaurant.info.cuisines}
                avgRating={restaurant.info.avgRating}
                areaName={restaurant.info.areaName}
                cloudinaryImageId={restaurant.info.cloudinaryImageId}
                slaString={restaurant.info.sla.slaString}
              />
            );
          }
        )}
      </div>
    </>
  );
};
export default Restaurants;
