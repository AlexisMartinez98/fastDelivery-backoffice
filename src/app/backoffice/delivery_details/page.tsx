"use client";
import React from "react";
import { useState } from "react";
import { address } from "../../utils/helpers";
import BoxAddress from "../../components/BoxAddress";

type AddressItem = {
  id: any;
  address: string;
  status: string;
};
const page = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSwitch = () => {
    setIsActive(!isActive);
  };
  return (
    <main className="mr-6 ml-6 mt-4 mb-8 font-poppins">
      <div className="profile-info rounded-2xl text-[#3D1DF3] bg-[#C7FFB1] ">
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

          <h1 className="m-4 font-black text-lg ">Perfil del repartidor</h1>
        </div>
        <div className="rounded-2xl py-4 bg-white">
          <div className="flex items-center">
            <div className="w-16 h-16 ml-5  rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-lg">AF</span>
            </div>
            <div className="ml-4 mt-2">
              <h3 className="text-m font-semibold">Farid</h3>
              {isActive ? (
                <h4 className="text-[11px] bg-[#C7FFB1] rounded-2xl text-center px-3">
                  ACTIVO
                </h4>
              ) : (
                <h4 className="text-[11px] bg-[#FFC7C7] rounded-2xl text-center px-3">
                  INACTIVO
                </h4>
              )}
            </div>
            <div
              className={`relative w-11 h-6 bg-white rounded-full p-1 border-[#3D1DF3] border-[1.5px] ml-auto mr-5 cursor-pointer`}
              onClick={toggleSwitch}
            >
              <div
                className={`relative w-4 h-4 rounded-full ${
                  isActive ? "bg-customGreen" : "bg-red-500"
                } transform ${
                  isActive ? "translate-x-5" : "translate-x-0"
                } transition-transform`}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="pending-orders-block bg-white rounded-2xl text-[#3D1DF3] font-black mt-3 py-4">
        <div className="flex justify-between">
          <h2 className="ml-5 ">Repartos pendientes</h2>
          <svg
            width="7"
            height="9"
            viewBox="0 0 7 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-5 mt-2"
          >
            <path
              d="M6.0791 3.73201C6.55848 4.13179 6.55848 4.86821 6.0791 5.26799L1.89047 8.7611C1.23921 9.30422 0.25 8.84112 0.25 7.99311L0.25 1.00689C0.25 0.158881 1.2392 -0.304218 1.89046 0.2389L6.0791 3.73201Z"
              fill="#3D1DF3"
            />
          </svg>
        </div>
        <div className="ml-5">
          <p className="font-normal text-xs">Sin repartos pendientes</p>
        </div>
      </div>
      <div className="delivery-history bg-white rounded-2xl text-[#3D1DF3] font-black mt-3 py-4">
        <div className="flex justify-between">
          <h2 className="ml-5 ">Historial de repartos</h2>

          <svg
            width="9"
            height="7"
            viewBox="0 0 9 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-5 mt-2"
          >
            <path
              d="M5.26799 6.07909C4.86821 6.55848 4.13179 6.55848 3.73201 6.0791L0.238902 1.89046C-0.304217 1.2392 0.158881 0.249999 1.00689 0.249999L7.99311 0.25C8.84112 0.25 9.30422 1.2392 8.7611 1.89046L5.26799 6.07909Z"
              fill="#3D1DF3"
            />
          </svg>
        </div>
        <p className="ml-5 font-normal text-xs mt-1">
          {address.length} paquetes entregados
        </p>
        <div className="mt-3 h-[310px] overflow-y-auto relative">
          {address.map((item: AddressItem) => (
            <BoxAddress
              key={item.id}
              itemId={item.id}
              address={item.address}
              status={item.status}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
