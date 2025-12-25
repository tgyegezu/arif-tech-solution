import { Globe, Bot, Code2, Headphones, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Globe,
      title: t("customWebsites"),
      description: t("customWebsitesDesc"),
      features: [t("ecommerceReady"), t("mobileResponsive"), t("seoOptimized"), t("paymentIntegration")]
    },
    {
      icon: Bot,
      title: t("telegramBots"),
      description: t("telegramBotsDesc"),
      features: [t("automation247"), t("orderProcessing"), t("customerSupport"), t("customWorkflows")]
    },
    {
      icon: Code2,
      title: t("customSoftware"),
      description: t("customSoftwareDesc"),
      features: [t("inventorySystems"), t("crmSolutions"), t("dataAnalytics"), t("cloudIntegration")]
    },
    {
      icon: Headphones,
      title: t("itSupport"),
      description: t("itSupportDesc"),
      features: [t("systemAudits"), t("maintenance247"), t("cloudSetup"), t("performanceTuning")]
    }
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("ourServices")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("servicesDescription")}
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