"use client";

import { useEffect } from "react";
import { adsenseConfig } from "@/lib/adsense.config";

// Global flag to prevent duplicate script injection
declare global {
  interface Window {
    __adsenseScriptLoaded?: boolean;
    adsbygoogle?: unknown[];
  }
}

/**
 * Lazy-loads the Google AdSense script.
 * Uses singleton pattern to ensure script is only injected once.
 * Renders nothing visible.
 */
export function AdSenseScript() {
  useEffect(() => {
    // Skip if disabled or already loaded
    if (!adsenseConfig.isEnabled) return;
    if (typeof window === "undefined") return;
    if (window.__adsenseScriptLoaded) return;

    // Check if script already exists in DOM
    const existingScript = document.querySelector(
      'script[src*="pagead2.googlesyndication.com"]'
    );
    if (existingScript) {
      window.__adsenseScriptLoaded = true;
      return;
    }

    // Create and inject script
    const script = document.createElement("script");
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseConfig.clientId}`;
    script.async = true;
    script.crossOrigin = "anonymous";
    script.onerror = () => {
      console.warn("[AdSense] Failed to load script (likely blocked)");
    };

    document.head.appendChild(script);
    window.__adsenseScriptLoaded = true;
  }, []);

  return null;
}

