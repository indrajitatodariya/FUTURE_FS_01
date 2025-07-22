import React, { useState } from "react";
import mun from "../assets/mun.pdf";
import mern from "../assets/mernstack.pdf";
import dbms from "../assets/dbms-certi.pdf";
import hackthon_nirma from "../assets/hackthon-nirma.pdf";

const achievements = [
  {
    title: "Participated in Hackathon",
    description: "Participated in Hackathon at Nirma University",
    certificate: hackthon_nirma,
  },
  {
    title: "Internship - FutureInterns",
    description: "Completed 1-month internship working on Node.js and MongoDB.",
    certificate: mun,
  },
  {
    title: "Completed DBMS Course",
    description: "Completed an advanced DBMS course, covering SQL, indexing, ER modeling, normalization and transactions.",
    certificate: dbms,
  },
  {
    title: "Completed MERN Stack Course",
    description: "Hands-on MERN stack training with real-world projects. Built full-stack apps using MongoDB, Express, React, Node.js.",
    certificate: mern,
  },
  {
    title: "Delegate - ENTRE MUN, IIT Bombay",
    description: "Represented China in WTO Committee, discussing global digital trade challenges and policies.",
    certificate: mun,
  },
  {
    title: "District-Level Volleyball Player",
    description: "Participated in district-level volleyball championship representing school team.",
    certificate: null,
  },
];

const AchievementSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCert, setCurrentCert] = useState(null);

  const openModal = (certPath) => {
    setCurrentCert(certPath);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentCert(null);
  };

  return (
    <>
      <section id="achievement" className="h-screen w-full snap-y snap-mandatory overflow-y-scroll no-scrollbar bg-white text-black">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="h-screen w-full flex items-center justify-center snap-start p-6"
          >
            <div className="border border-gray-300 shadow-lg rounded-xl w-[90vw] h-[90vw] max-w-[600px] max-h-[600px] flex flex-col justify-center items-center text-center px-6 py-10 transition-all duration-300 ease-in-out hover:scale-[1.02] bg-white">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">{item.title}</h2>
              <p className="text-base md:text-lg mb-4">{item.description}</p>
              {item.certificate && (
                <button
                  onClick={() => openModal(item.certificate)}
                  className="mt-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
                >
                  View Certificate
                </button>
              )}
            </div>
          </div>
        ))}
      </section>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg max-w-3xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-2xl font-bold text-gray-600 hover:text-black"
            >
              &times;
            </button>
            <iframe
              src={currentCert}
              title="Certificate"
              className="w-full h-[70vh] rounded-md border"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AchievementSection;
