import React from "react";
import { assets } from "../assets/assets";
import { useState } from "react";
import { Link } from "react-router-dom";
import MicrosoftCard from "../components/MicrosoftCard";
import { microsoftData } from "../data/microsoftData";
import ScrollToTopButton from '../components/ScrollToTopButton';

function Microsoft() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col  w-full bg-gray-100  shadow-xl/20 min-h-screen sm:min-h-screen relative space-y-5">
      {/* Nav Section */}
      <nav className="w-full flex  items-center h-16 text-xs px-6   ">
        {/* left section */}
        <div className="mr-6">
          <img src={assets.microsoft_logo} className="w-20 " alt="" />
        </div>
        {/* mid section */}
        <div className="hidden lg:flex space-x-4   ">
          <a href="" className="hover:underline">
            Microsoft 365
          </a>
          <a href="" className="hover:underline">
            Teams
          </a>
          <a href="" className="hover:underline">
            Copilot
          </a>
          <a href="" className="hover:underline">
            Windows
          </a>
          <a href="" className="hover:underline">
            Surface
          </a>
          <a href="" className="hover:underline">
            Xbox
          </a>
          <a href="" className="hover:underline">
            Cyber Week deals
          </a>
          <a href="" className="hover:underline">
            Small Business
          </a>
          <a href="" className="hover:underline">
            Deals
          </a>
        </div>

        {/* Right Section */}
        <div className="flex space-x-4 text-2xs sm:text-xs items-center ml-auto">
          <div className="flex">
            <a href="" className="underline underline-offset-2">
              All Microsoft
            </a>
            <img
              src={assets.dropdown_icon}
              className="w-2 rotate-90 ml-2 pt-1 cursor-pointer"
              alt=""
            />
          </div>
          <div className="flex">
            <a href="">Search</a>
            <img
              src={assets.search_icon}
              className="h-4 ml-2  cursor-pointer"
              alt=""
            />
          </div>
          <div className="flex">
            <a href="">Cart</a>
            <img
              src={assets.cart_icon}
              className="h-4 ml-2  cursor-pointer"
              alt=""
            />
          </div>
          <div className="flex">
            <img
              src="https://randomuser.me/api/portraits/med/men/75.jpg"
              className="rounded-xl w-6"
              alt=""
            />
          </div>

          {/* For smaller screen */}
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer lg:hidden"
            alt=""
          />
        </div>

        {/* Sidemenu for smaller screen */}
        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3"
            >
              <img
                src={assets.dropdown_icon}
                className=" h-4 rotate-180"
                alt=""
              />
              <p>Back</p>
            </div>
            <Link
              to=""
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border-b border-gray-200"
            >
              Microsoft 365
            </Link>
            <Link
              to=""
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border-b border-gray-200"
            >
              Teams
            </Link>
            <Link
              to=""
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border-b border-gray-200"
            >
              Copilot
            </Link>
            <Link
              to=""
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border-b border-gray-200"
            >
              Windows
            </Link>
            <Link
              to=""
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border-b border-gray-200"
            >
              Surface
            </Link>
            <Link
              to=""
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border-b border-gray-200"
            >
              Xbox
            </Link>
            <Link
              to=""
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border-b border-gray-200"
            >
              Cyber week deals
            </Link>
            <Link
              to=""
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border-b border-gray-200"
            >
              Small Business
            </Link>
            <Link
              to=""
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border-b border-gray-200"
            >
              Support
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}

      <div
        className="hero-section w-full flex flex-col sm:flex-row items-center bg-cover bg-center min-h-[400px] sm:min-h-[300px]"
        style={{ backgroundImage: `url(${assets.microsoft_hero_bg})` }}
      >
        {/* Hero left */}
        <div className="flex flex-col w-full sm:w-1/2 px-4 sm:px-10 py-6 sm:py-0 items-start text-white space-y-2">
          <h1 className="text-xl sm:text-4xl font-bold">Cyber Week is here.</h1>
          <p className="text-sm sm:text-base">
            Don't miss your chance to select Surface, Xbox and more.
          </p>
          <a
            href=""
            role="button"
            className="bg-white rounded shadow text-black text-sm px-3 py-2 font-medium"
          >
            Shop deals
          </a>
        </div>

        {/* Hero right */}
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-end items-center px-4 sm:px-10 mt-4 sm:mt-0">
          <img
            src={assets.microsoft_hero_img}
            className="w-auto max-h-[200px] sm:max-h-[300px] object-contain"
            alt=""
          />
        </div>
      </div>

      <ScrollToTopButton />

      {/* Cyber week deals */}
      <div className=" w-full flex items-center justify-between text-medium sm:text-sm px-4 ">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full">
          <div className="flex flex-col items-center justify-center w-full  ">
            <img
              src={assets.microsoft_surface_icon}
              className="w-10 cursor-pointer"
              alt=""
            />
            <a href="" className="text-blue-700 underline">
              Cyber week deals: Surface
            </a>
          </div>
          <div className="flex flex-col justify-center items-center p-4 w-full ">
            <img
              src={assets.microsoft_xbox_icon}
              className="w-10 cursor-pointer"
              alt=""
            />
            <a href="" className="text-blue-700 underline">
              Cyber week deals: Xbox
            </a>
          </div>
          <div className="flex flex-col justify-center items-center p-4 w-full ">
            <img
              src={assets.microsoft_accessories_icon}
              className="w-10 cursor-pointer"
              alt=""
            />
            <a href="" className="text-blue-700 underline">
              Cyber week deals: Accessories
            </a>
          </div>
          <div className="flex flex-col justify-center items-center p-4 w-full ">
            <img
              src={assets.microsoft_business_icon}
              className="w-10 cursor-pointer"
              alt=""
            />
            <a href="" className="text-blue-700 underline">
              Cyber week deals: Business
            </a>
          </div>
          <div className="flex flex-col justify-center items-center p-4 w-full ">
            <img
              src={assets.microsoft_windows_icon}
              className="w-10 cursor-pointer"
              alt=""
            />
            <a href="" className="text-blue-700 underline">
              Cyber week deals: Windows
            </a>
          </div>
        </div>
      </div>

      {/* Start the season with savings */}

      <div className="flex flex-col p-4 space-y-4">
        <p className="text-3xl font-semibold">Start the season with savings</p>
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {microsoftData.map((card, index) => (
              <MicrosoftCard key={index} card={card} />
            ))}
          </div>
        </div>
      </div>


      {/* Inquiry Section */}

            <div
            className="w-full flex flex-col sm:flex-row items-center justify-center bg-cover bg-center min-h-[300px] sm:min-h-[100px] py-5"
        style={{ backgroundImage: `url(${assets.microsoft_hero_bg})` }}
            > 
            <iv className="flex flex-col items-center w-full space-y-5">

            <h1 className="text-white font-semibold text-xl sm:text-2xl">Shopping for gifts? We're here to help.</h1>
            <input type="text" placeholder="Ask me a question" className="h-10 sm:w-1/2 text-xs pl-2 text-gray-500 bg-white rounded border-b border-sky-600" name="" id="" />
            <div className="flex space-x-4">
              <a href="" className="bg-gray-200 rounded-3xl py-2 px-6">Gift for gamers</a>
              <a href="" className="bg-gray-200 rounded-3xl py-2 px-6">Best pc deals</a>
              <a href="" className="bg-gray-200 rounded-3xl py-2 px-6">Gift under 1000$</a>
            </div>
            </iv>

            </div>

            {/* Display exclusive News section */}

            <div
            className="w-full flex  items-center  justify-end p-10 bg-cover bg-center min-h-[400px] sm:min-h-[500px] py-5"
        style={{ backgroundImage: `url(${assets.microsoft_page_img1})` }}
            >
              <div className="flex flex-col self-center w-1/2 space-y-4">
                <h1 className=" text-base sm:text-3xl font-semibold">Meet the computer you can talk to</h1>
                <p className="text-sm sm:text-xl">We typed, we clicked, now we're talking</p>
                <a href="" className="bg-blue-500  py-2 px-4 text-white text-sm w-fit">Meet windows 11</a>

              </div>

            </div>


            {/* footer section */}

            <div className="flex flex-col bg-gray-300 w-full  ">
              <div className="flex p-5 justify-between ">
                <div className="flex flex-col space-y-3 text-gray-600">
                  <p className="font-semibold text-xs sm:text-sm">What's New</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>

                </div>
                <div className="flex flex-col space-y-3 text-gray-600">
                  <p className="font-semibold text-xs sm:text-sm">Microsoft Store</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>

                </div>
                <div className="flex flex-col space-y-3 text-gray-600">
                  <p className="font-semibold text-xs sm:text-sm">Education</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>

                </div>
                <div className="flex flex-col space-y-3 text-gray-600">
                  <p className="font-semibold text-xs sm:text-sm">Development and IT</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>

                </div>
                <div className="flex flex-col space-y-3 text-gray-600">
                  <p className="font-semibold text-xs sm:text-sm">Company</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>
                  <p className="text-xs sm:text-xs">Surface pro</p>

                </div>

              </div>

              <div className="flex text-xs space-x-4 mb-5">

                <a href="" className="underline">English (United states)</a>
                <a href="" className="underline">Your Privacy choices</a>
                <a href="" className="underline">Consumer health Privacy</a>

            </div>
              </div>

    </div>
  );
}

export default Microsoft;
