import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className=" border shadow-2xl absolute top-0 right-0 left-0 bottom-0  z-1 bg-black/40  ">
      <form
        className="flex flex-col gap-4   absolute bg-white        top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 p-5 rounded-md 
   "
        style={{ width: "max(23vw, 330px)" }}
      >
        <div className="flex justify-between">
          <h2 className="font-bold">{currState}</h2>
          <img
            className="w-5"
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        {/* top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 p-4  */}
        <div className="flex flex-col gap-4">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              className="border border-gray-400 w-full p-1"
              type="text"
              placeholder="Your name"
              required
            />
          )}
          <input
            className="border border-gray-400  w-full p-1"
            type="email"
            placeholder="Your email"
            required
          />
          <input
            className="border  border-gray-400  w-full p-1"
            type="password"
            placeholder="password"
            required
          />
          <button className="border p-1  bg-orange-600 text-white font-semibold">
            {currState === "Sign up" ? "Create account" : "Login"}
          </button>
        </div>
        <div className="flex items-start gap-1">
          <input
            className="mt-1 focus:ring-0 checked:bg-orange-500 "
            type="checkbox"
            required
          />
          <p className="text-sm text-gray-500 ">
            By continuing, i agree t the rerms of use and privacy policy.
          </p>
        </div>
        {currState === "Login" ? (
          <p className="text-sm text-gray-500">
            Create a new account?{" "}
            <span className="text-orange-600" onClick={() => setCurrState("Sign Up")}>click here</span>
          </p>
        ) : (
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <span
              className="text-orange-600"
              onClick={() => setCurrState("Login")}
            >
              click here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
