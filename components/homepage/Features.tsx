import { BackgroundSVG } from "@/lib/BackgroundSVG";
import { Zap } from "lucide-react";

export const Features = () => {
  return (
    <section className="relative mx-auto py-4">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 px-8">
        <h2 className="max-w-lg mb-6  text-3xl font-bold leading-none tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-4 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="d9d7687a-355f-4502-8ec4-7945db034688"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Collect</span>
          </span>{" "}
          and display testimonials all in one solution
        </h2>
        <p className="text-base text-slate-700 dark:text-slate-300 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <CardGrid />
    </section>
  );
};

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => (
  <div
    className="p-5 duration-300 transform bg-gray-100 dark:bg-slate-400/10
                 backdrop-blur-sm  border dark:border-slate-200/10 rounded shadow-sm dark:shadow-slate-200/20 hover:-translate-y-2"
  >
    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-i  bg-indigo-900 dark:bg-indigo-100 text-slate-100 dark:text-slate-900">
      {icon}
    </div>
    <h6 className="mb-2 font-semibold leading-5">{title}</h6>
    <p className="text-sm text-slate-900 dark:text-slate-100 ">{description}</p>
  </div>
);

const CardGrid: React.FC = () => {
  const cardData: CardProps[] = [
    {
      icon: <Zap className="w-6 h-6 text-deep-purple-accent-400" />,
      title: "The doctor said",
      description:
        "Baseball ipsum dolor sit amet cellar rubber win hack tossed. Slugging catcher slide bench league, left fielder nubber.",
    },
    {
      icon: <Zap className="w-6 h-6 text-deep-purple-accent-400" />,
      title: "That is the true",
      description:
        "We meet at one of those defining moments - a moment when our nation is at war, our economy is in turmoil, and the American promise has been threatened once more.",
    },
    {
      icon: <Zap className="w-6 h-6 text-deep-purple-accent-400" />,
      title: "Those options",
      description:
        "Strategic high-level 30,000 ft view. Drill down re-inventing the wheel at the end of the day but curate imagineer, or to be inspired is to become creative.",
    },
    {
      icon: <Zap className="w-6 h-6 text-deep-purple-accent-400" />,
      title: "Swearem ipsum",
      description:
        "Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et. Vestibulum placerat purus ut nibh aliquam fringilla. Aenean et tortor diam, id tempor elit.",
    },
    {
      icon: <Zap className="w-6 h-6 text-deep-purple-accent-400" />,
      title: "Webtwo ipsum",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut perspiciatis unde omnis.",
    },
    {
      icon: <Zap className="w-6 h-6 text-deep-purple-accent-400" />,
      title: "Lookout flogging",
      description:
        "Flatland! Hypatia. Galaxies Orion's sword globular star cluster? Light years quasar as a patch of light gathered by gravity Vangelis radio telescope.",
    },
  ];

  return (
    <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3 px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardGrid;
