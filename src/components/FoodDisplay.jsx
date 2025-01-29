import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="container mx-auto p-3">
      <p className="font-bold text-xl">Top dishes near you</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7  2xl:grid-cols-8 gap-2">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <div
                className="rounded-lg w-fit flex flex-col  gap-3 shadow-lg overflow-hidden p-3 fade-in-item-two opacity-0 "
                style={{ animationDelay: `${index * 0.1}s` }} // Staggered animation
              >
                <FoodItem
                  key={index}
                  _id={item._id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  description={item.description}
                />
              </div>
            );
          }

          //   }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;

{
  /* <div className="grid grid-cols-3 gap-2">
{food_list.map((item, index) => {
  if (category === "All" || category === item.category) {
    return <FoodItem key={index} {...item} />;
  }
})}
</div> */
}
