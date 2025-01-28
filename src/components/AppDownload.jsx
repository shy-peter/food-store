import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const AppDownload = () => {
  return (
    <div
      id="app-download"
      className="mt-20  container mx-auto flex flex-col items-center gap-10"
    >
      <p className="font-bold text-xl md:text-3xl max-w-[500px] text-center">
        For Better Experience Download Tomato app
      </p>
      <div className="flex gap-4 ">
        <img
          className="w-30 hover:scale-110   ease-in-out transition-all duration-500"
          src={assets.play_store}
          alt=""
        />
        <img
          className="w-30 hover:scale-110  ease-in-out transition-all duration-500"
          src={assets.app_store}
          alt=""
        />
      </div>
    </div>
  );
};

export default AppDownload;
