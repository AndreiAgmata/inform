import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const generalSans = localFont({
  src: [
    {
      path: "../../public/fonts/GeneralSans-Bold.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/GeneralSans-Semibold.otf",
      weight: "600",
    },
    {
      path: "../../public/fonts/GeneralSans-Semibold-Title.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/GeneralSans-Medium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/GeneralSans-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/GeneralSans-Light.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/GeneralSans-Extralight.otf",
      weight: "200",
    },
  ],
});

export const metadata: Metadata = {
  title: "IN'FORM - FW 23' COLLECTION",
  description: "CURATED COLLECTION OF MINIMALISTIC FURNITURE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={generalSans.className}>{children}</body>
    </html>
  );
}
