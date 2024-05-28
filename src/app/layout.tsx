import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

import { QueryProvider } from "../context/QueryContext";
import React, { ReactNode, Suspense } from "react";

import ScrollingText from "../home/ScrollingText";
import Header from "../components/header/Header";
import Footer from "../home/Footer";
import { AuthProvider } from "../context/AuthContext";
import CartProvider from "../context/CartContext";

const inter = Inter({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "BlinkBuy",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollingText />
        <Suspense>
          <QueryProvider>
            <CartProvider>
              <AuthProvider>
                <Header />
                {children}
                <Footer />
              </AuthProvider>
            </CartProvider>
          </QueryProvider>
        </Suspense>
        <Toaster position="top-right" closeButton={true} richColors={true} />
      </body>
    </html>
  );
}
