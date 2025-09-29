// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.25,
//       delayChildren: 0.3,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, x: 400, scale: 0.98 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     scale: 1,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
// };





import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const totalSlides = 5;

  const goToSlide = (index) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth; // العرض كله
      sliderRef.current.querySelector(
        ".slider-inner"
      ).style.transform = `translateX(-${index * slideWidth}px)`;
    }
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  useEffect(() => {
    goToSlide(currentSlide);
  }, [currentSlide]);

  return (
    <div className="flex flex-col items-center my-16 h-screen w-full">
      {/* Slider */}
      <div ref={sliderRef} className="w-full overflow-hidden relative">
        <div className="flex transition-transform duration-500 ease-in-out slider-inner">
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide1.png"
            className="w-full h-screen  flex-shrink-0"
            alt="Slide 1"
          />
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide2.png"
            className="w-full h-screen object-cover flex-shrink-0"
            alt="Slide 2"
          />
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide3.png"
            className="w-full h-screen object-cover flex-shrink-0"
            alt="Slide 3"
          />
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide4.png"
            className="w-full h-screen object-cover flex-shrink-0"
            alt="Slide 4"
          />
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide5.png"
            className="w-full h-screen object-cover flex-shrink-0"
            alt="Slide 5"
          />
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center mt-5 space-x-2">
        {[...Array(totalSlides)].map((_, i) => (
          <span
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentSlide === i ? "bg-black" : "bg-black/20"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}

  // const { ref: heroRef, inView: heroInView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.2,
  // });

  // return (
    // <section
    //   ref={heroRef}
    //   className="overflow-hidden w-full py-42 h-screen bg-orange-400  "
    // >
     

    //   <div  className="flex flex-col lg:flex-row items-center justify-center gap-10">


    //     <motion.div
    //       initial={{ opacity: 0, x: -400 }}
    //       variants={itemVariants}
    //       animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -400 }}

    //       transition={{ duration: 0.8, ease: "easeOut" }}


    //       className="hidden lg:block relative">
    //         <motion.h1 className="text-5xl  font-semibold text-center mx-auto absolute top-[150px] right-[60px] rotate-12 animate-bounce">
    //           Hiiii!
    //         </motion.h1>

    //       <img src="/public/orange_bot2-topaper-removebg-preview.png" className="w-[350px]" alt="" />
    //     </motion.div>

    //     <motion.div
    //       className="max-w-4xl text-center px-6"
    //       variants={containerVariants}
    //       initial="hidden"
    //       animate={heroInView ? "visible" : "hidden"}
    //     >
    //       <motion.h1
    //         variants={itemVariants}
    //         className="text-white text-4xl md:text-6xl font-extrabold mb-6"
    //       >
    //         Think . Code . Win
    //       </motion.h1>

    //       <motion.p
    //         variants={itemVariants}
    //         className="text-white text-lg md:text-xl mb-8 max-w-xl mx-auto"
    //       >
    //         Every line of code brings you closer to your dream. Start today.
    //       </motion.p>

    //       <motion.div variants={itemVariants}>
    //         <button className="px-6 py-3 bg-white text-orange-400 font-semibold rounded-2xl shadow-md hover:bg-indigo-100 transition">
    //           Get Started
    //         </button>
    //       </motion.div>
    //     </motion.div>
    //   </div>

    // </section>
    // <>
    // {/* </> */}

  // );
// };

// export default Hero;
