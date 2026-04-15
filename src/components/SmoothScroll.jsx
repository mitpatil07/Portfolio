import React, { useEffect } from 'react';
import Lenis from 'lenis';

const SmoothScroll = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 0.9,
            touchMultiplier: 1.5,
            infinite: false,
        });

        // Force scroll to top on refresh
        window.history.scrollRestoration = 'manual';
        lenis.scrollTo(0, { immediate: true });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Global lenis instance for use in other components
        window.lenis = lenis;

        return () => {
            lenis.destroy();
            window.lenis = null;
        };
    }, []);

    return <>{children}</>;
};

export default SmoothScroll;
