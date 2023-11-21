import React from "react";
import ManageDelivery from "./page";
import NavBar from "@/app/components/NavBar";
import "tailwindcss/tailwind.css";
import "./index.css";
import { Poppins } from "next/font/google";
import "./index.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: "normal",
});

const ManageDeliveryWithDate = () => {
  return (
    <div className={`${poppins.className}`}>
      <NavBar />
      <ManageDelivery />
    </div>
  );
};
export default ManageDeliveryWithDate;
