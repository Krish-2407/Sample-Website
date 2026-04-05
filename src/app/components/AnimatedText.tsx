"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

type AnimationType = "reveal" | "fade" | "stagger-children" | "slide-left" | "slide-right";

interface AnimatedTextProps {
  children: ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  once?: boolean;
  threshold?: number;
}

export default function AnimatedText({
  children,
  type = "reveal",
  delay = 0,
  duration = 0.8,
  className = "",
  as: Component = "div",
  once = true,
  threshold = 0.1,
}: AnimatedTextProps) {
  
  // Variants mapping
  const variants: any = {
    reveal: {
      hidden: { y: 30, opacity: 0 },
      visible: { 
        y: 0, 
        opacity: 1,
        transition: { 
          ease: [0.215, 0.61, 0.355, 1],
          duration,
          delay 
        }
      }
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { 
          ease: "easeOut",
          duration,
          delay 
        }
      }
    },
    "slide-left": {
      hidden: { x: -30, opacity: 0 },
      visible: { 
        x: 0, 
        opacity: 1,
        transition: { 
          ease: [0.215, 0.61, 0.355, 1],
          duration,
          delay 
        }
      }
    },
    "slide-right": {
      hidden: { x: 30, opacity: 0 },
      visible: { 
        x: 0, 
        opacity: 1,
        transition: { 
          ease: [0.215, 0.61, 0.355, 1],
          duration,
          delay 
        }
      }
    },
    "stagger-children": {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: delay
        }
      }
    }
  };

  const selectedVariants = variants[type];

  // If it's a stagger container, we wrap it differently
  if (type === "stagger-children") {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: threshold }}
        variants={selectedVariants}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  // Define the base motion component
  const MotionComponent = motion[Component as keyof typeof motion] as any;

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={selectedVariants}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
