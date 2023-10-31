"use client";
import "./index.css";
import React from "react";
import { useState } from "react";
import BoxAddress from "../../src/app/components/BoxAddress";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type AddressItem = {
  id: string;
  address: string;
  delivered: string;
  _id: string;
};
const page = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isActive, setIsActive] = useState(false);
  const [historyDelivery, setHistoryDelivery] = useState([]);
  const [historyDeliveryinfalse, setHistoryDeliveryinfalse] = useState([]);
  const [dealer, setDealer] = useState({ user: { name: "", image: "" } });

  const toggleSwitch = () => {
    setIsActive(!isActive);
    axios
      .put(`http://localhost:4000/api/v1/backoffice/dealers/${id}`, {
        status: !isActive,
      })
      .then((res) => {
        toast.success(res.data.msg);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const date = {
    deliveryMan_id: id,
    delivered: true,
  };
  const datefalse = {
    deliveryMan_id: id,
    delivered: false,
  };
  useEffect(() => {
    axios
      .post(`http://localhost:4000/api/v1/delivery/history`, date)
      .then((res) => {
        setHistoryDelivery(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post(`http://localhost:4000/api/v1/delivery/history`, datefalse)
      .then((res) => {
        setHistoryDeliveryinfalse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:4000/api/v1/backoffice/dealers/${id}`)
      .then((res) => {
        setDealer(res.data);
        setIsActive(res.data.user.status);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <main className="mr-6 ml-6 mt-4 mb-8 font-poppins">
      <div className="profile-info rounded-2xl text-[#3D1DF3] bg-[#C7FFB1] ">
        <div className="h-16 flex items-center">
          <Link href="/backoffice/manage_delivery">
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
          <h1 className="m-4 font-black text-lg">Perfil del repartidor</h1>
        </div>
        <div className="rounded-2xl py-4 bg-white">
          <div className="flex items-center">
            <div className="w-16 h-16 ml-5 flex items-center justify-center">
              <img
                src={dealer.user.image}
                alt={dealer.user.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="ml-4 mt-2">
              <h3 className="text-m font-semibold">{dealer.user.name}</h3>
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
      <div className="delivery-history bg-white rounded-2xl text-[#3D1DF3] font-black mt-3 py-4 relative">
        <div className="flex justify-between">
          <h2 className="ml-5">Historial de repartos</h2>
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
          {historyDeliveryinfalse.length} paquetes pendientes
        </p>
        <div className="mt-3 h-auto overflow-y-auto pb-2">
          {Array.isArray(historyDeliveryinfalse) &&
            historyDeliveryinfalse.map((item: AddressItem) => (
              <BoxAddress
                key={item.id}
                address={item.address}
                status={item.delivered}
                itemId={item._id}
              />
            ))}
        </div>
        <div className="rounded-xl bg-gradient h-20 absolute bottom-0 left-0 right-0 pointer-events-none"></div>
      </div>
      <div className="delivery-history bg-white rounded-2xl text-[#3D1DF3] font-black mt-3 py-4 relative">
        <div className="flex justify-between">
          <h2 className="ml-5">Historial de repartos</h2>
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
          {historyDelivery.length} paquetes entregados
        </p>
        <div className="mt-3 h-auto overflow-y-auto pb-2">
          {Array.isArray(historyDelivery) &&
            historyDelivery.map((item: AddressItem) => (
              <BoxAddress
                key={item.id}
                address={item.address}
                status={item.delivered}
                itemId={item._id}
              />
            ))}
        </div>
        <div className="rounded-xl bg-gradient h-20 absolute bottom-0 left-0 right-0 pointer-events-none"></div>
      </div>
      <ToastContainer />
    </main>
  );
};

export default page;
