import { Inter } from "next/font/google";
import "./globals.css";

import { QueryProvider } from "../context/QueryContext";

import ScrollingText from "./home/ScrollingText";
import Header from "../components/header/Header";
import Footer from "./home/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BlinkBuy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollingText />
        <QueryProvider>
          <Header />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
