import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="ArifTech Logo" className="h-8 w-auto rounded" />
            <span className="font-display font-semibold">ArifTechSolution</span>
          </div>
          <p className="text-sm text-background/70 text-center">
            © 2025 ArifTechSolution — Building the Future with Technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
