"use client";

import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaSQL,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTensorflow,
  SiScikitlearn,
} from "react-icons/si";

//ABOUT DATA
const about = {
  title: "About me",
  description: "bleh bleh bleh",
  info: [
    {
      fieldnAME: "Name",
      fieldValue: "Amar Master",
    },
    {
      fieldnAME: "Phone (US)",
      fieldValue: "(+1) 413-949-3383",
    },
    {
      fieldnAME: "Phone (India)",
      fieldValue: "+91 96533-51363",
    },
    {
      fieldnAME: "Email",
      fieldValue: "amar.master.work@gmail.com",
    },
    {
      fieldnAME: "Experience",
      fieldValue: "2 years and counting!",
    },
    {
      fieldnAME: "Languages",
      fieldValue: "English, German, Gujarati, Hindi, Marathi",
    },
  ],
};

//INTERESTS DATA
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience:",
  description: "bleh bleh bleh",
  items: [
    {
      company: "Tech Solutions iNC",
      position: "position",
      duration: "2022 - Present",
    },
    {
      company: "Tech Solutions iNC",
      position: "position",
      duration: "2022 - Present",
    },
    {
      company: "Tech Solutions iNC",
      position: "position",
      duration: "2022 - Present",
    },
    {
      company: "Tech Solutions iNC",
      position: "position",
      duration: "2022 - Present",
    },
  ],
};

//EDUCATION DATA
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education:",
  description: "bleh bleh bleh",
  items: [
    {
      institution: "UMass",
      degree: "BS CS",
      duration: "2022 - 2026",
    },
    {
      institution: "UMass",
      degree: "BS Math",
      duration: "2022 - 2026",
    },
  ],
};

//SKILLS
const skills = {
  title: "My skills:",
  description: "bleh bleh bleh",
  skillList: [
    {
      icon: <FaPython />,
      NAME: "Python",
    },
    {
      icon: <FaJava />,
      NAME: "Java",
    },
    {
      icon: <SiTensorflow />,
      NAME: "Tensorflow",
    },
    {
      icon: <SiScikitlearn />,
      NAME: "Scikit",
    },
    {
      icon: <FaHtml5 />,
      NAME: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      NAME: "CSS 3",
    },
    {
      icon: <FaJs />,
      NAME: "JavaScript",
    },
    {
      icon: <FaReact />,
      NAME: "React",
    },
    {
      icon: <SiTailwindcss />,
      NAME: "Tailwind",
    },
    {
      icon: <SiNextdotjs />,
      NAME: "Next",
    },
    {
      icon: <FaNodeJs />,
      NAME: "Node",
    },
    {
      icon: <FaSQL />,
      NAME: "SQL",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

{
  /* tooltips */
}

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center jutify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about me">About Me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* about me */}
            <TabsContent value="about me" className="w-full">
              about me
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              experience
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
