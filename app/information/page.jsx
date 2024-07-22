"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaBrain,
  FaChartLine,
  FaWallet,
  FaRobot,
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
  title: "About me...",
  description:
    "I was raised in Mumbai IN for the first 18 years of my life. As a teenager, I devoted my extra time into robotics and computer engineering principles where I developed a passion for coding!",
  description1:
    "Apart from coding I enjoy keeping up my physical fitness through weightlifting and boxing. I am also an avid chess player and am always open to a game!",
  decription2: "Reach out to me if you want to work on something cool!",
};

//INFO DATA
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone (United States)",
    description: "(+1) 413 949 3383",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone (India)",
    description: "(+91) 96533-51363",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "amar.master.work@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "#2007, 181 Fearing Street, Amherst, MA",
  },
];

//INTERESTS DATA
const interests = {
  icon: "/assets/resume/badge.svg",
  title: "Interests!",
  description: "Let's work on something in:",
  items: [
    {
      icon: <FaBrain />,
      title: "Artificial Intelligence & Machine Learning",
    },
    {
      icon: <FaChartLine />,
      title: "Data Science and Analytics",
    },
    {
      icon: <FaWallet />,
      title: "Financial Technology",
    },
    {
      icon: <FaRobot />,
      title: "Robotics & Embedded Systems",
    },
  ],
};

//EDUCATION DATA
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education.",
  description:
    '"Live as if you were to die tomorrow. Learn as if you were to live forever." ~ Mahatma Gandhi',
  items: [
    {
      institution: "University of Massachusetts Amherst",
      degree: "BSc Computer Science",
      duration: "Exp. Graduation 2026",
    },
    {
      institution: "University of Massachusetts Amherst",
      degree: "BSc Mathematics ~ Statistics and Data Science",
      duration: "Exp. Graduation 2026",
    },
  ],
};

//SKILLS
const skills = {
  title: "Skills:",
  description:
    "Here are some of the technologies and tools I have experience with:",
  skillList: [
    { icon: <FaPython />, name: "Python" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiTensorflow />, name: "TensorFlow" },
    { icon: <SiKeras />, name: "Keras" },
    { icon: <SiScikitlearn />, name: "Scikit-learn" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaDatabase />, name: "SQL" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Information = () => {
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
            <TabsTrigger value="interests">Interests</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* about me */}
            <TabsContent
              value="about me"
              className="w-full text-center xl:text-center"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description} <br />
                  {about.description1} <br />
                  {about.decription2}
                </p>
                <div className="flex-1 flex items-center xl:justify-start order-1 xl:order-none mb-8 xl:mb-0 ">
                  <ul className="flex flex-col gap-10">
                    {info.map((item, index) => {
                      return (
                        <li key={index} className="flex items-center gap-6">
                          <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#1F2833] text-accent rounded-md flex items-center justify-center">
                            <div className="text-[28px]">{item.icon}</div>
                          </div>
                          <div className="flex-1">
                            <p className="text-white/60">{item.title}</p>
                            <h3 className="text-xl">{item.description}</h3>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
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
                          className="bg-[#1F2833] h-[700] py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-1"
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
            {/* interests */}
            <TabsContent value="interests" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{interests.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {interests.description}
                </p>
                <div className="flex-1 flex items-center xl:justify-start order-1 xl:order-none mb-8 xl:mb-0 ">
                  <ul className="flex flex-col gap-10">
                    {interests.items.map((item, index) => {
                      return (
                        <li key={index} className="flex items-center gap-6">
                          <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#1F2833] text-accent rounded-md flex items-center justify-center">
                            <div className="text-[28px]">{item.icon}</div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl">{item.title}</h3>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
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
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#1F2833] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Information;
