import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/Components/patterns/headers";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Crisma Santa Catarina Labouré",
  description: "Crisma Santa Catarina Labouré",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
