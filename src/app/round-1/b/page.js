import HeroParallax from "@/app/round-1/components/heroParallax";
import News from "@/app/round-1/components/news";
import TextAndMediaParallax from "@/app/round-1/components/textAndMediaParallax";
import ParallaxFeature from "@/app/round-1/components/parallaxFeature";

export default function Home() {
  return (
    <div className="min-h-[600vh]">
      <HeroParallax />
      <div className="max-w-wrapper grid gap-12 p-12 bg-black-50">
        <TextAndMediaParallax />
        <ParallaxFeature />
      </div>
      <News bgColor="bg-black-90"/>
    </div>
  );
}
