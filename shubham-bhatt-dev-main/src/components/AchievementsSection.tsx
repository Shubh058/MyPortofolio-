import { motion } from "framer-motion";
import { Trophy, Code, Layers, ExternalLink } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "Zinnovatio 3.0 Hackathon", desc: "Top 20 out of 700 teams" },
  { icon: Code, title: "200+ DSA Problems", desc: "Solved across LeetCode, CodeChef & GFG" },
  { icon: Layers, title: "Full-Stack Projects", desc: "Built production-ready MERN apps" },
];

const platforms = [
  { name: "LeetCode", url: "https://leetcode.com/u/ICSD9KqttQ/" },
  { name: "CodeChef", url: "https://www.codechef.com/users/alert_glim_51" },
  { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/profile/shubhambh7i3x?tab=activity" },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-2">Milestones</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10">
            Key <span className="text-gradient-orange">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 text-center glow-orange-hover"
            >
              <a.icon className="mx-auto mb-3 text-primary" size={28} />
              <h3 className="font-heading font-semibold text-foreground mb-1">{a.title}</h3>
              <p className="text-text-muted text-sm">{a.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card text-text-secondary hover:text-primary hover:border-primary/50 transition-all text-sm"
            >
              {p.name} <ExternalLink size={12} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
