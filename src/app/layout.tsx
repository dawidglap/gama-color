import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Importa Montserrat con pesi e subset desiderati
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={montserrat.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
