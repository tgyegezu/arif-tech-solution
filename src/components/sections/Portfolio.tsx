import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolioSolar from "@/assets/portfolio-solar.png";
import portfolioBoutique from "@/assets/portfolio-boutique.png";
import portfolioJovani from "@/assets/portfolio-jovani.png";

const projects = [
  {
    image: portfolioSolar,
    title: "Solar Love",
    description: "Modern e-commerce platform for solar energy products with seamless shopping experience",
    tags: ["E-commerce", "Solar Energy", "Responsive Design"],
    link: "https://solar-heart-glow.lovable.app/"
  },
  {
    image: portfolioBoutique,
    title: "Elegance Boutique",
    description: "Elegant online boutique showcasing timeless fashion with sophisticated design",
    tags: ["E-commerce", "Fashion", "Luxury Retail"],
    link: "https://lova-boutique-vibe.lovable.app/"
  },
  {
    image: portfolioJovani,
    title: "Jovani Car Rental",
    description: "Premium car rental service with online booking system and fleet management",
    tags: ["Car Rental", "Booking System", "Premium Service"],
    link: "https://jovanis-drive-by-class.lovable.app/"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-card">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our successful projects and see how we've helped businesses thrive online
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-secondary/30 rounded-2xl overflow-hidden shadow-card transition-all duration-300 hover:shadow-card-hover border border-border"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
