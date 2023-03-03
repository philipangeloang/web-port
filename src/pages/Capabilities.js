export default function Capabilities() {
  return (
    <>
      <div className="w-full px-8">
        <div className="mx-auto max-w-[71rem] flex flex-col pb-4 overflow-x-hidden">
          {/* Quote with Border */}
          <div className="border rounded-lg py-10 px-2 | lg:px-16">
            <p className="font-dmsans text-center leading-[1.2] text-3xl | md:text-[3rem] | lg:text-[3.5rem]">
              I value{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-main-blue to-pink-600">
                process{" "}
              </span>
              as much as the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-main-blue to-pink-600">
                outcome
              </span>
              .
            </p>
            <p className="font-poppins font-semibold text-[1.35rem] text-center mt-4 leading-[1.2] text-xs | md:text-[1rem] | lg:text-[1.35rem]">
              Crafting high quality{" "}
              <span className=" bg-black text-white rounded-xl p-[0.2rem] text-xs cursor-pointer transition-colors duration-300 hover:bg-main-violet | md:text-[1rem] | lg:text-[1.35rem]">
                products and services{" "}
                <i class="fa-solid fa-arrow-up-right-from-square ml-1"></i>
              </span>{" "}
              with empathy, creativity, and intricacy.
            </p>
          </div>

          {/* Start of Capabilities Listing */}
          <div className="max-w-[71rem] flex flex-col | xl:flex-row xl:mt-8">
            <img
              className="w-[36rem] flex items-center justify-center mx-auto "
              src="https://i.imgur.com/Rqm723K.jpg"
              alt="web dev"
            />

            <div className="text-black font-poppins w-full max-w-[36rem] mx-auto">
              <p className="font-semibold text-center text-xl | sm:text-3xl | xl:text-left xl:mt-24">
                Web Development
              </p>
              <p className="mt-3 text-center text-xs | sm:text-base  | xl:mt-10 xl:text-left">
                I specialize in creating custom websites that are tailored to
                meet the specific needs of my clients. I am committed to
                delivering high-quality websites that are user-friendly,
                responsive, and visually appealing. I look forward to the
                opportunity to work with you.
              </p>

              <div className="mt-10 grid justify-center items-center w-full max-w-[36rem] | sm:grid-cols-2">
                <div className="flex p-4 border-[0.5px]">
                  <div className="flex justify-center items-center mr-5 w-5">
                    <i class="fa-solid fa-layer-group text-black/20 fa-2x"></i>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="font-semibold text-[0.85rem] | sm:text-base">
                      Websites & Mobile Apps
                    </p>
                    <p className="text-xs">
                      Design & development of simple or complex websites and
                      apps.
                    </p>
                  </div>
                </div>

                <div className="flex p-4 border-[0.5px]">
                  <div className="flex justify-center items-center mr-5 w-5">
                    <i class="fa-solid fa-droplet text-black/20 fa-2x"></i>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="font-semibold text-[0.85rem] | sm:text-base">
                      Excellent UI/UX
                    </p>
                    <p className="text-xs">
                      Improving user satisfaction and increasing engagement.
                    </p>
                  </div>
                </div>

                <div className="flex p-4 border-[0.5px]">
                  <div className="flex justify-center items-center mr-5 w-5">
                    <i class="fa-solid fa-tent-arrow-left-right text-black/20 fa-2x"></i>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="font-semibold text-[0.85rem] | sm:text-base">
                      Fully Responsive
                    </p>
                    <p className="text-xs">
                      optimized for all devices from smallest to biggest
                    </p>
                  </div>
                </div>

                <div className="flex p-4 border-[0.5px]">
                  <div className="flex justify-center items-center mr-5 w-5">
                    <i class="fa-solid fa-thumbs-up text-black/20 fa-2x"></i>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="font-semibold text-[0.85rem] | sm:text-base">
                      High Quality Content
                    </p>
                    <p className="text-xs">
                      informative and engaging content that has relevance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
