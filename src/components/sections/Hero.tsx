import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const badges = [
  "CS Degree Certified",
  "100+ Projects Delivered",
  "Local Expertise",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container relative z-10 px-6 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm font-medium text-primary-foreground/90">Empowering Ethiopian SMEs</span>
          </div>

          {/* Main heading */}
          <h1 
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Transform Your Business with{" "}
            <span className="text-accent">Digital Solutions</span>
          </h1>

          {/* Subheading */}
          <p 
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-10 leading-relaxed animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            Custom websites, intelligent Telegram bots, and powerful software solutions designed specifically for Ethiopian businesses ready to thrive in the digital age.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-start gap-4 mb-12 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <Button 
              variant="heroSolid" 
              size="lg" 
              className="group"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Our Work
            </Button>
          </div>

          {/* Trust badges */}
          <div 
            className="flex flex-wrap items-center gap-6 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            {badges.map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-primary-foreground/80">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
