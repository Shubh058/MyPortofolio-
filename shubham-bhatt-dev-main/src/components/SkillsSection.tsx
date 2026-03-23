import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "C++", "Java", "C"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Frameworks & Tools",
    skills: ["Tailwind CSS", "Bootstrap", "GitHub", "VS Code", "MySQL", "XAMPP", "Hoppscotch"],
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Team Collaboration", "Adaptability"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-2">What I Know</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10">
            Skills & <span className="text-gradient-orange">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 glow-orange-hover"
            >
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md bg-surface text-text-secondary text-sm border border-border/50 hover:border-primary/50 hover:text-primary transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
