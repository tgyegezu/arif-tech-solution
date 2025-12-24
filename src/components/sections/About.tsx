import { Target, Lightbulb, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary mb-6">
                Who We Are
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Building the Future,{" "}
                <span className="text-gradient">One Solution</span> at a Time
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Arif Tech is a fast-growing tech startup focused on solving real problems through software and data. We design, build, and optimize digital solutions that help businesses move faster, work smarter, and grow sustainably.
              </p>
              
              {/* Feature list */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Mission-Driven</h4>
                    <p className="text-sm text-muted-foreground">Focused on delivering impactful solutions that drive real results.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Innovation First</h4>
                    <p className="text-sm text-muted-foreground">We embrace new technologies to solve complex challenges.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Growth Partners</h4>
                    <p className="text-sm text-muted-foreground">We scale with you, ensuring long-term success.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-glow opacity-50" />
              <div className="relative bg-gradient-card rounded-3xl border border-border p-8 shadow-card">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary/50 rounded-2xl p-6 text-center">
                    <p className="font-display text-4xl font-bold text-gradient mb-2">5+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="bg-secondary/50 rounded-2xl p-6 text-center">
                    <p className="font-display text-4xl font-bold text-gradient mb-2">30+</p>
                    <p className="text-sm text-muted-foreground">Happy Clients</p>
                  </div>
                  <div className="bg-secondary/50 rounded-2xl p-6 text-center">
                    <p className="font-display text-4xl font-bold text-gradient mb-2">100%</p>
                    <p className="text-sm text-muted-foreground">Dedication</p>
                  </div>
                  <div className="bg-secondary/50 rounded-2xl p-6 text-center">
                    <p className="font-display text-4xl font-bold text-gradient mb-2">∞</p>
                    <p className="text-sm text-muted-foreground">Possibilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
