"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import constants from "@/constants/constants.json";
import { initClarity, setClarityTag, trackClarityEvent } from "@/lib/clarity";

const CLARITY_PROJECT_ID = constants.CLARITY_PROJECT_ID;

export default function ClarityTracker() {
  const pathname = usePathname();

  useEffect(() => {
    console.log("[ClarityDebug]", "tracker mounted", {
      projectId: CLARITY_PROJECT_ID,
    });
    initClarity(CLARITY_PROJECT_ID);

    window.setTimeout(() => {
      console.log("[ClarityDebug]", "post-init status", {
        hasWindowClarity: typeof window.clarity,
        scriptInjected: Boolean(document.getElementById("clarity-script")),
        scriptSrc: document.getElementById("clarity-script")?.getAttribute("src"),
      });
    }, 1500);
  }, []);

  useEffect(() => {
    if (!pathname) {
      console.log("[ClarityDebug]", "pathname missing, route tracking skipped");
      return;
    }

    console.log("[ClarityDebug]", "route change", { pathname });
    setClarityTag("route", pathname);
    trackClarityEvent(`page_view:${pathname === "/" ? "home" : pathname.slice(1).replaceAll("/", "_")}`);
  }, [pathname]);

  return null;
}
