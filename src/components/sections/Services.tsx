import { Globe, Bot, Code2, Headphones, Check } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Websites",
    description: "Responsive e-commerce sites built with React and Node.js, featuring SEO optimization and Telebirr integration to complement your social media presence.",
    features: ["E-commerce Ready", "Mobile Responsive", "SEO Optimized", "Payment Integration"]
  },
  {
    icon: Bot,
    title: "Telegram Bots",
    description: "Python-based intelligent bots for automated customer service, order management, and real-time alerts tailored to your business needs.",
    features: ["24/7 Automation", "Order Processing", "Customer Support", "Custom Workflows"]
  },
  {
    icon: Code2,
    title: "Custom Software",
    description: "Tailored applications including inventory systems, CRM tools, and business management platforms using MongoDB and SQL databases.",
    features: ["Inventory Systems", "CRM Solutions", "Data Analytics", "Cloud Integration"]
  },
  {
    icon: Headphones,
    title: "IT Support",
    description: "Comprehensive IT audits, ongoing maintenance, cloud optimization, and database management to keep your systems running smoothly.",
    features: ["System Audits", "24/7 Maintenance", "Cloud Setup", "Performance Tuning"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete digital solutions to elevate your business in Ethiopia's growing digital economy
            </p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-card rounded-2xl p-8 shadow-card transition-all duration-300 hover:shadow-card-hover border border-border"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
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
