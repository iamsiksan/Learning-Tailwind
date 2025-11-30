import React from "react";
import { assets } from "../assets/assets";

function Facebook() {
  return (
    <div className="flex flex-col sm:flex-row w-full bg-gray-100  shadow-xl/20 h-screen">
      {/* Left Section */}

      <div className="flex flex-col  justify-center font-medium w-full sm:w-1/2 p-2">
        <img src={assets.facebook} className="w-full max-w-xs mx-auto sm:mx-0 " alt="" />
        <p className="font-[450] text-lg sm:text-2xl md:text-3xl p-2 ml-0 sm:ml-3">
          Connect with friends and the world around you on Facebook.
        </p>
      </div>

      {/* Right Section */}
      
      <div className="flex flex-col items-center justify-center w-full sm:w-1/2 p-5 sm:p-0">
        <div className="flex flex-col  items-center bg-white rounded-xl shadow-xl/20 inset-shadow-xm w-full max-w-md  h-auto mr-0 sm:mr-7 ">
          {/* Input and Button */}
          <div className="flex flex-col gap-4 w-full h-auto p-6">
            {/* Input fields */}
            <input
              type="text"
              placeholder="Email or Phone number"
              className="p-4 w-full h-12  rounded border border-gray-300  focus:outline-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-4 w-full h-12  rounded border border-gray-300  focus:outline-blue-500"
            />
            <a
              href=""
              role="button"
              className="bg-blue-600 font-bold text-md sm:text-xl  mt-2 h-12 w-full rounded-md text-white px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-center"
            >
              Login
            </a>
            <a href="" className="text-blue-600 text-center hover:underline">
              Forget password?
            </a>
          </div>
          {/* Line */}
          <hr className="w-80 px-6 border-none h-px  bg-gray-300" />
          <a
            href=""
            role="button"
            className="bg-green-500 font-bold  text-md  mt-3 mb-3 h-12 w-50 rounded-md text-white px-3 py-1 flex items-center justify-center"
          >
            Create new account
          </a>
        </div>
          <p className="text-black text-sm mt-6">
            <a href="" className=" hover:underline font-bold">
              Create a Page
            </a>{" "}
            for a celebrity, brand or business.
          </p>
      </div>
    </div>
  );
}

export default Facebook;
