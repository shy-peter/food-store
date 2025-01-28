import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const Cart = () => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    deleteFromCart,
    addToCart
  } = useContext(StoreContext);

  // Filter out items that are in the cart
  const cartDetails = food_list.filter((item) => cartItems[item._id] > 0);

  const navigate = useNavigate();

  return (
    <div className="container   mx-auto text-sm  flex flex-col gap-12 p-5">
      <div className="   mt-10">
        {cartDetails.length === 0 ? (
          <p className="md:text-lg italic">Your cart is empty.</p>
        ) : (
          <div className="  ">
            <div className="grid grid-cols-6 text-gray-400 mb-2 border-b-1 pb-2   border-b-gray-400">
              <p>items</p>
              <p>Title</p>
              <p>Price </p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Delete</p>
            </div>
            {cartDetails.map((item) => (
              <div
                key={item._id}
                className="grid grid-cols-6   border-b border-b-orange-200 p-1 text-xs sm:text-sm md:text-base gap-2   items-center"
              >
                <img
                  className=" w-[40px] h-[40px] rounded-full"
                  src={item.image}
                  alt=""
                />
                <p className="">{item.name}</p>
                <p>${item.price.toFixed(2)}</p>
                <div className="relative   ">
                  
                  <button onClick={() => addToCart(item._id)}   className="cursor-pointer absolute -top-1  left-3" ><FaPlus color="green" /></button>
                  <p >{cartItems[item._id]}</p>
                  <button onClick={() => removeFromCart(item._id)} className=" absolute  w-3 h-3  -bottom-1 -left-5"> <FaMinus color="red" /></button>

                </div>
                <p>${item.price * cartItems[item._id].toFixed(2)}</p>

                <button onClick={() => deleteFromCart(item._id)}>
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="grid md:grid-cols-2 gap-5 md:gap-x-30 ">
        <div className="order-2 md:order-1">
          <p className="font-bold">Cart Totals</p>
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
          <button
            onClick={() => navigate("/order")}
            className="text-xs bg-amber-600 font-bold p-2 px-4 border-0 mt-5 rounded-sm text-white"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="flex flex-col gap-1 text-gray-500 order-1 ">
          <p>if you have a promo code. Enter it here</p>
          <div className=" bg-[#eaeaea] flex justify-between">
            <input
              className="flex-1 px-2 outline-0"
              type="text"
              name=""
              id=""
              placeholder="promo code "
            />
            <button className="bg-black text-white p-1 px-5 rounded-sm">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
