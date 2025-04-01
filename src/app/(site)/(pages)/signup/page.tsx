import Signup from "@/components/Auth/Signup";
import React from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  icons: {
    icon: '/images/logo/test4.png', // /public path
  },
  title: "Signup Page | NextCommerce Nextjs E-commerce template",
  description: "This is Signup Page for NextCommerce Template",
  // other metadata
};

const SignupPage = () => {
  return (
    <main>
      <Signup />
    </main>
  );
};

export default SignupPage;
