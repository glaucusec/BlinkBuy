import React from "react";
import PrimaryBanner from "./home/PrimaryBanner";
import PopularItems from "./home/PopularItems";
import Men from "./home/Men";
import Women from "./home/Women";
import BrandStory from "./home/BrandStory";
import LatestItems from "./home/LatestItems";
import TravelHoodie from "./home/TravelHoodie";
import BestSellers from "./home/BestSellers";
import MobileBottomNav from "./home/MobileBottomNav";

function HomePage() {
  return (
    <div className="container mx-auto overflow-x-hidden">
      <PrimaryBanner />
      <PopularItems />
      <Men />
      <Women />
      <BrandStory />
      <LatestItems />
      <TravelHoodie />
      <BestSellers />
      <MobileBottomNav />
    </div>
  );
}

export default HomePage;
