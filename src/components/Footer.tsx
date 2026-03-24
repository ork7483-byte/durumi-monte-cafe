import React from 'react';
import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import LottieAnimation from './LottieAnimation';

export default function Footer() {
  return (
    <footer className="bg-monte-orange text-monte-light pt-16 md:pt-32 pb-8 relative overflow-hidden">
      <div className="max-w-[125rem] mx-auto px-4 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-24">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start"
          >
            <h2 className="text-2xl md:text-3xl uppercase mb-6 font-medium">Contact</h2>
            <a href="tel:0251276009" className="text-lg mb-2 hover:opacity-70 transition-opacity">02 5127 6009</a>
            <a href="mailto:hello@montecafe.com.au" className="text-lg mb-6 hover:opacity-70 transition-opacity">hello@montecafe.com.au</a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Instagram className="w-6 h-6" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center md:items-start"
          >
            <h2 className="text-2xl md:text-3xl uppercase mb-6 font-medium">Opening Hours</h2>
            <div className="text-lg space-y-4">
              <p>
                <span className="block font-medium">Weekdays</span>
                6:30am Til 1:30pm
              </p>
              <p>
                <span className="block font-medium">Weekends</span>
                7:00am Til 2:00pm
              </p>
              <p className="text-sm opacity-80 mt-4">
                <span className="block font-medium mb-1">Holiday Trading</span>
                22nd & 23rd Dec - 6:30am - 12:30pm<br />
                Christmas Eve - 7am - 12pm<br />
                Christmas Day - Closed<br />
                Boxing Day - 7am - 2pm<br />
                27th & 28th Dec - 7am - 2pm<br />
                29th & 30th Dec - 6:30am - 1:00pm<br />
                31st Dec - 2nd Jan - 7am - 1pm
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center md:items-start"
          >
            <h2 className="text-2xl md:text-3xl uppercase mb-6 font-medium">Find Us</h2>
            <p className="text-lg mb-4">
              Shop 1, 42 Honeysuckle Dr.<br />
              Newcastle NSW 2300
            </p>
            <a href="#" className="uppercase tracking-widest text-sm font-medium hover:opacity-70 transition-opacity border-b border-monte-light pb-1">
              I need a real map →
            </a>
          </motion.div>

        </div>

        {/* Large bottom graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.2, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-8 md:-mb-12 relative z-0"
        >
          <LottieAnimation path="/lottie/footer.json" className="w-full max-w-[690px] h-[312px] opacity-40" />
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-80 pt-8 border-t border-monte-light/20 relative z-10">
          <p>© 2026 Monte, a Doma Hotels venue.</p>
          <p className="mt-2 md:mt-0">Site by Swell.</p>
        </div>
      </div>
    </footer>
  );
}
