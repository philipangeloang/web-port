import HamburgerLinks from "./HamburgerLinks";

export default function Navbar() {
  return (
    <>
      <div className="b bg-black/50 fixed z-30 w-screen text-white flex justify-between p-8 | lg:px-64 | xl:px-96">
        {/* Brand Name */}
        <div className="font-dmsans text-3xl">Hiplip</div>

        {/* Laptop/Desktop Links */}
        <ul className="hidden font-poppins items-center | 2xl:flex">
          <li className="cursor-pointer mx-9 text-lg text-gray-300 font-medium hover:text-white">
            Home
          </li>
          <li className="cursor-pointer mx-9 text-lg text-gray-300 font-medium hover:text-white">
            My Works
          </li>
          <li className="cursor-pointer mx-9 text-lg text-gray-300 font-medium hover:text-white">
            About Me
          </li>
        </ul>

        {/* Hamburger Links for Tablet/Phone  */}
        <div className="hamburger flex flex-col justify-center items-center 2xl:hidden">
          <label for="navToggle">
            <div className="top bg-white h-[0.2rem] w-6 mb-[0.2rem] rounded-md transition-all duration-200 ease-in-out"></div>
            <div className="mid bg-white h-[0.2rem] w-6 mb-[0.2rem] rounded-md transition-all duration-200 ease-in-out"></div>
            <div className="bot bg-white h-[0.2rem] w-6 mb-[0.2rem] rounded-md transition-all duration-200 ease-in-out"></div>
          </label>
        </div>

        {/* Contact Button */}
        <div className="hidden font-poppins font-bold text-[0.8rem] px-3 py-2 rounded-lg cursor-pointer transition-colors duration-300 bg-main-blue hover:bg-main-violet | 2xl:flex 2xl:justify-center 2xl:items-center">
          <span className="mr-2">Contact me</span>
          <i class="fa-solid fa-rocket fa-xl"></i>
        </div>
      </div>

      <HamburgerLinks />
    </>
  );
}
