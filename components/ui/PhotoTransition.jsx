"use client";
import { motion } from "framer-motion";

const PhotoTransition = () => {
  return (
    <motion.svg
      className="w=[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
      fill="transparent"
      viewBox="0 0 506 506"
      xmlns="https://www.w3.org/200/svg"
    >
      <motion.circle
        cx="253"
        cy="253"
        r="250"
        stroke="#00ff99"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{
          strokeDasharray: "24 10 0 0",
        }}
        animate={{
          strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
          rotate: [120, 360],
        }}
        transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
        }}
      />
    </motion.svg>
  );
};

export default PhotoTransition;
