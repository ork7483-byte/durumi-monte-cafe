import React, { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

interface LottieAnimationProps {
    path: string;
    loop?: boolean;
    autoplay?: boolean;
    className?: string;
}

export default function LottieAnimation({
    path,
    loop = true,
    autoplay = true,
    className = ''
}: LottieAnimationProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const animRef = useRef<AnimationItem | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        animRef.current = lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop,
            autoplay,
            path,
        });

        return () => {
            animRef.current?.destroy();
        };
    }, [path, loop, autoplay]);

    return <div ref={containerRef} className={className} />;
}
