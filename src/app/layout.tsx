import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Preloader from "@/components/Preloader";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Trip Tour - Discover Uzbekistan",
  description: "Explore the beautiful destinations of Uzbekistan with Trip Tour",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Preloader />
          <main className="relative">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
