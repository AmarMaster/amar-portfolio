"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PhotoTransition from "./PhotoTransition";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* Image */}
        <motion.div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[575px] mix-blend-lighten">
          <Image
            src="/media/DALLE1-Photoroom.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
