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
  SiPostgresql,
  SiKeras,
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
      icon: <SiKeras />,
      NAME: "Keras",
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
    {
      icon: <SiPostgresql />,
      NAME: "PostgreSQL",
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
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#333333] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#333333] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>{skill.NAME}</li>;
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
