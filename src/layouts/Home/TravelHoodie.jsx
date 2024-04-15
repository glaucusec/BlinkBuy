import React from "react";

function TravelHoodie() {
  return (
    <div class="my-16">
      <img
        src="https://peqwlppfbyknhzenqdpb.supabase.co/storage/v1/object/public/assests/images/about-us/TRAVEL_HOODIE_2000_x_521_px.webp?t=2024-04-15T07%3A49%3A00.465Z"
        alt="Travel Hoodie"
        class="w-full"
      />
      <div className="flex flex-col items-center px-24 py-24 bg-[#E9EAF0]">
        <section className="">
          <img
            width="1942"
            height="541"
            src="https://peqwlppfbyknhzenqdpb.supabase.co/storage/v1/object/public/assests/images/about-us/TravelHoodieSpecs.webp?t=2024-04-15T07%3A52%3A24.222Z"
            alt="Travel Hoodie"
            class="w-full"
          />
        </section>
        <section className="flex flex-row gap-10">
          <button className="border-2 rounded-full bg-blue-950 px-24 py-3">
            <span class="font-semi-bold text-white">Explore More</span>
          </button>
          <div className="flex flex-col">
            <section className="flex flex-row gap-2">
              <span className="text-xl font-bold">₹2499</span>
              <span className="text-lg font-bold text-green-700">50% off</span>
            </section>
            <section className="flex flex-row gap-2">
              <span className="text-gray-600 font-semibold">
                MRP <span className="line-through">₹4,999</span>
              </span>
              <span className="text-gray-600 text-sm">Inclusive of all taxes</span>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TravelHoodie;
