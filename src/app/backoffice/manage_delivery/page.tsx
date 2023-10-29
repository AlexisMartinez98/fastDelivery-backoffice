"use client";
import React, { useEffect, useState } from "react";
import BoxDeliveryManage from "../../components/BoxDeliveryManage";
import BoxDate from "@/app/components/commons/boxDate";
import Link from "next/link";
import axios from "axios";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "@/app/state/store";

function ManageDelivery() {

  const date: Date = useSelector((state: RootState) => state.date.selectedDate);
  const objDate = new Date(date);
  const diasSemana:string[] = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab","Dom"];
  const diaDelMes:number = objDate.getDate() +1
  const diaDeLaSemana:string = diasSemana[objDate.getDay()];
  const nombreMes = objDate.toLocaleString('es-ES', { month: 'long' });
  
 
 
  const [numPagina, setNumPagina] = useState(4);
  const handlerNumPagina = () => {
    if (arrayRepartidores.length - numPagina > 0) {
      setNumPagina(numPagina + 4);
    } else {
      setNumPagina(4);
    }
  };

  

  interface Repartidor {
    _id: string;
    nombre: string;
    apellido: string;
    status: string;
    porcentaje:number
    
  }
  const [arrayRepartidores, setArrayRepartidores] = useState<Repartidor[]>([]);

  useEffect(() => {
   
      axios
      .get(
        `http://localhost:4000/api/v1/backoffice/dealers?delivery_date=${date}`
      )
      .then((response) => {
        setArrayRepartidores(response.data.dealersInfo);
      });
    
    
  }, []);

  console.log(arrayRepartidores);
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
      <div className=" bg-[#ffffff] rounded-xl relative top-[-6.5px]">
       
          <div className="h-[45px] w-[92%]  flex justify-between items-end border-b-2 mb-4 mx-auto  ">

            <p className="- text-[#3D1DF3] font-semibold ">{nombreMes}</p>
            <div className=" relative top-7">
            <BoxDate diaDelMes={diaDelMes} diaDeLaSemana={diaDeLaSemana}/>
            </div>
            </div>
        
        <div className="">
          {
            // eslint-disable-next-line
           arrayRepartidores.length>0 ? ( arrayRepartidores.length > 0 &&arrayRepartidores.slice(0, numPagina).map((data: any, i: number) => {
                  return (
                    <BoxDeliveryManage
                      key={i}
                      name={`${data.nombre} ${data.apellido}`}
                      status={data.status}
                      porcentaje={data.porcentaje}
                      url_image={data.url_img}
                      id={data._id}
                    />
                  );
                })): (<h1>No hay repartidores con paquetes asignados </h1>)
          }
        </div>
        <div className="h-[10vh] bg-[#ffffff] text-[#3D1DF3] flex items-center justify-center rounded-b-lg">
          <svg
            onClick={handlerNumPagina}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className={`w-8 h-8 mr-8 ml-6 ${
              arrayRepartidores.length - numPagina > 0
                ? "rotate-90"
                : "rotate-[270deg]"
            } font-bold`}
          >

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

     
    </main>
  );
}

export default ManageDelivery;
