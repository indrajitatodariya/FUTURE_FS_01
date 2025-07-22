import '../src/index.css';
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/aboutme';
import SkillsSection from './components/skills';
import AchievementsSection from './components/achieve';
import ProjectSection from './components/project';
import ContactSection from './components/contactme';

function App() {
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

  return (
    <Router>
      <div className="relative font-inter min-h-screen overflow-x-hidden bg-white text-black transition-colors duration-300">

        {/* Background Effects */}
        <motion.div
          className="fixed rounded-full opacity-15 blur-[80px] z-0 bg-accent1"
          animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: '300px', height: '300px', top: '10%', left: '15%' }}
        />
        <motion.div
          className="fixed rounded-full opacity-15 blur-[80px] z-0 bg-accent2"
          animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ width: '400px', height: '400px', bottom: '5%', right: '10%' }}
        />
        <motion.div
          className="fixed rounded-full opacity-15 blur-[80px] z-0 bg-accent3"
          animate={{ y: [0, 30, 0], x: [0, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          style={{ width: '350px', height: '350px', top: '60%', left: '-5%' }}
        />

        <Navbar />

        <motion.section
          id="home"
          className="relative z-10 min-h-screen pt-20 flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <HeroSection />
        </motion.section>

        <motion.section
          id="about"
          className="relative z-10 min-h-screen pt-20 flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <AboutSection />
        </motion.section>

        <motion.section
          id="skills"
          className="relative z-10 min-h-screen pt-20 flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <SkillsSection />
        </motion.section>

        <motion.section
          id="projects"
          className="relative z-10 min-h-screen pt-20 flex flex-col justify-center items-center px-4 md:px-8 lg:px-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <ProjectSection />
        </motion.section>

        <motion.section
          id="achievements"
          className="relative z-10 min-h-screen pt-20 flex flex-col justify-center items-center px-4 md:px-8 lg:px-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <AchievementsSection />
        </motion.section>

        <motion.section
          id="contact"
          className="relative z-10 min-h-screen pt-20 flex flex-col justify-center items-center px-4 md:px-8 lg:px-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <ContactSection />
        </motion.section>
      </div>
    </Router>
  );
}

export default App;
