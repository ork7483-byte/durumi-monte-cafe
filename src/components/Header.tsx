import React, { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-monte-light/90 backdrop-blur-md text-monte-orange' : 'bg-transparent text-monte-light'
      }`}
    >
      <div className="max-w-[125rem] mx-auto px-4 lg:px-10 h-20 flex items-center justify-between">
        <button className="uppercase text-sm tracking-widest font-medium hover:opacity-70 transition-opacity">
          Menu
        </button>

        <a href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg height="26" viewBox="0 0 124 26" fill="currentColor" className="h-6">
            <path d="M108.136 11.688h11.092c0-2.783-1.869-5.089-5.447-5.089-3.141 0-5.208 2.107-5.645 5.089Zm15.504 8.23c-.874 2.902-3.617 6.082-9.223 6.082-6.401 0-10.177-4.572-10.177-10.257 0-6.957 4.452-11.609 10.535-11.609 5.804 0 8.826 3.658 8.826 8.429v1.113h-15.585c0 5.486 2.386 8.865 7.633 8.865 3.3 0 5.527-1.51 6.838-3.14l1.153.517Zm-24.648 3.18c-2.426 0-3.657-1.272-3.657-4.135V6.72h6.201V4.532h-6.201V0H94.14c-2.027 2.544-3.737 4.055-5.843 5.327v1.392h3.06v13.636c0 4.094 2.744 5.645 5.765 5.645 2.743 0 4.532-1.391 5.526-2.505l-.477-1.113a7.11 7.11 0 0 1-3.18.716Zm-14.67-1.312V10.654c0-4.651-2.743-6.52-6.64-6.52-3.14 0-6.32 1.988-8.07 3.896l.199-3.896H68.42l-5.765 1.988v.954l2.982 1.392v13.318c0 1.829-1.352 2.028-3.18 2.266v1.55h10.336v-1.55c-1.829-.238-3.18-.437-3.18-2.266V9.82c1.669-1.352 4.412-2.466 6.559-2.466 2.624 0 4.174.915 4.174 3.857v10.575c0 1.829-1.351 2.028-3.18 2.266v1.55h10.337v-1.55c-1.83-.238-3.181-.437-3.181-2.266Zm-27.67-5.765c0-5.128-2.783-9.422-7.553-9.422-3.976 0-5.964 3.18-5.964 7.514 0 5.129 2.783 9.422 7.553 9.422 3.976 0 5.964-3.18 5.964-7.514Zm4.214-1.351c0 6.957-5.248 11.33-11.37 11.33-6.281 0-10.575-4.413-10.575-10.535 0-6.958 5.248-11.33 11.37-11.33 6.281 0 10.575 4.412 10.575 10.535ZM37.53 24.052v1.55H27.193v-1.55c1.829-.238 3.18-.437 3.18-2.266V11.21c0-2.624-1.39-3.857-3.936-3.857-1.907 0-4.253.994-5.684 2.346v12.086c0 1.829 1.352 2.028 3.18 2.266v1.55H13.597v-1.55c1.829-.238 3.18-.437 3.18-2.266V11.21c0-2.624-1.392-3.857-3.936-3.857-1.908 0-4.253.994-5.685 2.346v12.086c0 1.829 1.352 2.028 3.18 2.266v1.55H0v-1.55c1.829-.238 3.18-.437 3.18-2.266V8.468L.2 7.076v-.954l5.765-1.988h1.391l-.199 3.777c1.471-1.868 4.254-3.777 7.276-3.777 3.1 0 5.327 1.431 6.082 3.936 1.471-1.948 4.413-3.936 7.514-3.936 3.896 0 6.321 2.306 6.321 6.043v11.609c0 1.829 1.352 2.028 3.18 2.266Z" />
          </svg>
        </a>

        <button className="hidden md:block px-8 py-3 border-2 border-current rounded-full uppercase tracking-widest text-sm font-medium shadow-[4px_4px_0_currentColor] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_currentColor] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all">
          Book a table
        </button>
      </div>
    </motion.header>
  );
}
