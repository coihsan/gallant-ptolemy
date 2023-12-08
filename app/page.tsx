import Image from "next/image";
import Hero from "./components/Hero";
import Navigation from "./components//nav/Nav";
import Instagram from "./components/Instagram";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="">
      <Navigation />
      <Hero />
      <Projects />
      <Instagram />
    </main>
  );
}
