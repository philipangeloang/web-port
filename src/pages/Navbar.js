import { useState } from "react";
import HamburgerLinks from "../components/HamburgerLinks";

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <>
      <div className="bg-black/50 backdrop-blur-sm fixed z-40 w-full px-8">
        <div className="mx-auto max-w-[71rem] text-white flex flex-wrap justify-between items-center py-6">
          {/* Brand Name */}
          <div className="font-dmsans text-3xl">Hiplip</div>

          {/* Laptop/Desktop Links */}
          <ul className="hidden font-poppins items-center | lg:flex">
            <li className="cursor-pointer mx-9 text-lg text-gray-300 font-medium hover:text-white">
              <a href="#home">Home</a>
            </li>
            <li className="cursor-pointer mx-9 text-lg text-gray-300 font-medium hover:text-white">
              <a href="#works">My Works</a>
            </li>
            <li className="cursor-pointer mx-9 text-lg text-gray-300 font-medium hover:text-white">
              <a href="#capabilities">Capabilities</a>
            </li>
          </ul>

          {/* Hamburger Links for Tablet/Phone  */}
          <div className="hamburger flex flex-col justify-center items-center lg:hidden">
            <label
              onClick={() => {
                setMobileNav(!mobileNav);
              }}
              for="navToggle"
            >
              <div className="top bg-white h-[0.2rem] w-6 mb-[0.2rem] rounded-md transition-all duration-200 ease-in-out"></div>
              <div className="mid bg-white h-[0.2rem] w-6 mb-[0.2rem] rounded-md transition-all duration-200 ease-in-out"></div>
              <div className="bot bg-white h-[0.2rem] w-6 mb-[0.2rem] rounded-md transition-all duration-200 ease-in-out"></div>
            </label>
          </div>

          {/* Contact Button */}
          <a href="#contact">
            <div className="hidden font-poppins font-bold text-[0.8rem] px-3 py-2 rounded-lg cursor-pointer transition-colors duration-300 bg-main-blue hover:bg-main-violet | lg:flex lg:justify-center lg:items-center">
              <span className="mr-2">Contact me</span>
              <i class="fa-solid fa-rocket fa-xl"></i>
            </div>
          </a>
        </div>
      </div>

      {mobileNav && (
        <HamburgerLinks
          nav={(val) => {
            setMobileNav(val);
          }}
        />
      )}
    </>
  );
}
