export default function HamburgerLinks() {
  return (
    <div className="opacity-0 popup fixed w-screen h-screen pt-36 z-20 bg-black transition-opacity duration-500 | md:pt-48 | lg:px-56 | xl:px-[21.5rem]">
      <ul className="font-dmsans">
        <li className="cursor-pointer mx-9 mb-11 text-6xl text-gray-300 font-medium hover:text-white | md:text-8xl">
          Home
        </li>
        <li className="cursor-pointer mx-9 mb-11 text-6xl text-gray-300 font-medium hover:text-white | md:text-8xl">
          My Works
        </li>
        <li className="cursor-pointer mx-9 mb-11 text-6xl text-gray-300 font-medium hover:text-white | md:text-8xl">
          About Me
        </li>
      </ul>
    </div>
  );
}
