export default function Navbar() {
  return (
    <>
      <div className="bg-black text-white flex justify-between pt-6 pb-4 | xl:px-96">
        {/* Brand Name */}
        <div className="font-dmsans text-3xl">Hiplip</div>

        {/* Links */}
        <ul className="flex font-poppins items-center">
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

        {/* Contact Button */}
        <div className="flex justify-center items-center font-poppins font-bold text-[0.8rem] px-3 py-2 rounded-lg cursor-pointer transition-colors duration-300 bg-main-blue hover:bg-main-violet">
          <span className="mr-2">Contact me</span>
          <i class="fa-solid fa-rocket fa-xl"></i>
        </div>
      </div>
    </>
  );
}
