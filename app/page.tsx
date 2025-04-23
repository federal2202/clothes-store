
import Hero from "@/components/Hero";
import About from "@/components/About";
import BuySection from "@/components/BuySection";
import HeroScene from "@/components/HeroScene";
import Changelog from "@/components/Changelog";





export default function Home() {
  return (
    <>
      <Hero />
      {/* <HeroScene /> */}
      <BuySection />
      <About />
      <Changelog />
    </>
    
  );
}
