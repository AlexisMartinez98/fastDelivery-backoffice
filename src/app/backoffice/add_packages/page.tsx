"use client";
import React from "react";
import Calendar from "../../components/Calendar";
import Count from "../../components/Count";
import { useState } from "react";
import Link from "next/link";

const page = () => {
  const [packetData, setPacketData] = useState({
    direction: "",
    name: "",
    weight: "",
  });
  const [deadline, setDeadline] = useState("");
  const [amount, setAmount] = useState(0);
  return (
    <main className="mr-6 ml-6 mt-4 mb-8 font-poppins">
      <div className="profile-info rounded-2xl text-[#3D1DF3] bg-[#C7FFB1] ">
        <div className="h-16 flex items-center">
          <Link href="/backoffice/package_history">
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

          <h1 className="m-4 font-black text-lg ">Agregar paquetes</h1>
        </div>
        <div className="rounded-2xl py-4 bg-white">
          <form className="max-w-xl mx-auto p-4">
            <div className="mb-4 px-3 mt-10">
              <input
                type="text"
                id="direccion"
                name="direccion"
                className="w-full bg-white text-[#3D1DF3] placeholder-[#3D1DF3] border-b-[1px] border-[#3D1DF3] py-2 mt-1 focus:outline-none text-left text-sm"
                placeholder="Dirección"
                value={packetData.direction}
                onChange={(e) =>
                  setPacketData({ ...packetData, direction: e.target.value })
                }
              />
            </div>
            <div className="mb-4 px-3 mt-5">
              <input
                type="text"
                id="direccion"
                name="direccion"
                className="w-full bg-white text-[#3D1DF3] placeholder-[#3D1DF3] border-b-[1px] border-[#3D1DF3] py-2 mt-1 focus:outline-none text-left text-sm"
                placeholder="Nombre de quien recibe"
                value={packetData.name}
                onChange={(e) =>
                  setPacketData({ ...packetData, name: e.target.value })
                }
              />
            </div>
            <div className="mb-4 px-3 mt-5">
              <input
                type="number"
                id="direccion"
                name="direccion"
                className="w-full bg-white text-[#3D1DF3] placeholder-[#3D1DF3] border-b-[1px] border-[#3D1DF3] py-2 mt-1 focus:outline-none text-left text-sm"
                placeholder="Peso de paquete (Kg)"
                value={packetData.weight}
                onChange={(e) =>
                  setPacketData({ ...packetData, weight: e.target.value })
                }
              />
            </div>
            <div className="flex justify-center items-center mb-4 px-3 mt-12">
              <div className="flex flex-col">
                <label
                  htmlFor="fechaEntrega"
                  className="text-[#3D1DF3] text-sm"
                >
                  Fecha de Entrega
                </label>
                <Calendar setDeadline={setDeadline} />
              </div>
              <svg
                width="1"
                height="60"
                viewBox="0 0 1 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-6"
              >
                <line
                  x1="0.25"
                  y1="1.09278e-08"
                  x2="0.249997"
                  y2="60"
                  stroke="#3D1DF3"
                  strokeWidth="0.5"
                />
              </svg>
              <div className="flex flex-col">
                <label htmlFor="cantidad" className="text-[#3D1DF3] text-sm">
                  Cantidad
                </label>
                <div className="flex items-center justify-center placeholder-[#3D1DF3] text-sm border rounded-xl border-[#3D1DF3] w-[120px] mt-1">
                  <Count amount={amount} setAmount={setAmount} />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full max-w-xl bg-customGreen hover:bg-blue-600 text-[#3D1DF3] py-[6px] px-4 rounded-full mt-16"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default page;
