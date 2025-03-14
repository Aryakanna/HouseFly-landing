import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Bug } from "lucide-react";

export function BugTrail() {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const { scrollY } = useScroll();
  
  // Smooth out the scroll position
  const smoothY = useSpring(scrollY);
  
  useEffect(() => {
    // Update bug position based on scroll
    const unsubscribe = smoothY.on("change", (latest) => {
      const newX = Math.sin(latest * 0.003) * 200 + window.innerWidth / 2;
      const newY = 100 + latest * 0.5;
      setPosition({ x: newX, y: newY });
    });
    
    return () => unsubscribe();
  }, [smoothY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Trail effect */}
      <motion.div
        className="absolute w-4 h-4 border-2 border-dashed border-primary rounded-full"
        initial={false}
        animate={{
          x: position.x,
          y: position.y,
          scale: [1, 1.2, 1],
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          mass: 0.5,
        }}
      />
      
      {/* Bug icon */}
      <motion.div
        className="absolute text-primary"
        initial={false}
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          rotate: 360,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        <Bug size={24} />
      </motion.div>
    </div>
  );
}
