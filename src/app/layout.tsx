import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Roboto } from "next/font/google";
import Navbar from "@/components/layout/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100","300","400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Dalia",
  description: "A school language that helps you to go anywhere.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${roboto.variable} antialiased px-0 sm:px-[24px] 2xl:px-[208px] py-[8px] md:py-[24px]`}>
        <link rel="icon" href="/icon.ico" sizes="any" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
