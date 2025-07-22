import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaBars, FaTimes, FaHome, FaUser, FaTools,
  FaLaptopCode, FaAward, FaEnvelope, FaFileDownload
} from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbarElement = document.querySelector('.navbar');
    if (navbarElement) {
      setNavbarHeight(navbarElement.offsetHeight);
    }
  }, []);

  const navItems = [
    { name: 'Home', path: '/', id: 'home', icon: FaHome },
    { name: 'About Me', path: '/about', id: 'about', icon: FaUser },
    { name: 'Skills', path: '/skills', id: 'skills', icon: FaTools },
    { name: 'Projects', path: '/projects', id: 'projects', icon: FaLaptopCode },
    { name: 'Achievements', path: '/achievements', id: 'achievements', icon: FaAward },
    { name: 'Contact Me', path: '/contact', id: 'contact', icon: FaEnvelope },
  ];

  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const scrollPosition = targetElement.offsetTop - navbarHeight;
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResumeDownload = () => {
    const resumePath = '../../public/Resume.pdf';
    window.open(resumePath, '_blank');
    setIsMenuOpen(false);
  };

  const menuVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } },
    exit: { x: '100%', opacity: 0, transition: { ease: 'easeOut' } }
  };

  return (
    <motion.nav
      className="navbar fixed top-0 left-0 w-full px-4 md:px-10 py-4 flex justify-between items-center z-[1000] shadow-xl bg-white text-black"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.5 }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center">
        <Link to="/" onClick={(e) => handleScrollToSection(e, 'home')} className="flex items-center">
          <motion.div
            className="w-10 h-10 md:w-11 md:h-11 rounded-full flex justify-center items-center text-xl md:text-2xl font-extrabold shadow-lg bg-accent1 text-primary"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1 }}
            aria-label="Indrajitsinh Home"
          >
            I
          </motion.div>
        </Link>
      </div>

      <button
        className="md:hidden text-accent1 text-3xl p-2 rounded-full cursor-pointer z-[1001] ml-auto"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls="main-menu"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            id="main-menu"
            className="fixed top-0 right-0 w-3/4 max-w-xs h-screen flex flex-col items-start pt-24 pb-8 shadow-2xl z-[999] bg-white md:hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="menu"
          >
            {navItems.map((item) => (
              <motion.li key={item.id} className="w-full" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} role="none">
                <Link
                  to={item.path}
                  onClick={(e) => handleScrollToSection(e, item.id)}
                  className="flex items-center gap-2 py-4 px-6 w-full text-lg font-medium border-b border-gray-200 text-black hover:text-accent1"
                  role="menuitem"
                >
                  <item.icon className="text-xl opacity-80" aria-hidden="true" />
                  <span>{item.name}</span>
                </Link>
              </motion.li>
            ))}
            <motion.li className="w-full mt-4" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} role="none">
              <a
                href="../../public/Resume.pdf"
                onClick={handleResumeDownload}
                className="flex items-center gap-2 py-4 px-6 w-full text-lg font-medium rounded-md mx-6 bg-accent2 text-primary hover:bg-accent2/80"
                download
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
              >
                <FaFileDownload className="text-xl opacity-80" aria-hidden="true" />
                <span>Resume</span>
              </a>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>

      <ul className="hidden md:flex items-center gap-8 lg:gap-12 ml-auto" role="menu">
        {navItems.map((item) => (
          <motion.li key={item.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} role="none">
            <Link
              to={item.path}
              onClick={(e) => handleScrollToSection(e, item.id)}
              className="relative text-base font-medium py-1 text-subtext hover:text-accent1 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:w-0 after:h-0.5 after:bg-accent1 after:rounded-full after:transition-all after:duration-300 hover:after:w-full flex items-center gap-2"
              role="menuitem"
            >
              <item.icon className="text-lg opacity-80" aria-hidden="true" />
              <span>{item.name}</span>
            </Link>
          </motion.li>
        ))}
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} role="none">
          <a
            href="../../public/Resume.pdf"
            onClick={handleResumeDownload}
            className="flex items-center gap-2 px-6 py-2 rounded-lg font-semibold bg-accent2 text-primary hover:bg-accent2/80 shadow-md"
            download
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
          >
            <FaFileDownload className="text-lg opacity-80" aria-hidden="true" />
            <span>Resume</span>
          </a>
        </motion.li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
