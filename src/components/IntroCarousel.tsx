import React from 'react';
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import LottieAnimation from './LottieAnimation';

const images = [
  "https://montecafe.com.au/wp-content/uploads/2024/10/MonteCafeOct24.CopyrightAndCreditMegannEvansPhotography-244-Enhanced-NR-1-optimised.webp",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2069&auto=format&fit=crop"
];

export default function IntroCarousel() {
  return (
    <section className="relative z-20 -mt-20 md:-mt-32 pb-16 md:pb-32 px-4 lg:px-10 max-w-[125rem] mx-auto">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          <Swiper
            effect={'cards'}
            grabCursor={true}
            loop={true}
            modules={[EffectCards, Navigation]}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            className="w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index} className="rounded-2xl overflow-hidden border-4 border-monte-orange">
                <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-4 z-10">
            <button className="swiper-button-prev-custom w-12 h-12 rounded-full border-2 border-monte-orange flex items-center justify-center text-monte-orange bg-monte-light shadow-[4px_4px_0_var(--color-monte-orange)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--color-monte-orange)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button className="swiper-button-next-custom w-12 h-12 rounded-full border-2 border-monte-orange flex items-center justify-center text-monte-orange bg-monte-light shadow-[4px_4px_0_var(--color-monte-orange)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--color-monte-orange)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div className="mt-32 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8 md:mb-12"
          >
            <LottieAnimation path="/lottie/hello-smile.json" className="w-[200px] h-[200px] md:w-[274px] md:h-[240px]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
      </div>
    </section>
  );
}
