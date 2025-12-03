import React from "react";

function FlexGrid() {
  return (
    <div className="flex flex-col  w-full bg-gray-100  shadow-xl/20 min-h-screen sm:min-h-screen p-10  ">
      <div className="flex flex-col ">
        {/* Nav */}
        <div className="bg-[#f95738] flex space-x-4 px-5">
          <div className="bg-[#faf0ca] w-20   mt-5 rounded-xl h-5"></div>
          <div className="bg-[#faf0ca] w-20   mt-5 rounded-xl h-5"></div>
          <div className="bg-[#faf0ca] w-20   mt-5 rounded-xl h-5"></div>
          <div className="bg-[#faf0ca] w-20   mt-5 rounded-xl h-5"></div>
          <div className="bg-[#faf0ca] w-20   mt-5 rounded-xl h-5"></div>
          <div className="bg-[#faf0ca] w-20   mt-5 rounded-xl h-5"></div>
        </div>

        <div className="flex   bg-[#f95738] w-full h-96">
          {/* Left SEction */}

          <div className="flex flex-col space-y-5 justify-center px-10 w-1/2 h-80">
            <div className="flex w-full h-8 bg-[#ee964b]"></div>
            <div className="flex w-1/2 h-5 bg-[#f4d35e]"></div>
            <div className="flex w-1/3 h-5 bg-[#faf0ca] rounded-xl"></div>
          </div>

          {/* Right Section */}

          <div className="flex items-center justify-center w-1/2 h-80">
            <div className="bg-[#f4d35e] w-full h-50 m-5 rounded"></div>
          </div>
        </div>
        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full p-10 bg-[#0d3b66] min-h-screen auto-rows-[10rem]  ">
          {/* main layout */}

          {/* Card */}
          <div className="flex bg-[#faf0ca] w-full "></div>
          <div className="flex bg-[#f95738] w-full "></div>
          <div className="flex bg-[#ee964b] w-full "></div>
          <div className="flex bg-[#f95738] w-full "></div>
          <div className=" bg-[#f95738] w-full  col-span-2"></div>
          <div className="flex bg-[#f4d35e] w-full "></div>
          <div className="flex bg-[#ee964b] w-full "></div>

          <div className=" bg-[#f95738] w-full "></div>
          <div className="row-span-2 bg-[#f4d35e] w-full "></div>
          <div className="flex bg-[#f95738] w-full "></div>
          <div className=" bg-[#f95738] w-full "></div>

          <div className="flex bg-[#f95738] w-full "></div>
          <div className="flex bg-[#f95738] w-full "></div>
          <div className="flex bg-[#ee964b] w-full "></div>
        </div>
        <div className="flex  bg-[#f95738] w-full h-50 px-5">
          <div className="flex flex-col space-y-2 m-5">
            <div className="bg-amber-50 w-20 h-5 rounded"></div>
            <div className="bg-amber-50 w-20 h-5 rounded"></div>
            <div className="bg-amber-50 w-20 h-5 rounded"></div>
            <div className="bg-amber-50 w-20 h-5 rounded"></div>
            <div className="bg-amber-50 w-20 h-5 rounded"></div>
            <div className="bg-amber-50 w-20 h-5 rounded"></div>
          </div>
          <div className="flex flex-col space-y-2 m-5">
            <div className="bg-amber-50 w-20 h-5 rounded"></div>
            <div className="bg-amber-50 w-20 h-5 rounded"></div>
            <div className="bg-amber-50 w-20 h-5 rounded"></div>
            <div className="bg-amber-50 w-20 h-5 rounded"></div>
            <div className="bg-amber-50 w-20 h-5 rounded"></div>
            <div className="bg-amber-50 w-20 h-5 rounded"></div>
          </div>
          <div className="flex flex-col space-y-2 m-5">
            <div className="bg-amber-50 w-20 h-5 rounded"></div>
            <div className="bg-amber-50 w-20 h-5 rounded"></div>
            <div className="bg-amber-50 w-20 h-5 rounded"></div>
            <div className="bg-amber-50 w-20 h-5 rounded"></div>
            <div className="bg-amber-50 w-20 h-5 rounded"></div>
            <div className="bg-amber-50 w-20 h-5 rounded"></div>
          </div>
          <div className="flex flex-col space-y-2 m-5">
            <div className="bg-amber-500 w-20 h-5 rounded"></div>
            <div className="bg-amber-500 w-20 h-5 rounded"></div>
            <div className="bg-amber-500 w-20 h-5 rounded"></div>
            <div className="bg-amber-500 w-20 h-5 rounded"></div>
            <div className="bg-amber-500 w-20 h-5 rounded"></div>
            <div className="bg-amber-500 w-20 h-5 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlexGrid;
