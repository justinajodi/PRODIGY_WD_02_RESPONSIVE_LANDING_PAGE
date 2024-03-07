import Card from "@/components/cards";
import { LandingContent } from "@/components/footer";
import { LandingHero } from "@/components/hero";
import { HeroParallaxDemo } from "@/components/hero-copy";
import { InfiniteMovingCardsDemo } from "@/components/infinity-moving";
import { LandingNavbar } from "@/components/navbar";
import { HeroScrollDemo } from "@/components/scrollanimarte";
import { TracingBeam } from "@/components/ui/tracing-beam";

const LandingPage = () => {
  return (
    <div className="h-full ">
      <TracingBeam>
        <LandingHero />
        <HeroParallaxDemo />
        <Card />
        <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
        <HeroScrollDemo />
      </TracingBeam>
    </div>
  );
};

export default LandingPage;
