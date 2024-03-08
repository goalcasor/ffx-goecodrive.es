import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/theme/globals.scss";
import Header from "@/components/headers/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fuel Factor X España | Optimización Avanzada Motor y Planeta",
  description: "Descubre la solución integral que transformará tu forma de usar combustible sin dejarlo. Nuestro aditivo FFX mejora la combustión del motor, prolongando su vida útil y reduciendo el desgaste. Aumenta la economía de combustible y potencia mientras reduces emisiones nocivas. FFX: la respuesta eco-eficiente que tu vehículo necesita.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>  
      </body>
    </html>
  );
}
