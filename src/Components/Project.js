import React from 'react';
import { motion } from 'framer-motion';

const project = [
  { title: "Project One", description: "A cool project description.", link: "#" },
  { title: "Project Two", description: "Another awesome project.", link: "#" },
  { title: "Project Three", description: "A creative project showcase.", link: "#" },
  { title: "Project Four", description: "Innovative and inspiring work.", link: "#" },
];

const Project = () => (
  <section
    id="projects"
    className="py-20 bg-gradient-to-r from-blue-100 via-purple-50 to-blue-100"
  >
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        My Creative Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {project.map((project, index) => (
          <motion.div
            key={index}
            className="relative p-6 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transform transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur-md"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
              <a
                href={project.link}
                className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600 transition"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Project;
