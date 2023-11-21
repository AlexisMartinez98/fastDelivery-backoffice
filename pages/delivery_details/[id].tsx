import React from "react";
import DeliveryDetails from "./page";
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

const DeliveryDetailsWithId = () => {
  return (
    <div className={`${poppins.className}`}>
      <NavBar />
      <DeliveryDetails />
    </div>
  );
};
export default DeliveryDetailsWithId;
