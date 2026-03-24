import React from 'react';
import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

const images = [
  "https://montecafe.com.au/wp-content/uploads/sb-instagram-feed-images/561150810_17900212659281017_893698474383705248_nfull.webp",
  "https://montecafe.com.au/wp-content/uploads/sb-instagram-feed-images/537558828_17894908392281017_5589552330757573607_nfull.webp",
  "https://montecafe.com.au/wp-content/uploads/sb-instagram-feed-images/523110242_17891284557281017_577345723125798596_nfull.webp",
  "https://montecafe.com.au/wp-content/uploads/sb-instagram-feed-images/519712177_17890387779281017_391733830532026430_nfull.webp",
  "https://montecafe.com.au/wp-content/uploads/sb-instagram-feed-images/517018441_17889565431281017_4387403725386544838_nfull.webp",
  "https://montecafe.com.au/wp-content/uploads/sb-instagram-feed-images/514481359_17888722812281017_7968527838042819530_nfull.webp"
];

export default function InstagramFeed() {
  return (
    <section className="border-b-2 border-monte-orange py-16 md:py-32 overflow-hidden">
      <div className="max-w-[125rem] mx-auto px-4 lg:px-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl uppercase mb-8 font-medium"
        >
          Oh, hello
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex items-center gap-4"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-monte-dark rounded-full flex items-center justify-center text-monte-light">
            <Instagram className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">monte.newcastle</h3>
            <p className="text-sm opacity-80">12 posts</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {images.map((src, idx) => (
            <motion.a 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx} 
              href="#" 
              className="group relative aspect-square rounded-2xl overflow-hidden border-2 border-monte-orange block"
            >
              <img src={src} alt="Instagram post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-monte-orange/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-monte-light p-4 text-center text-sm">
                <p className="line-clamp-3">View on Instagram</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <a href="#" className="px-12 py-4 border-2 border-monte-orange rounded-full uppercase tracking-widest font-medium text-monte-orange bg-monte-light shadow-[4px_4px_0_var(--color-monte-orange)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--color-monte-orange)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all inline-block">
            Follow
          </a>
        </motion.div>
      </div>
    </section>
  );
}
