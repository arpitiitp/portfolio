import { motion } from "framer-motion";
import { useMousePosition } from "../../hooks/useMousePosition";
import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || 
          e.target.tagName.toLowerCase() === 'button' ||
          e.target.closest('button') || 
          e.target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    document.addEventListener("mouseover", handleMouseOver);
    return () => document.removeEventListener("mouseover", handleMouseOver);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyber-neon z-[9999] pointer-events-none mix-blend-screen"
        animate={{
          x: x - 16,
          y: y - 16,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(0, 240, 255, 0.1)" : "transparent"
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.5
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cyber-neon rounded-full z-[9999] pointer-events-none mix-blend-screen glow-cyan"
        animate={{
          x: x - 4,
          y: y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 0.1
        }}
      />
    </>
  );
};
