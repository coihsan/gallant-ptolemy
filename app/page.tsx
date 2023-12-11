import Image from "next/image";
import Hero from "./components/Hero";
import LoadingAnimation from "./components/Load";
import Navigation from "./components/Nav";
import Instagram from "./components/Instagram";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      {/* <LoadingAnimation /> */}

      <Hero />
      <Projects />
      <Instagram />
      <Blogs />
    </main>
  );
}
