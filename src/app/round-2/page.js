import HeroParallax from "@/app/round-2/components/heroParallax";
import News from "@/app/round-2/components/news";
import TextAndMedia from "@/app/round-2/components/textAndMedia";
import ParallaxFeature from "@/app/round-2/components/parallaxFeature";
import Collection1 from "@/app/round-2/components/collection1";
import Collection2 from "@/app/round-2/components/collection2";
import Collection3 from "@/app/round-2/components/collection3";
import AnimatedBlock from "@/app/round-2/components/animatedBlock";
import TextBox from "@/app/round-2/components/textBox";
import bgImage from "@/assets/images/bldg110_14_3200x1532-1006439883.jpg"
import Header from "@/components/header.js";

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-[600vh]">
        <HeroParallax />
        <div className="max-w-wrapper grid gap-12 p-12">
          <TextAndMedia />
          <ParallaxFeature />
        </div>
        <News bgColor="bg-black-90"/>
        <Collection1 />
        <Collection2 />
        <AnimatedBlock />
        <Collection3 />
        <TextBox bgImage={bgImage}/>
        <div className="bg-white min-h-[100vh]">

        </div>
      </div>
    </>
  );
}
