"use client";

import clarity from "@microsoft/clarity";

export function initClarity(projectId?: string) {
  if (!projectId || typeof window === "undefined") {
    return;
  }

  clarity.init(projectId);
}

export function trackClarityEvent(eventName: string) {
  if (typeof window === "undefined") {
    return;
  }

  clarity.event(eventName);
}

export function setClarityTag(key: string, value: string) {
  if (typeof window === "undefined") {
    return;
  }

  clarity.setTag(key, value);
}
