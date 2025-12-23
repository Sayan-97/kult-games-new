"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

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

// Reusable animated wrapper component
interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    variant?: Variants;
    delay?: number;
}

export function AnimatedSection({
    children,
    className = "",
    variant = fadeInUp,
    delay = 0
}: AnimatedSectionProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={variant}
            className={className}
            style={{ transitionDelay: `${delay}s` }}
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
        <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className={className}
        >
            {children}
        </motion.h2>
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
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
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
