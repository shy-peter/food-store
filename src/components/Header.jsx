import React from "react";
import bg_image from "../assets/images/background_image.jpeg";
import { MdHeight } from "react-icons/md";

const Header = () => {
  return (
    <div
      className=" bg-no-repeat mt-4 bg-cover container mx-auto rounded-md md:rounded-3xl px-3 relative h-[30vh] md:h-[50vh] bg-center mb-10"
      style={{ backgroundImage: `url(${bg_image})` }}
    >
      <div className="absolute md:px-11 text-white bottom-[15%]  md:bottom-[10%] flex flex-col items-start gap-[1.5vw]  md:max-w-[60%] animate-fade-in duration-100">
        <h2 className="font-bold" style={{ fontSize: "max(4.5vw, 22px)" }}>
          Order your <br /> favorite food here
        </h2>
        <p className="text-xs sm:text-sm md:text-base xl:text-2xl hidden md:flex">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button className="font-semibold bg-white text-black rounded-2xl text-sm md:text-base md:px-5 px-2 py-1 md:py-2">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
