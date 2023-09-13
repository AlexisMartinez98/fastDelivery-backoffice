"use client";

import fakeData from "./fakeData.json"
import BoxDeliveryManage from "../components/BoxDeliveryManage";


function ManageDelivery() {

    console.log(fakeData)
  return (
     <main className="mr-6 ml-6 mt-4 mb-8 font-poppins" >
      <div className="profile-info rounded-tl-[10px] rounded-tr-[10px] text-[#3D1DF3] bg-[#C7FFB1] pb-2">
        <div className="h-16 flex items-center justify-between  ">
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

          <h1 className="m-4 font-black text-lg ">Repartidores</h1>
          <div className="w-8 h-8  mr-8 ml-6 "></div>
          
        </div>
      </div>
      <div className="py-5 bg-[#ffffff] rounded-xl relative top-[-6px]" >
      <div className="border-b-2">
      {fakeData.map((data,i)=>{
        return(<BoxDeliveryManage name={data.name} status={data.state} porcentaje={data.porcentaje} url_image={data.url_img}/>)
      })}
   </div>
   </div>
    </main>
  );
}

export default ManageDelivery;
