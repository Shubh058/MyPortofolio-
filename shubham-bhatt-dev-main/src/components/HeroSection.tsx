import { motion } from "framer-motion";
import { ArrowDown, Mail, FolderOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Orange glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px] animate-pulse-glow" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Portfolio Picture */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-center mb-6"
        >
          <img
            src="/PortfolioPic.png"
            alt="Portfolio"
            className="w-80 h-80 rounded-full object-cover border-4 border-primary shadow-lg"
            style={{ margin: '0 auto' }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">Welcome to my portfolio</p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient-orange">Shubham Bhatt</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-3">
            Full Stack Developer | MERN Stack | Problem Solver
          </p>
          <p className="text-text-muted max-w-xl mx-auto mb-10 text-sm md:text-base">
            I'm a Computer Science student passionate about building scalable web applications
            and solving complex algorithmic problems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-secondary transition-all glow-orange-hover"
            >
              <FolderOpen size={18} /> View Projects
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-lg glass-card text-foreground font-medium hover:border-primary/50 transition-all glow-orange-hover"
            >
              <Mail size={18} /> Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-text-muted hover:text-primary transition-colors">
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
