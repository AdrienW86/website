import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header"; 
import Footer from "@/components/Footer"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codev | Expert Web pour Artisans & PME",
  description: "Développement de sites web performants pour couvreurs, dératiseurs et artisans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr" // Changé en fr pour votre SEO local
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header /> {/* Header ajouté ici */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}