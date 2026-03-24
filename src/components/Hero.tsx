import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import LottieAnimation from './LottieAnimation';

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "linear"
      });
    }
  }, []);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-monte-orange text-monte-light flex flex-col justify-between pt-24 pb-8 px-4 lg:px-10">
      {/* 3D Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-monte-orange/40 mix-blend-multiply z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-background-of-orange-and-red-waves-4264-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Top Bar */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center text-sm md:text-base uppercase tracking-widest font-medium w-full max-w-[125rem] mx-auto">
        <div>Open today til 1:30PM</div>
        <div className="mt-2 md:mt-0">Newcastle <span>29</span>°c</div>
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex-grow flex items-center justify-center">
        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center">
          {/* Central Illustration (Placeholder for the face SVG) */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center z-20"
          >
            <LottieAnimation path="/lottie/pastry.json" className="w-[350px] h-[350px] md:w-[540px] md:h-[530px]" />
          </motion.div>

          {/* Rotating Text */}
          <div ref={textRef} className="absolute inset-0 z-10 w-full h-full">
            <svg viewBox="0 0 500 500" className="w-full h-full overflow-visible">
              <path id="textPath" d="M 250, 250 m -180, 0 a 180,180 0 1,1 360,0 a 180,180 0 1,1 -360,0" fill="none" />
              <text className="text-[22px] md:text-[28px] uppercase tracking-[0.2em] fill-transparent text-outline-light font-medium">
                <textPath href="#textPath" startOffset="0%">
                  Where coffee meets the coast • Where coffee meets the coast • Where coffee meets the coast •
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="relative z-10 text-center text-sm md:text-base uppercase tracking-widest font-medium pb-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-[20ch] mx-auto leading-relaxed"
        >
          Keep scrolling for<br />the good stuff.
        </motion.p>
      </div>
    </section>
  );
}
