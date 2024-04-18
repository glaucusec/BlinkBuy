import React from "react";
import ScrollingText from "../layouts/Home/ScrollingText";
import Header from "../layouts/Home/Header";
import PrimaryBanner from "../layouts/Home/PrimaryBanner";
import PopularItems from "../layouts/Home/PopularItems";
import Men from "../layouts/Home/Men";
import Women from "../layouts/Home/Women";
import BrandStory from "../layouts/Home/BrandStory";
import LatestItems from "../layouts/Home/LatestItems";
import TravelHoodie from "../layouts/Home/TravelHoodie";
import BestSellers from "../layouts/Home/BestSellers";
import Footer from "../layouts/Footer";

function Home() {
  return (
    <>
      <ScrollingText />
      <Header />
      <PrimaryBanner />
      <PopularItems />
      <Men />
      <Women />
      <BrandStory />
      <LatestItems />
      <TravelHoodie />
      <BestSellers />
      <Footer />
    </>
  );
}

export default Home;
