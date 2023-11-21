"use client";
import React from "react";
import "./globals.css";
import { Poppins } from "next/font/google";
import Providers from "./state/providers";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { awsIP } from "../../awsIP";

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
  const [currentUrl, setCurrentUrl] = useState("");
  useEffect(() => {
    if (tokenInCookie) {
      axios
        .get(`${awsIP}/api/v1/user/me`, {
          headers: {
            cookies: `${tokenInCookie}`,
          },
        })
        .then((response) => {
          toast.success(`Bienvenido de nuevo ${response.data.email}`);
          if (currentUrl !== window.location.href) {
            router.push("/backoffice/manage_orders");
          }
        })
        .catch((error) => {
          console.error("Error en la solicitud: ", error);
          toast.error("Inicie sesión");
          router.push("/");
        });
    } else {
      toast.error("Inicie sesión");
      router.push("/");
    }

    const handleUrlChange = () => {
      setCurrentUrl(window.location.href);
    };

    window.addEventListener("popstate", handleUrlChange);

    return () => {
      window.removeEventListener("popstate", handleUrlChange);
    };
  }, [tokenInCookie, currentUrl, router]);

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
