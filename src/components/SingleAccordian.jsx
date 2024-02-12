import { useState } from "react";
import RestaurantMenuItems from "./RestaurantMenuItems";

const SingleAccordian = ({ accordian, showIndexProps, handleShowIndex }) => {
  //   const [expand, setExpand] = useState(false);
    //uncontrolled component now it is controlled by parent this is known as lifting the state up
  const handleClick = () => {
    // setExpand(!expand);
    handleShowIndex();
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
        <h1>{showIndexProps ? "🔼" : "🔽"}</h1>
      </span>
      {showIndexProps && (
        <RestaurantMenuItems items={accordian?.card?.card?.itemCards} addButton={true}/>
      )}
    </div>
  );
};
export default SingleAccordian;
