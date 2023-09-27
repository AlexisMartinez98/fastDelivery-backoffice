"use client";
import React, { useEffect, useState } from "react";
import fakeData from "./fakeData.json";
import BoxDeliveryManage from "../../components/BoxDeliveryManage";
import Link from "next/link";
import { ArrayAuxVistaRepartidores } from "@/app/utils/auxiliarFunctions";


function ManageDelivery() {


  
  

  const [numPagina,setNumPagina]=useState(0)
  // eslint-disable-next-line
  const [arrayRepartidores, setArrayRepartidores] = useState<any[]>([]);

  useEffect(()=>{

    
      const array=ArrayAuxVistaRepartidores(fakeData)

      setArrayRepartidores(array)
    



  },[])

  

  const handlerNumPagina=(num:number)=>{

    setNumPagina(num)

  }





  return (
    <main className="mr-6 ml-6 mt-4 mb-8 font-poppins">
      <div className="profile-info rounded-tl-[10px] rounded-tr-[10px] text-[#3D1DF3] bg-[#C7FFB1] pb-2">
        <div className="h-16 flex items-center justify-between  ">
          <Link href="/backoffice/manage_orders">
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
          <h1 className="m-4 font-black text-lg ">Repartidores</h1>
          <div className="w-8 h-8  mr-8 ml-6 "></div>
        </div>
      </div>
      <div className="pt-5 bg-[#ffffff] rounded-xl relative top-[-6.5px]">
      <div className="h-[2.5vh] bg-[#ffffff] text-[#3D1DF3] flex items-center justify-center rounded-t-lg">
        </div>
        <div className="border-b-2">
          {
            // eslint-disable-next-line
          arrayRepartidores.length>0 && arrayRepartidores[numPagina].map((data:any, i:number) => {
            return (
              <BoxDeliveryManage
                key={i}
                name={data.name}
                status={data.state}
                porcentaje={data.porcentaje}
                url_image={data.url_img}
              />
            );
          })}
        </div>
        <div className="h-[8vh] bg-[#ffffff] text-[#3D1DF3] flex items-center justify-center rounded-b-lg">
         {arrayRepartidores.length>0 &&arrayRepartidores.map((btn,i)=>{
          return(<div key={i} onClick={()=>{handlerNumPagina(i)}} className={`h-1.5 w-1.5 mr-1.5 rounded-full ${
            numPagina === i
              ? "bg-[#3D1DF3]"
              : "bg-gray-400"
             

          }`} ></div>)
         })}

        </div>
      </div>
    </main>
  );
}

export default ManageDelivery;
