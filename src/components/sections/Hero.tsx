import { Button } from "@/components/ui/button";
import { Rocket, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-glow animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Welcome to Arif Tech</span>
          </div>

          {/* Main heading */}
          <h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            Powering Ideas with{" "}
            <span className="text-gradient">Technology</span>
          </h1>

          {/* Subheading */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            Arif Tech is a technology startup creating smart, reliable, and scalable digital solutions for modern businesses.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            <Button variant="hero" size="lg">
              <Rocket className="w-5 h-5" />
              Get Started
            </Button>
            <Button variant="heroOutline" size="lg">
              <MessageCircle className="w-5 h-5" />
              Talk to Us
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-border/50 animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient">50+</p>
              <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient">99%</p>
              <p className="text-sm text-muted-foreground mt-1">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient">24/7</p>
              <p className="text-sm text-muted-foreground mt-1">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
