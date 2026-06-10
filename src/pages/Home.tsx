import Hero from "../components/Hero";
import WorkList from "../components/WorkList";
import Experience from "../components/Experience";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkList />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
