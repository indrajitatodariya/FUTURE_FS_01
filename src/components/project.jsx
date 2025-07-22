import React from "react";
import { motion } from "framer-motion";
import ecom from "../assets/project-ecom.png";
import bmw from "../assets/project-bmw.png";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A full-featured MERN stack e-commerce site with cart, product filters, and user authentication.",
    image: ecom,
    github: "#",
    live: "#",
    reverse: false,
  },
  {
    title: "BMW Showcase Website",
    description:
      "An interactive BMW brand presentation with 3D car views, dynamic filters, and rich animations.",
    image: bmw,
    github: "https://github.com/indrajitatodariya/FUTURE_FS_03",
    live: "https://future-fs-03-theta.vercel.app/",
    reverse: true,
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">My Projects</h2>
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`flex flex-col-reverse md:flex-row ${
                project.reverse ? "md:flex-row-reverse" : ""
              } items-center gap-10`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>

              <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                <h3 className="text-3xl font-semibold">{project.title}</h3>
                <p>{project.description}</p>
                <div className="flex justify-center md:justify-start gap-4 pt-2">
                  <a
                    href={project.github}
                    className="px-5 py-2 border border-black text-black hover:bg-black hover:text-white transition rounded"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    className="px-5 py-2 border border-black text-black hover:bg-black hover:text-white transition rounded"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
