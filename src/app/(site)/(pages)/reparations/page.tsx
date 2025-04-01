import Reparation from "@/components/Reparation";
import { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: '/images/logo/test4.png', // /public path
  },
  title: "Contactez MonTEch | Assistance & Réparations High-Tech",
  description: "Besoin d'aide ou d'une réparation ? Contactez MonTEch pour un service rapide et efficace sur vos appareils high-tech. Assistance client et expertise garanties.",
  keywords: "MonTEch, contact, assistance, réparation, high-tech, service client, support, électronique",
  robots: "index, follow",
  alternates: {
    canonical: "https://montech.com/contact",
  },
  openGraph: {
    title: "Contactez MonTEch | Assistance & Réparations High-Tech",
    description: "Obtenez un support expert pour vos appareils high-tech avec MonTEch. Contactez-nous dès maintenant.",
    url: "https://montech.com/contact",
    siteName: "MonTEch",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contactez MonTEch | Assistance & Réparations High-Tech",
    description: "Besoin d'un service de réparation fiable ? MonTEch vous offre une assistance rapide et experte.",
    site: "@MonTEch",
  },
};

const ReparationPage = () => {
  return (
    <main>
      <Reparation />
    </main>
  );
};

export default ReparationPage;
