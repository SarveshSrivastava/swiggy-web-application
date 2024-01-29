import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantMenuAccordian from "./RestaurantMenuAccordian";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  const [menu, setMenu] = useState(null);
  const [restaurantDetails, setRestaurantDetails] = useState(null);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const restaurantMenuData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.34991224864122&lng=78.41912437230349&restaurantId=" +
        restaurantId
    );
    const jsonMenu = await restaurantMenuData.json();
    setMenu(jsonMenu.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
    setRestaurantDetails(jsonMenu);
  };
  if (restaurantDetails === null && menu === null) {
    return <></>;
  }
  return (
    <>
      <RestaurantMenuAccordian
        name={restaurantDetails.data.cards[0].card.card.info.name}
        costForTwoMessage={
          restaurantDetails.data.cards[0].card.card.info.costForTwoMessage
        }
        cuisines={restaurantDetails.data.cards[0].card.card.info.cuisines}
        avgRating={restaurantDetails.data.cards[0].card.card.info.avgRating}
        locality={restaurantDetails.data.cards[0].card.card.info.locality}
        slaString={restaurantDetails.data.cards[0].card.card.info.sla.slaString}
        menu={menu.filter(
          (m) =>
            m?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )}
      />
    </>
  );
};
export default RestaurantMenu;
