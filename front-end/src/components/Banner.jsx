import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ImageCard from "../assets/bannerImage.jpg";

export default function Banner() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,});

  const containerVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
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
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
        style={{ backgroundImage: `url(${ImageCard})` }}
      className={`mt-20 flex flex-col items-center justify-center mx-auto max-md:mx-2 max-md:px-2 max-w-5xl w-full text-center rounded-2xl overflow-hidden bg-[url(${ImageCard})] bg-cover bg-center bg-no-repeat`}
    >
      <motion.h1
        variants={itemVariants}
        className="text-2xl md:text-3xl font-medium text-white max-w-2xl mt-20"
      >
       Empower Your Future with Next-Gen Learning
      </motion.h1>

      <motion.div
        variants={itemVariants}
        className="h-[3px] w-32 my-1 bg-gradient-to-l from-transparent  to-[#CB6CE6]"
      />

      <motion.p
        variants={itemVariants}
        className="text-sm md:text-base text-white max-w-xl"
      >
     Unlock your potential with interactive courses in coding, robotics, and STEM — designed to spark creativity, problem-solving, and innovation for tomorrow’s world.

      </motion.p>

      <motion.button
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-2.5 mt-4 text-sm bg-gradient-to-r from-[#CB6CE6] to-[#d46df0] transition duration-300 text-white rounded-full mb-20"
      >
     Start Learning

      </motion.button>
    </motion.section>
  );
}
