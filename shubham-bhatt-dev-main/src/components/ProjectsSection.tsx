import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AICTE Unified Curriculum Portal",
    github: "https://github.com/Shivansu77/AICTE-x",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "TailwindCSS"],
    points: [
      "Built a curriculum management system with role-based authentication",
      "Implemented version-controlled updates with approval workflow",
      "Integrated community chat and announcements system",
    ],
  },
  {
    title: "Grocery to Recipe Generator",
    github: "https://github.com/Shubh058/Groc",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Spoonacular API"],
    points: [
      "Converts grocery ingredients into recipe suggestions",
      "Integrated API with 50,000+ recipes",
      "Improved recipe accuracy using optimized filtering",
    ],
  },
  {
    title: "Autocare Maintenance Chatbot",
    github: "https://github.com/Shubh058/Auto-care-chatbot",
    tech: ["HTML", "CSS", "JavaScript"],
    points: [
      "Built chatbot for vehicle maintenance queries",
      "Automated reminders for service, insurance, and pollution checks",
      "Reduced manual checking effort",
    ],
  },
  {
    title: "Live Weather Application",
    github: "https://github.com/Shubh058/Weather-Application",
    tech: ["React", "OpenWeather API", "TailwindCSS"],
    points: [
      "Real-time weather updates for 20,000+ cities",
      "Optimized API requests using async logic",
      "Lightweight responsive UI",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-2">My Work</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10">
            Featured <span className="text-gradient-orange">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 glow-orange-hover group cursor-pointer"
              onClick={() => window.open(project.github, "_blank")}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ExternalLink size={16} className="text-text-muted group-hover:text-primary transition-colors shrink-0 mt-1" />
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                    {t}
                  </span>
                ))}
              </div>
              <ul className="space-y-2">
                {project.points.map((p) => (
                  <li key={p} className="text-text-secondary text-sm flex gap-2">
                    <span className="text-primary mt-1 shrink-0">▸</span> {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
