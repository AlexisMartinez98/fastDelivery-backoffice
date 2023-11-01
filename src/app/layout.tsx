"use client";
import React from "react";
import "./globals.css";
import { Poppins } from "next/font/google";
import Providers from "./state/providers";
import { useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

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
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/user/me", {
        headers: {
          cookies: `${Cookies.get("token")}`,
        },
      })
      .then((response) => {
        console.log("alexisss", response.data);
      });
    return () => {};
  }, []);

  return (
    <html lang="en">
      <Providers>
        <body className={`${poppins.className}`}>
          <div>{children}</div>
        </body>
      </Providers>
    </html>
  );
}
