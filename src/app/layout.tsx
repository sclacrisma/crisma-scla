import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/patterns/headers";
import 'bootstrap/dist/css/bootstrap.min.css'

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
