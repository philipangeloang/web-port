export default function Capabilities() {
  return (
    <>
      <div id="capabilities" className="w-full px-8">
        {/* Dynamic Responsivity */}
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
                <a href="#works">products and services </a>
                <i class="fa-solid fa-arrow-up-right-from-square ml-1"></i>
              </span>{" "}
              with empathy, creativity, and intricacy.
            </p>
          </div>

          {/* Start of Capabilities Listing */}
          <div className="flex flex-col">
            {/* Web Development */}
            <div className="max-w-[71rem] flex flex-col | xl:flex-row xl:mt-8">
              {/* Web Dev Image */}
              <img
                className="w-[36rem] flex items-center justify-center mx-auto"
                src="https://i.imgur.com/Rqm723K.jpg"
                alt="web dev"
              />

              {/* Web Dev Text */}
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

                  {/* Grid box */}
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

            {/* Photo/Video Editing */}
            <div className="max-w-[71rem] flex flex-col | xl:flex-row xl:mt-8">
              {/* Editing Image */}
              <img
                className="w-[36rem] items-center flex justify-center mx-auto | xl:hidden"
                src="https://i.imgur.com/tsuSc6E.jpg"
                alt="Editing"
              />

              {/* Editing Text */}
              <div className="text-black font-poppins w-full max-w-[36rem] mx-auto">
                <p className="font-semibold text-center text-xl | sm:text-3xl | xl:text-left xl:mt-24">
                  Photo & Video Editing
                </p>
                <p className="mt-3 text-center text-xs | sm:text-base  | xl:mt-10 xl:text-left">
                  As a skilled photo and video editor, I can bring your vision
                  to life with creative and professional editing. I can
                  transform your raw footage into stunning masterpieces that
                  capture the essence of your message. Rest assured that your
                  project is in good hands.
                </p>

                {/* Grid box */}
                <div className="mt-10 grid justify-center items-center w-full max-w-[36rem] | sm:grid-cols-2">
                  <div className="flex p-4 border-[0.5px]">
                    <div className="flex justify-center items-center mr-5 w-5">
                      <i class="fa-solid fa-palette text-black/20 fa-2x"></i>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="font-semibold text-[0.85rem] | sm:text-base">
                        Personalized Service
                      </p>
                      <p className="text-xs">
                        Design & development of simple or complex websites and
                        apps.
                      </p>
                    </div>
                  </div>

                  <div className="flex p-4 border-[0.5px]">
                    <div className="flex justify-center items-center mr-5 w-5">
                      <i class="fa-solid fa-wind text-black/20 fa-2x"></i>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="font-semibold text-[0.85rem] | sm:text-base">
                        Quick Turnaround Time
                      </p>
                      <p className="text-xs">
                        Improving user satisfaction and increasing engagement.
                      </p>
                    </div>
                  </div>

                  <div className="flex p-4 border-[0.5px]">
                    <div className="flex justify-center items-center mr-5 w-5">
                      <i class="fa-solid fa-handshake text-black/20 fa-2x"></i>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="font-semibold text-[0.85rem] | sm:text-base">
                        Customer Support
                      </p>
                      <p className="text-xs">
                        optimized for all devices from smallest to biggest
                      </p>
                    </div>
                  </div>

                  <div className="flex p-4 border-[0.5px]">
                    <div className="flex justify-center items-center mr-5 w-5">
                      <i class="fa-solid fa-star text-black/20 fa-2x"></i>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="font-semibold text-[0.85rem] | sm:text-base">
                        Emphatic Output
                      </p>
                      <p className="text-xs">
                        informative and engaging content that has relevance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Editing Image */}
              <img
                className="w-[36rem] hidden items-center justify-center mx-auto | xl:flex"
                src="https://i.imgur.com/tsuSc6E.jpg"
                alt="Editing"
              />
            </div>

            {/* Copywriting */}
            <div className="max-w-[71rem] flex flex-col | xl:flex-row xl:mt-8">
              {/* Copywriting Image */}
              <img
                className="w-[36rem] flex items-center justify-center mx-auto"
                src="https://i.imgur.com/53mNUGv.jpg"
                alt="Copywriting"
              />

              {/* Copywriting Text */}
              <div className="text-black font-poppins w-full max-w-[36rem] mx-auto">
                <p className="font-semibold text-center text-xl | sm:text-3xl | xl:text-left xl:mt-24">
                  Copywriting and Content Writing
                </p>
                <p className="mt-3 text-center text-xs | sm:text-base  | xl:mt-10 xl:text-left">
                  I can write you clear and compelling pieces of work that will
                  help you achieve your goals. I have extensive experience in
                  researching that will definitely take your work into a
                  different level. I empathize with my clients fully utilizing
                  situational scenarios.
                </p>

                {/* Grid box */}
                <div className="mt-10 grid justify-center items-center w-full max-w-[36rem] | sm:grid-cols-2">
                  <div className="flex p-4 border-[0.5px]">
                    <div className="flex justify-center items-center mr-5 w-5">
                      <i class="fa-solid fa-pencil text-black/20 fa-2x"></i>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="font-semibold text-[0.85rem] | sm:text-base">
                        Writing Skills
                      </p>
                      <p className="text-xs">
                        Ability to create compelling and intricate pieces.
                      </p>
                    </div>
                  </div>

                  <div className="flex p-4 border-[0.5px]">
                    <div className="flex justify-center items-center mr-5 w-5">
                      <i class="fa-solid fa-lightbulb text-black/20 fa-2x"></i>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="font-semibold text-[0.85rem] | sm:text-base">
                        Creativity
                      </p>
                      <p className="text-xs">
                        Thinking out of the box in writing pieces.
                      </p>
                    </div>
                  </div>

                  <div className="flex p-4 border-[0.5px]">
                    <div className="flex justify-center items-center mr-5 w-5">
                      <i class="fa-brands fa-searchengin text-black/20 fa-2x"></i>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="font-semibold text-[0.85rem] | sm:text-base">
                        Extensive Research
                      </p>
                      <p className="text-xs">
                        Maximizing all the resources in writing pieces.
                      </p>
                    </div>
                  </div>

                  <div className="flex p-4 border-[0.5px]">
                    <div className="flex justify-center items-center mr-5 w-5">
                      <i class="fa-solid fa-eye text-black/20 fa-2x"></i>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="font-semibold text-[0.85rem] | sm:text-base">
                        Attention to Detail
                      </p>
                      <p className="text-xs">
                        Leveraging important details to emphasize significant
                        parts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Works */}
            <div className="max-w-[71rem] flex flex-col | xl:flex-row xl:mt-8">
              {/* Custom image */}
              <img
                className="w-[36rem] items-center flex justify-center mx-auto | xl:hidden"
                src="https://i.imgur.com/GSBhbnQ.jpg"
                alt="Editing"
              />

              {/* Custom Work Text */}
              <div className="text-black font-poppins w-full max-w-[36rem] mx-auto">
                <p className="font-semibold text-center text-xl | sm:text-3xl | xl:text-left xl:mt-24">
                  Custom Services
                </p>
                <p className="mt-3 text-center text-xs | sm:text-base  | xl:mt-10 xl:text-left">
                  I have a couple of computer literate skills that is too many
                  to include. I possess wide variety of technical skills that I
                  can offer to you as a service. Connect to me and let us talk
                  about it. Link to my socials below for your reference. Excited
                  to work with you!
                </p>

                <div className="flex flex-col items-center | xl:items-start ">
                  <a href="#contact">
                    <div className="font-poppins font-semibold px-5 py-3 rounded-lg cursor-pointer transition-colors duration-300 bg-main-blue hover:bg-main-violet text-white mt-5 max-w-[10rem] text-xs | sm:text-base">
                      <span className="mr-2">Contact me</span>
                      <i class="fa-solid fa-arrow-right"></i>
                    </div>
                  </a>

                  <a href="#works">
                    <div className="font-poppins text-gray-700 font-semibold px-5 py-3 rounded-lg cursor-pointer transition-colors duration-300border mt-5 max-w-[10rem] hover:bg-gray-500 hover:text-white border text-xs | sm:text-base">
                      <span className="mr-5">My Works</span>
                      <i class="fa-solid fa-briefcase"></i>
                    </div>
                  </a>
                </div>
              </div>

              {/* Editing Image */}
              <img
                className="w-[36rem] hidden items-center justify-center mx-auto | xl:flex"
                src="https://i.imgur.com/GSBhbnQ.jpg"
                alt="Editing"
              />
            </div>
          </div>
        </div>

        <hr className="mx-[-30px] mt-10" />
        <div className="py-10 w-full flex flex-col items-center justify-center">
          <div className="grid gap-5 items-center w-full | grid-cols-5 | lg:grid-cols-10">
            <img
              className="w-4/5 hover:scale-[1.3] transition-transform duration-300"
              src="https://i.imgur.com/J4LfFfo.png"
              alt="html"
            />
            <img
              className="w-4/5 hover:scale-[1.3] transition-transform duration-300"
              src="https://i.imgur.com/kWPXSLh.png"
              alt="css"
            />
            <img
              className="w-4/5 hover:scale-[1.3] transition-transform duration-300"
              src="https://i.imgur.com/CbQ4aMM.png"
              alt="js"
            />
            <img
              className="w-4/5 hover:scale-[1.3] transition-transform duration-300"
              src="https://i.imgur.com/j5NhgMJ.png"
              alt="node"
            />
            <img
              className="w-4/5 hover:scale-[1.3] transition-transform duration-300"
              src="https://i.imgur.com/eos2pRV.png"
              alt="express"
            />
            <img
              className="w-4/5 hover:scale-[1.3] transition-transform duration-300"
              src="https://i.imgur.com/ZlQYPDz.png"
              alt="mongoDB"
            />
            <img
              className="w-4/5 hover:scale-[1.3] transition-transform duration-300"
              src="https://i.imgur.com/ifVWdgc.png"
              alt="react"
            />
            <img
              className="w-4/5 hover:scale-[1.3] transition-transform duration-300"
              src="https://i.imgur.com/8bFfT1d.png"
              alt="next"
            />
            <img
              className="w-4/5 hover:scale-[1.3] transition-transform duration-300"
              src="https://i.imgur.com/CISHALy.png"
              alt="tailwind"
            />
            <img
              className="w-4/5 hover:scale-[1.3] transition-transform duration-300"
              src="https://i.imgur.com/wylDbV6.png"
              alt="bootstrap"
            />
          </div>
        </div>
        <hr className="mx-[-30px] mb-10" />
      </div>
    </>
  );
}
