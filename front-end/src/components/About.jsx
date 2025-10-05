import { motion, useScroll, useTransform } from "framer-motion";
import myImage from "../assets/WhatsApp Image 2025-09-28 at 14.45.37_458d56a1.jpg";
import { assets } from "../assets/assets";

const About = () => {
  const { scrollY } = useScroll();

  const yLeft = useTransform(scrollY, [0, 1500], [0, -700]);
  const yRight = useTransform(scrollY, [0, 1500], [0, -700]);

  return (
    <section className="p-16 relative overflow-hidden min-h-screen">
      <motion.div
        className="absolute left-0 top-[100%] w-32 h-52"
        style={{ y: yLeft }}
        transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
      >
        <img src={assets.legoLeft} className="w-32" alt="lego left" />
      </motion.div>

      <motion.div
        className="absolute right-0 top-[100%] w-32 h-52"
        style={{ y: yRight }}
        transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
      >
        <img src={assets.legoRight} className="w-32" alt="lego right" />
      </motion.div>

      <h1 className="text-3xl font-semibold text-slate-500 text-center mx-auto">
        About RoboTech
      </h1>
      <p className="text-sm text-gray-400 text-center mt-2 max-w-md mx-auto">
        An innovative academy shaping the next generation of thinkers and
        creators — empowering students with STEM, coding, robotics and
        engineering skills to turn imagination into reality.
      </p>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10 relative">
        <div className="size-[520px] rounded-full absolute blur-[300px] -z-10"></div>

        <motion.img
          className="w-[300px] rounded-xl h-auto"
          src={myImage}
          alt="main logo"
          initial={{ opacity: 0, }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}

        >
          <h1 className="text-3xl font-semibold text-slate-500">
            Our Latest features
          </h1>
          <p className="text-sm text-slate-500 mt-2 p-3">
            Engaging, hands-on courses that make learning fun, practical, and
            future-ready — designed to spark creativity and problem-solving
            skills.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
