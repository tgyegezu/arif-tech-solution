import { BarChart3, Globe, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: BarChart3,
    title: "Business Performance Dashboard",
    description: "Interactive dashboards that help teams track performance and make informed decisions.",
    tags: ["Analytics", "React", "Data Viz"]
  },
  {
    icon: Globe,
    title: "Startup Website Development",
    description: "Modern, fast websites designed for startups and growing businesses.",
    tags: ["Web Dev", "UI/UX", "Responsive"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary mb-6">
              Projects
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Our Recent{" "}
              <span className="text-gradient">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A glimpse of the solutions we've built for our clients.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative bg-gradient-card rounded-2xl border border-border overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-glow"
              >
                {/* Project content */}
                <div className="p-8">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Title and description */}
                  <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View button */}
                  <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary">
                    View Case Study
                    <ArrowUpRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Button>
                </div>

                {/* Decorative gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
