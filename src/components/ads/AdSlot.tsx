"use client";

import { useEffect, useRef, useState, CSSProperties } from "react";
import { adsenseConfig } from "@/lib/adsense.config";
import { AdSenseScript } from "./AdSenseScript";

interface AdSlotProps {
  style?: CSSProperties;
}

/**
 * Renders a responsive AdSense ad unit.
 * - Lazy-loads the AdSense script
 * - Guards against duplicate push() calls
 * - Shows subtle fallback if ad blocked/fails
 */
export function AdSlot({ style }: AdSlotProps) {
  const adRef = useRef<HTMLModElement>(null);
  const pushCalledRef = useRef(false);
  const [adBlocked, setAdBlocked] = useState(false);

  useEffect(() => {
    // Skip if already pushed or disabled
    if (pushCalledRef.current) return;
    if (!adsenseConfig.isEnabled) return;
    if (typeof window === "undefined") return;

    // Small delay to ensure script has loaded
    const pushTimer = setTimeout(() => {
      if (pushCalledRef.current) return;
      pushCalledRef.current = true;

      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.warn("[AdSense] Push failed:", e);
      }
    }, 100);

    // Check if ad loaded after 3 seconds
    const checkTimer = setTimeout(() => {
      if (adRef.current) {
        const height = adRef.current.offsetHeight;
        // If height is 0 or very small, ad was likely blocked
        if (height < 10) {
          setAdBlocked(true);
        }
      }
    }, 3000);

    return () => {
      clearTimeout(pushTimer);
      clearTimeout(checkTimer);
    };
  }, []);

  // Kill switch - render nothing
  if (!adsenseConfig.isEnabled) {
    return null;
  }

  return (
    <>
      <AdSenseScript />
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          minHeight: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...style,
        }}
      >
        {adBlocked ? (
          // Subtle fallback - no shaming, just empty space with minimal visual
          <div
            style={{
              width: "100%",
              height: "100px",
              background: "rgba(255,255,255,0.02)",
              borderRadius: "8px",
              border: "1px dashed rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.2)",
              }}
            >
              ⚡
            </span>
          </div>
        ) : (
          <ins
            ref={adRef}
            className="adsbygoogle"
            style={{
              display: "block",
              width: "100%",
              minWidth: "320px",
              maxWidth: "400px",
              height: "auto",
              minHeight: "100px",
            }}
            data-ad-client={adsenseConfig.clientId}
            data-ad-slot={adsenseConfig.slotId}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        )}
      </div>
    </>
  );
}

