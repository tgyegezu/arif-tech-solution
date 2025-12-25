import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "am";

interface Translations {
  [key: string]: {
    en: string;
    am: string;
  };
}

export const translations: Translations = {
  // Navbar
  services: { en: "Services", am: "አገልግሎቶች" },
  pricing: { en: "Pricing", am: "ዋጋ" },
  contact: { en: "Contact", am: "እውቂያ" },
  getStarted: { en: "Get Started", am: "ጀምር" },
  english: { en: "English", am: "አማርኛ" },
  
  // Hero
  empoweringBadge: { en: "Empowering Ethiopian SMEs", am: "የኢትዮጵያ ንግዶችን ማበረታታት" },
  heroTitle1: { en: "Transform Your Business with", am: "ንግድዎን ይቀይሩ በ" },
  heroTitle2: { en: "Digital Solutions", am: "ዲጂታል መፍትሄዎች" },
  heroDescription: { 
    en: "Custom websites, intelligent Telegram bots, and powerful software solutions designed specifically for Ethiopian businesses ready to thrive in the digital age.",
    am: "ለኢትዮጵያ ንግዶች በተለይ የተዘጋጁ ድረ-ገጾች፣ የቴሌግራም ቦቶች እና ኃይለኛ ሶፍትዌር መፍትሄዎች።"
  },
  viewOurWork: { en: "View Our Work", am: "ስራዎቻችንን ይመልከቱ" },
  csCertified: { en: "CS Degree Certified", am: "የ CS ዲግሪ የተረጋገጠ" },
  projectsDelivered: { en: "100+ Projects Delivered", am: "100+ ፕሮጀክቶች ተደርሰዋል" },
  localExpertise: { en: "Local Expertise", am: "የአገር ውስጥ ባለሙያ" },
  
  // Services
  ourServices: { en: "Our Services", am: "አገልግሎቶቻችን" },
  servicesDescription: { 
    en: "Comprehensive digital solutions tailored for Ethiopian businesses",
    am: "ለኢትዮጵያ ንግዶች የተዘጋጁ አጠቃላይ ዲጂታል መፍትሄዎች"
  },
  
  // Why Choose Us
  whyChooseUs: { en: "Why Choose ArifTechSolution?", am: "ለምን ArifTechSolution ይምረጡ?" },
  whyChooseUsDesc: { 
    en: "We combine technical expertise with deep understanding of the Ethiopian market",
    am: "ቴክኒካዊ እውቀትን ከኢትዮጵያ ገበያ ጥልቅ ግንዛቤ ጋር እናጣምራለን"
  },
  
  // Industries
  industriesTitle: { en: "Industries We Serve", am: "የምናገለግላቸው ኢንዱስትሪዎች" },
  industriesDesc: { 
    en: "Specialized solutions for key sectors driving Ethiopian economy",
    am: "የኢትዮጵያን ኢኮኖሚ ለሚመሩ ዋና ዘርፎች ልዩ መፍትሄዎች"
  },
  
  // Portfolio
  ourWork: { en: "Our Work", am: "ስራዎቻችን" },
  portfolioDesc: { 
    en: "Recent projects showcasing our expertise",
    am: "ብቃታችንን የሚያሳዩ የቅርብ ጊዜ ፕሮጀክቶች"
  },
  
  // Pricing
  transparentPricing: { en: "Transparent Pricing", am: "ግልጽ ዋጋ" },
  pricingDesc: { 
    en: "Simple, affordable packages designed for Ethiopian businesses",
    am: "ለኢትዮጵያ ንግዶች የተዘጋጁ ቀላል እና ተመጣጣኝ ፓኬጆች"
  },
  
  // Contact
  readyToTransform: { en: "Ready to Transform Your Business?", am: "ንግድዎን ለመቀየር ዝግጁ ነዎት?" },
  contactDesc: { 
    en: "Get in touch with us today and let's discuss how we can help your business thrive in the digital age.",
    am: "ዛሬ ያግኙን እና ንግድዎ በዲጂታል ዘመን እንዴት እንደሚያድግ እንወያይ።"
  },
  sendMessage: { en: "Send Message", am: "መልዕክት ላክ" },
  
  // Footer
  footerText: { en: "Building the Future with Technology", am: "ቴክኖሎጂን በመጠቀም የወደፊቱን እንገነባለን" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};