const RestaurantMenuItems = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((i) => (
        <span className="flex justify-between h-20 items-center border-b-2 border-b-gray-200" key={i?.card?.info?.id}>
          <span className="overflow-hidden w-3/4">
            <h1 className="text-lg font-semibold">{i?.card?.info?.isVeg?"🟢":"🔴"}{i?.card?.info?.name}</h1>
            <h2 className="font-medium">₹ {i?.card?.info?.price / 100||i?.card?.info?.defaultPrice / 100}</h2>
            <h2 className="overflow-hidden text-ellipsis whitespace-nowrap">{i?.card?.info?.description}</h2>
          </span>
          <button className="bg-white rounded-lg shadow-xl p-3">ADD+</button>
        </span>
      ))}
    </div>
  );
};
export default RestaurantMenuItems;
