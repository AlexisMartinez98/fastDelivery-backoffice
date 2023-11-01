"use client";
import React, { useEffect, useState } from "react";
import BoxDate from "@/app/components/commons/boxDate";
import Link from "next/link";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "@/app/state/store";
import BoxAddress from "@/app/components/BoxAddress";
import axios from "axios";

type AddressItem = {
  _id: string;
  address: string;
};

const page = () => {
  const [packages, setPackages] = useState([]);
  const date: Date = useSelector((state: RootState) => state.date.selectedDate);

  const objDate = new Date(date + "T00:00:00Z");
  const diaDelMes = objDate.getUTCDate();
  const diasSemana = ["dom", "lun", "mar", "mie", "jue", "vie", "sab"];
  const diaDeLaSemana = diasSemana[objDate.getUTCDay()];
  const nombreMes = objDate.toLocaleString("es-ES", {
    month: "long",
    timeZone: "UTC",
  });
  const monthWithCapitalLetter =
    nombreMes.charAt(0).toUpperCase() + nombreMes.slice(1);

  const totalPackages = packages.length;
  useEffect(() => {
    const packages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/backoffice/packagesPerDay/${date}`
        );

        setPackages(response.data.allPackagesPerDay);
      } catch (error) {
        console.error("error:", error);
      }
    };
    packages();
  }, []);

  return (
    <main className="mr-6 ml-6 mt-4 mb-5 font-poppins">
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
          <h1 className="ml-4 font-black text-lg items-center">Paquetes</h1>
        </div>

        <div className="  bg-[#ffffff] rounded-xl relative top-[-6.5px]">
          <div className="mx-5 mt-0 h-[485px] overflow-y-auto relative">
            <div className="h-[45px] w-auto  flex justify-between items-end  mb-4 dotted-border ">
              <p className=" text-[#3D1DF3] font-semibold ">
                {monthWithCapitalLetter}
              </p>
              <div className=" relative top-7 ">
                <BoxDate diaDelMes={diaDelMes} diaDeLaSemana={diaDeLaSemana} />
              </div>
            </div>

            <span className=" text-md">
              <b> {totalPackages} paquetes</b> <br />
            </span>
            {packages.map((item: AddressItem) => (
              <BoxAddress
                key={item._id}
                _id={item._id}
                address={item.address}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
