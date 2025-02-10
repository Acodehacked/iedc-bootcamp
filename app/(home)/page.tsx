import Image from "next/image";
import Hero from "./components/hero";
import Link from "next/link";
import Navbar from "./components/navbar";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { TextGenerateEffect } from "../components/TextGenerateEffect";

export default function Home() {
  return (
    <main className="min-h-screen">

      <Navbar />
      <Hero />
      <section className="w-full bg-black text-white font-regular">
        <VelocityScroll defaultVelocity={2} numRows={1}>CREATIVE &middot; INNOVATIVE &middot; TECHNICAL &middot;</VelocityScroll>
      </section>
      <section className="min-h-[70vh] screen px-10 pt-10 mt-10 border-t-[0.05rem] rounded-[95px] border-zinc-400">
          <h1 className="w-full text-center text-6xl">WHY <span className="text-primary font-semibold">IEDC</span>?</h1>
          <TextGenerateEffect duration={1} className="font-medium text-center text-md" words="Here students take their first step as innovators and entrepreneurs" />
      </section>
    </main>
  );
}
