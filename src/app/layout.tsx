import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dalia",
  description: "A school language that helps you to go anywhere.",
  icons: {
    icon: '/favicon.ico', 
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
        className={`${montserrat.variable}  antialiased`}
      >
        <link rel="icon" href="/icon.ico" sizes="any" />
        {children}
      </body>
    </html>
  );
}
