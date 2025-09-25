import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={heroRef}
    className="overflow-hidden w-screen py-42 h-screen bg-[#ec407a] flex items-center justify-center"
    >
      <motion.div
        className="max-w-4xl text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
      >
        <motion.h1
          variants={itemVariants}
          className="text-white text-4xl md:text-6xl font-extrabold mb-6"
        >
          Think . Code . Win
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-white text-lg md:text-xl mb-8 max-w-xl mx-auto"
        >
          Every line of code brings you closer to your dream. Start today.
        </motion.p>

        <motion.div variants={itemVariants}>
          <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-2xl shadow-md hover:bg-indigo-100 transition">
            Get Started
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
