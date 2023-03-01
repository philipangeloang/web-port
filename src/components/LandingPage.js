import LandingPageAnimation from "./LandingPageAnimation";

export default function LandingPage() {
  return (
    <>
      <div className="bg-black flex pt-6 pb-4 relative | xl:px-96">
        <LandingPageAnimation />
        {/* Left Side of the Landing Page */}
        <div className="text-white mt-16 flex flex-col leading-tight w-1/2">
          {/* Landing Page Main Texts */}
          <p className="font-poppins font-semibold text-2xl">Greetings</p>
          <p className="font-dmsans text-[3.5rem] mt-6">
            I'm Philip Angelo Ang
          </p>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-main-blue to-pink-600">
            <p className="font-dmsans text-[3.5rem]">Your Companion</p>
            <p className="font-dmsans text-[3.5rem]">Always Fit to Serve</p>
          </span>

          {/* Be in touch button */}
          <div className="flex mt-20 z-10">
            <p className="bg-main-blue h-[3.3rem] py-4 px-8 mr-7 rounded-lg font-semibold cursor-pointer hover:bg-main-violet transition-colors duration-300">
              <span className="mr-2">Be in touch </span>
              <i class="fa-solid fa-arrow-right"></i>
            </p>

            <p className="w-[55%] text-gray-400 font-medium tracking-normal leading-6">
              I am a web developer based on the Philippines. I design aesthetic
              and functional websites. Delivering you just what you need.
            </p>
          </div>

          {/* Fast button */}
          <div className="flex mt-20 cursor-pointer group mb-28 z-10">
            <i class="fa-solid fa-chevron-down fa-lg flex justify-center items-center h-11 w-11 mr-4 bg-gray-800 rounded-full group-hover:bg-main-blue transition-colors duration-300"></i>
            <p className="flex justify-center items-center text-gray-400 font-medium">
              Here is how can I help you
            </p>
          </div>
        </div>

        {/* Right Side of the Landing Page  */}
        <div className="flex items-center">
          <img
            alt="Landing Page GIF"
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzg4YTYzYWRjOWUzZmZiZjhjZWEwZTE2ZTlhMDFkZjA2OTIyNmNkMiZjdD1n/l41lGnxllmN3YqOyI/giphy.gif"
          />
        </div>
      </div>
    </>
  );
}
