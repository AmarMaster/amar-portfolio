"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "#BreatheFree by Volvo Cars ~ Lateral Farming",
    title: "project 2",
    description:
      "Engineered an innovative urban agriculture system using IoT for smart farming solutions. Utilized Arduino UNO for automated control and integrated sensors for precise environmental regulation. Developed an Android app using Java and Android Studio for real-time temperature and irrigation management, data observation, and user interaction. Implemented ultrasonic, light, and heat sensors for monitoring, enabling real-time crop monitoring and harvest timing notifications. Integrated natural rainwater harvesting for sustainable irrigation. Used MQTT for Arduino-app communication and Firebase for cloud-based data storage and synchronization. Designed an intuitive user interface with XML and Java.",
    stack: [
      { name: "C++" },
      { name: "Arduino UNO" },
      { name: "Java" },
      { name: "Android Studio" },
    ],
    image: "/media/lettuce+vines.jpg",
    github: "https://youtu.be/87i0mhMsVBU",
  },
  {
    num: "02",
    category: "Equity Analysis",
    title: "project 2",
    description:
      "Engineered a sophisticated stock data scraper leveraging Python, BeautifulSoup, and Pandas to aggregate, analyze, and visualize stock market data. Implemented advanced technical indicators including Moving Average, RSI, Bollinger Bands, and MACD for comprehensive market analysis, achieving an 85% accuracy in trend prediction. Used Machine Learning algorithms to produce future predictions with 92% accuracy. Developed automated daily updates and historical data management, reducing manual data handling time by 80%. Created dynamic and insightful visualizations and automated data processing tasks, enhancing the overall analysis workflow. Ensured robust data analysis and error handling mechanisms, reducing the error rate to less than 2%.",
    stack: [
      { name: "Python" },
      { name: "Keras" },
      { name: "Tensorflow" },
      { name: "Scipy" },
      { name: "BeautifulSoup" },
    ],
    image: "/media/stonks.jpg.avif",
    github: "https://github.com/AmarMaster/stock_data_scraper",
  },
  {
    num: "03",
    category: "Portfolio Website",
    title: "project 3",
    description:
      "This portfolio website is one of my first concrete projects in Web Development. This website showcases my experience, skills and learning curve as an undergraduate student and will continue to showcase my abilities in the future. I designed it using HTML5, CSS3 and Javascript using React.js framework and Tailwind CSS for features. It includes a link to download my resume and schedule a meeting with me on Calendly.com for anyone who might be interested.",
    stack: [{ name: "Html5" }, { name: "CSS3" }, { name: "React.js" }],
    image: "/media/PF.webp",
    github: "https://github.com/AmarMaster/amar-portfolio",
  },
  {
    num: "04",
    category: "#BreatheFree by Volvo Cars ~ E-Cycle",
    title: "project 4",
    description:
      "Part of the #BreatheFree campaign by Volvo Cars. Converted an ordinary bike into a self-charging electric bike for sustainability and efficiency.  Integrated a 500W hub motor, 36V 10Ah battery and a pedal-powered generator. Implemented Arduino-controlled energy management system for optimized power usage and recharging. Reduced energy consumption by 50% and eliminated the need for external charging under normal conditions. Decreased CO2 emissions by approximately 600 kg annually per bike for 3,000 miles. Saved $50 to $100 annually on electricity costs.",
    stack: [
      { name: "C++" },
      { name: "Mechanical Engineering" },
      { name: "Hardware Integration" },
      { name: "Data Analysis" },
    ],
    image: "/media/energy.webp",
    github: "https://youtu.be/87i0mhMsVBU",
  },
  {
    num: "05",
    category: "Statistical Analysis of the NBA",
    title: "project 5",
    description:
      "A thorough analysis comparing the Boston Celtics and Chicago Bulls over the 2024 NBA season. Comprehensive Data Collection and Cleaning: Gathered extensive game data from the 2024 season for both teams, ensuring the dataset was clean, complete, and ready for analysis. Development of Unbiased Estimators: Utilized sample data to construct minimum variance unbiased estimators (MVUE), ensuring the accuracy and reliability of key performance metrics. Confidence Interval Analysis: Performed detailed 95% confidence interval analysis to determine the precision of our estimated parameters, providing a range within which the true values are likely to fall. Rigorous Hypothesis Testing: Executed hypothesis testing with a 5% significance level to evaluate significant differences and relationships between various performance metrics of the two teams, such as scoring averages, defensive efficiency, and win-loss records. Interpretation and Insights: Concluded the analysis with a comprehensive interpretation of results, delivering actionable insights and strategic recommendations based on statistical inference. This included assessing the likelihood of the Celtics winning against the Bulls in future matchups.",
    stack: [
      { name: "Statistical Analysis" },
      { name: "Confidence Interval Analysis" },
      { name: "Hypothesis Testing" },
    ],
    image: "/media/NBA.jpg",
    github:
      "https://www.linkedin.com/in/amarmaster/overlay/1719569835697/single-media-viewer/?profileId=ACoAADjIhvQBZSIk5Sb7eTAnXpkHxw8dJJUiW2Q",
  },
];
export const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl-h[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-accent group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Project GitHub</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
