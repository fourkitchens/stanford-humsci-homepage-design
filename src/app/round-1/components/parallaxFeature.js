'use client'

import React, { useEffect, useRef } from "react";
import mediaImage from "@/assets/images/rumsey-history-0283-enhanced-nr.webp"
import Image from "next/image"
import { motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
  useSpring } from "framer-motion";

export default function ParallaxFeature() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  // Smooth the parallax movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform for the parallax effect
  const y = useTransform(smoothProgress, [0, 1], ["0%", "-20%"]);
  
  // Optional: Add a subtle scale effect
  const scale = useTransform(smoothProgress, [0, 1], [1, 1.5]);

  return (
    <div 
      ref={targetRef}
      className="h-screen w-full relative overflow-hidden flex flex-col items-start justify-start"
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 w-full overflow-hidden z-0"
      >
        <Image 
          src={mediaImage} 
          alt="Jasper Ridge" 
          className="w-full h-[120%] object-cover z-10 relative"
          priority
          quality={90}
          sizes="100vw"
        />
      </motion.div>

      <div className="z-10 relative max-w-4xl space-y-4 bg-cardinal-red-dark text-white p-15 h-full w-1/3 pt-32">
        <h3 className="text-balance text-xl font-bold uppercase text-humsci-gold">Charting the Past with Digital Maps</h3>
        <h2 className="text-balance text-4xl font-bold">History Student Christian Robles-Baez Explores Rare Cartographic Treasures at the David Rumsey Map Center
        </h2>
        <p className="text-balance text-lg">As part of a Department of History tour, student Christian Robles-Baez engages with the David Rumsey Map Center’s expansive digital archive, gaining firsthand experience with the unique cartographic tools and resources available to Stanford scholars.
        </p>
        <a href="#" className="text-xl inline-block mt-8 px-6 py-3 font-bold border top-0 border-humsci-gold hover:bg-white hover:text-cardinal-red-dark transition-all duration-300">
            Explore What Moves You
          </a>
      </div>

      
    </div>
  )
}