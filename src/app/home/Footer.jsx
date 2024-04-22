"use client";

import React, { useState } from "react";
import "animate.css";

import InstagramIcon from "../../components/icons/InstagramIcon";
import FacebookIcons from "../../components/icons/FacebookIcon";
import WhatsappIcon from "../../components/icons/WhatsappIcon";
import ChevronDownIcon from "../../components/icons/ChevronDownIcon";
import ChevronUpIcon from "../../components/icons/ChevronUpIcon";

function Footer() {
  const [showCategory, setShowCategory] = useState(false);
  const [showNeedHelp, setShowNeedHelp] = useState(false);
  const [showCompanyList, setShowCompanyList] = useState(false);

  const categoryList = (
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
  );

  const needHelpList = (
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
  );

  const companyList = (
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
  );

  return (
    <div className="bg-[#242f66]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row lg:justify-between text-white py-4 lg:py-16 px-8 lg:px-32 ">
          <div className="section-1 mt-8 lg:mt-0">
            <section className="flex flex-row justify-between">
              <h3 className="text-lg font-semibold">Categories</h3>
              <button
                className="lg:hidden"
                onClick={() => setShowCategory(!showCategory)}
              >
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
                !showCategory && "hidden lg:block"
              }`}
            >
              {categoryList}
            </section>
          </div>
          <div className="section-2 mt-8 lg:mt-0">
            <section className="flex flex-row justify-between">
              <h3 className="text-lg font-semibold">Need Help</h3>
              <button
                className="lg:hidden"
                onClick={() => setShowNeedHelp(!showNeedHelp)}
              >
                {showNeedHelp ? (
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
                !showNeedHelp && "hidden lg:block"
              }`}
            >
              {needHelpList}
            </section>
          </div>
          <div className="section-3 mt-8 lg:mt-0">
            <section className="flex flex-row justify-between">
              <h3 className="text-lg font-semibold">Company</h3>
              <button
                className="lg:hidden"
                onClick={() => setShowCompanyList(!showCompanyList)}
              >
                {showCompanyList ? (
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
                !showCompanyList && "hidden lg:block"
              }`}
            >
              {companyList}
            </section>
          </div>
          <div className="section-4 order-first lg:order-last">
            <h3 className="text-lg font-semibold">Get in touch</h3>
            <div className="flex items-center flex-start gap-4 mt-3">
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
          </div>
        </div>

        {/* copyright */}
        <div className="py-4 lg:py-12 px-8 lg:px-32">
          <span className="text-white text-xs">
            © 2023 NOBERO. All Rights Reserved by Pratyaya E-commerce Pvt. Ltd.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
