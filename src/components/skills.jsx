import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaReact, FaJsSquare, FaHtml5, FaCss3Alt,
  FaNodeJs, FaPython, FaGitAlt
} from 'react-icons/fa';
import {
  SiC, SiCplusplus, SiMongodb, SiRedux, SiNextdotjs,
} from 'react-icons/si';
import { GiGears } from 'react-icons/gi';
import { BsGraphUp } from 'react-icons/bs';
import { MdOutlineStorage } from 'react-icons/md';

const SkillsSection = () => {
  const skillsData = {
    'Languages': [
      { name: 'C', icon: SiC },
      { name: 'C++', icon: SiCplusplus },
      { name: 'Python', icon: FaPython },
      { name: 'JavaScript', icon: FaJsSquare },
    ],
    'Frontend': [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'React', icon: FaReact },
      { name: 'Redux', icon: SiRedux },
      { name: 'Next.js', icon: SiNextdotjs },
    ],
    'Backend & DB': [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'DBMS', icon: MdOutlineStorage },
    ],
    'Foundations & Tools': [
      { name: 'OOP', icon: GiGears },
      { name: 'DSA', icon: BsGraphUp },
      { name: 'Git', icon: FaGitAlt },
    ],
  };

  const categories = Object.keys(skillsData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 10,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const contentVariants = {
    enter: { opacity: 0, y: 10 },
    center: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 12, staggerChildren: 0.05 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
  };

  const skillItemVariants = {
    enter: { opacity: 0, scale: 0.8 },
    center: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 15 } },
  };

  return (
    <motion.div
      className="relative z-10 w-full max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <motion.h2
        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-accent1 text-center relative
                   after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2
                   after:w-24 after:h-1 after:rounded-md after:bg-gradient-to-r after:from-accent1 after:to-accent2"
      >
        My Core Expertise
      </motion.h2>

      <motion.p
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        className="text-base md:text-lg mb-10 max-w-3xl mx-auto leading-relaxed text-gray-600 text-center"
      >
        Explore the diverse technologies and fundamental concepts that power my development work.
      </motion.p>

      <div className="w-full max-w-3xl mx-auto rounded-xl shadow-2xl p-6 md:p-8 bg-white">
        <motion.div
          className="flex justify-center flex-wrap gap-2 md:gap-3 mb-6 md:mb-8"
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } }
          }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full border-2 transition-all duration-300`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="min-h-[160px] md:min-h-[200px] flex justify-center items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="flex flex-wrap justify-center gap-4 md:gap-5 w-full max-w-lg mx-auto p-2"
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {skillsData[activeCategory].map((skill) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-lg border border-gray-200
                             transition-all duration-200 cursor-pointer hover:bg-accent1/10 hover:border-accent1"
                  variants={skillItemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ minWidth: '90px', maxWidth: '120px', flex: '1 1 auto' }}
                >
                  <skill.icon className="text-3xl sm:text-4xl mb-2 text-accent2" />
                  <span className="text-sm sm:text-base font-medium text-center text-gray-800">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsSection;
