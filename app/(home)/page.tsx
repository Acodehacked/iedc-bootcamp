import Hero from "./components/hero";
import Navbar from "./components/navbar";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { TextGenerateEffect } from "../components/TextGenerateEffect";
import WhyIedc from "./components/whyiedc";

export default function Home() {
  return (
    <main className="min-h-screen">

      <Navbar />
      <Hero />
      <section className="w-full bg-black text-white font-regular">
        <VelocityScroll defaultVelocity={2} numRows={1}>CREATIVE &middot; INNOVATIVE &middot; TECHNICAL &middot;</VelocityScroll>
      </section>
      <WhyIedc />

    </main>
  );
}
