export const BackgroundSVG: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => {
  return (
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
};
