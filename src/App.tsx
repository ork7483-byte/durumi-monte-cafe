/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import IntroCarousel from './components/IntroCarousel';
import FeaturesSection from './components/FeaturesSection';
import MenuSection from './components/MenuSection';
import InstagramFeed from './components/InstagramFeed';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-monte-light min-h-screen font-sans selection:bg-monte-orange selection:text-monte-light md:cursor-none">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <IntroCarousel />
        <FeaturesSection />
        <MenuSection />
        <InstagramFeed />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

