import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className=" container mx-auto grid md:grid-cols-2 gap-5 md:gap-x-30 ">
      <div>
        <p className="font-bold  text-sm md:text-base mb-5">
          Delivery Information{" "}
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <input
              className="border w-full border-gray-500/50  outline-0 text-sm p-1 rounded-sm"
              type="text"
              name=""
              id=""
              placeholder="First name"
            />
            <input
              className="border w-full border-gray-500/50  outline-0 text-sm p-1 rounded-sm"
              type="text"
              name=""
              id=""
              placeholder="Last name"
            />
          </div>
          <input
            className="border border-gray-500/50  outline-0 text-sm p-1 rounded-sm"
            type="text"
            name=""
            id=""
            placeholder="Email address"
          />
          <input
            className="border border-gray-500/50  outline-0 text-sm p-1 rounded-sm"
            type="text"
            name=""
            id=""
            placeholder="Street"
          />
          <div className="flex gap-2 ">
            <input
              className="border  w-full border-gray-500/50  outline-0 text-sm p-1 rounded-sm"
              type="text"
              name=""
              id=""
              placeholder="City"
            />
            <input
              className="border w-full border-gray-500/50  outline-0 text-sm p-1 rounded-sm"
              type="text"
              name=""
              id=""
              placeholder="State"
            />
          </div>
          <div className="flex gap-2 ">
            <input
              className="border w-full border-gray-500/50  outline-0 text-sm p-1 rounded-sm"
              type="text"
              name=""
              id=""
              placeholder="Zip code"
            />
            <input
              className="border w-full border-gray-500/50  outline-0 text-sm p-1 rounded-sm"
              type="text"
              name=""
              id=""
              placeholder="Country"
            />
          </div>
          <input
            className="border border-gray-500/50  outline-0 text-sm p-1 rounded-sm"
            type="text"
            name=""
            id=""
            placeholder="Phone"
          />
        </div>
      </div>

      <div className="">
        <p className="font-bold  text-sm md:text-base ">Cart Totals</p>
        <div className="flex justify-between border-b-1 pb-1 py-2 border-b-gray-500/50 text-gray-500 ">
          <p>Subtotal</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <div className="flex justify-between border-b-1 pb-1 py-2 border-b-gray-500/50 text-gray-500 ">
          <p>Delivery fee</p>
          <p>{getTotalCartAmount() > 0 ? 2 : 0}</p>
        </div>
        <div className="flex justify-between border-b-1 pb-1 py-2 border-b-gray-500/50 text-gray-500 ">
          <p className="font-bold">Total</p>
          <p>${getTotalCartAmount() + (getTotalCartAmount() > 0 ? 2 : 0)}</p>
        </div>
        <button className="text-xs bg-amber-600 font-bold p-2 px-4 border-0 mt-5 rounded-sm text-white">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
