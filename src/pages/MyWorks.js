import LandingPageAnimation from "../components/LandingPageAnimation";

export default function MyWorks() {
  return (
    <>
      <div className="bg-black w-full px-8">
        {/* Sticking it to a max width of 71 rem across devices (Dynamic Reponsivity) */}
        <div className="mx-auto max-w-[71rem] flex flex-col pt-16 pb-4 relative overflow-x-hidden ">
          <LandingPageAnimation />

          {/* Some Recent Works Ttile */}
          <h1 className="text-white font-dmsans text-5xl mt-28">
            Some recent work
          </h1>

          {/* Works */}
          <div className="grid gap-10 grid-cols-1 mt-28 | lg:grid-cols-2">
            <div className="h-[18rem] bg-white rounded-lg relative overflow-hidden">
              <div className="flex justify-center items-center text-white bg-gradient-to-r from-main-blue/90 to-pink-600/50 absolute h-full w-full transition-opacity duration-300 cursor-pointer hover:opacity-0">
                <span className="font-poppins font-bold text-3xl">Jotter</span>
              </div>
              <img
                className=" rounded-lg z-10"
                src="https://i.imgur.com/9JwoWIE.jpg"
                alt="jotter"
              />
            </div>

            <div className="h-[18rem] bg-gray-900 rounded-lg relative overflow-hidden">
              <div className="flex justify-center items-center text-white bg-gradient-to-r from-main-blue/90 to-pink-600/50 absolute h-full w-full transition-opacity duration-300 cursor-pointer hover:opacity-0">
                <span className="font-poppins font-bold text-3xl">Wuju</span>
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

            <div className="h-[18rem] bg-white rounded-lg relative overflow-hidden">
              <div className="flex justify-center items-center text-white bg-gradient-to-r from-main-blue/90 to-pink-600/50 absolute h-full w-full transition-opacity duration-300 cursor-pointer hover:opacity-0">
                <span className="font-poppins font-bold text-3xl">
                  Barangay 564
                </span>
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
          </div>
        </div>
      </div>
    </>
  );
}
