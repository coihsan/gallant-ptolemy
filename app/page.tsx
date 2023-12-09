import Image from "next/image";
import Hero from "./components/Hero";
import LoadingAnimation from "./components/Load";
import Navigation from "./components/Nav";
import Instagram from "./components/Instagram";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="">
      {/* <LoadingAnimation /> */}
      <Navigation />
      <Hero />
      <Projects />
      <Instagram />
    </main>
  );
}
