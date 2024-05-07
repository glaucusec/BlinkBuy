import { Inter } from "next/font/google";
import "./globals.css";

import { QueryProvider } from "../context/QueryContext";
import SearchProductsProvider from "../context/SearchProductsContext";

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
        <SearchProductsProvider>
          <QueryProvider>
            <Header />
            {children}
            <Footer />
          </QueryProvider>
        </SearchProductsProvider>
      </body>
    </html>
  );
}
