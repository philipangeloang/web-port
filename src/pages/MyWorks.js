import LandingPageAnimation from "../components/LandingPageAnimation";

export default function MyWorks() {
  return (
    <>
      <div id="works" className="bg-black w-full px-8">
        {/* Sticking it to a max width of 71 rem across devices (Dynamic Reponsivity) */}
        <div className="mx-auto max-w-[71rem] flex flex-col pt-16 pb-24 relative overflow-x-hidden  ">
          <LandingPageAnimation />

          {/* Some Recent Works Ttile */}
          <h1 className="text-white font-dmsans text-3xl | lg:text-5xl lg:mt-28">
            Some recent work
          </h1>

          {/* Works */}
          <div className="grid gap-10 grid-cols-1 mt-10 | lg:grid-cols-2 lg:mt-28">
            <a href="https://jot-ter.netlify.app/">
              <div className="h-[18rem] group/jotter bg-white rounded-lg relative overflow-hidden">
                <div className="flex flex-col justify-center items-center text-white bg-gradient-to-br from-main-blue/90 to-pink-600/70 absolute h-full w-full transition-opacity duration-300 cursor-pointer hover:opacity-0">
                  <p className="font-poppins font-bold text-2xl | lg:text-3xl">
                    Jotter
                  </p>
                  <p className="text-center text-xs | lg:text-base">
                    Dribble Inspired Design Note Taking App
                  </p>
                </div>
                <div className="group-hover/jotter:opacity-0 transition-opacity duration-300 absolute top-4 left-4 bg-gray-300/50 px-2 py-1 rounded-lg font-semibold text-xs text-white">
                  Front End
                </div>
                <img
                  className=" rounded-lg z-10"
                  src="https://i.imgur.com/9JwoWIE.jpg"
                  alt="jotter"
                />
              </div>
            </a>

            <a href="https://expenses-tracker-4es7.onrender.com/">
              <div className="h-[18rem] group/wuju bg-gray-900 rounded-lg relative overflow-hidden">
                <div className="flex flex-col justify-center items-center text-white bg-gradient-to-br group from-main-blue/90 to-pink-600/70 absolute h-full w-full transition-opacity duration-300 cursor-pointer hover:opacity-0">
                  <p className="font-poppins font-bold text-2xl | lg:text-3xl">
                    Wuju
                  </p>
                  <p className="text-center text-xs | lg:text-base">
                    Simple Daily Expenses Tracker Dashboard
                  </p>
                </div>
                <div className="group-hover/wuju:opacity-0 transition-opacity duration-300 absolute top-4 left-4 bg-gray-300/50 px-2 py-1 rounded-lg font-semibold text-xs text-white">
                  Full Stack
                </div>
                <img
                  className="rounded-lg z-10 hidden | sm:block"
                  src="https://i.imgur.com/5rikGJm.jpg"
                  alt="wuju"
                />
                <img
                  className="rounded-lg z-10 block  | sm:hidden"
                  src="https://i.imgur.com/8rOxLU2.jpg"
                  alt="wuju"
                />
              </div>
            </a>

            <a href="https://barangay564.online/">
              <div className="h-[18rem] group/barangay bg-white rounded-lg relative overflow-hidden">
                <div className="flex flex-col justify-center items-center text-white bg-gradient-to-br group from-main-blue/90 to-pink-600/70 absolute h-full w-full transition-opacity duration-300 cursor-pointer hover:opacity-0">
                  <p className="font-poppins font-bold text-2xl | lg:text-3xl">
                    Barangay 564
                  </p>
                  <p className="text-center text-xs | lg:text-base">
                    Fully Deployed Document Management System{" "}
                  </p>
                </div>
                <div className="group-hover/barangay:opacity-0 transition-opacity duration-300 absolute top-4 left-4 bg-gray-300/50 px-2 py-1 rounded-lg font-semibold text-xs text-white">
                  Full Stack (Deployed)
                </div>
                <img
                  className="rounded-lg z-10 hidden | sm:block | sm:h-full"
                  src="https://i.imgur.com/mLO1Kdl.jpg"
                  alt="barangay"
                />
                <img
                  className="rounded-lg z-10 block | max-[390px]:h-full  | sm:hidden"
                  src="https://i.imgur.com/ApJnzOw.jpg"
                  alt="barangay"
                />
              </div>
            </a>

            <a href="https://sumida.netlify.app/">
              <div className="h-[18rem] group/barangay bg-white rounded-lg relative overflow-hidden">
                <div className="flex flex-col justify-center items-center text-white bg-gradient-to-br group from-main-blue/90 to-pink-600/70 absolute h-full w-full transition-opacity duration-300 cursor-pointer hover:opacity-0">
                  <p className="font-poppins font-bold text-2xl | lg:text-3xl">
                    Sumida
                  </p>
                  <p className="text-center text-xs | lg:text-base">
                    Powered by OpenAI GPT-4
                  </p>
                </div>
                <div className="group-hover/barangay:opacity-0 transition-opacity duration-300 absolute top-4 left-4 bg-gray-300/50 px-2 py-1 rounded-lg font-semibold text-xs text-white">
                  Artificial Intelligence
                </div>
                <img
                  className="rounded-lg z-10 hidden | sm:block | sm:h-full sm:object-contain"
                  src="https://i.imgur.com/JvHjXua.jpg"
                  alt="sumida"
                />
                <img
                  className="rounded-lg z-10 block mx-auto | max-[390px]:h-full  | sm:hidden"
                  src="https://i.imgur.com/JvHjXua.jpg"
                  alt="sumida"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
