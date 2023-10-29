"use client";
import React from "react";
import Calendar from "../../components/Calendar";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const [packageData, setPackageData] = useState({
    direction: "",
    name: "",
    weight: "",
  });
  const [deadline, setDeadline] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !packageData.direction ||
      !packageData.name ||
      !packageData.weight ||
      !deadline
    ) {
      toast.error("Todos los campos deben ser llenados");
      return;
    }
    const pack = {
      address: packageData.direction,
      receiver: packageData.name,
      weight: packageData.weight,
      delivery_date: deadline,
    };
    axios
      .post("http://localhost:4000/api/v1/backoffice/addPackages", pack)
      .then((res) => {
        toast.success(res.data.msg);
        setPackageData({ direction: "", name: "", weight: "" });
        setDeadline("");
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          "Error al enviar los datos. Por favor, inténtalo de nuevo."
        );
      });
  };

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
          <form className="max-w-xl mx-auto p-4" onSubmit={handleSubmit}>
            <div className="px-3 mt-20">
              <input
                type="text"
                id="direccion"
                name="direccion"
                className="w-full bg-white text-[#3D1DF3] placeholder-[#3D1DF3] border-[1px] border-[#3D1DF3] rounded-xl pl-3 py-2 mt-1 focus:outline-none text-left text-sm"
                placeholder="Dirección"
                value={packageData.direction}
                onChange={(e) =>
                  setPackageData({ ...packageData, direction: e.target.value })
                }
              />
            </div>
            <div className="px-3 my-3">
              <input
                type="text"
                id="direccion"
                name="direccion"
                className="w-full bg-white text-[#3D1DF3] placeholder-[#3D1DF3] border-[1px] border-[#3D1DF3] rounded-xl pl-3 py-2 mt-1 focus:outline-none text-left text-sm"
                placeholder="Nombre de quien recibe"
                value={packageData.name}
                onChange={(e) =>
                  setPackageData({ ...packageData, name: e.target.value })
                }
              />
            </div>
            <div className="mb-4 px-3">
              <input
                type="number"
                id="direccion"
                name="direccion"
                className="w-full bg-white text-[#3D1DF3] placeholder-[#3D1DF3] border-[1px] border-[#3D1DF3] rounded-xl pl-3 py-2 mt-1 focus:outline-none text-left text-sm"
                placeholder="Peso de paquete (Kg)"
                value={packageData.weight}
                onChange={(e) =>
                  setPackageData({ ...packageData, weight: e.target.value })
                }
              />
              <svg
                width="270"
                height="1"
                viewBox="0 0 270 1"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-10"
              >
                <line
                  x1="0"
                  y1="0.5"
                  x2="270"
                  y2="0.5"
                  stroke="#3D1DF3"
                  strokeWidth="0.5"
                  strokeDasharray="1 1"
                />
              </svg>
            </div>
            <div className="flex justify-center items-center mb-4 px-3">
              <div className="flex flex-col">
                <label
                  htmlFor="fechaEntrega"
                  className="text-[#3D1DF3] text-sm"
                >
                  Fecha de Entrega
                </label>
                <Calendar setDeadline={setDeadline} />
              </div>
            </div>

            <button
              type="submit"
              className="w-full max-w-xl text-[#3D1DF3] py-[6px] px-4 rounded-full mt-16 bg-customGreen"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
};

export default page;
