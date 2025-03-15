
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Bug } from "lucide-react";

export function BugTrail() {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Trail effect */}
      <motion.div
        className="absolute w-4 h-4 border-2 border-dashed border-muted/50 rounded-full bg-muted/50"
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
        className="absolute text-muted/50"
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
