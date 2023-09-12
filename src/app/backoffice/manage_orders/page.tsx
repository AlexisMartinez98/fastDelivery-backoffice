"use client";
import React, { useState } from "react";
import DateCarousel from "../../components/Date";

import PercentageCircle from "../../components/commons/PercentageCircle";
import avatar1 from "../../assets/avatar1.jpeg";
import avatar2 from "../../assets/avatar2.jpeg";
import Image from "next/image";
import avatar3 from "../../assets/avatar3.jpeg";
import fakeDeliverys from "./fakeDeliverys.json";

const page = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Función para actualizar la fecha seleccionada
  const handleDateChange = (newDate: Date) => {
    setSelectedDate(newDate);
  };

  // Funciones para calcular los valores según la fecha seleccionada
  const calculateRepartidoresActivos = () => {
    const selectedDateString = selectedDate.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const fechaSeleccionada = fakeDeliverys.fechas.find(
      (fecha) => fecha.fecha === selectedDateString
    );
    if (fechaSeleccionada) {
      return fechaSeleccionada.repartidores.filter(
        (repartidor) => repartidor.activo
      ).length;
    }
    return 0;
  };

  const calculateTotalRepartidores = () => {
    const selectedDateString = selectedDate.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const fechaSeleccionada = fakeDeliverys.fechas.find(
      (fecha) => fecha.fecha === selectedDateString
    );
    if (fechaSeleccionada) {
      return fechaSeleccionada.repartidores.length;
    }
    return 0;
  };

  const calculateTotalPaquetes = () => {
    return 10 * calculateRepartidoresActivos();
  };

  const calculatePaquetesRepartidos = () => {
    const selectedDateString = selectedDate.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const fechaSeleccionada = fakeDeliverys.fechas.find(
      (fecha) => fecha.fecha === selectedDateString
    );

    if (fechaSeleccionada) {
      const repartidoresActivos = fechaSeleccionada.repartidores.filter(
        (repartidor) => repartidor.activo
      ).length;

      const paquetesRepartidos = fechaSeleccionada.repartidores.reduce(
        (total, repartidor) => {
          return (
            total +
            repartidor.paquetes.filter((paquete) => paquete.entregado).length
          );
        },
        0
      );

      return paquetesRepartidos;
    }

    return 0;
  };

  const PercentageRepartidoresValue = () => {
    return (calculateRepartidoresActivos() / 10) * 100;
  };
  const PercentajePaquetesValue = () => {
    return (calculatePaquetesRepartidos() / calculateTotalPaquetes()) * 100;
  };

  return (
    <div className=" rounded-2xl  text-[#3D1DF3] bg-[#C7FFB1] mr-6  ml-6 mt-4 font-poppins">
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
      <div className="rounded-2xl mb-5 pb-6 bg-white  ">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 ml-5 mt-4 mb-4 rounded-full bg-blue-500 flex items-center justify-center">
            <Image
              src={avatar3}
              className="rounded-full w-16 h-16 "
              alt="avatar3"
            ></Image>
          </div>
          <div className="ml-4 mt-2">
            <h3 className="text-xl font-semibold">¡Hola Admin!</h3>
            <h5 className=" text-base">Estos son los pedidos del día</h5>
          </div>
        </div>
        <div>
          <DateCarousel
            selectedDate={selectedDate}
            onDateChange={handleDateChange}
          />
        </div>
        <div className="p-3 mt-4 rounded-xl  border-[#3D1DF3] border-[1px] ml-5 mr-5 ">
          <div className="flex justify-between border-b-[1px] border-[#3D1DF3] ">
            <h4 className="font-bold">Detalles</h4>
            <div className="flex items-center">
              <h4 className="mr-2">
                {selectedDate.toLocaleDateString("es-ES")}
              </h4>
              <svg
                className="items-center"
                width="11"
                height="9"
                viewBox="0 0 9 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.26799 6.07909C4.86821 6.55848 4.13179 6.55848 3.73201 6.0791L0.238902 1.89046C-0.304217 1.2392 0.158881 0.249999 1.00689 0.249999L7.99311 0.25C8.84112 0.25 9.30422 1.2392 8.7611 1.89046L5.26799 6.07909Z"
                  fill="#3D1DF3"
                />
              </svg>
            </div>
          </div>
          <div className="border-b-[1px] border-[#3D1DF3]">
            <div className="relative flex items-center justify-start ml-3 mt-8 ">
              <PercentageCircle value={PercentageRepartidoresValue()} />
              <div className="ml-5 ">
                <h4 className="font-bold text-base">Repartidores</h4>
                <h6 className="text-sm">{`${calculateRepartidoresActivos()}/10 activos`}</h6>
              </div>
            </div>
            <div className="flex justify-between mt-5">
              <div className="flex ml-3 mb-7 ">
                <Image
                  src={avatar1}
                  className="rounded-full w-8 h-8 "
                  alt="avatar1"
                />
                <Image
                  src={avatar2}
                  className="rounded-full w-8 h-8"
                  alt="avatar2"
                />
              </div>
              <button className="bg-[#00EA77] rounded-2xl w-16 h-9 ">
                Ver
              </button>
            </div>
          </div>

          <div className="relative flex items-center justify-start ml-3 mt-8 ">
            <PercentageCircle value={PercentajePaquetesValue()} />
            <div className="ml-5">
              <h4 className="font-bold text-base">Paquetes</h4>
              <h6 className="text-sm">{`${calculatePaquetesRepartidos()}/ ${calculateTotalPaquetes()} repartidos`}</h6>
            </div>
          </div>
          <div className="flex justify-end mt-5 ">
            <button className="bg-[#00EA77] rounded-2xl w-16 h-9 mb-1">
              Ver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
