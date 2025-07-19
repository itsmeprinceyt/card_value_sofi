import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Loader from "./(components)/Loader";

export const metadata: Metadata = {
  title: "Sofi — Card Value",
  description: "Explore how to price your Sofi Card based on my experience. ItsMe Prince and I hope you find this guide useful in any way!",
  metadataBase: new URL("https://card-value-sofi.vercel.app/"),
  icons: {
    icon: "/sofi-logo.jpg",
  },
  openGraph: {
    title: "Sofi — Card Value",
    description: "Explore how to price your Sofi Card based on my experience. ItsMe Prince and I hope you find this guide useful in any way!",
    url: "https://card-value-sofi.vercel.app/",
    siteName: "Sofi Card Value",
    images: [
      {
        url: "/sofi-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Sofi Card Value",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="select-none antialiased">
        <Suspense fallback={<Loader/>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
