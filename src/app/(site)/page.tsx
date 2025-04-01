import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: '/images/logo/test4.png', // /public path
  },
  title: "MonTech | Accueil - Boutique en ligne de produits high-tech",
  description: "Découvrez les meilleurs produits high-tech sur MonTech, la boutique en ligne pour les passionnés de technologie.",
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
