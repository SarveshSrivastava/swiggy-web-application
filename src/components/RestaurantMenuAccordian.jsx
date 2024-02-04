import { useState } from "react";
import SingleAccordian from "./SingleAccordian";

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

  const [showIndex, setShowIndex] = useState(null);

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
      {menu.map((x, index) => (
        <SingleAccordian
          key={x.card.card.title}
          accordian={x}
          showIndexProps={index === showIndex ? true : false}
          handleShowIndex={() => {
            setShowIndex(index);
          }}
        />
      ))}
    </div>
  );
};
export default RestaurantMenuAccordian;
