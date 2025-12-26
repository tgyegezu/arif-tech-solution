import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: t("services"), href: "#services" },
    { label: t("pricing"), href: "#pricing" },
    { label: t("contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const selectLanguage = (lang: "en" | "am") => {
    setLanguage(lang);
    setIsLangDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-100 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logo} alt="ArifTech Digital Solutions" className="h-8 w-auto" />
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            {/* Language Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors cursor-pointer"
              >
                <span className="text-base">文A</span>
                <span>{language === "en" ? "English" : "አማርኛ"}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isLangDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              
              {isLangDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                  <button
                    onClick={() => selectLanguage("en")}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors ${
                      language === "en" ? "text-primary font-medium" : "text-gray-600"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => selectLanguage("am")}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors ${
                      language === "am" ? "text-primary font-medium" : "text-gray-600"
                    }`}
                  >
                    አማርኛ (Amharic)
                  </button>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Button 
              variant="default" 
              size="sm" 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 rounded-full"
            >
              {t("getStarted")}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              
              {/* Mobile Language Options */}
              <div className="py-2 border-t border-gray-100">
                <p className="text-xs text-gray-500 mb-2">{t("selectLanguage")}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => selectLanguage("en")}
                    className={`px-4 py-2 rounded-full text-sm ${
                      language === "en" 
                        ? "bg-primary text-white" 
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => selectLanguage("am")}
                    className={`px-4 py-2 rounded-full text-sm ${
                      language === "am" 
                        ? "bg-primary text-white" 
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    አማርኛ
                  </button>
                </div>
              </div>
              
              <Button variant="default" size="sm" className="mt-2 rounded-full" onClick={scrollToContact}>
                {t("getStarted")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;