import { Inter } from "next/font/google";
import "./globals.css";

import ScrollingText from "./home/ScrollingText";
import Header from "./home/Header";
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
