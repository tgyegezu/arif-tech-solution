import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="py-6 bg-[#1a1a2e] border-t border-border/20">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="ArifTech Digital Solutions" className="h-10 w-auto" />
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © 2025 ArifTech Digital Solutions — Building the Future with Technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
