import React from "react";
import Error from "@/components/Error";

import { Metadata } from "next";
export const metadata: Metadata = {
  icons: {
    icon: '/images/logo/test4.png', // /public path
  },
  title: "Error Page | NextCommerce Nextjs E-commerce template",
  description: "This is Error Page for NextCommerce Template",
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
