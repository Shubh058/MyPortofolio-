import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  "MERN Stack Development — Cipher Schools",
  "MongoDB Certification",
  "ChatGPT Prompt Engineering — Infosys",
  "Cloud Computing — NPTEL",
  "Network Communication & OS — Coursera",
];

const CertificatesSection = () => {
  return (
    <section className="py-24 bg-background-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-2">Credentials</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10">
            Certificates & <span className="text-gradient-orange">Courses</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card p-5 flex items-start gap-3 glow-orange-hover"
            >
              <Award className="text-primary shrink-0 mt-0.5" size={18} />
              <p className="text-text-secondary text-sm">{cert}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
