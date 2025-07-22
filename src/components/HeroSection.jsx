import { motion } from 'framer-motion';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 12,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        duration: 0.5,
        delay: 1,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className="hero-content relative z-10 max-w-4xl mx-auto py-16 px-4 text-center text-black"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.p
        className="inline-block px-4 py-1 mb-4 text-sm font-medium tracking-wider uppercase rounded-full bg-black/10 text-black"
        variants={itemVariants}
      >
        Softwaredev Aspire • MERN Stack Developer
      </motion.p>

      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        variants={itemVariants}
      >
        Hi, I'm{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500">
          Indrajitsinh
        </span>
        .
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed text-gray-700"
        variants={itemVariants}
      >
        I craft beautiful and functional web experiences.
        <br />
        Let's build something amazing together.
      </motion.p>

      <motion.div className="flex justify-center gap-5 flex-wrap" variants={itemVariants}>
        <motion.a
          href="#projects"
          className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-lg shadow-md transition-transform duration-200 border-2 hover:scale-105 border-black text-black hover:bg-black hover:text-white"
          variants={buttonVariants}
        >
          View My Work
        </motion.a>

        <motion.a
          href="#contact"
          className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-lg border-2 transition-transform duration-200 hover:scale-105 border-black text-black hover:bg-black hover:text-white"
          variants={buttonVariants}
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
