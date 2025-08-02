import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="max-w-3xl mx-auto px-6 py-12 text-gray-800"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        About Me
      </motion.h1>

      <motion.p
        className="text-lg mb-4 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <span role="img" aria-label="wave">👋</span> Hi, I'm <span className="font-semibold">Bibhu Prasad Dash</span>, a passionate developer who loves turning ideas into reality through code.
      </motion.p>

      <motion.blockquote
        className="italic text-gray-600 border-l-4 border-indigo-400 pl-4 my-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <span role="img" aria-label="rocket">🚀</span> "Code is my canvas, creativity is my fuel."
      </motion.blockquote>

      <motion.p
        className="text-lg mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        With a strong foundation in <span className="font-medium text-indigo-600">JavaScript</span> and <span className="font-medium text-pink-600">React</span>, I build modern, responsive web applications that delight users and solve real-world problems.
      </motion.p>

      <motion.ul
        className="list-disc list-inside space-y-2 text-base text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <li>💡 Always learning new technologies</li>
        <li>🤝 Collaborative team player</li>
        <li>🎯 Focused on clean, efficient code</li>
      </motion.ul>

      <motion.p
        className="mt-6 text-lg font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Let's connect and create something amazing together!
      </motion.p>
    </motion.section>
  );
};

export default About;
