import React from "react";
import { address } from "../../utils/helpers";
import BoxAddress from "../../components/BoxAddress";
import Link from "next/link";

type AddressItem = {
  id: string;
  address: string;
};

const page = () => {
  const totalPackages = address.length;

  return (
    <main className="mr-6 ml-6 mt-4 mb-8 font-poppins">
      <div className="package-info rounded-2xl text-[#3D1DF3] bg-[#C7FFB1] ">
        <div className="h-16 flex items-center">
          <Link href="/backoffice/manage_orders" className="flex items-center">
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
          </Link>
          <h1 className="ml-4 font-black text-lg ">Paquetes</h1>
        </div>

        <div
          className="rounded-2xl py-4  bg-white  justify-end"
         
        >
          <div className="mt-0 h-[485px] overflow-y-auto relative">
            <span className="ml-6 text-md">
              
              <b> {totalPackages} paquetes</b> <br /> 
            <span className="text-sm ml-6">
              con el criterio de filtrado seleccionado

              </span>
            </span>
            {address.map((item: AddressItem) => (
              <BoxAddress
                key={item.id}
                itemId={item.id}
                address={item.address}
                status=""
              />
            ))}
          </div>

        
        
        
        <div className="bg-customGreen text-[#3D1DF3] text-4xl w-14 h-14 rounded-full flex justify-end ml-auto mr-5 mt-1" >
          <Link href="/backoffice/add_packages" className="flex items-center">
            <span className="bg-customGreen text-[#3D1DF3] text-4xl w-14 h-14 rounded-full flex items-center justify-center cursor-pointer ">
              +
            </span>
          </Link>
        </div>

        </div>
      </div>
    </main>
  );
};

export default page;
