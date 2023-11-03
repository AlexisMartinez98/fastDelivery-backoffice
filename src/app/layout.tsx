"use client";
import React from "react";
import "./globals.css";
import { Poppins } from "next/font/google";
import Providers from "./state/providers";
import { useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: "normal",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tokenInCookie = Cookies.get("token");

  const router = useRouter();
  useEffect(() => {
    if (tokenInCookie) {
      axios
        .get("http://localhost:4000/api/v1/user/me", {
          headers: {
            cookies: `${tokenInCookie}`,
          },
        })
        .then((response) => {
          toast.success(`Bienvenido de nuevo ${response.data.email}`);
          router.push("/backoffice/manage_orders");
        })
        .catch((error) => {
          console.error("Error en la solicitud: ", error);
        });
    }
  }, [tokenInCookie]);

  return (
    <html lang="en">
      <Providers>
        <body className={`${poppins.className}`}>
          <div>{children}</div>
          <ToastContainer />
        </body>
      </Providers>
    </html>
  );
}
