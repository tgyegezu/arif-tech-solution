import { GraduationCap, Award, MapPin, Users, FileCode, CreditCard } from "lucide-react";

const reasons = [
  {
    icon: GraduationCap,
    title: "Computer Science Degree",
    description: "Solid foundation in software engineering, algorithms, and system design"
  },
  {
    icon: Award,
    title: "100+ Projects Delivered",
    description: "Proven track record with Ethiopian SMEs across various industries"
  },
  {
    icon: MapPin,
    title: "Ethiopian Market Expert",
    description: "Deep understanding of local business needs, payment systems, and regulations"
  },
  {
    icon: Users,
    title: "Ongoing Support & Training",
    description: "We don't just deliver—we ensure your team can use and maintain the solution"
  },
  {
    icon: FileCode,
    title: "Quality Code & Documentation",
    description: "Clean, maintainable code with full documentation. You own everything we build"
  },
  {
    icon: CreditCard,
    title: "Flexible Payment Terms",
    description: "50% upfront, 50% on completion. No hidden fees or surprises"
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-card">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose ArifTechSolution?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We understand Ethiopian businesses and deliver solutions that work in our local context
            </p>
          </div>

          {/* Reasons grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="group text-center p-6"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
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

export default WhyChooseUs;
