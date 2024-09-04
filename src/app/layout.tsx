import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "@/Components/patterns/headers";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
