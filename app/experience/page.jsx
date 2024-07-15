"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const experiences = [
  {
    num: "01",
    title: "Blue Dome Technologies",
    description: "Software Engineering Intern ~ Jun 2024 - Present ~ Remote",
    href: "",
  },
  {
    num: "02",
    title: "Iraje PAM Solutions",
    description: "Software Engineering Intern ~ May 2024 - Present ~ On-Site",
    href: "",
  },
  {
    num: "03",
    title: "Iraje PAM Solutions",
    description: "Software Engineering Intern ~ Apr - Sep 2023 ~ On-Site",
    href: "",
  },
  {
    num: "04",
    title: "Science Kidz Labs",
    description: "Robotics Mentor ~ May 2018 - Sep 2021 ~ On-Site",
    href: "",
  },
];

import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {experiences.map((experience, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {experience.num}
                  </div>
                  <Link
                    href={experience.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* heading */}
                <h2>{experience.title}</h2>
                {/* description */}
                <p>{experience.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
