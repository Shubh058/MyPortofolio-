import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  { title: "B.Tech Computer Science", place: "Lovely Professional University", detail: "CGPA: 8.6", year: "2023 – Present" },
  { title: "Intermediate (XII)", place: "JB Memorial Manas Academy", detail: "92%", year: "" },
  { title: "Matriculation (X)", place: "JB Memorial Manas Academy", detail: "93%", year: "" },
];

const EducationSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-2">Background</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10">
            My <span className="text-gradient-orange">Education</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {education.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-5 flex items-start gap-4 glow-orange-hover"
            >
              <GraduationCap className="text-primary shrink-0 mt-1" size={22} />
              <div>
                <h3 className="font-heading font-semibold text-foreground">{e.title}</h3>
                <p className="text-text-secondary text-sm">{e.place}</p>
                <p className="text-primary text-sm font-medium mt-1">
                  {e.detail} {e.year && `• ${e.year}`}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
