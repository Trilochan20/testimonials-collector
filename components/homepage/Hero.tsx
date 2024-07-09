import { BackgroundSVG } from "@/lib/BackgroundSVG";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden  min-h-[720px] flex justify-center items-center backdrop-blur-sm">
      <BackgroundSVG
        className="absolute blur-3xl -right-96 -top-80"
        height="80%"
        width="80%"
      />
      <BackgroundSVG
        className="absolute blur-3xl top-48 left-[-30rem]"
        height="40%"
        width="60%"
      />
      <BackgroundSVG
        className="absolute blur-3xl top-[-6rem] right-[-30rem]"
        height="60%"
        width="60%"
      />

      <section className="relative flex items-center justify-center overflow-hidden">
        <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 lg:py-24 max-w-7xl md:px-12">
          <div className="mx-auto text-center">
            <div>
              <p className="text-3xl font-bold  text-slate-900 dark:text-slate-100 lg:text-5xl md:text-4xl">
                Get testimonials from your
                <span className="md:block">customers with ease</span>
              </p>
              <p className="mx-auto max-w-lg lg:text-md mt-4 text-[#141521]/80 dark:text-slate-100/80 text-base">
                Collecting testimonials is hard, we get it! So we built
                Testimonial. In minutes, you can collect text and video
                testimonials from your customers with no need for a developer or
                website hosting.
              </p>
              <div className="flex flex-col justify-center gap-3 mt-10 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center w-full px-6 py-3 font-medium text-center 
                            text-white duration-200 bg-indigo-600 focus:outline-none custom-blur focus-visible:outline-black 
                                focus-visible:ring-black hover:bg-indigo-500 dark:hover:bg-indigo-400
                   hover:text-white dark:hover:text-gray-900 lg:w-auto md:w-auto rounded-xl dark:bg-indigo-500 
                    dark:text-gray-100 dark:focus-visible:outline-white dark:focus-visible:ring-white transition"
                  href="#_"
                >
                  Find your clients now &nbsp; &nbsp; →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
