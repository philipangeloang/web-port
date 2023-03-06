export default function HamburgerLinks({ nav }) {
  return (
    <div className="fixed w-screen h-screen z-20 bg-black transition-all duration-500  pt-32 | md:pt-48 | lg:px-56 | xl:px-[21.5rem]">
      <ul className="font-dmsans">
        <li className="cursor-pointer mx-9 mb-11 text-6xl text-gray-300 font-medium hover:text-white | md:text-8xl">
          <a
            onClick={() => {
              nav(false);
            }}
            href="#home"
          >
            Home
          </a>
        </li>
        <li className="cursor-pointer mx-9 mb-11 text-6xl text-gray-300 font-medium hover:text-white | md:text-8xl">
          <a
            onClick={() => {
              nav(false);
            }}
            href="#works"
          >
            My Works
          </a>
        </li>
        <li className="cursor-pointer mx-9 mb-11 text-6xl text-gray-300 font-medium hover:text-white | md:text-8xl">
          <a
            onClick={() => {
              nav(false);
            }}
            href="#capabilities"
          >
            Capabilities
          </a>
        </li>
      </ul>
    </div>
  );
}
