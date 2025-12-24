"use client";

import { motion, Variants, useInView, TargetAndTransition } from "framer-motion";
import { ReactNode, useRef, useEffect, useState } from "react";
import { useScrollDirection } from "@/hooks/use-scroll-direction";

// Animation variants for different effects
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

// Reusable animated wrapper component with directional logic
interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    variant?: Variants;
    delay?: number;
    threshold?: number;
}

export function AnimatedSection({
    children,
    className = "",
    variant = fadeInUp,
    delay = 0,
    threshold = 0.2
}: AnimatedSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: threshold, once: false });
    const direction = useScrollDirection();
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isInView && direction === "down") {
            setHasAnimated(true);
        } else if (!isInView && direction === "up") {
            // Reset only if it leaves from the bottom
            setHasAnimated(false);
        }
    }, [isInView, direction]);

    const isVisible = hasAnimated || isInView;
    const isScrollingUp = direction === "up";

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={{
                ...variant,
                visible: {
                    ...variant.visible,
                    transition: {
                        ...(variant.visible as TargetAndTransition)?.transition,
                        ...(isScrollingUp ? { duration: 0, delay: 0 } : { delay })
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Animated heading
export function AnimatedHeading({
    children,
    className = ""
}: {
    children: ReactNode;
    className?: string
}) {
    return (
        <AnimatedSection className={className}>
            {children}
        </AnimatedSection>
    );
}

// Staggered container for lists/grids
export function StaggeredContainer({
    children,
    className = ""
}: {
    children: ReactNode;
    className?: string
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.1, once: false });
    const direction = useScrollDirection();
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isInView && direction === "down") {
            setHasAnimated(true);
        } else if (!isInView && direction === "up") {
            setHasAnimated(false);
        }
    }, [isInView, direction]);

    const isVisible = hasAnimated || isInView;
    const isScrollingUp = direction === "up";

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={{
                ...staggerContainer,
                visible: {
                    ...staggerContainer.visible,
                    transition: {
                        ...(staggerContainer.visible as TargetAndTransition)?.transition,
                        ...(isScrollingUp ? { staggerChildren: 0, delayChildren: 0 } : {})
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Staggered item
export function StaggeredItem({
    children,
    className = ""
}: {
    children: ReactNode;
    className?: string
}) {
    return (
        <motion.div variants={staggerItem} className={className}>
            {children}
        </motion.div>
    );
}

// Hover scale effect wrapper
export function HoverScale({
    children,
    className = "",
    scale = 1.03
}: {
    children: ReactNode;
    className?: string;
    scale?: number;
}) {
    return (
        <motion.div
            whileHover={{ scale }}
            transition={{ duration: 0.2 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
