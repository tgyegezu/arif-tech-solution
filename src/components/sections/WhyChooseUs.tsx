import { GraduationCap, Award, MapPin, Users, FileCode, CreditCard } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: GraduationCap,
      title: t("csDegree"),
      description: t("csDegreeDesc")
    },
    {
      icon: Award,
      title: t("projectsDeliveredTitle"),
      description: t("projectsDeliveredDesc")
    },
    {
      icon: MapPin,
      title: t("ethiopianExpert"),
      description: t("ethiopianExpertDesc")
    },
    {
      icon: Users,
      title: t("ongoingSupport"),
      description: t("ongoingSupportDesc")
    },
    {
      icon: FileCode,
      title: t("qualityCode"),
      description: t("qualityCodeDesc")
    },
    {
      icon: CreditCard,
      title: t("flexiblePayment"),
      description: t("flexiblePaymentDesc")
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-card">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("whyChooseUs")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("whyChooseUsDesc")}
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