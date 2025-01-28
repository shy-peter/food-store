import React from "react";
import { assets } from "../assets/frontend_assets/assets";
const Footer = () => {
  return (
    <div className="bg-gray-900 py-5 mt-20 " id="contact-us">

      <div className="container mx-auto text-white/50  grid grid-cols-2 p-3">
        <div className="flex flex-col gap-4 items-start">
          <img className="w-30" src={assets.logo} alt="" />
          <p className="text-sm max-w-[80%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi sunt
            nisi, dolore aliquam blanditiis quae sapiente voluptates omnis illo
            sint.
          </p>
          <div className="flex gap-4">
            <img className="w-8" src={assets.facebook_icon} alt="" />
            <img className="w-8" src={assets.twitter_icon} alt="" />
            <img className="w-8" src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div>
            <h2 className="text-white font-bold">COMPANY</h2>
            <ul className="flex flex-col">
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div>
            <h2 className="text-white font-bold">GET IN TOUCH</h2>
            <ul className="flex flex-col">
              <li>+1-212-456-7890</li>
              <li>contact@tomato.com</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center text-white/50">copywrite 2025 tomatoshop all right reserved</p>
    </div>
  );
};

export default Footer;
