import React from "react";
import { assets } from "../assets/assets";

function OverflowOverscroll() {
  return (
    <div className="flex flex-col  w-full bg-gray-100  shadow-xl/20 min-h-screen sm:min-h-screen ">
        {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 mt-10">
        {/* Card */}
        <div className="flex flex-col bg-gray-300 h-80 items-center justify-center rounded">
          <div className="flex items-center bg-white p-4 rounded-xl shadow-sm overflow-visible">
            <img
              src={assets.woman}
              className="w-22 h-25 rounded-xl -ml-6 scale-125"
              alt="Ryan Reynolds"
            />

            <div className="flex flex-col ml-4">
              <p className="font-semibold text-lg text-gray-900">
                Ryan Reynolds
              </p>
              <p className="text-base text-gray-500">Tech Advisor</p>
            </div>
          </div>
          <p className="bg-blue-500 rounded-xl text-white p-2 mt-5">Overflow-Visible</p>
        </div>

        {/* Card-2 */}
        <div className="flex flex-col bg-gray-300 h-80 items-center justify-center rounded">
          <div className="flex items-center bg-white p-4 rounded-xl shadow-sm overflow-hidden">
            <img
              src={assets.woman}
              className="w-22 h-25 rounded-xl -ml-6 scale-125"
              alt="Ryan Reynolds"
            />

            <div className="flex flex-col ml-4">
              <p className="font-semibold text-lg text-gray-900">
                Ryan Reynolds
              </p>
              <p className="text-base text-gray-500">Tech Advisor</p>
            </div>
          </div>
          <p className="bg-blue-500 rounded-xl text-white p-2 mt-5">Overflow-Hidden</p>
        </div>

        {/* Card-3 */}

        <div className="flex flex-col bg-gray-300 h-80 items-center justify-center rounded space-y-3 py-5 text-xs ">
          <div className="overflow-auto space-y-3 p-2 bg-gray-100 rounded-xl">

          <div className="flex items-center bg-white p-4 rounded-xl shadow-sm overflow-hidden ">
            <img
              src={assets.woman}
              className="w-10 h-10 rounded-3xl -ml-6 scale-125"
              alt="Ryan Reynolds"
            />

            <div className="flex flex-col ml-4">
              <p className="font-semibold  text-gray-900">
                Ryan Reynolds
              </p>
              <p className=" text-gray-500">Tech Advisor</p>
            </div>
          </div>
          <div className="flex items-center bg-white p-4 rounded-xl shadow-sm overflow-hidden">
            <img
              src={assets.woman}
              className="w-10 h-10 rounded-3xl -ml-6 scale-125"
              alt="Ryan Reynolds"
            />

            <div className="flex flex-col ml-4">
              <p className="font-semibold  text-gray-900">
                Ryan Reynolds
              </p>
              <p className=" text-gray-500">Tech Advisor</p>
            </div>
          </div>
          <div className="flex items-center bg-white p-4 rounded-xl shadow-sm overflow-hidden">
            <img
              src={assets.woman}
              className="w-10 h-10 rounded-3xl -ml-6 scale-125"
              alt="Ryan Reynolds"
            />

            <div className="flex flex-col ml-4">
              <p className="font-semibold  text-gray-900">
                Ryan Reynolds
              </p>
              <p className=" text-gray-500">Tech Advisor</p>
            </div>
          </div>
          <div className="flex items-center bg-white p-4 rounded-xl shadow-sm overflow-hidden">
            <img
              src={assets.woman}
              className="w-10 h-10 rounded-3xl -ml-6 scale-125"
              alt="Ryan Reynolds"
            />

            <div className="flex flex-col ml-4">
              <p className="font-semibold  text-gray-900">
                Ryan Reynolds
              </p>
              <p className=" text-gray-500">Tech Advisor</p>
            </div>
          </div>
          </div>
          <p className="bg-blue-500 rounded-xl text-white p-2 mt-5 text-base">Overflow-Auto</p>
        </div>

        {/* Card-4 */}

        <div className="flex flex-col bg-gray-300 h-80 items-center justify-center rounded space-y-3 py-5 text-xs ">
          <div className=" flex flex-col overflow-scroll space-y-3 p-2 bg-gray-100 rounded-xl">

          <div className="flex items-center bg-white p-4 rounded-xl shadow-sm overflow-hidden ">
            <img
              src={assets.woman}
              className="w-5 h-5 rounded-3xl -ml-3 scale-125"
              alt="Ryan Reynolds"
            />

            <div className="flex flex-col ml-4">
              <p className="font-semibold  text-gray-900">
                Ryan Reynolds
              </p>
              <p className=" text-gray-500">Tech Advisor</p>
            </div>
          </div>
          <div className="flex items-center bg-white p-4 rounded-xl shadow-sm overflow-hidden ">
            <img
              src={assets.woman}
              className="w-5 h-5 rounded-3xl -ml-3 scale-125"
              alt="Ryan Reynolds"
            />

            <div className="flex flex-col ml-4">
              <p className="font-semibold  text-gray-900">
                Ryan Reynolds
              </p>
              <p className=" text-gray-500">Tech Advisor</p>
            </div>
          </div>
          <div className="flex items-center bg-white p-4 rounded-xl shadow-sm overflow-hidden ">
            <img
              src={assets.woman}
              className="w-5 h-5 rounded-3xl -ml-3 scale-125"
              alt="Ryan Reynolds"
            />

            <div className="flex flex-col ml-4">
              <p className="font-semibold  text-gray-900">
                Ryan Reynolds
              </p>
              <p className=" text-gray-500">Tech Advisor</p>
            </div>
          </div>
          <div className="flex items-center bg-white p-4 rounded-xl shadow-sm overflow-hidden">
            <img
              src={assets.woman}
              className="w-5 h-5 rounded-3xl -ml-3 scale-125"
              alt="Ryan Reynolds"
            />

            <div className="flex flex-col ml-4">
              <p className="font-semibold  text-gray-900">
                Ryan Reynolds
              </p>
              <p className=" text-gray-500">Tech Advisor</p>
            </div>
          </div>
          <div className="flex items-center bg-white p-4 rounded-xl shadow-sm overflow-hidden">
            <img
              src={assets.woman}
              className="w-5 h-5 rounded-3xl -ml-3 scale-125"
              alt="Ryan Reynolds"
            />

            <div className="flex flex-col ml-4">
              <p className="font-semibold  text-gray-900">
                Ryan Reynolds
              </p>
              <p className=" text-gray-500">Tech Advisor</p>
            </div>
          </div>
          <div className="flex items-center bg-white p-4 rounded-xl shadow-sm overflow-hidden">
            <img
              src={assets.woman}
              className="w-5 h-5 rounded-3xl -ml-3 scale-125"
              alt="Ryan Reynolds"
            />

            <div className="flex flex-col ml-4">
              <p className="font-semibold  text-gray-900">
                Ryan Reynolds
              </p>
              <p className=" text-gray-500">Tech Advisor</p>
            </div>
          </div>
          </div>
          <p className="bg-blue-500 rounded-xl text-white p-2 mt-5 text-base">Overflow-Scroll</p>
        </div>

      </div>
    </div>
  );
}

export default OverflowOverscroll;
