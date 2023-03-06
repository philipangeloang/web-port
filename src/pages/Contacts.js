export default function Contacts() {
  return (
    <>
      <div id="contact" className="w-full px-8">
        <div className="mx-auto max-w-[71rem] flex flex-col pb-4 overflow-x-hidden">
          <h1 className="font-dmsans text-center text-3xl | lg:text-5xl">
            Get in Touch
          </h1>

          <div className="flex justify-center my-56">
            <a href="https://www.linkedin.com/in/philip-ang-5aa223255/">
              <div className="flex justify-center items-center border-black border p-2 h-[3rem] w-[3rem] mx-3 rounded-lg hover:scale-[1.3] transition-transform duration-300 cursor-pointer">
                <i class="fa-brands fa-linkedin fa-2x"></i>
              </div>
            </a>

            <a href="https://github.com/philipangeloang">
              <div className="flex justify-center items-center border-black border p-2 h-[3rem] w-[3rem] mx-3 rounded-lg hover:scale-[1.3] transition-transform duration-300 cursor-pointer">
                <i class="fa-brands fa-github fa-2x"></i>
              </div>
            </a>

            <a href="mailto:philipangeloang1@gmail.com">
              <div className="flex justify-center items-center border-black border p-2 h-[3rem] w-[3rem] mx-3 rounded-lg hover:scale-[1.3] transition-transform duration-300 cursor-pointer">
                <i class="fa-solid fa-envelope fa-2x"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
