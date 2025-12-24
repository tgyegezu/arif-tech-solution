import { Search, Hammer, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    description: "Understand your problem and goals"
  },
  {
    icon: Hammer,
    number: "02",
    title: "Build",
    description: "Design and develop the right solution"
  },
  {
    icon: Rocket,
    number: "03",
    title: "Launch",
    description: "Deploy, test, and optimize"
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Scale",
    description: "Improve and grow with your business"
  }
];

const Process = () => {
  return (
    <section id="process" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary mb-6">
              Our Process
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              How We{" "}
              <span className="text-gradient">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach that takes your idea from concept to reality.
            </p>
          </div>

          {/* Process steps */}
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 -translate-y-1/2" />
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative group"
                >
                  {/* Step card */}
                  <div className="relative bg-gradient-card rounded-2xl border border-border p-8 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-glow">
                    {/* Number badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 mt-2 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-xl font-bold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
