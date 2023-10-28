"use client";
import React from "react";
import "./globals.css";
import { Poppins } from "next/font/google";
import Providers from "./state/providers";

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
