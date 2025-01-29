import React, { useContext } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { FaMinus, FaPlus } from "react-icons/fa";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ name, image, price, index, description, _id }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div
      className=" rounded-lg w-fit flex flex-col gap-3  shadow-lg overflow-hidden p-3 fade-in-item-two opacity-0"

      // style={{ animationDelay: `${index * 0.1}s` }} // Staggered animation
    >
      <div className="flex flex-col gap-2 relative">
        <img className="w-fit" src={image} alt="" />
        <div className=" absolute right-5 bottom-3 ">
          {!cartItems[_id] ? (
            <button className=" rounded-full p-1 bg-white/90 ">
              <FaPlus color="green" onClick={() => addToCart(_id)} />
            </button>
          ) : (
            <div className="flex justify-between gap-5 w-[50%] items-center">
              <button
                className=" rounded-full p-1 bg-white/90 "
                onClick={() => removeFromCart(_id)}
              >
                <FaMinus color="red" />
              </button>
              <span className="text-white font-bold text-lg">
                {cartItems[_id]}
              </span>
              <button
                className=" rounded-full p-1 bg-white/90 "
                onClick={() => addToCart(_id)}
              >
                <FaPlus color="green" />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm">{name}</p>
        <img className="w-14" src={assets.rating_starts} alt="" />
      </div>
      <div>
        <p>{price} </p>
      </div>
    </div>
  );
};

export default FoodItem;
