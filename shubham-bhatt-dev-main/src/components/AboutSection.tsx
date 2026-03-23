import { motion } from "framer-motion";
import { Code2, GraduationCap, Trophy, Terminal } from "lucide-react";

const stats = [
  { icon: Code2, label: "Problems Solved", value: "200+" },
  { icon: GraduationCap, label: "CGPA", value: "8.6" },
  { icon: Trophy, label: "Hackathon", value: "Top 20" },
  { icon: Terminal, label: "Projects", value: "10+" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-2">About Me</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10">
            A Bit About <span className="text-gradient-orange">Myself</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-text-secondary leading-relaxed mb-6">
              I'm a B.Tech Computer Science student at Lovely Professional University with
              strong experience in MERN stack development and algorithmic problem solving.
              I enjoy building scalable web applications and have solved 200+ coding problems
              across LeetCode, CodeChef, and GeeksforGeeks.
            </p>
            <p className="text-text-muted leading-relaxed">
              My focus lies in creating clean, performant full-stack solutions using modern
              technologies. I'm always eager to learn new tools and frameworks, and I thrive
              in collaborative environments where I can contribute to impactful projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card p-5 text-center glow-orange-hover">
                <stat.icon className="mx-auto mb-2 text-primary" size={24} />
                <p className="font-heading text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-text-muted text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
