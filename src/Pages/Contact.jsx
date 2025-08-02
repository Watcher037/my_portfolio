import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-20">
      <div className="text-center animate-fade-in">
        <h2 className="text-4xl font-bold mb-4">Let's Connect!</h2>
        <p className="text-lg mb-8">
          I'd love to hear from you. Reach out through any of the platforms below.
        </p>

        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/Watcher037"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-900 hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/bibhu-prasad-dash-829654258"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-700 hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-400 hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="dashb8402@gmail.com"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-red-500 hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
