import React, { useState } from "react";
import "animate.css";

import InstagramIcon from "../components/icons/InstagramIcon";
import FacebookIcons from "../components/icons/FacebookIcon";
import WhatsappIcon from "../components/icons/WhatsappIcon";
import ChevronDownIcon from "../components/icons/ChevronDownIcon";
import ChevronUpIcon from "../components/icons/ChevronUpIcon";

function Footer() {
  const [showCategory, setShowCategory] = useState(false);

  function setCategoryHandler() {
    setShowCategory(!showCategory);
  }

  return (
    <div className="bg-[#242f66]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row lg:justify-between text-white py-16 px-32">
          <section className="hidden lg:block ">
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="mt-2">
              <li className="text-sm font-semibold py-1">
                <a href="#">Men</a>
              </li>
              <li className="text-sm font-semibold py-1">
                <a href="#">Women</a>
              </li>
              <li className="text-sm font-semibold py-1">
                <a href="#">Summer T-Shirts</a>
              </li>
              <li className="text-sm font-semibold py-1">
                <a href="#">Oversized T-Shirts</a>
              </li>
            </ul>
          </section>
          <section className="hidden lg:block ">
            <h3 className="text-lg font-semibold">Need Help</h3>
            <ul className="mt-2">
              <li className="text-sm font-semibold py-1">
                <a href="#">Track Your Order</a>
              </li>
              <li className="text-sm font-semibold py-1">
                <a href="#">Returns & Exchanges</a>
              </li>
              <li className="text-sm font-semibold py-1">
                <a href="#">Chat on WhatsApp</a>
              </li>
              <li className="text-sm font-semibold py-1">
                <a href="#">Contact Us</a>
              </li>
              <li className="text-sm font-semibold py-1">
                <a href="#">FAQs</a>
              </li>
            </ul>
          </section>
          <section className="hidden lg:block ">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-2">
              <li className="text-sm font-semibold py-1">
                <a href="#">Shipping Policy</a>
              </li>
              <li className="text-sm font-semibold py-1">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="text-sm font-semibold py-1">
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </section>
          <section>
            <h3 className="text-lg font-semibold">Get in touch</h3>
            <div className="flex items-center flex-start gap-4 py-1">
              <a href="#">
                <InstagramIcon />
              </a>
              <a href="#">
                <FacebookIcons />
              </a>
              <a href="#">
                <WhatsappIcon />
              </a>
            </div>
          </section>
          {/* display this for screen size of md and below */}
          <section className="mt-2 lg:hidden">
            <section className="flex flex-row justify-between">
              <span className="text-lg font-semibold">Categories</span>
              <button onClick={setCategoryHandler}>
                {showCategory ? (
                  <ChevronUpIcon
                    customClass={"animate__animated animate__fadeIn"}
                  />
                ) : (
                  <ChevronDownIcon
                    customClass={"animate__animated animate__fadeIn"}
                  />
                )}
              </button>
            </section>

            <section
              className={`animate__animated animate__fadeIn ${
                !showCategory && "hidden"
              }`}
            >
              <ul className="mt-2">
                <li className="text-sm font-semibold py-1">
                  <a href="#">
                    <span className="">Men</span>
                  </a>
                </li>
                <li className="text-sm font-semibold py-1">
                  <a href="#">Women</a>
                </li>
                <li className="text-sm font-semibold py-1">
                  <a href="#">Summer T-Shirts</a>
                </li>
                <li className="text-sm font-semibold py-1">
                  <a href="#">Oversized T-Shirts</a>
                </li>
              </ul>
            </section>
          </section>
        </div>
        <div className="px-32 pb-24">
          <span className="text-white text-xs">
            © 2023 NOBERO. All Rights Reserved by Pratyaya E-commerce Pvt. Ltd.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
