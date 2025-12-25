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
  selectLanguage: { en: "Select Language", am: "ቋንቋ ይምረጡ" },
  
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
    en: "Complete digital solutions to elevate your business in Ethiopia's growing digital economy",
    am: "በኢትዮጵያ እያደገ ባለው ዲጂታል ኢኮኖሚ ንግድዎን ለማሳደግ የተሟላ ዲጂታል መፍትሄዎች"
  },
  customWebsites: { en: "Custom Websites", am: "ብጁ ድረ-ገጾች" },
  customWebsitesDesc: { 
    en: "Responsive e-commerce sites built with React and Node.js, featuring SEO optimization and Telebirr integration to complement your social media presence.",
    am: "በReact እና Node.js የተገነቡ ምላሽ ሰጪ የኢ-ኮሜርስ ጣቢያዎች፣ SEO ማመቻቸት እና የቴሌብር ውህደት ያካትታሉ።"
  },
  telegramBots: { en: "Telegram Bots", am: "የቴሌግራም ቦቶች" },
  telegramBotsDesc: { 
    en: "Python-based intelligent bots for automated customer service, order management, and real-time alerts tailored to your business needs.",
    am: "ለደንበኛ አገልግሎት፣ ለትዕዛዝ አስተዳደር እና ለእውነተኛ ጊዜ ማንቂያዎች Python-ተኮር ብልህ ቦቶች።"
  },
  customSoftware: { en: "Custom Software", am: "ብጁ ሶፍትዌር" },
  customSoftwareDesc: { 
    en: "Tailored applications including inventory systems, CRM tools, and business management platforms using MongoDB and SQL databases.",
    am: "MongoDB እና SQL ዳታቤዝ በመጠቀም የእቃ ዝርዝር ስርዓቶች፣ CRM መሳሪያዎች እና የንግድ አስተዳደር መድረኮችን ጨምሮ ብጁ መተግበሪያዎች።"
  },
  itSupport: { en: "IT Support", am: "የአይቲ ድጋፍ" },
  itSupportDesc: { 
    en: "Comprehensive IT audits, ongoing maintenance, cloud optimization, and database management to keep your systems running smoothly.",
    am: "አጠቃላይ የአይቲ ኦዲቶች፣ ቀጣይ ጥገና፣ የክላውድ ማመቻቸት እና ስርዓቶችዎ በተቀላጠፈ ሁኔታ እንዲሰሩ የዳታቤዝ አስተዳደር።"
  },
  ecommerceReady: { en: "E-commerce Ready", am: "ለኢ-ኮሜርስ ዝግጁ" },
  mobileResponsive: { en: "Mobile Responsive", am: "ለሞባይል ምላሽ ሰጪ" },
  seoOptimized: { en: "SEO Optimized", am: "SEO የተመቻቸ" },
  paymentIntegration: { en: "Payment Integration", am: "የክፍያ ውህደት" },
  automation247: { en: "24/7 Automation", am: "24/7 አውቶሜሽን" },
  orderProcessing: { en: "Order Processing", am: "ትዕዛዝ ማስተናገድ" },
  customerSupport: { en: "Customer Support", am: "የደንበኛ ድጋፍ" },
  customWorkflows: { en: "Custom Workflows", am: "ብጁ የስራ ፍሰቶች" },
  inventorySystems: { en: "Inventory Systems", am: "የእቃ ዝርዝር ስርዓቶች" },
  crmSolutions: { en: "CRM Solutions", am: "CRM መፍትሄዎች" },
  dataAnalytics: { en: "Data Analytics", am: "የመረጃ ትንተና" },
  cloudIntegration: { en: "Cloud Integration", am: "የክላውድ ውህደት" },
  systemAudits: { en: "System Audits", am: "የስርዓት ኦዲቶች" },
  maintenance247: { en: "24/7 Maintenance", am: "24/7 ጥገና" },
  cloudSetup: { en: "Cloud Setup", am: "የክላውድ ማዋቀር" },
  performanceTuning: { en: "Performance Tuning", am: "አፈጻጸም ማስተካከል" },
  
  // Why Choose Us
  whyChooseUs: { en: "Why Choose ArifTechSolution?", am: "ለምን ArifTechSolution ይምረጡ?" },
  whyChooseUsDesc: { 
    en: "We understand Ethiopian businesses and deliver solutions that work in our local context",
    am: "የኢትዮጵያ ንግዶችን እንረዳለን እና በአገራችን ሁኔታ ውስጥ የሚሰሩ መፍትሄዎችን እናቀርባለን"
  },
  csDegree: { en: "Computer Science Degree", am: "የኮምፒውተር ሳይንስ ዲግሪ" },
  csDegreeDesc: { en: "Solid foundation in software engineering, algorithms, and system design", am: "በሶፍትዌር ምህንድስና፣ አልጎሪዝም እና ስርዓት ዲዛይን ጠንካራ መሰረት" },
  projectsDeliveredTitle: { en: "100+ Projects Delivered", am: "100+ ፕሮጀክቶች ተደርሰዋል" },
  projectsDeliveredDesc: { en: "Proven track record with Ethiopian SMEs across various industries", am: "በተለያዩ ኢንዱስትሪዎች ከኢትዮጵያ ንግዶች ጋር የተረጋገጠ ልምድ" },
  ethiopianExpert: { en: "Ethiopian Market Expert", am: "የኢትዮጵያ ገበያ ባለሙያ" },
  ethiopianExpertDesc: { en: "Deep understanding of local business needs, payment systems, and regulations", am: "የአገር ውስጥ የንግድ ፍላጎቶች፣ የክፍያ ስርዓቶች እና ደንቦች ጥልቅ ግንዛቤ" },
  ongoingSupport: { en: "Ongoing Support & Training", am: "ቀጣይ ድጋፍ እና ስልጠና" },
  ongoingSupportDesc: { en: "We don't just deliver—we ensure your team can use and maintain the solution", am: "ማድረስ ብቻ ሳይሆን ቡድንዎ መፍትሄውን መጠቀም እና ማቆየት እንደሚችል እናረጋግጣለን" },
  qualityCode: { en: "Quality Code & Documentation", am: "ጥራት ያለው ኮድ እና ሰነድ" },
  qualityCodeDesc: { en: "Clean, maintainable code with full documentation. You own everything we build", am: "ሙሉ ሰነድ ያለው ንጹህ፣ ሊቆይ የሚችል ኮድ። የምንገነባውን ሁሉ እርስዎ ባለቤት ነዎት" },
  flexiblePayment: { en: "Flexible Payment Terms", am: "ተለዋዋጭ የክፍያ ውል" },
  flexiblePaymentDesc: { en: "50% upfront, 50% on completion. No hidden fees or surprises", am: "50% አስቀድሞ፣ 50% ሲጠናቀቅ። ድብቅ ክፍያ ወይም ድንገተኛ ነገር የለም" },
  
  // Industries
  industriesTitle: { en: "Industries We Serve", am: "የምናገለግላቸው ኢንዱስትሪዎች" },
  industriesDesc: { 
    en: "Specialized solutions for Ethiopian businesses across multiple sectors",
    am: "በብዙ ዘርፎች ለኢትዮጵያ ንግዶች ልዩ መፍትሄዎች"
  },
  retailEcommerce: { en: "Retail & E-commerce", am: "ችርቻሮ እና ኢ-ኮሜርስ" },
  retailDesc: { en: "Inventory management, online stores with Telebirr payment integration", am: "የእቃ ዝርዝር አስተዳደር፣ የቴሌብር ክፍያ ውህደት ያላቸው የመስመር ላይ መደብሮች" },
  foodBeverage: { en: "Food & Beverage", am: "ምግብ እና መጠጥ" },
  foodDesc: { en: "Order management bots, delivery tracking, and customer loyalty systems", am: "የትዕዛዝ አስተዳደር ቦቶች፣ የማድረስ ክትትል እና የደንበኛ ታማኝነት ስርዓቶች" },
  education: { en: "Education", am: "ትምህርት" },
  educationDesc: { en: "Student management systems, online learning platforms, and admin tools", am: "የተማሪ አስተዳደር ስርዓቶች፣ የመስመር ላይ ትምህርት መድረኮች እና የአስተዳደር መሳሪያዎች" },
  healthcare: { en: "Healthcare", am: "ጤና አጠባበቅ" },
  healthcareDesc: { en: "Appointment scheduling, patient records, and clinic management software", am: "የቀጠሮ ማስያዣ፣ የታካሚ መዝገቦች እና የክሊኒክ አስተዳደር ሶፍትዌር" },
  hotelsTourism: { en: "Hotels & Tourism", am: "ሆቴሎች እና ቱሪዝም" },
  hotelsDesc: { en: "Booking systems, guest management, and automated customer service", am: "የቦታ ማስያዣ ስርዓቶች፣ የእንግዳ አስተዳደር እና አውቶማቲክ የደንበኛ አገልግሎት" },
  financialServices: { en: "Financial Services", am: "የፋይናንስ አገልግሎቶች" },
  financialDesc: { en: "Transaction tracking, reporting tools, and secure data management", am: "የግብይት ክትትል፣ የሪፖርት መሳሪያዎች እና ደህንነቱ የተጠበቀ የመረጃ አስተዳደር" },
  
  // Portfolio
  ourWork: { en: "Our Work", am: "ስራዎቻችን" },
  portfolioDesc: { 
    en: "Explore our successful projects and see how we've helped businesses thrive online",
    am: "የተሳካላቸውን ፕሮጀክቶቻችንን ይመልከቱ እና ንግዶች በመስመር ላይ እንዴት እንዲያድጉ እንደረዳናቸው ይመልከቱ"
  },
  viewProject: { en: "View Project", am: "ፕሮጀክት ይመልከቱ" },
  
  // Pricing
  transparentPricing: { en: "Transparent Pricing", am: "ግልጽ ዋጋ" },
  pricingDesc: { 
    en: "Flexible packages designed for Ethiopian SMEs. All prices in ETB (15% VAT applies)",
    am: "ለኢትዮጵያ ንግዶች የተዘጋጁ ተለዋዋጭ ፓኬጆች። ሁሉም ዋጋዎች በብር (15% ቫት ይተገበራል)"
  },
  basic: { en: "Basic", am: "መሰረታዊ" },
  basicDesc: { en: "Perfect for getting started", am: "ለመጀመር ፍጹም" },
  standard: { en: "Standard", am: "መደበኛ" },
  standardDesc: { en: "Most popular choice", am: "በጣም ተወዳጅ ምርጫ" },
  premium: { en: "Premium", am: "ፕሪሚየም" },
  premiumDesc: { en: "Complete solution", am: "የተሟላ መፍትሄ" },
  popular: { en: "Popular", am: "ተወዳጅ" },
  paymentTerms: { en: "Payment Terms:", am: "የክፍያ ውል:" },
  paymentTermsText: { en: "50% upfront, 50% on completion", am: "50% አስቀድሞ፣ 50% ሲጠናቀቅ" },
  extrasNote: { en: "All extras and additional features are billed separately", am: "ሁሉም ተጨማሪ ባህሪያት በተናጠል ይከፈላሉ" },
  
  // Contact
  readyToTransform: { en: "Ready to Transform Your Business?", am: "ንግድዎን ለመቀየር ዝግጁ ነዎት?" },
  contactDesc: { 
    en: "Get a free consultation and project estimate. Let's discuss how we can help you succeed.",
    am: "ነፃ ምክክር እና የፕሮጀክት ግምት ያግኙ። እንዴት ልንረዳዎ እንደምንችል እንወያይ።"
  },
  sendUsMessage: { en: "Send Us a Message", am: "መልዕክት ይላኩልን" },
  yourName: { en: "Your Name", am: "ስምዎ" },
  emailAddress: { en: "Email Address", am: "ኢሜይል አድራሻ" },
  phoneNumber: { en: "Phone Number", am: "ስልክ ቁጥር" },
  tellUsProject: { en: "Tell Us About Your Project", am: "ስለ ፕሮጀክትዎ ይንገሩን" },
  getFreeConsultation: { en: "Get Free Consultation", am: "ነፃ ምክክር ያግኙ" },
  getInTouch: { en: "Get in Touch", am: "ያግኙን" },
  getInTouchDesc: { 
    en: "We're here to answer your questions and discuss how we can help bring your digital vision to life. Reach out through any of these channels.",
    am: "ጥያቄዎችዎን ለመመለስ እና ዲጂታል ራዕይዎን እውን ለማድረግ እንዴት ልንረዳ እንደምንችል ለመወያየት እዚህ አለን።"
  },
  email: { en: "Email", am: "ኢሜይል" },
  phone: { en: "Phone", am: "ስልክ" },
  location: { en: "Location", am: "አድራሻ" },
  quickFacts: { en: "Quick Facts", am: "አጭር መረጃዎች" },
  freeConsultation: { en: "Free initial consultation", am: "ነፃ የመጀመሪያ ምክክር" },
  deliveryStarts: { en: "Project delivery starts in 10 days", am: "የፕሮጀክት ማድረስ በ10 ቀናት ይጀምራል" },
  flexiblePaymentFact: { en: "Flexible payment: 50% upfront, 50% on completion", am: "ተለዋዋጭ ክፍያ: 50% አስቀድሞ፣ 50% ሲጠናቀቅ" },
  sourceCodeIncluded: { en: "All source code included", am: "ሁሉም የምንጭ ኮድ ተካትቷል" },
  messageSent: { en: "Message sent!", am: "መልዕክት ተልኳል!" },
  messageResponse: { en: "We'll get back to you within 24 hours.", am: "በ24 ሰዓታት ውስጥ እናገኝዎታለን።" },
  
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