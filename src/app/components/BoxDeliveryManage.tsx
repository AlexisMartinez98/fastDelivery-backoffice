"use client";
import React from "react";
import PercentageCircle from "./commons/PercentageCircle";
import Image from "next/image";
import Link from "next/link";

interface BoxDeliveryManageProps {
  name: string;
  status: string;
  porcentaje: number;
  url_image: string;
}

const BoxDeliveryManage: React.FC<BoxDeliveryManageProps> = ({
  name,
  status,
  porcentaje,
  url_image,
}) => {
  return (
    <Link href="/backoffice/delivery_details">
      <div className="h-[17vh] bg-[#ffffff] text-[#3D1DF3] flex items-center justify-between border-t-2">
        <div className=" bg-[#ffffff] flex justify-between ml-5  h-[85%] items-center ">
          <div>
            <PercentageCircle value={porcentaje} />
          </div>
          <div className="ml-5">
            <h3 className="text-xl font-semibold ">{name}</h3>
            <div
              className={` h-[15px] ${
                status === "ENTREGADO"
                  ? "bg-[#1df366]"
                  : status === "INACTIVO"
                  ? "bg-[#b1a5fa]"
                  : "bg-[#f8e169]"
              } rounded-2xl text-center flex items-center text-[0.75rem] px-2 font-semibold `}
            >
              {status}
            </div>
          </div>
        </div>
        <div className="w-[40px] h-[40px] mr-5 mt-4 mb-4 rounded-full bg-blue-500 flex items-center justify-center">
          <Image
            width={500}
            height={500}
            src={url_image}
            className="rounded-full w-[40px] h-[40px] object-cover"
            alt="avatar1"
          ></Image>
        </div>
      </div>
    </Link>
  );
};

export default BoxDeliveryManage;
