import React from "react";
import Head from "next/head";
import Login from "./login/page";

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
         
      </Head>
      <Login />
    </>
  );
}
