import React from "react";
import Shop from "@/components/ShopWithSidebar";
import { Metadata } from "next";

// Optimisation des métadonnées
export const metadata: Metadata = {
  icons: {
    icon: '/images/logo/test4.png', // /public path
  },
  title: "Boutique en Ligne | MonTEch - Produits et Services de Réparation",
  description:
    "Explorez notre boutique MonTEch pour des produits high-tech, des accessoires et des services de réparation d'appareils électroniques avec un service rapide et sécurisé.",
  keywords: "MonTEch, boutique en ligne, produits high-tech, réparation électronique, accessoires, achat en ligne, smartphones, électronique",
  robots: "index, follow",
  alternates: {
    canonical: "https://montech.com/shop",
  },
  openGraph: {
    title: "Boutique en Ligne | MonTEch - Produits High-Tech et Services de Réparation",
    description:
      "Découvrez notre boutique MonTEch avec une sélection de produits high-tech et des services de réparation d'appareils électroniques. Paiement sécurisé.",
    url: "https://montech.com/shop",
    siteName: "MonTEch",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boutique en Ligne | MonTEch - Produits High-Tech et Services de Réparation",
    description:
      "Explorez notre large gamme de produits high-tech et bénéficiez de services de réparation rapide pour vos appareils électroniques.",
    site: "@MonTEch",
  }
};

const ShopWithSidebarPage = () => {
  return (
    <main>
      <Shop />
    </main>
  );
};

export default ShopWithSidebarPage;
