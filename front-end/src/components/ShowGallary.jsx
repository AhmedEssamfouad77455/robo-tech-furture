import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import imageShow from "../assets/ShowImage.jpg";
import imageShow1 from "../assets/ShowImage5.jpg";
import imageShow2 from "../assets/ShowImage6.jpg";
import imageShow3 from "../assets/ShowImage4.jpg";
import imageShow4 from "../assets/ShowImage1.jpg";
import imageShow5 from "../assets/ShowImage3.jpg";
import imageShow6 from "../assets/ShowImage7.jpg";

const ShowGallery = () => {
  const [stopScroll, setStopScroll] = useState(false);

  const cardData = [
    {
      title: "Unlock Your Creative Flow",
      image:imageShow ,
    },
    {
      title: "Design Your Digital Future",
      image: imageShow1,
    },
    {
      title: "Build with Passion, Ship with Pride",
      image:imageShow2
    },
    {
      title: "Think Big, Code Smart",
      image:imageShow3
        
    },
    {
      title: "Think Big, Code Smart",
      image:imageShow4
        
    },
    {
      title: "Think Big, Code Smart",
      image:imageShow5
        
    },
    {
      title: "Think Big, Code Smart",
      image:imageShow6
        
    },
  ];

  // لكل سكشن Ref و inView خاص بيه
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], ["0%", "50%"]);

  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: featuresRef, inView: featuresInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: bannerRef, inView: bannerInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      className="overflow-hidden w-full relative max-w-6xl mx-auto mt-52"
      onMouseEnter={() => setStopScroll(true)}
      onMouseLeave={() => setStopScroll(false)}
    >
         <h1 className="text-orange-400 text-4xl font-semibold text-center mx-auto">
      Our Winning Moments
      </h1>
      <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />


      <motion.div
        className="flex w-fit"
        animate={{
          x: stopScroll ? 0 : ["0%", "-50%"], // looping
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: cardData.length * 2.5,
          ease: "linear",
        }}
      >
        {[...cardData, ...cardData].map((card, index) => (
          <div
            key={index}
            className=" m-10 w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300"
          >
            <img
              src={card.image}
              alt="card"
              className="w-full h-full object-cover"
            />
            <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
              <p className="text-orange-300 text-lg font-semibold text-center">
                {card.title}
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
    </div>
  );
};

export default ShowGallery;
