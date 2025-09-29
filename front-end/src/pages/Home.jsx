import { FaUserGraduate, FaBookOpen, FaBook, FaCertificate } from "react-icons/fa";
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
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "../components/Hero";
import { useState } from "react";
import Feature from "../components/Feature";
import Banner from "../components/Banner";
import About from "../components/About";
import ShowGallery from "../components/ShowGallary";
import CurriculumAge from "../components/CurriculumAge";
export default function Home() {
 

  

 



  return (
    <div className="overflow-hidden">
      <Hero />

      <Feature />
      <About />

      <Banner />
      <ShowGallery />
      <CurriculumAge/>






    </div>
  );
}
