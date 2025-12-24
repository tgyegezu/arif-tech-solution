import { Code, BarChart3, Cog } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "We build clean, responsive, and scalable web solutions tailored to your business needs.",
    features: ["Custom Web Apps", "API Development", "Mobile-First Design"]
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "We turn raw data into clear insights using dashboards, reports, and analytics tools.",
    features: ["Business Intelligence", "Custom Dashboards", "Data Visualization"]
  },
  {
    icon: Cog,
    title: "Digital Automation",
    description: "We simplify workflows by automating processes and integrating smart digital systems.",
    features: ["Process Automation", "System Integration", "Workflow Optimization"]
  }
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary mb-6">
              What We Do
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Services That{" "}
              <span className="text-gradient">Drive Results</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive digital solutions designed to accelerate your business growth.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-gradient-card rounded-2xl border border-border p-8 shadow-card transition-all duration-500 hover:border-primary/50 hover:shadow-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold mb-3 group-hover:text-gradient transition-all">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
