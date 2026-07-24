import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Hours from "@/components/Hours";
import Trainers from "@/components/Trainers";
import Equipment from "@/components/Equipment";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Gallery />
        <Pricing />
        <Hours />
        <Trainers />
        <Equipment />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
