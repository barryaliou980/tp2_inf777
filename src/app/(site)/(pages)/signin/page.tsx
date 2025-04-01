import Signup from "@/components/Auth/Signup";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: '/images/logo/test4.png', // /public path
  },
  title: "Signup | MonTech - Créez votre compte",
  description: "Page d'inscription à MonTech, créez un compte pour profiter de nos produits et services exclusifs.",
};

const SignupPage = () => {
  return (
    <main>
      <Signup />
    </main>
  );
};

export default SignupPage;
