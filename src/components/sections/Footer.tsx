import logo from "@/assets/logo.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const companyLinks = [
    { label: t("services"), href: "#services" },
    { label: t("pricing"), href: "#pricing" },
    { label: t("contact"), href: "#contact" },
  ];

  return (
    <footer className="bg-[#1e2a3a]">
      {/* Main Footer Content */}
      <div className="container px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img src={logo} alt="ArifTech Digital Solutions" className="h-12 w-auto bg-white p-1 rounded" />
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("footerDescription")}
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("company")}</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("contact")}</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Addis Ababa, Ethiopia</li>
              <li>contact@ariftechsolution.et</li>
              <li>+251 9XX XXX XXX</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-700">
        <div className="container px-6 py-4">
          <p className="text-gray-500 text-sm text-center">
            © 2025 ArifTechSolution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
