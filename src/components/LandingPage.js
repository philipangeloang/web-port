import LandingPageAnimation from "./LandingPageAnimation";

export default function LandingPage() {
  return (
    <>
      <div className="bg-black flex flex-col pt-16 pb-4 px-8 relative overflow-x-hidden | lg:px-64 lg:flex-row | xl:px-96">
        <LandingPageAnimation />

        {/* Landing Page GIF at Mobile/Tablet (Hidden at Larger Screen Sizes)  */}
        <div className="flex items-center justify-center | lg:hidden">
          <img
            alt="Landing Page GIF"
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzg4YTYzYWRjOWUzZmZiZjhjZWEwZTE2ZTlhMDFkZjA2OTIyNmNkMiZjdD1n/l41lGnxllmN3YqOyI/giphy.gif"
          />
        </div>

        {/* Left Side of the Landing Page */}
        <div className="text-white  flex flex-col leading-tight text-center | lg:mt-16 lg:text-left lg:w-[40rem]">
          {/* Landing Page Main Texts */}
          <p className="font-poppins font-semibold text-xl | lg:text-2xl">
            Greetings
          </p>
          <p className="font-dmsans mt-6 leading-[1.2] text-3xl | md:text-[3rem] | lg:text-[3.5rem]">
            I'm Philip Angelo Ang
          </p>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-main-blue to-pink-600">
            <p className="font-dmsans leading-[1.2] text-3xl | md:text-[3rem] | lg:text-[3.5rem]">
              Your Companion
            </p>
            <p className="font-dmsans leading-[1.2] text-3xl | md:text-[3rem] | lg:text-[3.5rem]">
              Always Fit to Serve
            </p>
          </span>

          {/* Be in touch button */}
          <div className="flex flex-col mt-20 z-10 | lg:w-[35rem] lg:flex-row">
            <p className="flex justify-center items-center bg-main-blue h-[3.3rem] py-4 px-8 rounded-lg font-semibold cursor-pointer hover:bg-main-violet transition-colors duration-300 mx-auto text-base | lg:mx-0 ">
              <span className="mr-2">Be in touch </span>
              <i class="fa-solid fa-arrow-right"></i>
            </p>

            <p className=" text-gray-400 font-medium tracking-normal leading-6 mt-5 mx-auto | md:w-[18rem] | lg:mt-0 lg:w-[20rem] | 3xl:text-base">
              I am a web developer based on the Philippines. I design aesthetic
              and functional websites. Delivering you just what you need.
            </p>
          </div>

          {/* Fast button */}
          <div className="flex mt-20 cursor-pointer group  z-10 mx-auto mb-10 | lg:mx-0 lg:mb-28">
            <i class="fa-solid fa-chevron-down fa-lg flex justify-center items-center h-11 w-11 mr-4 bg-gray-800 rounded-full group-hover:bg-main-blue transition-colors duration-300"></i>
            <p className="flex justify-center items-center text-gray-400 font-medium">
              Here is how can I help you
            </p>
          </div>
        </div>

        {/* Right Side of the Landing Page at Laptop/Desktop (Hidden at Lower Screen Sizes)  */}
        <div className="hidden | 3xl:flex xl:items-center min-w-max">
          <img
            alt="Landing Page GIF"
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzg4YTYzYWRjOWUzZmZiZjhjZWEwZTE2ZTlhMDFkZjA2OTIyNmNkMiZjdD1n/l41lGnxllmN3YqOyI/giphy.gif"
          />
        </div>
      </div>
    </>
  );
}
