import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Pricing = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: t("basic"),
      description: t("basicDesc"),
      price: "20,000",
      currency: "ETB",
      popular: false,
      features: [
        "Professional Website or Telegram Bot",
        "Mobile Responsive Design",
        "Basic SEO Setup",
        "1 Month Support",
        "Source Code Included"
      ]
    },
    {
      name: t("standard"),
      description: t("standardDesc"),
      price: "50,000",
      currency: "ETB",
      popular: true,
      features: [
        "Professional Website + Telegram Bot",
        "Advanced SEO & Analytics",
        "Payment Integration (Telebirr)",
        "3 Months Support",
        "Free Training Session",
        "Priority Support"
      ]
    },
    {
      name: t("premium"),
      description: t("premiumDesc"),
      price: "100,000",
      currency: "ETB",
      popular: false,
      features: [
        "Full Custom Application",
        "Advanced Features & Integration",
        "Database Setup & Management",
        "6 Months Support",
        "Dedicated Account Manager",
        "Regular Updates & Maintenance",
        "Staff Training Program"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("transparentPricing")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("pricingDesc")}
            </p>
          </div>

          {/* Pricing grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-card rounded-2xl p-8 shadow-card border ${
                  plan.popular ? "border-primary" : "border-border"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                    {t("popular")}
                  </div>
                )}

                {/* Plan header */}
                <div className="text-center mb-8">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.currency}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  variant={plan.popular ? "default" : "outline"} 
                  size="lg" 
                  className="w-full"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  {t("getStarted")}
                </Button>
              </div>
            ))}
          </div>

          {/* Payment terms */}
          <div className="text-center mt-12 space-y-2">
            <p className="text-sm text-muted-foreground">
              <strong>{t("paymentTerms")}</strong> {t("paymentTermsText")}
            </p>
            <p className="text-sm text-muted-foreground">
              {t("extrasNote")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;