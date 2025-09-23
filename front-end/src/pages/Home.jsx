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
  const [stopScroll, setStopScroll] = useState(false);

  const cardData = [
    {
      title: "Unlock Your Creative Flow",
      image: "https://images.unsplash.com/photo-1543487945-139a97f387d5?w=1200&auto=format&fit=crop&q=60",
    },
    {
      title: "Design Your Digital Future",
      image: "https://images.unsplash.com/photo-1529254479751-faeedc59e78f?w=1200&auto=format&fit=crop&q=60",
    },
    {
      title: "Build with Passion, Ship with Pride",
      image: "https://images.unsplash.com/photo-1618327907215-4e514efabd41?w=1200&auto=format&fit=crop&q=60",
    },
    {
      title: "Think Big, Code Smart",
      image: "https://images.unsplash.com/photo-1583407723467-9b2d22504831?w=1200&auto=format&fit=crop&q=60",
    },
  ];
  // لكل سكشن Ref و inView خاص بيه
  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [0, 500], ["0%", "50%"])
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: featuresRef, inView: featuresInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: bannerRef, inView: bannerInView } = useInView({ triggerOnce: true, threshold: 0.2 });



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
