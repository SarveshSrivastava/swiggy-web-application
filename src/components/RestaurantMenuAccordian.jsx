import { useState } from "react";
import RestaurantMenuItems from "./RestaurantMenuItems";

const RestaurantMenuAccordian = ({
  menu,
  name,
  costForTwoMessage,
  cuisines,
  avgRating,
  locality,
  slaString,
}) => {
  console.log(menu);

  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand(!expand);
  };
  return (
    <div className="pt-24 w-9/12 mx-auto">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-3xl py-3">{name}</h1>
          <h2 className="text-lg">🍽️{cuisines.join(", ")}</h2>
          <h2 className="text-lg">📍{locality}</h2>
        </div>
        <h1 className="text-green-500 font-bold text-lg my-auto border-2 rounded-lg shadow-xl p-4 bg-red-50">
          🌟{avgRating}
        </h1>
      </div>
      <div className="flex">
        <h2 className="pr-3 py-4">⏳{slaString}</h2>
        <h2 className="py-4"></h2>
        <h2 className="pl-3 py-4">{costForTwoMessage}</h2>
      </div>
      {menu.map((x) => (
        <div
          className="bg-slate-50 p-4 mb-3 border-2 border-solid rounded-md"
          key={x.card.card.title}
        >
          <span
            className="flex justify-between cursor-pointer"
            onClick={handleClick}
          >
            <h1 className="font-bold text-lg">
              {x.card.card.title} ({x?.card?.card?.itemCards.length})
            </h1>
            <h1>{expand ? "🔼" : "🔽"}</h1>
          </span>
          {expand && <RestaurantMenuItems items={x?.card?.card?.itemCards} />}
        </div>
      ))}
    </div>
  );
};
export default RestaurantMenuAccordian;
