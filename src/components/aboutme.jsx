import React from 'react';
import { motion } from 'framer-motion';
import ProfileImage from '../assets/aboutme.jpg'

const AboutSection = () => {
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 80, damping: 15, delay: 0.3 } },
    hover: { scale: 1.05, rotate: 1, transition: { type: 'spring', stiffness: 300 } },
  };

  return (
    <motion.div
      className="about-content relative z-10 w-full max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-accent1 text-center relative
                   after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2
                   after:w-24 after:h-1 after:rounded-md after:bg-gradient-to-r after:from-accent1 after:to-accent2"
      >
        About Me
      </motion.h2>

      <motion.div
        className="relative w-full rounded-3xl shadow-xl overflow-hidden p-6 sm:p-8 md:p-12 bg-white transition-shadow duration-300 hover:shadow-2xl"
      >

        <motion.div
          className="absolute rounded-full opacity-10 blur-2xl -top-20 -left-20 w-60 h-60 bg-accent3"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute rounded-full opacity-10 blur-2xl -bottom-24 -right-24 w-72 h-72 bg-accent2"
          initial={{ rotate: 360 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
         <motion.div
  className="relative w-80 h-96 sm:w-96 sm:h-[28rem] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
  variants={imageVariants}
  whileHover="hover"
>
  <img
    src={ProfileImage}
    alt="Indrajitsinh - Profile"
    className="w-full h-full object-cover"
    loading="eager"
    decoding="async"
  />
</motion.div>


          <div className="flex-grow flex flex-col justify-center text-left max-w-2xl text-black">
            <motion.p variants={itemVariants} className="text-lg md:text-xl font-medium mb-5 leading-relaxed">
              Hello! I'm <strong className="text-accent1">Indrajitsinh</strong>, an <strong className="text-accent1">Aspiring Software developer</strong> who thrives on crafting
              <strong className="text-accent1"> intuitive and innovative digital solutions</strong>.
            </motion.p>

            <motion.p variants={itemVariants} className="text-base md:text-lg mb-6 leading-relaxed text-gray-600">
              I'm someone who loves thinking logically and enjoys subjects like maths and physics.
I have a deep interest in how technology works and love building things step by step.
I enjoy outdoor games, especially volleyball — it keeps me active and focused.
I prefer simplicity, but I always aim to make things look impressive and well-structured.
I like exploring new tools and designs until I get them just right.
            </motion.p>

            <motion.blockquote variants={itemVariants} className="text-lg md:text-xl italic border-l-4 pl-4 mb-6 border-accent2 text-gray-600">
              "The only way to do great work is to love what you do."
              <cite className="block mt-2 text-sm text-gray-500">- Steve Jobs</cite>
            </motion.blockquote>

            <motion.p variants={itemVariants} className="text-base md:text-lg mb-8 leading-relaxed text-gray-600">
              When I’m not coding, I enjoy thinking about how things work and trying out new ideas. I like improving my skills by building things on my own, exploring smart solutions, and learning through trial and error. My goal is simple — to grow step by step and build things that make sense and feel right
            </motion.p>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-lg font-semibold text-lg shadow-md transition-all duration-300 self-start
                         bg-accent1 text-black hover:bg-accent1/90 focus:outline-none focus:ring-2 focus:ring-accent1 focus:ring-offset-2"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let’s Connect!
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;
