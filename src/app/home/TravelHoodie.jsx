import React from "react";
import Image from "next/image";

function TravelHoodie() {
  return (
    <div className="m">
      <section>
        <Image
          src="https://peqwlppfbyknhzenqdpb.supabase.co/storage/v1/object/public/assests/images/about-us/TRAVEL_HOODIE_2000_x_521_px.webp?t=2024-04-15T07%3A49%3A00.465Z"
          alt="Travel Hoodie"
          className="w-full"
          height={640}
          width={166.825}
        />
      </section>
      <div className="flex flex-col items-center px-12 lg:px-24 py-14 bg-[#E9EAF0]">
        <section className="">
          <Image
            width={544}
            height={165.375}
            src="https://peqwlppfbyknhzenqdpb.supabase.co/storage/v1/object/public/assests/images/about-us/TravelHoodieSpecs.webp?t=2024-04-15T07%3A52%3A24.222Z"
            alt="Travel Hoodie"
            className="w-full"
          />
        </section>
        <section className="flex flex-col lg:flex-row gap-5 lg:gap-10">
          <button className="order-last lg:order-first border-2 rounded-full bg-blue-950 py-2 lg:px-24 lg:py-3">
            <span className="font-semi-bold text-white">Explore More</span>
          </button>
          <div className="flex flex-col justify-center items-center">
            <section className="flex flex-row gap-2">
              <span className="text-xl font-bold">₹2499</span>
              <span className="text-lg font-bold text-green-700">50% off</span>
            </section>
            <section className="flex flex-row gap-2">
              <span className="text-gray-600 font-semibold">
                MRP <span className="line-through">₹4,999</span>
              </span>
              <span className="text-gray-600 text-sm">
                Inclusive of all taxes
              </span>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TravelHoodie;
