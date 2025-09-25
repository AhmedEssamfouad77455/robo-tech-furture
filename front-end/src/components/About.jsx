import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }} // قبل الظهور
      whileInView={{ opacity: 1, y: 0 }} // أثناء الظهور
      transition={{ duration: 0.8, ease: "easeOut" }} // الترانزيشن
      viewport={{ once: true, amount: 0.2 }} // مرة واحدة عند الدخول
      className="py-16"
    >
      <h1 className="text-3xl font-semibold text-center mx-auto">
       About Robo Tech
      </h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
      An innovative academy shaping the next generation of thinkers and creators — empowering students with STEM, coding, robotics and engineering skills to turn imagination into reality.
      </p>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10 relative">
        {/* خلفية بلور */}
        <div className="size-[520px] rounded-full absolute blur-[300px] -z-10 "></div>

        {/* الصورة */}
        <motion.img
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-sm w-full rounded-xl h-auto"
          src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
          alt=""
        />

        {/* النصوص */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl font-semibold">Our Latest features</h1>
          <p className="text-sm text-slate-500 mt-2">
            Engaging, hands-on courses that make learning fun, practical, and future-ready — designed to spark creativity and problem-solving skills.
          </p>

          <div className="flex flex-col gap-10 mt-6">
            {/* 1 */}
            <div className="flex items-center gap-4">
              <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-600">
Future-Ready Skills                </h3>
                <p className="text-sm text-slate-500">
We equip students with essential STEM knowledge to excel in school and thrive in their careers.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="flex items-center gap-4">
              <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-600">
Interactive & Modern Learning                </h3>
                <p className="text-sm text-slate-500">
Dynamic, project-based lessons with a focus on innovation, teamwork, and real-world application.                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="flex items-center gap-4">
              <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-600">
Easy to Join, Fun to Learn                </h3>
                <p className="text-sm text-slate-500">
Flexible programs with simple enrollment — supported by a dedicated team of instructors passionate about teaching and inspiring.                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
