import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  const [count, setCount] = useState(500); 

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1); 
    }, 1000);
    return () => clearInterval(timer); 
  }, []);

  return (
    <div
      className="w-full h-screen flex items-center flex-col gap-4 justify-between pt-24 bg-center"
      style={{ backgroundImage: `url(${assets.heroImage})` }}
    >
      <div className="pt-10  flex flex-col gap-30 items-center justify-center">

<img src={assets.logo} alt="" className="w-80" />
      <div className="flex gap-8">
        <a href="/contact-us" className="bg-[#CB6CE6] text-white font-bold px-6 py-2 rounded-lg">Find RoboTech </a>
        <button className="bg-[#CB6CE6] text-white font-bold px-6 py-2 rounded-lg">
          Franchise Opportunity
        </button>
      </div>
      </div>

      <div className="text-xl bg-[#CB6CE6] text-white w-full text-center py-6  mt-6">
        
         Join {count} + kids around the world
      </div>
    </div>
  );
};

export default Hero;
