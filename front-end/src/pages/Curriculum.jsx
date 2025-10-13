import React, { useState } from "react"
import { motion } from "framer-motion"

// Curriculums.jsx
// A single-file React component (Tailwind + Framer Motion) showing
// learning programs by age group. Each course has an image, title, and detailed description.

const programs = [
  {
    ageRange: "Ages 7 - 12",
    description:
      "Fun and interactive programs designed to introduce kids to the world of technology and programming.",
    courses: [
      {
        name: "Coding Arcade (Microsoft)",
        level: "Game-based coding for kids",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Microsoft_MakeCode_logo.svg",
        details:
          "Developed by Microsoft, Coding Arcade teaches kids programming through fun and interactive game design. Using MakeCode Arcade, students learn core coding concepts like loops, variables, and events in a playful environment.",
      },
      {
        name: "MIT Scratch",
        level: "Block-based programming for beginners",
        image: "https://upload.wikimedia.org/wikipedia/en/3/3b/Scratch_Logo.png",
        details:
          "Created by the MIT Media Lab, Scratch lets children program with visual blocks. Students build stories, animations and games — strengthening logic, sequencing and creativity.",
      },
      {
        name: "Spike Robotics",
        level: "LEGO robotics and STEAM learning",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/LEGO_logo.svg",
        details:
          "Using LEGO SPIKE kits, students build and code robots using sensors and motors. This hands-on course builds engineering thinking, iteration and teamwork.",
      },
    ],
  },
  {
    ageRange: "Ages 12 - 15",
    description:
      "Intermediate-level programs that combine creativity, logic and hands-on technical foundations.",
    courses: [
      {
        name: "Web Development Basics",
        level: "HTML - CSS - JavaScript fundamentals",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60",
        details:
          "Students learn to create and style websites from scratch and add interactivity with JavaScript — preparing them for modern front-end development.",
      },
      {
        name: "App Development (MIT App Inventor)",
        level: "Build simple Android apps with drag & drop",
        image: "https://appinventor.mit.edu/images/ai2-logo.png",
        details:
          "A visual app-building environment where students design and program mobile apps without advanced syntax — great for prototyping ideas quickly.",
      },
      {
        name: "Cybersecurity Basics",
        level: "Learn how to stay safe online",
        image:
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=60",
        details:
          "Intro to online safety, secure passwords, and spotting threats. Students learn privacy best-practices and ethical internet behavior.",
      },
      {
        name: "Arduino Starter",
        level: "Intro to electronics and simple circuits",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Arduino_Logo.svg",
        details:
          "Beginner-friendly Arduino projects: LEDs, sensors and motor control. Students learn to wire circuits and write code that interacts with the physical world.",
      },
    ],
  },
  {
    ageRange: "Ages 15 - 18",
    description:
      "Advanced programs that explore AI, IoT, full-stack web, and real-world technology applications.",
    courses: [
      {
        name: "Full Web Development",
        level: "React - APIs - Backend basics",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=60",
        details:
          "An in-depth pathway covering front-end frameworks (React), fetching data from APIs, and basics of server-side logic — building deployable web apps.",
      },
      {
        name: "AI & Machine Learning",
        level: "Explore artificial intelligence concepts",
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
        details:
          "Hands-on introduction to ML concepts: data, models, and simple projects like classification tasks and chatbots. Emphasis on intuition and ethical use of AI.",
      },
      {
        name: "Arduino Advanced Projects",
        level: "Robotics & IoT projects",
        image: "https://images.unsplash.com/photo-1581091870622-3f39f7b3a3ec?auto=format&fit=crop&w=800&q=60",
        details:
          "Complex Arduino systems: IoT sensors, actuator control, and robotics. Students integrate hardware and software to build real-world prototypes.",
      },
      {
        name: "Digital Marketing",
        level: "Social media, SEO & ads",
        image:
          "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=60",
        details:
          "An applied course teaching social media strategies, basic SEO, content creation and online advertising — useful skills for digital projects and entrepreneurship.",
      },
    ],
  },
]

const Card = ({ course }) => {
  return (
    <motion.div
      layout
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden border h-100 border-gray-100"
    >
      <div className="w-full h-40 sm:h-48 relative">
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            // fallback to a neutral image if remote fails
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=60"
          }}
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{course.name}</h3>
        <p className="text-sm text-indigo-600 mb-2">{course.level}</p>
        <p className="text-sm text-gray-600 leading-relaxed">{course.details}</p>
      </div>
    </motion.div>
  )
}

const Curriculums = () => {
  const [selected, setSelected] = useState(null)

  return (
    <div className="min-h-screen bg-gray-50 py-50  px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
          Learning Programs by Age Group
        </h1>

        <div className="space-y-12">
          {programs.map((group, gi) => (
            <section key={gi}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-semibold">{group.ageRange}</h2>
                  <p className="text-sm text-gray-600">{group.description}</p>
                </div>
             
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {group.courses.map((course, i) => (
                  <div key={i} onClick={() => setSelected(course)}>
                    <Card course={course} />
                  </div>
                ))}
              </motion.div>
            </section>
          ))}
        </div>

        {/* Modal for selected course details */}
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setSelected(null)}
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.18 }}
              className="relative max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="w-full h-56">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selected.name}</h3>
                <p className="text-indigo-600 mb-4">{selected.level}</p>
                <p className="text-gray-700 mb-6">{selected.details}</p>

                <div className="flex justify-end">
                  <button
                    onClick={() => setSelected(null)}
                    className="px-4 py-2 bg-gray-100 rounded-md text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Curriculums
