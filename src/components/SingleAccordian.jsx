import { useState } from "react";
import RestaurantMenuItems from "./RestaurantMenuItems";

const SingleAccordian = ({ accordian }) => {
  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand(!expand);
  };
  return (
    <div
      className="bg-slate-50 p-4 mb-3 border-2 border-solid rounded-md"
      key={accordian.card.card.title}
    >
      <span
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <h1 className="font-bold text-lg">
          {accordian.card.card.title} ({accordian?.card?.card?.itemCards.length}
          )
        </h1>
        <h1>{expand ? "🔼" : "🔽"}</h1>
      </span>
      {expand && (
        <RestaurantMenuItems items={accordian?.card?.card?.itemCards} />
      )}
    </div>
  );
};
export default SingleAccordian;
