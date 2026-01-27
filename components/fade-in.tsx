"use client";

import React from "react";
import { motion, MotionProps, useInView } from "motion/react";
import { PropsWithChildren, useRef } from "react";

interface FadeInProps extends PropsWithChildren<MotionProps> {
  className?: string;
  staggerChildren?: number;
}

export default function FadeIn({
  children,
  className,
  staggerChildren = 0.2,
  ...props
}: FadeInProps) {
  const container = {
    hidden: { opacity: 0, transform: "translateY(24px)" },
    show: {
      opacity: 1,
      transform: "translateY(0)",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1] as [number, number, number, number],
        staggerChildren: staggerChildren,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, transform: "translateY(20px)" },
    show: {
      opacity: 1,
      transform: "translateY(0)",
      transition: {
        duration: 0.4,
        ease: [0.37, 0, 0.63, 1] as [number, number, number, number],
      },
    },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
      {...props}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div variants={item}>{child}</motion.div>
        ) : (
          child
        ),
      )}
    </motion.div>
  );
}
