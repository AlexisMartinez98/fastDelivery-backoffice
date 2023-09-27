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
          className="rounded-2xl py-4 bg-white"
          style={{
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
          }}
        >
          <div className="mt-2 h-[460px] overflow-y-auto relative">
            <span className="ml-6 text-lg">
              {" "}
              <b> {totalPackages} paquetes</b>{" "}
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
        </div>
        <div
          className="rounded-2xl py-5 bg-white "
          style={{
            paddingBottom: "18%",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          }}
        >
          <Link href="/backoffice/add_packages">
            <span className="bg-customGreen text-[#3D1DF3] text-4xl w-14 h-14 rounded-full flex items-center justify-center absolute bottom-8 right-8 cursor-pointer">
              +
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default page;
