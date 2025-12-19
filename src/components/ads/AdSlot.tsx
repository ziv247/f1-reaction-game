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
 * - Hides completely if ad blocked/fails or on localhost
 */
export function AdSlot({ style }: AdSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const adRef = useRef<HTMLModElement>(null);
  const pushCalledRef = useRef(false);
  const [adLoaded, setAdLoaded] = useState(false);
  const [checkComplete, setCheckComplete] = useState(false);

  // Check if running on localhost (ads don't work locally)
  const isLocalhost = typeof window !== "undefined" && 
    (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");

  useEffect(() => {
    // Skip on localhost or if disabled
    if (isLocalhost) return;
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

    // Check if ad loaded after 2 seconds
    const checkTimer = setTimeout(() => {
      setCheckComplete(true);
      if (containerRef.current) {
        // Check if any iframe with actual content was inserted
        const iframe = containerRef.current.querySelector('iframe');
        const insElement = adRef.current;
        const hasContent = iframe && iframe.offsetHeight > 0;
        const insHasHeight = insElement && insElement.offsetHeight > 10;
        
        if (hasContent || insHasHeight) {
          setAdLoaded(true);
        }
      }
    }, 2000);

    return () => {
      clearTimeout(pushTimer);
      clearTimeout(checkTimer);
    };
  }, [isLocalhost]);

  // Don't render on localhost, if disabled, or if check completed without ad loading
  if (isLocalhost || !adsenseConfig.isEnabled || (checkComplete && !adLoaded)) {
    return null;
  }

  return (
    <>
      <AdSenseScript />
      <div
        ref={containerRef}
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0,0,0,0.9)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          zIndex: 1000,
          // Hide until we confirm ad loaded (prevents white flash)
          opacity: adLoaded ? 1 : 0,
          transition: "opacity 0.3s ease",
          ...style,
        }}
      >
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{
            display: "block",
            width: "100%",
            maxWidth: "728px",
            height: "50px",
          }}
          data-ad-client={adsenseConfig.clientId}
          data-ad-slot={adsenseConfig.slotId}
          data-ad-format="horizontal"
        />
      </div>
    </>
  );
}

