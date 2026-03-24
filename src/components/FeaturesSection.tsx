import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import LottieAnimation from './LottieAnimation';

const features = [
  {
    title: "Set on Honeysuckle Drive with views onto Hunter River, Monte welcomes guests from morning through to late afternoon.",
    images: [
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop"
    ],
    align: 'left',
    lottiePath: '/lottie/coffee.json'
  },
  {
    title: "You'll find us tucked underneath Little National Hotel, serving an all-day brunch menu, baked treats, & damn good coffee.",
    images: [
      "https://images.unsplash.com/photo-1484723091791-0fee59cb0c47?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=2080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513442542250-854d436a73f2?q=80&w=2047&auto=format&fit=crop"
    ],
    align: 'right',
    lottiePath: '/lottie/biker.json'
  }
];

export default function FeaturesSection() {
  return (
    <div className="border-t-2 border-monte-orange">
      {features.map((feature, idx) => (
        <FeatureRow key={idx} feature={feature} index={idx} />
      ))}
    </div>
  );
}

interface FeatureRowProps {
  feature: any;
  index: number;
}

const FeatureRow: React.FC<FeatureRowProps> = ({ feature, index }) => {
  const isEven = index % 2 === 0;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="border-b-2 border-monte-orange py-16 md:py-32 overflow-hidden">
      <div className="max-w-[125rem] mx-auto px-4 lg:px-10">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>

          {/* Images */}
          <div className="w-full lg:w-1/2">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              <Swiper
                effect={'cards'}
                grabCursor={true}
                loop={true}
                modules={[EffectCards, Navigation]}
                navigation={{
                  prevEl: `.swiper-prev-${index}`,
                  nextEl: `.swiper-next-${index}`,
                }}
                className="w-full aspect-[4/5] rounded-2xl overflow-hidden"
              >
                {feature.images.map((src: string, i: number) => (
                  <SwiperSlide key={i} className="rounded-2xl overflow-hidden border-2 border-monte-orange">
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-4 z-10">
                <button className={`swiper-prev-${index} w-12 h-12 rounded-full border-2 border-monte-orange flex items-center justify-center text-monte-orange bg-monte-light shadow-[4px_4px_0_var(--color-monte-orange)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--color-monte-orange)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all`}>
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button className={`swiper-next-${index} w-12 h-12 rounded-full border-2 border-monte-orange flex items-center justify-center text-monte-orange bg-monte-light shadow-[4px_4px_0_var(--color-monte-orange)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--color-monte-orange)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all`}>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center mt-12 lg:mt-0">
            <motion.div style={{ y }} className="max-w-md">
              <div className="mb-8 flex justify-center">
                <LottieAnimation path={feature.lottiePath} className="w-[200px] h-[200px] md:w-[300px] md:h-[280px]" />
              </div>
              <h3 className="text-xl md:text-2xl uppercase font-medium leading-relaxed text-monte-orange">
                {feature.title}
              </h3>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
