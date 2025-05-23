import React from "react";
import ShopDetails from "@/components/ShopDetails";

import shopData from '@/app/data/shopData'
import type { Metadata, ResolvingMetadata } from 'next'
type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { id } = await params
  // fetch data
  const product = shopData.find((value) => value.id.toString() === id)
  // optionally access and extend (rather than replace) parent metadata
  console.log('product', product)

  return {
    icons: {
      icon: '/images/logo/test4.png', // /public path
    },
    title: `${product?.title} | MonTech`,
    description: `Découvrez les détails du produit ${product?.title}. Prix: ${product?.price}€`,
    // pour le partage facebook et google 
    openGraph: {
      title: `${product?.title} | MonTech`,
      description: `Découvrez les détails du produit ${product?.title}. Prix: ${product?.price}€`,
      url: `https://montech.com/products/${product?.id}`,
      siteName: "MonTech",
      type: "website",
      locale: "fr_FR",
      images: [
        {
          url: product.imgs?.previews[0], // URL de l'image
          width: 1200,  // Largeur de l'image en pixels
          height: 630,  // Hauteur de l'image en pixels
          alt: `Image du produit ${product?.title}`,  // Texte alternatif pour l'image
        },
        {
          url: product.imgs?.previews[1], // URL de l'image
          width: 1200,  // Largeur de l'image en pixels
          height: 630,  // Hauteur de l'image en pixels
          alt: `Image du produit ${product?.title}`,  // Texte alternatif pour l'image
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@MonTEch",
      title: `${product?.title} | MonTech`,
      description: `Découvrez les détails du produit ${product?.title}. Prix: ${product?.price}€`,
      images: {url:product?.imgs?.previews[0], alt:`Image du produit ${product?.title}`},
    },
  }
}

export default function Page({ params, searchParams }: Props) {
  return (
    <main>
      <ShopDetails />
    </main>
  )

}