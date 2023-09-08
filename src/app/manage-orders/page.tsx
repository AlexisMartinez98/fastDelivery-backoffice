import React from "react";

const page = () => {
  return (
    <div className=" rounded-t-2xl h-screen text-[#3D1DF3] bg-[#C7FFB1] mr-6  ml-6 mt-4 mb-8 font-poppins">
      <div className="h-16 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8  mr-8 ml-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <h1 className="m-5 font-bold text-lg ">Gestionar Pedidos</h1>
      </div>
      <div className="rounded-2xl h-full mb-8 bg-white">
        <div className="flex items-center">
          <div className="w-16 h-16 ml-5 mt-4 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-white text-lg">AF</span>
          </div>
          <div className="ml-4 mt-2">
            <h3 className="text-xl font-semibold">¡Hola Admin!</h3>
            <h5 className=" text-base">Estos son los pedidos del día</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
