import React from "react";
import hero from "./hero section(2).png";
const Hero_content = () => {
  return (
  <section className="relative w-full ">
      <img
        src={hero}
        alt="Hero"
        className=" block w-full h-auto"
      />

      {/* Search box */}
      <div className="absolute top-[61%] right-[7%] w-[min(420px,84%)]  ">
        <div className="flex items-center rounded-full border border-gray-300 bg-white shadow-md overflow-hidden h-17 ">
{/* Serch icon  start*/}
         <button
            type="button"
            aria-label="Search"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-600 text-white hover:bg-amber-700 absolute left-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
          </button>
{/* Serach icon end */}
          <input
            type="text"
            dir="rtl"
            placeholder="دنبال چی می‌گردی؟..."
            className="h-12 min-w-0 flex-1 bg-transparent px-4 text-base text-gray-800 outline-none placeholder:text-gray-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero_content;
