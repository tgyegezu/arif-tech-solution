import { Button } from "@/components/ui/button";
import { Mail, Rocket } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-glow opacity-50" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card rounded-3xl border border-border p-12 md:p-16 text-center shadow-card relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-glow opacity-30" />
            
            <div className="relative z-10">
              {/* Badge */}
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary mb-6">
                Let's Build Together
              </span>

              {/* Heading */}
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Have an Idea?{" "}
                <span className="text-gradient">Let's Talk</span>
              </h2>

              {/* Description */}
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
                Have an idea or a challenge? Let's turn it into a digital solution that drives your business forward.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg">
                  <Mail className="w-5 h-5" />
                  Contact Us
                </Button>
                <Button variant="heroOutline" size="lg">
                  <Rocket className="w-5 h-5" />
                  Start a Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
