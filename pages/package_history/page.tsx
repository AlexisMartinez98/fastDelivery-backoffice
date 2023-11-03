"use client";
import React, { useState, useEffect } from "react";
import BoxDate from "@/app/components/commons/boxDate";
import Link from "next/link";
import BoxAddress from "@/app/components/BoxAddress";
import { useRouter } from "next/router";
import axios from "axios";

type AddressItem = {
  _id: string;
  address: string;
  delivered: boolean;
};

const page = () => {
  const router = useRouter();
  const { date } = router.query;

  
  const objDate = new Date(date + "T00:00:00Z");
  const diaDelMes = objDate.getUTCDate();
  const diasSemana = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const diaDeLaSemana = diasSemana[objDate.getUTCDay()];
  const nombreMes = objDate.toLocaleString("es-ES", {
    month: "long",
    timeZone: "UTC",
  })
  const nombreMesCapitalized =
    nombreMes.charAt(0).toUpperCase() + nombreMes.slice(1);

 /* if (typeof date === "string") {
    formattedDate = new Date(date);
    diaDelMes = formattedDate.getDate();
    const weekday = formattedDate.toLocaleString("default", {
      weekday: "short",
    });
    diaDeLaSemana = weekday.substring(0, 3);
  }
  if (typeof date === "string") {
    formattedDate = new Date(date);
    diaDelMes = formattedDate.getDate();
    const monthName = formattedDate.toLocaleString("default", {
      month: "long",
    });
    nombreMes = monthName.charAt(0).toUpperCase() + monthName.slice(1);
  }*/
  const [packages, setPackages] = useState([]);

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
  }, [date]);

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
          <h1 className="ml-10 font-black text-lg ">Paquetes</h1>
        </div>

        <div className="  bg-[#ffffff] rounded-xl relative">
          <div className="mx-5 mt-0 h-[485px] overflow-y-auto relative">
            <div className="h-[45px] w-auto  flex justify-between items-end  mb-4 dotted-border ">
              <p className=" text-[#3D1DF3] font-semibold ">{nombreMesCapitalized}</p>
              <svg
                width="270"
                height="1"
                viewBox="0 0 270 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pr-14 w-auto"
              >
                <line
                  y1="0.75"
                  x2="270"
                  y2="0.75"
                  stroke="#3D1DF3"
                  strokeWidth="0.5"
                  strokeDasharray="1 1"
                />
              </svg>
              <div className=" relative top-7 ">
                <BoxDate diaDelMes={diaDelMes} diaDeLaSemana={diaDeLaSemana} />
              </div>
            </div>

            <span className=" text-md font-bold">
              {packages.length} paquetes
            </span>
            <div className="mt-3 h-auto overflow-y-auto">
              {packages.map((item: AddressItem) => (
                <BoxAddress
                  key={item._id}
                  _id={item._id}
                  address={item.address}
                  status={item.delivered}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
