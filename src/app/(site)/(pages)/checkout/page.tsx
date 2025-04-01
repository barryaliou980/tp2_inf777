import React from "react";
import Checkout from "@/components/Checkout";

import { Metadata } from "next";
export const metadata: Metadata = {
  icons: {
    icon: '/images/logo/test4.png', // /public path
  },
  title: "Paiement | MonTEch",
  description:
    "Finalisez vos achats en toute sécurité sur MonTEch. Profitez d'un service rapide et d'un paiement sécurisé pour vos réparations high-tech.",
  keywords: "MonTEch, paiement sécurisé, checkout, réparation, high-tech, achat en ligne, service client, électronique",
  robots: "index, follow",
  alternates: {
    canonical: "https://montech.com/checkout",
  },
};

const CheckoutPage = () => {
  return (
    <main>
      <Checkout />
    </main>
  );
};

export default CheckoutPage;
