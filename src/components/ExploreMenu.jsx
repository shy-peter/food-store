import React, { useState } from "react";
import { menu_list } from "../assets/frontend_assets/assets";

const ExploreMenu = ({ category, setCategory, handleCategory }) => {
  return (
    <div>
      <div className="container p-3  mx-auto flex flex-col gap-5 **:">
        <h1 className="text-[#262626] font-semibold text-2xl">
          Explore our menu
        </h1>
        <p className=" max-w-[80%] md:max-w-[90%] text-xs sm:text-sm md:text-base ">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <div id="explore-menu" className="flex gap-6    overflow-x-scroll scroll-bar-none   scrollbar-hide ">
          {menu_list.map((item, index) => {
            return (
              <div
              
                onClick={() => {
                  handleCategory(item.menu_name);
                }}
                key={index}
                className={`flex flex-col min-w-[150px] items-center gap-2 `}
              >
                <img
                  className={`rounded-full border-orange-600  max-w-[80px] ${
                    category === item.menu_name && " border-3"
                  } `}
                  src={item.menu_image}
                  alt={item.menu_name}
                />
                <p className="text-[#747474]">{item.menu_name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExploreMenu;
