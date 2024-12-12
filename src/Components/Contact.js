import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-800 text-white">
    <motion.div
      className="container mx-auto text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
      <p className="mb-8">Feel free to reach out to me via email or social media!</p>
      <a href="mailto:your-email@example.com" className="px-6 py-3 bg-blue-500 rounded text-white hover:bg-blue-600">
        Send Email
      </a>
    </motion.div>
  </section>
);

export default Contact;
