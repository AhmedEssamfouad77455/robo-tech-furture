import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaUserGraduate, FaBookOpen, FaBook, FaCertificate } from "react-icons/fa";

// Animation Variants
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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Example Data
const data = [
  {
    icon: <FaUserGraduate size={40} className="text-sky-500" />,
    title: "Certified Teachers",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    bg: "bg-sky-400",
  },
  {
    icon: <FaBookOpen size={40} className="text-sky-500" />,
    title: "Special Education",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    bg: "bg-green-500",
  },
  {
    icon: <FaBook size={40} className="text-sky-500" />,
    title: "Book & Library",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    bg: "bg-purple-600",
  },
  {
    icon: <FaCertificate size={40} className="text-sky-500" />,
    title: "Certification",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    bg: "bg-red-500",
  },
];

const Feature = () => {
  const { ref: featuresRef, inView: featuresInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section
      ref={featuresRef}
      className="w-screen overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      variants={containerVariants}
      initial="hidden"
      animate={featuresInView ? "visible" : "hidden"}
    >
      {data.map((item, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          className={`${item.bg} text-white p-8 flex flex-col items-center text-center`}
        >
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white mb-6 shadow-md text-3xl">
            {item.icon}
          </div>
          <h3 className="text-xl font-bold mb-3">{item.title}</h3>
          <p className="text-sm leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Feature;
