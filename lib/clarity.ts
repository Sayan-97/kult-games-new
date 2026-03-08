"use client";

import clarity from "@microsoft/clarity";

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

function logClarityDebug(message: string, details?: unknown) {
  console.log("[ClarityDebug]", message, details ?? "");
}

export function initClarity(projectId?: string) {
  if (typeof window === "undefined") {
    return;
  }

  if (!projectId) {
    logClarityDebug("init skipped: missing project id");
    return;
  }

  logClarityDebug("init start", { projectId });
  clarity.init(projectId);
  logClarityDebug("init called", {
    hasWindowClarity: typeof window.clarity,
    scriptInjected: Boolean(document.getElementById("clarity-script")),
  });
}

export function trackClarityEvent(eventName: string) {
  if (typeof window === "undefined") {
    return;
  }

  logClarityDebug("event dispatch", {
    eventName,
    hasWindowClarity: typeof window.clarity,
    scriptInjected: Boolean(document.getElementById("clarity-script")),
  });
  clarity.event(eventName);
}

export function setClarityTag(key: string, value: string) {
  if (typeof window === "undefined") {
    return;
  }

  logClarityDebug("tag set", {
    key,
    value,
    hasWindowClarity: typeof window.clarity,
  });
  clarity.setTag(key, value);
}
