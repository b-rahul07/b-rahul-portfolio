import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { ActsOverview } from "./components/ActsOverview";
import { Work } from "./components/Work";
import { Experience } from "./components/Experience";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ActIndicator } from "./components/ActIndicator";

export default function App() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to the work
      </a>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <ActsOverview />
        <Work />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
      <ActIndicator />
    </>
  );
}
