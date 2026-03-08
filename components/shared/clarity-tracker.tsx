"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import constants from "@/constants/constants.json";
import { initClarity, setClarityTag, trackClarityEvent } from "@/lib/clarity";

const CLARITY_PROJECT_ID = constants.CLARITY_PROJECT_ID;

export default function ClarityTracker() {
  const pathname = usePathname();

  useEffect(() => {
    initClarity(CLARITY_PROJECT_ID);
  }, []);

  useEffect(() => {
    if (!pathname) {
      return;
    }

    setClarityTag("route", pathname);
    trackClarityEvent(`page_view:${pathname === "/" ? "home" : pathname.slice(1).replaceAll("/", "_")}`);
  }, [pathname]);

  return null;
}
