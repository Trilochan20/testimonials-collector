import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden bg-white dark:bg-slate-900 min-h-[720px] flex justify-center items-center "
      style={{
        backgroundImage: `
        repeating-linear-gradient(90deg, hsla(78, 0%, 63%, 0.05) 0, hsla(78, 0%, 63%, 0.05) 1px, transparent 1px, transparent 104px),
        repeating-linear-gradient(0deg, hsla(78, 0%, 63%, 0.05) 0, hsla(78, 0%, 63%, 0.05) 1px, transparent 1px, transparent 104px),
        repeating-linear-gradient(0deg, hsla(78, 0%, 63%, 0.08) 0, hsla(78, 0%, 63%, 0.08) 1px, transparent 1px, transparent 26px),
        repeating-linear-gradient(90deg, hsla(78, 0%, 63%, 0.08) 0, hsla(78, 0%, 63%, 0.08) 1px, transparent 1px, transparent 26px)
      `,
      }}
    >
      <BackgroundSVG
        className="absolute blur-3xl -right-96 -top-80"
        height="80%"
        width="80%"
      />
      <BackgroundSVG
        className="absolute blur-3xl -bottom-48 left-[-20rem]"
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

const BackgroundSVG: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    fill="none"
    viewBox="0 0 400 400"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_10_20)">
      <g filter="url(#filter0_f_10_20)">
        <path d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z" fill="#03FFE0" />
        <path d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z" fill="#7C87F8" />
        <path d="M320 400H400V78.75L106.2 134.75L320 400Z" fill="#4C65E4" />
        <path d="M400 0H128.6L106.2 134.75L400 78.75V0Z" fill="#6551f3" />
      </g>
    </g>
    <defs>
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="720.666"
        id="filter0_f_10_20"
        width="720.666"
        x="-160.333"
        y="-160.333"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          mode="normal"
          result="shape"
        />
        <feGaussianBlur
          result="effect1_foregroundBlur_10_20"
          stdDeviation="80.1666"
        />
      </filter>
    </defs>
  </svg>
);

export default HeroSection;
