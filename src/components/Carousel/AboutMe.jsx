import { useState } from "react";

export default function AboutMe() {
  const [i, setI] = useState(0);
  const slides = [0, 1, 2]; 

  const prev = () => setI((v) => (v === 0 ? slides.length - 1 : v - 1));
  const next = () => setI((v) => (v === slides.length - 1 ? 0 : v + 1));

  return (
    <div className="bg-[#FFEADF] py-20" id="realtalk">
      <div className="container">
        <h3 className="text-primary">
          <strong>Real Talk</strong> about me
        </h3>
      </div>

      <div className="relative w-full mx-auto overflow-hidden pt-10 pb-16">
        <div
          className="flex transition-transform duration-500 pl-40 gap-6 sm:pl-5 md:pl-10"
          style={{
            transform: `translateX(-${
              i * (100 / (window.innerWidth < 640 ? 1 : 3))
            }%)`,
            width: `${slides.length * (100 / (window.innerWidth < 640 ? 1 : 3))}%`,
          }}
        >
          <div className="basis-1/3 shrink-0 sm:basis-full relative">
            <div className="bg-primary rounded-[24px] overflow-hidden border-[7px] border-[#F5B899]">
              <img
                src="/alex-userimage.svg"
                alt=""
                className="object-cover w-full h-[355px]"
              />
              <div className="bg-white py-5 px-5 gap-5 flex flex-col">
                <p className="font-sora text-[24px] text-[#09090B] line-clamp-3 md:text-[16px]">
                  Thanks to Pale, we're uncovering new leads we never could have
                  found through traditional legal channels.
                </p>
                <div>
                  <strong className="font-semibold block font-sora text-[16px] text-primary md:text-[15px]">
                    Alex Chen
                  </strong>
                  <span className="font-noto text-[14px] text-[#00000099] md:text-[14px]">
                    Operations Director
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/3 shrink-0 sm:basis-full">
            <div className="bg-primary rounded-[24px] overflow-hidden border-[7px] border-[#F5B899]">
              <img
                src="/bencarter-image.svg"
                alt=""
                className="object-cover w-full h-[355px]"
              />
              <div className="bg-white py-5 px-5 gap-5 flex flex-col">
                <p className="font-sora text-[24px] text-[#09090B] line-clamp-3 md:text-[16px]">
                  Running in Founder Mode is challenging enough without a truly
                  great project management app.
                </p>
                <div>
                  <strong className="font-semibold block font-sora text-[16px] text-primary md:text-[15px]">
                    Ben Carter
                  </strong>
                  <span className="font-noto text-[14px] text-[#00000099] md:text-[14px]">
                    Marketing Lead
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/3 shrink-0 sm:basis-full">
            <div className="bg-primary rounded-[24px] overflow-hidden border-[7px] border-[#F5B899]">
              <img
                src="/Victoria-Smith-image.svg"
                alt=""
                className="object-cover w-full h-[355px]"
              />
              <div className="bg-white py-5 px-5 gap-5 flex flex-col">
                <p className="font-sora text-[24px] text-[#09090B] line-clamp-3 md:text-[16px]">
                  Founder Mode is tough—having an exceptional project management
                  app makes all the difference.
                </p>
                <div>
                  <strong className="font-semibold block font-sora text-[16px] text-primary md:text-[15px]">
                    Cameron Wil
                  </strong>
                  <span className="font-noto text-[14px] text-[#00000099] md:text-[14px]">
                    Product Manager
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <button
            aria-label="Previous"
            onClick={prev}
            className="absolute right-40 sm:right-20 bottom-[-20px] -translate-y-1/2 w-[44px] h-[44px] rounded-full bg-[#fff6] text-white flex items-center justify-center border-[1px] border-[#E5E5E5]"
          >
            <img src="/arrow-left.svg" alt="" />
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="absolute right-[100px] sm:right-[30px] bottom-[-20px] -translate-y-1/2 w-[44px] h-[44px] rounded-full bg-[#fff6] text-white flex items-center justify-center border-[1px] border-[#E5E5E5]"
          >
            <img src="/arrow-right.svg" alt="" />
          </button>
          <div className="absolute bottom-[10px] left-20 translate-x-[100px] flex gap-2 sm:translate-x-[20px] sm:left-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`w-3 h-3 rounded-full ${
                  i === idx
                    ? "bg-white border-[1px] border-primary"
                    : "bg-primary"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
