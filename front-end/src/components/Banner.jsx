import { motion } from "framer-motion";

export default function Banner() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.25, delayChildren: 0.3 },
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

  return (
    <>
     

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-20 flex flex-col items-center justify-center mx-auto max-md:mx-2 max-md:px-2 max-w-5xl w-full text-center rounded-2xl py-20 md:py-24 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/banners/image-1.png')] bg-cover bg-center bg-no-repeat"
      >
        <motion.h1
          variants={itemVariants}
          className="text-2xl md:text-3xl font-medium text-white max-w-2xl"
        >
          Empower Your Sales & Marketing with a Next-Gen AI Workforce
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="h-[3px] w-32 my-1 bg-gradient-to-l from-transparent to-indigo-600"
        />

        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base text-white max-w-xl"
        >
          Leverage AI Agents for real-time calling and unified multi-channel
          engagement, optimizing customer interactions at scale.
        </motion.p>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-2.5 mt-4 text-sm bg-gradient-to-r from-indigo-600 to-violet-500 transition duration-300 text-white rounded-full"
        >
          Get Started
        </motion.button>
      </motion.section>
    </>
  );
}
