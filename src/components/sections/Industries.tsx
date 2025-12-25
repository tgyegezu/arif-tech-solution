import { ShoppingCart, Coffee, GraduationCap, Heart, Building2, Landmark } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Industries = () => {
  const { t } = useLanguage();

  const industries = [
    {
      icon: ShoppingCart,
      title: t("retailEcommerce"),
      description: t("retailDesc")
    },
    {
      icon: Coffee,
      title: t("foodBeverage"),
      description: t("foodDesc")
    },
    {
      icon: GraduationCap,
      title: t("education"),
      description: t("educationDesc")
    },
    {
      icon: Heart,
      title: t("healthcare"),
      description: t("healthcareDesc")
    },
    {
      icon: Building2,
      title: t("hotelsTourism"),
      description: t("hotelsDesc")
    },
    {
      icon: Landmark,
      title: t("financialServices"),
      description: t("financialDesc")
    }
  ];

  return (
    <section id="industries" className="py-24 bg-secondary/30">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("industriesTitle")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("industriesDesc")}
            </p>
          </div>

          {/* Industries grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="group bg-card rounded-xl p-6 shadow-card transition-all duration-300 hover:shadow-card-hover border border-border hover:border-primary/30"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {industry.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;