import React from "react";
import Shop from "@/components/ShopWithSidebar";

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Shop Page | NextCommerce Nextjs E-commerce template",
  description: "This is Shop Page for NextCommerce Template",
  // other metadata
};

const ShopWithSidebarPage = () => {
  return (
    <main>
      <Shop />
    </main>
  );
};

export default ShopWithSidebarPage;
