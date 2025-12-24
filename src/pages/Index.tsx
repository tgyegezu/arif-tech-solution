import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Industries from "@/components/sections/Industries";
import Portfolio from "@/components/sections/Portfolio";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ArifTechSolution — Transform Your Business with Digital Solutions</title>
        <meta
          name="description"
          content="Custom websites, intelligent Telegram bots, and powerful software solutions designed specifically for Ethiopian businesses ready to thrive in the digital age."
        />
        <meta
          name="keywords"
          content="Ethiopian tech, software development, Telegram bots, web development, Addis Ababa, SME solutions, Telebirr integration"
        />
        <meta property="og:title" content="ArifTechSolution — Transform Your Business with Digital Solutions" />
        <meta
          property="og:description"
          content="Custom websites, intelligent Telegram bots, and powerful software solutions designed specifically for Ethiopian businesses."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Services />
        <WhyChooseUs />
        <Industries />
        <Portfolio />
        <Pricing />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
