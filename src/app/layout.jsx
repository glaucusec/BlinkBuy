import { AR_One_Sans } from "next/font/google";
import "./globals.css";

import { QueryProvider } from "../context/QueryContext";
import SearchProductsProvider from "../context/SearchProductsContext";

import ScrollingText from "./home/ScrollingText";
import Header from "../components/header/Header";
import Footer from "./home/Footer";

const ar_one_sans = AR_One_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "BlinkBuy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ar_one_sans.className}>
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
