'use client';
import React from "react";

import { Metadata } from "next";
import Error from "@/components/Error";
export const metadata: Metadata = {
  icons: {
    icon: '/images/logo/test4.png"', // /public path
  },
  title: " Page Erreur | Montech ",
  description: "Page Erreur  Montech ",
  // other metadata
};

const ErrorPage = () => {
  return (
    <main>
      <Error />
    </main>
  );
};

export default ErrorPage;
