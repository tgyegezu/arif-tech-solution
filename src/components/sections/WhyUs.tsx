import { Zap, Target, Brain, Handshake } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast & Agile Execution",
    description: "We move quickly without sacrificing quality, adapting to changes and delivering results on time."
  },
  {
    icon: Target,
    title: "Business-Focused Solutions",
    description: "Every solution we build is designed with your business goals and ROI in mind."
  },
  {
    icon: Brain,
    title: "Data-Driven Approach",
    description: "We leverage data and analytics to make informed decisions and optimize outcomes."
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description: "We're not just vendors—we're partners invested in your long-term success."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary mb-6">
              Why Arif Tech
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              What Sets Us{" "}
              <span className="text-gradient">Apart</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with a deep understanding of business needs.
            </p>
          </div>

          {/* Reasons grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="group text-center p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-bold mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
