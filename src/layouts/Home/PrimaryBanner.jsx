import React, { useEffect, useState } from "react";

import banner1 from "../../assets/images/banner/banner1.webp";
import banner2 from "../../assets/images/banner/banner2.webp";
import banner3 from "../../assets/images/banner/banner3.webp";
import banner4 from "../../assets/images/banner/banner4.webp";

function PrimaryBanner() {
  const [slideIndex, setSlideIndex] = useState(1);

  function plusSlides(n) {
    let currIndex = slideIndex;
    showSlides((currIndex += n));
  }

  function currentSlide(n) {
    showSlides(n);
  }

  function showSlides(n) {
    if (n > 4) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(4);
    } else {
      setSlideIndex(n);
    }
  }

  return (
    <div
      id="primary-banner-section"
      className="pt-4 relative container mx-auto"
    >
      <div className={`mySlides ${slideIndex == 1 ? "" : "hidden"}`}>
        <img src={banner1} alt="Banner Image 1" className="w-full" />
      </div>
      <div className={`mySlides ${slideIndex == 2 ? "" : "hidden"}`}>
        <img src={banner2} alt="Banner Image 2" className="w-full" />
      </div>
      <div className={`mySlides ${slideIndex == 3 ? "" : "hidden"}`}>
        <img src={banner3} alt="Banner Image 2" className="w-full" />
      </div>
      <div className={`mySlides ${slideIndex == 4 ? "" : "hidden"}`}>
        <img src={banner4} alt="Banner Image 2" className="w-full" />
      </div>

      <button
        className="prev shadow cursor-pointer absolute top-1/2 w-auto p-2  transition duration-600 ease-out rounded-full bg-white hover:bg-transparent left-4"
        onClick={() => plusSlides(-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        className="next shadow cursor-pointer absolute top-1/2 w-auto p-2 transition duration-600 ease-out rounded-full bg-white hover:bg-transparent right-4"
        onClick={() => plusSlides(1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <div className="text-center mt-6">
        <button
          className={`dot bg-slate-400 ${
            slideIndex == 1 ? "bg-slate-900" : ""
          } cursor-pointer h-2 w-2 my-0 mx-1 rounded-full  $ inline-block transition duration-600 ease-in-out`}
          onClick={() => currentSlide(1)}
        ></button>
        <button
          className={`dot bg-slate-400 ${
            slideIndex == 2 ? "bg-slate-900" : ""
          } cursor-pointer h-2 w-2 my-0 mx-1 rounded-full  $ inline-block transition duration-600 ease-in-out`}
          onClick={() => currentSlide(2)}
        ></button>
        <button
          className={`dot bg-slate-400 ${
            slideIndex == 3 ? "bg-slate-900" : ""
          } cursor-pointer h-2 w-2 my-0 mx-1 rounded-full  $ inline-block transition duration-600 ease-in-out`}
          onClick={() => currentSlide(3)}
        ></button>
        <button
          className={`dot bg-slate-400 ${
            slideIndex == 4 ? "bg-slate-900" : ""
          } cursor-pointer h-2 w-2 my-0 mx-1 rounded-full  $ inline-block transition duration-600 ease-in-out`}
          onClick={() => currentSlide(4)}
        ></button>
      </div>
    </div>
  );
}

export default PrimaryBanner;
