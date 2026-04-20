import React from 'react';
import { motion } from 'framer-motion';

export default function Section({ children, className = '', id }) {
  return (
    <section 
      id={id} 
      className={`min-h-screen flex flex-col justify-center px-6 md:px-12 py-20 max-w-7xl mx-auto ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        {children}
      </motion.div>
    </section>
  );
}
