import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LottieAnimation from './LottieAnimation';

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    image: "https://montecafe.com.au/wp-content/uploads/2024/10/MonteCafeOct24.CopyrightAndCreditMegannEvansPhotography-244-Enhanced-NR-1-optimised.webp",
    title: "Freshly Roasted",
    description: "Our beans are roasted locally every week for the perfect cup."
  },
  {
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
    title: "Laidback Vibe",
    description: "A space designed for friends, catch-ups, and coastal days."
  },
  {
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2069&auto=format&fit=crop",
    title: "River Views",
    description: "Enjoy your morning coffee with views of the Hunter River."
  }
];

export default function IntroCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (containerRef.current && cardsRef.current.length) {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      
      // Clear any existing scroll triggers
      ScrollTrigger.getAll().filter(st => st.vars.trigger === containerRef.current).forEach(st => st.kill());

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${cards.length * 100}%`,
          pin: true,
          scrub: 1,
        }
      });

      cards.forEach((card, index) => {
        if (index === 0) return; // First card stays put

        tl.fromTo(card, 
          { 
            y: "100vh",
            rotate: index % 2 === 0 ? 5 : -5,
            scale: 0.9
          },
          { 
            y: index * 40, // Small offset to show stacking
            rotate: (index % 2 === 0 ? 2 : -2) + (Math.random() * 2 - 1),
            scale: 1,
            ease: "none",
            duration: 1
          },
          index * 0.8 // Stagger the start
        );
      });
    }
  }, []);

  return (
    <section ref={containerRef} className="relative z-20 min-h-screen bg-monte-light flex flex-col items-center justify-start overflow-hidden py-24 px-4 lg:px-10">
      <div className="w-full max-w-5xl mx-auto relative mb-32 h-[60vh] md:h-[70vh]">
        {slides.map((slide, index) => (
          <div
            key={index}
            ref={el => { cardsRef.current[index] = el; }}
            className="absolute inset-0 flex items-center justify-center"
            style={{ zIndex: index + 1 }}
          >
            <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-monte-orange group">
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover aspect-video" />
              <div className="absolute inset-0 bg-linear-to-t from-monte-orange/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-monte-light">
                <h3 className="text-3xl font-bold mb-2 uppercase tracking-wider">{slide.title}</h3>
                <p className="text-lg opacity-90">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <div className="flex justify-center mb-8">
          <LottieAnimation path="/lottie/hello-smile.json" className="w-[180px] h-[180px] md:w-[240px] md:h-[220px]" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl uppercase font-medium max-w-[40ch] mx-auto leading-tight text-monte-orange"
        >
          Monte is for laidback brekkies, catch-ups with friends, takeaway goodies, & days that you never want to end.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 md:mt-16 flex justify-center"
        >
          <button className="px-12 py-4 border-2 border-monte-orange rounded-full uppercase tracking-widest font-medium text-monte-orange bg-monte-light shadow-[4px_4px_0_var(--color-monte-orange)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--color-monte-orange)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all">
            Book a table
          </button>
        </motion.div>
      </div>
    </section>
  );
}
