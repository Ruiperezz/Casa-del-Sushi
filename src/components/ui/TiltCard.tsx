import { useMotionValue, useTransform, useSpring, motion } from "motion/react";
import type { ReactNode, MouseEvent } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export default function TiltCard({ children, className = "", intensity = 10 }: TiltCardProps) {
  const xRaw = useMotionValue(0);
  const yRaw = useMotionValue(0);

  const rotateX = useSpring(useTransform(yRaw, [-0.5, 0.5], [intensity, -intensity]), {
    stiffness: 200,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(xRaw, [-0.5, 0.5], [-intensity, intensity]), {
    stiffness: 200,
    damping: 22,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    xRaw.set((e.clientX - rect.left) / rect.width - 0.5);
    yRaw.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    xRaw.set(0);
    yRaw.set(0);
  };

  return (
    <motion.div
      style={{ transformPerspective: 1000, rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}
