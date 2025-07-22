import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contactme = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jie100k",
        "template_3auujtb",
        form.current,
        "ySn-Vz2X760iOWt_Y"
      )
      .then(
        (result) => {
          console.log("Email sent!", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Email send error:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold border-b-2 border-black inline-block mb-4">
          Get in Touch
        </h2>
        <p className="text-md md:text-lg max-w-xl mx-auto mb-12">
          I’m currently open to new opportunities and collaborations. Drop a message or connect through my socials.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-10">
        <form onSubmit={sendEmail} ref={form} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-600"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            required
            className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-600"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-900 transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="flex justify-center items-center gap-6 mt-6 text-2xl">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:indrajitsinhatodariya28@gmail.com" className="hover:text-gray-700 transition">
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        <div className="mt-8 text-center">
          <a
            href="../../public/Resume.pdf"
            download
            className="inline-block border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contactme;
