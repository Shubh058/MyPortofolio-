import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for the aura
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 20, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 20, mass: 0.5 });
  
  // Outer softer aura spring
  const auraX = useSpring(mouseX, { stiffness: 100, damping: 25, mass: 1 });
  const auraY = useSpring(mouseY, { stiffness: 100, damping: 25, mass: 1 });

  useEffect(() => {
    let sparkleId = 0;
    
    const updateMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Randomly create sparkles when moving
      if (Math.random() > 0.85) {
        sparkleId += 1;
        const newSparkle = { id: sparkleId, x: e.clientX, y: e.clientY };
        setSparkles((prev) => [...prev, newSparkle].slice(-15)); // Keep max 15 sparkles
      }
    };

    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Soft Aura */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-primary/20 blur-2xl"
        style={{
          x: auraX,
          y: auraY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      
      {/* Brighter Core Aura */}
      <motion.div
        className="absolute w-12 h-12 rounded-full bg-primary/40 blur-md border border-primary/50 mix-blend-screen"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      
      {/* Tiny Core Dot */}
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Sparkles trailing behind */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{ opacity: 1, scale: 0.5, y: 0 }}
          animate={{ opacity: 0, scale: 1.5, y: 15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#fff]"
          style={{
            left: sparkle.x + (Math.random() * 20 - 10),
            top: sparkle.y + (Math.random() * 20 - 10),
          }}
          onAnimationComplete={() => {
            setSparkles((prev) => prev.filter((s) => s.id !== sparkle.id));
          }}
        />
      ))}
    </div>
  );
};

export default CustomCursor;
