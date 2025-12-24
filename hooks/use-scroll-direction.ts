"use client";

import { useState, useEffect } from "react";
import { useScroll, useVelocity } from "framer-motion";

export function useScrollDirection() {
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const [direction, setDirection] = useState<"up" | "down">("down");

    useEffect(() => {
        return scrollVelocity.onChange((latest) => {
            if (latest > 50) {
                setDirection("down");
            } else if (latest < -50) {
                setDirection("up");
            }
        });
    }, [scrollVelocity]);

    return direction;
}
