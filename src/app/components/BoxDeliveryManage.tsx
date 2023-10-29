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
  id:string
}

const BoxDeliveryManage: React.FC<BoxDeliveryManageProps> = ({
  name,
  status,
  porcentaje,
  url_image,
  id
}) => {
  return (
    <Link href={`/backoffice/delivery_details/${id}`}>
      <div className="h-[16vh] w-[92%] mx-auto bg-[#ffffff] text-[#3D1DF3] flex items-center justify-between border-b-2">
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
              } rounded-2xl  inline-block text-[0.75rem] px-2 font-semibold `}
            >
              {status}
            </div>
          </div>
        </div>
        <div className="w-[40px] h-[40px] mr-5 mt-4 mb-4 rounded-full bg-blue-500 flex items-center justify-center">
          <Image
            width={500}
            height={500}
            src={url_image || "/assets/avatar1.jpeg"}
            className="rounded-full w-[40px] h-[40px] object-cover"
            alt="avatar1"
          ></Image>
        </div>
      </div>
    </Link>
  );
};

export default BoxDeliveryManage;
