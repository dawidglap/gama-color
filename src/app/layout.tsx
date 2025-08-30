import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gama Color",
  description: "Stylowe rolety i żaluzje dla Twojego domu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={montserrat.className}>
      <body className="antialiased">
        <NavbarWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
