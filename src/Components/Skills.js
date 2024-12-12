import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaBootstrap, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Skills = () => (
  <section id="skills" className="py-20 bg-gradient-to-b from-gray-100 to-gray-300">
    <motion.div
      className="container mx-auto text-center px-4 py-10"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration:1 }}
      
    >
      <h2 className="text-4xl text-pink-600 font-bold mb-3">My Skills</h2>
      <p className="text-lg text-gray-600 mb-10 italic">
        "Crafting seamless experiences with clean code and innovative tools that fuel my development journey! 🚀"
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {[{
          Icon: () => (
            <img
              src="https://img.icons8.com/color/48/000000/html-5.png"
              alt="HTML5"
              className="mb-4"
              style={{ width: "48px", height: "48px" }}
            />
          ),
          name: "HTML5",
          color: "",
          rate: 5,
          description: "🌐 HTML5 is the foundation of the web, giving structure to your digital creations. Every webpage begins with it, from layout to accessibility!"
        },
        {
          Icon: () => (
            <img
              src="https://img.icons8.com/color/48/000000/css3.png"
              alt="CSS3"
              className="mb-4"
              style={{ width: "48px", height: "48px" }}
            />
          ),
          name: "CSS3",
          color: "",
          rate: 4.5,
          description: "🎨 With CSS3, I style the web, creating vibrant, responsive designs. It’s what turns static content into stunning visuals!"
        },
        {
          Icon: SiTailwindcss,
          name: "Tailwind CSS",
          color: "text-blue-400",
          rate: 4,
          description: "⚡ Tailwind CSS lets me build fast, custom designs with ease. A utility-first approach for maximum flexibility and speed!"
        },
        {
          Icon: FaBootstrap,
          name: "Bootstrap",
          color: "text-purple-400",
          rate: 4,
          description: "📱 Bootstrap is my go-to for responsive design. It streamlines development with ready-to-use components and grid systems."
        },
        {
          Icon: FaJs,
          name: "JavaScript",
          color: "text-yellow-400",
          rate: 4,
          description: "💻 JavaScript brings my websites to life! From interactive forms to dynamic content, it makes the web functional and engaging."
        },
        {
          Icon: FaReact,
          name: "React",
          color: "text-teal-400",
          rate: 4.5,
          description: "⚛️ React is my favorite library for building efficient, reusable user interfaces. It’s fast, flexible, and perfect for modern web apps."
        },
        {
          Icon: () => (
            <img
              src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-redux-an-open-source-javascript-library-for-managing-application-state-logo-color-tal-revivo.png"
              alt="Redux"
              className="mb-4"
              style={{ width: "48px", height: "48px" }}
            />
          ),
          name: "Redux",
          color: "",
          rate: 4,
          description: "🔄 Redux helps me manage application state in a predictable way. It’s perfect for complex apps that need centralized data management."
        },
        {
          Icon: FaGithub,
          name: "Git",
          color: "text-gray-400",
          rate: 3.5,
          description: "📝 Git is my tool for version control, keeping track of code changes and collaborating smoothly with teams on every project!"
        }].map((skill, index) => (
         <motion.div
  key={index}
  className="relative flex flex-col items-center bg-black p-6 rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out h-60"
  whileInView={{ opacity: 1, y: 0 }}
  initial={{ opacity: 0, y: 50 }}
  viewport={{ once: false, amount: 0.2 }}
  style={{
    transform: 'translateY(0)', // Normal state, no translation
    transition: 'transform 0.3s ease-in-out, height 0.3s ease-in-out'
  }}

  whileHover={{
    transform: 'translateY(-10px)', // Move the card upwards on hover
    height: 'auto', // Allow the height to expand on hover
    transition: 'transform 0.3s ease-in-out, height 0.3s ease-in-out', // Smooth transition
  }}
>
  {/* Icon container */}
  <div className="flex items-center justify-center w-full h-full">
    <skill.Icon className={`${skill.color} text-5xl`} />
  </div>

  {/* Title */}
  <h3 className="text-xl text-white font-semibold">{skill.name}</h3>

  {/* Rating */}
  <div className="flex items-center mt-2">
    {Array.from({ length: 5 }, (_, i) => (
      i + 1 <= Math.floor(skill.rate) ? (
        <AiFillStar key={i} className="text-yellow-500 text-xl" />
      ) : i < skill.rate ? (
        <AiFillStar
          key={i}
          className="text-yellow-500 text-xl"
          style={{ clipPath: "inset(0 50% 0 0)" }}
        />
      ) : (
        <AiOutlineStar key={i} className="text-gray-500 text-xl" />
      )
    ))}
  </div>

  {/* Progress bar */}
  <div className="w-full bg-gray-700 rounded-full mt-5 h-3">
    <motion.div
      className="bg-teal-400 h-3 rounded-full"
      initial={{ width: 0 }}
      animate={{ width: `${skill.rate * 20}%` }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
  </div>
  <p className="text-sm text-gray-400 mt-2">{(skill.rate * 20).toFixed(0)}%</p>

  {/* Hover Description Overlay */}
  <div className="absolute inset-0 bg-gray-900 opacity-0 flex items-center justify-center rounded-lg transition-opacity hover:opacity-100">
    {/* Centered icon */}
    <div className="flex flex-col items-center">
      <skill.Icon className={`${skill.color} text-5xl mb-3`} />
      {/* Description below the icon */}
      <div className="text-center pt-3 pb-3 px-4">
        <p className="text-gray-400 italic">{skill.description}</p>
      </div>
    </div>
  </div>
</motion.div>


        ))}
      </div>
    </motion.div>
  </section>
);

export default Skills;
