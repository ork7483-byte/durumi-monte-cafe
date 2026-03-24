import React from 'react';
import { motion } from 'motion/react';

export default function Newsletter() {
  return (
    <section className="py-16 md:py-32 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto px-4 text-center"
      >
        <h2 className="text-2xl md:text-4xl uppercase font-medium mb-8 leading-tight">
          Caffeinate your inbox with tasty updates, specials & more.
        </h2>
        
        <form className="flex flex-col gap-4 max-w-md mx-auto">
          <input 
            type="text" 
            placeholder="First name" 
            className="w-full px-6 py-4 rounded-full border-2 border-monte-orange bg-transparent placeholder:text-monte-orange/60 focus:outline-none focus:ring-2 focus:ring-monte-orange/50"
            required
          />
          <input 
            type="text" 
            placeholder="Last name" 
            className="w-full px-6 py-4 rounded-full border-2 border-monte-orange bg-transparent placeholder:text-monte-orange/60 focus:outline-none focus:ring-2 focus:ring-monte-orange/50"
            required
          />
          <input 
            type="email" 
            placeholder="Email address" 
            className="w-full px-6 py-4 rounded-full border-2 border-monte-orange bg-transparent placeholder:text-monte-orange/60 focus:outline-none focus:ring-2 focus:ring-monte-orange/50"
            required
          />
          
          <button type="submit" className="px-12 py-4 mt-4 border-2 border-monte-orange rounded-full uppercase tracking-widest font-medium text-monte-orange bg-monte-light shadow-[4px_4px_0_var(--color-monte-orange)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--color-monte-orange)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all">
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  );
}
