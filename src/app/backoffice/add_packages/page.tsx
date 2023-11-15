"use client";
import React from "react";
import Calendar from "../../components/Calendar";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { useFormik } from "formik";
import * as Yup from "yup";
import { awsIP } from "../../../../awsIP";

const page = () => {
  const [deadline, setDeadline] = useState("");
  const [clickedCalendar, setClickedCalendar] = useState(false);

  const handleClickCalendar = () => {
    setClickedCalendar(true);
  };

  const token = Cookies.get("token");
  const singUpForm = useFormik({
    initialValues: {
      direction: "",
      receiver: "",
      weight: "",
    },

    validationSchema: Yup.object({
      direction: Yup.string()
        .test(
          "validar-direccion",
          "Formato: Dirección, Localidad, Provincia",
          (value) => {
            if (!value) return false;
            const parts = value.split(",");
            return (
              parts.length === 3 && parts.every((part) => part.trim() !== "")
            );
          }
        )
        .required("La dirección es requerida"),

      receiver: Yup.string()
        .min(2, "Nombre debe tener al menos 2 carácteres")
        .required("Nombre es requerido"),

      weight: Yup.string()
        .min(1, "Peso del paquete debe tener al menos 1 carácter")
        .required("Peso del paquete es requerido"),
    }),

    onSubmit: (values) => {
      if (!deadline) {
        setClickedCalendar(true);
        return;
      }

      axios
        .post(
          `${awsIP}/api/v1/backoffice/addPackages`,
          {
            address: values.direction,
            delivery_date: deadline,
            receiver: values.receiver,
            weight: values.weight,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((res) => {
          toast.success(res.data.msg);
          setDeadline("00/00/0000");
          singUpForm.resetForm();
        })

        .catch((error) => {
          const captureError = error.response.data;
          toast.error(captureError);
          console.log(error);
        });
    },
  });

  return (
    <main className="mr-6 ml-6 mt-4 mb-8 font-poppins">
      <div className="profile-info rounded-2xl text-[#3D1DF3] bg-[#C7FFB1] ">
        <div className="h-16 flex items-center">
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

          <h1 className="m-4 font-black text-lg ">Agregar paquetes</h1>
        </div>
        <div className="rounded-2xl py-4 bg-white">
          <form
            className="max-w-xl mx-auto p-4"
            onSubmit={singUpForm.handleSubmit}
          >
            <div className="px-3 mt-20">
              <input
                type="text"
                id="direction"
                name="direction"
                className={`w-full bg-white text-[#3D1DF3] placeholder-[#3D1DF3] border-[1px] ${
                  singUpForm.touched.direction && singUpForm.errors.direction
                    ? "border-[red]"
                    : "border-[#3D1DF3]"
                } rounded-xl pl-3 py-2 mt-1 focus:outline-none text-left text-sm`}
                placeholder="Dirección"
                onChange={singUpForm.handleChange}
                value={singUpForm.values.direction}
                onBlur={singUpForm.handleBlur}
              />

              {singUpForm.touched.direction && singUpForm.errors.direction && (
                <p style={{ color: "red", fontSize: "0.8rem" }}>
                  {singUpForm.errors.direction}
                </p>
              )}
            </div>
            <div className="px-3 my-3">
              <input
                type="text"
                id="receiver"
                name="receiver"
                className={`w-full bg-white text-[#3D1DF3] placeholder-[#3D1DF3] border-[1px] ${
                  singUpForm.touched.receiver && singUpForm.errors.receiver
                    ? "border-[red]"
                    : "border-[#3D1DF3]"
                } rounded-xl pl-3 py-2 mt-1 focus:outline-none text-left text-sm`}
                placeholder="Nombre de quien recibe"
                onChange={singUpForm.handleChange}
                value={singUpForm.values.receiver}
                onBlur={singUpForm.handleBlur}
              />

              {singUpForm.touched.receiver && singUpForm.errors.receiver && (
                <p style={{ color: "red", fontSize: "0.8rem" }}>
                  {singUpForm.errors.receiver}
                </p>
              )}
            </div>
            <div className="mb-4 px-3">
              <input
                type="number"
                id="weight"
                name="weight"
                className={`w-full bg-white text-[#3D1DF3] placeholder-[#3D1DF3] border-[1px] ${
                  singUpForm.touched.weight && singUpForm.errors.weight
                    ? "border-[red]"
                    : "border-[#3D1DF3]"
                } rounded-xl pl-3 py-2 mt-1 focus:outline-none text-left text-sm`}
                placeholder="Peso de paquete (Kg)"
                onChange={singUpForm.handleChange}
                value={singUpForm.values.weight}
                onBlur={singUpForm.handleBlur}
              />

              {singUpForm.touched.weight && singUpForm.errors.weight && (
                <p style={{ color: "red", fontSize: "0.8rem" }}>
                  {singUpForm.errors.weight}
                </p>
              )}
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
                <Calendar
                  deadline={deadline}
                  setDeadline={setDeadline}
                  handleClickCalendar={handleClickCalendar}
                  clickedCalendar={clickedCalendar}
                />
                {!deadline && clickedCalendar && (
                  <p style={{ color: "red", fontSize: "0.8rem" }}>
                    {"Campo requerido"}
                  </p>
                )}
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
