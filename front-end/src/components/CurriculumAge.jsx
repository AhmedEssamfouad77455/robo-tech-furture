import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaUserGraduate } from "react-icons/fa";

export default function CurriculumAge() {
  const { scrollYProgress } = useScroll();

  // حركة الأيقونة
  const y = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, -500, 0, -500, 0]
  );

  // inView للكشف عن القسم
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // حاوية القسم
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

  // حركة العناصر الداخلية
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
        className="text-center text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl"
      >
        Pricing
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
            <span className="mb-6 text-gray-800">Free</span>
            <span className="mb-3 text-4xl font-medium">$0/mo</span>
            <span className="text-gray-500">Best for 1-5 users</span>
          </div>
          <div className="space-y-4 py-9">
            <Feature checked text="One workspace" />
            <Feature checked text="Email support" />
            <Feature text="Basic analytics" />
            <Feature text="Team collaboration" />
            <Feature text="Priority support" />
            <Feature text="Unlimited file storage" />
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={itemVariants}
          className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-6"
        >
          <div className="flex flex-col items-center border-b border-gray-300 pb-6">
            <span className="mb-6 text-gray-800">Pro</span>
            <span className="mb-3 text-4xl font-medium">$79/mo</span>
            <span className="text-gray-500">Best for 5-50 users</span>
          </div>
          <div className="space-y-4 py-9">
            <Feature checked text="One workspace" />
            <Feature checked text="Email support" />
            <Feature checked text="Basic analytics" />
            <Feature checked text="Team collaboration" />
            <Feature text="Priority support" />
            <Feature text="Unlimited file storage" />
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={itemVariants}
          className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-6"
        >
          <div className="flex flex-col items-center border-b border-gray-300 pb-6">
            <span className="mb-6 text-gray-800">Enterprise</span>
            <span className="mb-3 text-4xl font-medium">Contact us</span>
            <span className="text-gray-500">Best for 50+ users</span>
          </div>
          <div className="space-y-4 py-9">
            <Feature checked text="One workspace" />
            <Feature checked text="Email support" />
            <Feature checked text="Basic analytics" />
            <Feature checked text="Team collaboration" />
            <Feature checked text="Priority support" />
            <Feature checked text="Unlimited file storage" />
          </div>
        </motion.div>
      </motion.div>

      {/* الأيقونة */}
      <motion.div
        style={{ y }}
        className="absolute bottom-2 right-[-80px] -translate-y-1/2"
      >
        <FaUserGraduate className="text-6xl text-blue-500" />
      </motion.div>
    </motion.div>
  );
}

// كومبوننت للمميزات
function Feature({ checked = false, text }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`grid size-5 place-content-center rounded-full text-sm ${
          checked ? "bg-indigo-500 text-white" : "bg-gray-200 text-gray-600"
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
