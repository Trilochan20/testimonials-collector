import { Features } from "./Features";
import HeroSection from "./Hero";
import WalkthroughSection from "./Walkthrough";

const Homepage = () => {
  return (
    <div
      className="bg-white dark:bg-slate-900"
      style={{
        backgroundImage: `
      repeating-linear-gradient(90deg, hsla(78, 0%, 63%, 0.05) 0, hsla(78, 0%, 63%, 0.05) 1px, transparent 1px, transparent 104px),
      repeating-linear-gradient(0deg, hsla(78, 0%, 63%, 0.05) 0, hsla(78, 0%, 63%, 0.05) 1px, transparent 1px, transparent 104px),
      repeating-linear-gradient(0deg, hsla(78, 0%, 63%, 0.08) 0, hsla(78, 0%, 63%, 0.08) 1px, transparent 1px, transparent 26px),
      repeating-linear-gradient(90deg, hsla(78, 0%, 63%, 0.08) 0, hsla(78, 0%, 63%, 0.08) 1px, transparent 1px, transparent 26px)
    `,
      }}
    >
      <HeroSection />
      <Features />
      <WalkthroughSection />
    </div>
  );
};

export default Homepage;
