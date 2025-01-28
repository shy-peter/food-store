import React, { useContext, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { MdShoppingCart } from "react-icons/md";

import logo_image from "../assets/images/food.jpg";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { assets } from "../assets/frontend_assets/assets";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { cartItems, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleMenu = (val) => {
    setMenu(val);
  };

  console.log(cartItems);

  return (
    <div>
      <div className="flex justify-between items-center container mx-auto p-3">
        <Link to={"/"}>
          <img
            src={assets.logo}
            className="max-w-[100px] rounded-full"
            alt=""
          />
        </Link>
        <div>
          <ul className="hidden gap-5 md:flex ">
            <Link
              to={"/"}
              onClick={() => handleMenu("home")}
              className={`transition-all ease-in-out duration-300 transform active:scale-95 hover:scale-105 cursor-pointer underline-offset-3 decoration-2 decoration-orange-600 ${
                menu === "home" ? " underline" : "text-gray-800"
              }`}
            >
              Home
            </Link>
            <a
              href="#explore-menu"
              onClick={() => handleMenu("menu")}
              className={`transition-all ease-in-out duration-300 transform active:scale-95 hover:scale-105 cursor-pointer underline-offset-3 decoration-2 decoration-orange-600 ${
                menu === "menu" ? " underline" : "text-gray-800"
              }`}
            >
              Menu
            </a>
            <a
              href="#app-download"
              onClick={() => handleMenu("mobile-app")}
              className={`transition-all  ease-in-out duration-300 transform active:scale-95 hover:scale-105 cursor-pointer underline-offset-3 decoration-2 decoration-orange-600 ${
                menu === "mobile-app" ? " underline" : "text-gray-800"
              }`}
            >
              Mobile-app
            </a>
            <a
              href="#contact-us"
              onClick={() => {
                navigate('/')
                handleMenu("contact-us");
              }}
              className={`transition-all ease-in-out duration-300 transform active:scale-95 hover:scale-105 cursor-pointer underline-offset-3 decoration-2 decoration-orange-600 ${
                menu === "contact-us" ? " underline" : "text-gray-800"
              }`}
            >
              Contact us
            </a>
          </ul>
        </div>
        <div>
          <ul className="flex gap-4">
            <li>
              <CiSearch size={25} />
            </li>
            <Link to={"/cart"} className="relative">
              <MdShoppingCart size={25} />
              {getTotalCartAmount() > 0 && (
                <span className="h-2 w-2 rounded-full absolute bg-orange-500 -top-1 right-0"></span>
              )}
            </Link>
            <Link>
              <button className="border rounded-2xl px-3 p-1 text-orange-500" onClick={() => setShowLogin(true)}>
                Sign in
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
