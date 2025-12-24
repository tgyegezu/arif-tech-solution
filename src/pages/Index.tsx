import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Arif Tech — Powering Ideas with Technology</title>
        <meta
          name="description"
          content="Arif Tech is a technology startup creating smart, reliable, and scalable digital solutions for modern businesses. Software development, data analytics, and digital automation."
        />
        <meta
          name="keywords"
          content="technology startup, software development, data analytics, digital automation, web development, business solutions"
        />
        <meta property="og:title" content="Arif Tech — Powering Ideas with Technology" />
        <meta
          property="og:description"
          content="Arif Tech is a technology startup creating smart, reliable, and scalable digital solutions for modern businesses."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ariftech.com" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Projects />
        <CTA />
        <Footer />
      </main>
    </>
  );
};

export default Index;
