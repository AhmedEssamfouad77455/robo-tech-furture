import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaUserGraduate } from "react-icons/fa";

export default function CurriculumAge() {
  const { scrollYProgress } = useScroll();

  const y = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, -500, 0, -500, 0]
  );

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative py-20 max-w-5xl mx-auto px-4 overflow-hidden"
    >
      {/* العنوان */}
      <motion.h1
        variants={itemVariants}
        className="text-center text-orange-400 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl"
      >
        Curriculum by Age Group
      </motion.h1>

      {/* الوصف */}
      <motion.p
        variants={itemVariants}
        className="text-center text-gray-400 md:text-lg mt-2"
      >
        Use it for free for yourself, upgrade when your team needs advanced
        control.
      </motion.p>

      {/* الكروت */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 mt-10"
      >
        {/* Card 1 */}
        <motion.div
          variants={itemVariants}
          className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-6"
        >
          <div className="flex flex-col items-center border-b border-gray-300 pb-6">
             <span className="mb-3 text-4xl font-medium">Ages 8 - 12</span>
    <span className="text-gray-500">Academy Curriculum</span>
          </div>
          <div className="space-y-4 py-9">
            <Feature checked text="Introduction to programming basics" />
            <Feature checked text="Interactive robotics lessons" />
            <Feature checked text="Hands-on STEM experiments" />
            <Feature checked text="Creative project building" />
            <Feature checked text="Logical thinking development" />
            <Feature checked text="Teamwork and collaboration skills" />
          </div>
        </motion.div>

        {/* Card 2 */}
      <motion.div
  variants={itemVariants}
  className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-6"
>
  <div className="flex flex-col items-center border-b border-gray-300 pb-6">
    <span className="mb-3 text-4xl font-medium">Ages 12 - 15</span>
    <span className="text-gray-500">Academy Curriculum</span>
  </div>

  {/* Features */}
  <div className="space-y-4 py-9">
    <Feature checked text="Advanced programming concepts" />
    <Feature checked text="Robotics and automation projects" />
    <Feature checked text="STEM problem-solving challenges" />
    <Feature checked text="Web development basics" />
    <Feature checked text="Critical and analytical thinking" />
    <Feature checked text="Collaboration on real-world projects" />
  </div>
</motion.div>


        <motion.div
  variants={itemVariants}
  className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-6"
>
  {/* Title */}
  <div className="flex flex-col items-center border-b border-gray-300 pb-6">
    <span className="mb-3 text-4xl font-medium">Ages 15 - 18</span>
    <span className="text-gray-500">Academy Curriculum</span>
  </div>

  {/* Features */}
  <div className="space-y-4 py-9">
    <Feature checked text="Full-stack web development" />
    <Feature checked text="Artificial Intelligence & Machine Learning basics" />
    <Feature checked text="Advanced robotics & engineering" />
    <Feature checked text="Data structures & algorithms introduction" />
    <Feature checked text="Entrepreneurship & innovation projects" />
    <Feature checked text="Capstone projects with real-world applications" />
  </div>
</motion.div>

      </motion.div>

      <motion.div
        style={{ y }}
        className="absolute bottom-2 right-[-80px] -translate-y-1/2"
      >
        <FaUserGraduate className="text-6xl text-blue-500" />
      </motion.div>
    </motion.div>
  );
}

function Feature({ checked = false, text }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`grid size-5 place-content-center rounded-full text-sm ${
          checked ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-600"
        }`}
      >
        {checked ? (
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        ) : (
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        )}
      </span>
      <span className="text-sm text-gray-400">{text}</span>
    </div>
  );
}
