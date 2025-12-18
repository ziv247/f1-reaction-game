"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// ============ Types ============
type GameState =
  | "IDLE"
  | "COUNTDOWN"
  | "SEQUENCE"
  | "ARMED"
  | "GO"
  | "RESULT"
  | "FALSE_START";

interface RatingTier {
  threshold: number;
  label: string;
  emoji: string;
  color: string;
}

// ============ Constants ============
const LIGHT_INTERVAL_MS = 350;
const MIN_ARMED_DELAY_MS = 1000;
const MAX_ARMED_DELAY_MS = 3500;
const FALSE_START_RESET_MS = 1800;
const STORAGE_KEY = "f1-reaction-best-time";
const STREAK_KEY = "f1-reaction-streak";
const PLAYS_KEY = "f1-reaction-plays";

const RATING_TIERS: RatingTier[] = [
  { threshold: 0, label: "Lightning Reflexes", emoji: "⚡", color: "#ffd700" },
  { threshold: 150, label: "F1 Elite", emoji: "🏁", color: "#ff4444" },
  { threshold: 180, label: "Pro Driver", emoji: "🚦", color: "#ff6b35" },
  { threshold: 250, label: "Solid Start", emoji: "👍", color: "#4ecdc4" },
  { threshold: 330, label: "Warming Up", emoji: "🔥", color: "#888" },
  { threshold: 500, label: "Keep Practicing", emoji: "💪", color: "#666" },
];

// ============ Helper Functions ============
function getRandomArmedDelay(): number {
  return Math.floor(
    Math.random() * (MAX_ARMED_DELAY_MS - MIN_ARMED_DELAY_MS) +
      MIN_ARMED_DELAY_MS
  );
}

function getRating(timeMs: number): RatingTier {
  for (let i = RATING_TIERS.length - 1; i >= 0; i--) {
    if (timeMs >= RATING_TIERS[i].threshold) {
      return RATING_TIERS[i];
    }
  }
  return RATING_TIERS[0];
}

function getNextTier(timeMs: number): RatingTier | null {
  for (let i = RATING_TIERS.length - 1; i >= 0; i--) {
    if (timeMs >= RATING_TIERS[i].threshold && i > 0) {
      return RATING_TIERS[i - 1];
    }
  }
  return null;
}

function tryVibrate(pattern: number | number[]): void {
  if (typeof navigator !== "undefined" && navigator.vibrate) {
    navigator.vibrate(pattern);
  }
}

function loadFromStorage(key: string): number | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(key);
  return stored ? parseInt(stored, 10) : null;
}

function saveToStorage(key: string, value: number): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, value.toString());
}

// ============ CSS Keyframes ============
const keyframes = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes fadeInScale {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  
  @keyframes goPulse {
    0%, 100% { transform: scale(1); text-shadow: 0 0 30px rgba(0,255,0,0.6), 0 0 60px rgba(0,255,0,0.3); }
    50% { transform: scale(1.1); text-shadow: 0 0 50px rgba(0,255,0,0.9), 0 0 100px rgba(0,255,0,0.5); }
  }
  
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-8px); }
    20%, 40%, 60%, 80% { transform: translateX(8px); }
  }
  
  @keyframes lightOn {
    0% { transform: scale(0.8); opacity: 0.5; }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); opacity: 1; }
  }
  
  @keyframes countUp {
    from { opacity: 0; transform: scale(0.5); }
    to { opacity: 1; transform: scale(1); }
  }
  
  @keyframes confetti {
    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; }
  }
  
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  
  @keyframes ripple {
    0% { transform: scale(1); opacity: 0.4; }
    100% { transform: scale(2.5); opacity: 0; }
  }
  
  @keyframes breathe {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.8; }
  }
  
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes bounceIn {
    0% { transform: scale(0); }
    50% { transform: scale(1.15); }
    70% { transform: scale(0.95); }
    100% { transform: scale(1); }
  }
  
  @keyframes trophy {
    0% { transform: scale(0) rotate(-180deg); }
    50% { transform: scale(1.3) rotate(10deg); }
    70% { transform: scale(0.9) rotate(-5deg); }
    100% { transform: scale(1) rotate(0deg); }
  }
`;

// ============ Generate Confetti Particles (outside component) ============
function generateConfettiParticles() {
  const colors = [
    "#ff0000",
    "#ffd700",
    "#00ff00",
    "#00bfff",
    "#ff69b4",
    "#ff4500",
  ];
  return Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 1 + Math.random() * 1,
    color: colors[Math.floor(Math.random() * colors.length)],
    size: 6 + Math.random() * 8,
    isCircle: Math.random() > 0.5,
  }));
}

// ============ Confetti Component ============
function Confetti() {
  const [particles] = useState(generateConfettiParticles);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 100,
      }}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            bottom: "-20px",
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            borderRadius: p.isCircle ? "50%" : "2px",
            animation: `confetti ${p.duration}s ease-out ${p.delay}s forwards`,
          }}
        />
      ))}
    </div>
  );
}

// ============ Ripple Effect Component ============
function TapRipple({ x, y }: { x: number; y: number }) {
  return (
    <div
      style={{
        position: "fixed",
        left: x - 50,
        top: y - 50,
        width: 100,
        height: 100,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.3)",
        animation: "ripple 0.6s ease-out forwards",
        pointerEvents: "none",
        zIndex: 50,
      }}
    />
  );
}

// ============ Progress Bar Component ============
function ProgressToNextTier({
  currentTime,
  nextTier,
}: {
  currentTime: number;
  nextTier: RatingTier | null;
}) {
  if (!nextTier) return null;

  const currentTierIndex = RATING_TIERS.findIndex(
    (t) => currentTime >= t.threshold
  );
  const currentTier = RATING_TIERS[currentTierIndex];
  const nextTierIndex = currentTierIndex - 1;

  if (nextTierIndex < 0) return null;

  const range = currentTier.threshold - nextTier.threshold;
  const progress = ((currentTier.threshold - currentTime) / range) * 100;
  const msToNext = currentTime - nextTier.threshold;

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "280px",
        marginTop: "16px",
        animation: "fadeInUp 0.5s ease-out 0.6s both",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "12px",
          color: "#666",
          marginBottom: "6px",
        }}
      >
        <span>
          {msToNext}ms to {nextTier.emoji} {nextTier.label}
        </span>
      </div>
      <div
        style={{
          height: "6px",
          background: "#333",
          borderRadius: "3px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${Math.max(0, Math.min(100, progress))}%`,
            background: `linear-gradient(90deg, ${nextTier.color}, ${nextTier.color}88)`,
            borderRadius: "3px",
            transition: "width 0.5s ease-out",
          }}
        />
      </div>
    </div>
  );
}

// ============ Main Component ============
export default function F1ReactionPage() {
  const [gameState, setGameState] = useState<GameState>("IDLE");
  const [lights, setLights] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [reactionTime, setReactionTime] = useState<number>(0);
  const [displayTime, setDisplayTime] = useState<number>(0);
  const [bestTime, setBestTime] = useState<number | null>(null);
  const [isNewRecord, setIsNewRecord] = useState<boolean>(false);
  const [shareStatus, setShareStatus] = useState<string>("");
  const [streak, setStreak] = useState<number>(0);
  const [totalPlays, setTotalPlays] = useState<number>(0);
  const [ripples, setRipples] = useState<
    { id: number; x: number; y: number }[]
  >([]);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  const goStartTimeRef = useRef<number>(0);
  const sequenceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const armedTimerRef = useRef<NodeJS.Timeout | null>(null);
  const falseStartTimerRef = useRef<NodeJS.Timeout | null>(null);
  const countUpRef = useRef<NodeJS.Timeout | null>(null);
  const rippleIdRef = useRef<number>(0);

  // Load saved data on mount
  useEffect(() => {
    setBestTime(loadFromStorage(STORAGE_KEY));
    setStreak(loadFromStorage(STREAK_KEY) || 0);
    setTotalPlays(loadFromStorage(PLAYS_KEY) || 0);
  }, []);

  // Cleanup all timers on unmount
  useEffect(() => {
    return () => {
      if (sequenceTimerRef.current) clearTimeout(sequenceTimerRef.current);
      if (armedTimerRef.current) clearTimeout(armedTimerRef.current);
      if (falseStartTimerRef.current) clearTimeout(falseStartTimerRef.current);
      if (countUpRef.current) clearTimeout(countUpRef.current);
    };
  }, []);

  // Animated count-up effect for reaction time
  useEffect(() => {
    if (gameState === "RESULT" && reactionTime > 0) {
      const duration = 400;
      const steps = 20;
      const increment = reactionTime / steps;
      let current = 0;

      const animate = () => {
        current += increment;
        if (current >= reactionTime) {
          setDisplayTime(reactionTime);
        } else {
          setDisplayTime(Math.round(current));
          countUpRef.current = setTimeout(animate, duration / steps);
        }
      };

      setDisplayTime(0);
      animate();
    }
  }, [gameState, reactionTime]);

  const clearAllTimers = useCallback(() => {
    if (sequenceTimerRef.current) {
      clearTimeout(sequenceTimerRef.current);
      sequenceTimerRef.current = null;
    }
    if (armedTimerRef.current) {
      clearTimeout(armedTimerRef.current);
      armedTimerRef.current = null;
    }
    if (falseStartTimerRef.current) {
      clearTimeout(falseStartTimerRef.current);
      falseStartTimerRef.current = null;
    }
  }, []);

  const addRipple = useCallback((x: number, y: number) => {
    const id = rippleIdRef.current++;
    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  }, []);

  const startSequence = useCallback(() => {
    clearAllTimers();
    setGameState("SEQUENCE");
    setLights([false, false, false, false, false]);
    setIsNewRecord(false);
    setShareStatus("");
    setShowConfetti(false);

    let lightIndex = 0;

    const turnOnNextLight = () => {
      if (lightIndex < 5) {
        const currentIndex = lightIndex; // Capture before increment
        tryVibrate(30); // Quick haptic for each light
        setLights((prev) => {
          const newLights = [...prev];
          newLights[currentIndex] = true;
          return newLights;
        });
        lightIndex++;

        if (lightIndex < 5) {
          sequenceTimerRef.current = setTimeout(
            turnOnNextLight,
            LIGHT_INTERVAL_MS
          );
        } else {
          setGameState("ARMED");
          const delay = getRandomArmedDelay();
          armedTimerRef.current = setTimeout(() => {
            setLights([false, false, false, false, false]);
            setGameState("GO");
            goStartTimeRef.current = performance.now();
          }, delay);
        }
      }
    };

    // Turn on first light immediately, then continue with delays
    turnOnNextLight();
  }, [clearAllTimers]);

  const handleFalseStart = useCallback(() => {
    clearAllTimers();
    setGameState("FALSE_START");
    tryVibrate([100, 50, 100, 50, 100]); // Error pattern

    // Reset streak on false start
    setStreak(0);
    saveToStorage(STREAK_KEY, 0);

    falseStartTimerRef.current = setTimeout(() => {
      setGameState("IDLE");
      setLights([false, false, false, false, false]);
    }, FALSE_START_RESET_MS);
  }, [clearAllTimers]);

  const handleTap = useCallback(
    (e?: React.MouseEvent | React.TouchEvent) => {
      // Add ripple effect
      if (e && "clientX" in e) {
        addRipple(e.clientX, e.clientY);
      } else if (e && "touches" in e && e.touches.length > 0) {
        addRipple(e.touches[0].clientX, e.touches[0].clientY);
      }

      switch (gameState) {
        case "IDLE":
          tryVibrate(20);
          startSequence();
          break;

        case "SEQUENCE":
        case "ARMED":
          handleFalseStart();
          break;

        case "GO": {
          const endTime = performance.now();
          const time = Math.round(endTime - goStartTimeRef.current);
          setReactionTime(time);

          // Update stats
          const newPlays = totalPlays + 1;
          setTotalPlays(newPlays);
          saveToStorage(PLAYS_KEY, newPlays);

          const newStreak = streak + 1;
          setStreak(newStreak);
          saveToStorage(STREAK_KEY, newStreak);

          // Check for new record
          if (bestTime === null || time < bestTime) {
            setBestTime(time);
            saveToStorage(STORAGE_KEY, time);
            setIsNewRecord(true);
            setShowConfetti(true);
            tryVibrate([50, 30, 50, 30, 100]); // Celebration pattern
          } else {
            tryVibrate(50); // Success tap
          }

          setGameState("RESULT");
          break;
        }

        case "RESULT":
          tryVibrate(20);
          startSequence();
          break;

        case "FALSE_START":
          break;
      }
    },
    [
      gameState,
      bestTime,
      streak,
      totalPlays,
      startSequence,
      handleFalseStart,
      addRipple,
    ]
  );

  const handleShare = useCallback(async () => {
    tryVibrate(30);
    const url = typeof window !== "undefined" ? window.location.href : "";
    const rating = getRating(reactionTime);
    const text = `${rating.emoji} I got ${reactionTime}ms in the F1 Reaction Game - ${rating.label}!

Can you beat me? 🏎️

${url}

#F1 #Formula1 #ReactionTime #F1Game`;

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ text });
        setShareStatus("Shared! 🎉");
      } catch {
        setShareStatus("");
      }
    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
        setShareStatus("Copied! 📋");
        setTimeout(() => setShareStatus(""), 2000);
      } catch {
        setShareStatus("Failed");
      }
    }
  }, [reactionTime]);

  // Global event listeners
  useEffect(() => {
    const preventDefault = (e: TouchEvent) => {
      if (e.touches.length > 1) e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
        handleTap();
      }
    };

    document.addEventListener("touchstart", preventDefault, { passive: false });
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("touchstart", preventDefault);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleTap]);

  const rating = getRating(reactionTime);
  const nextTier = getNextTier(reactionTime);

  return (
    <>
      <style>{keyframes}</style>

      {showConfetti && <Confetti />}

      {ripples.map((ripple) => (
        <TapRipple key={ripple.id} x={ripple.x} y={ripple.y} />
      ))}

      <div
        onClick={handleTap}
        onTouchStart={(e) => {
          if (
            gameState === "GO" ||
            gameState === "SEQUENCE" ||
            gameState === "ARMED"
          ) {
            e.preventDefault();
            handleTap(e);
          }
        }}
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(ellipse at center, #1a1a2e 0%, #0d0d0d 100%)",
          userSelect: "none",
          WebkitUserSelect: "none",
          touchAction: "manipulation",
          cursor: "default",
          padding: "20px",
          overflow: "hidden",
        }}
      >
        {/* Ambient background glow */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "300px",
            height: "300px",
            background:
              gameState === "GO"
                ? "radial-gradient(circle, rgba(0,255,0,0.15) 0%, transparent 70%)"
                : gameState === "FALSE_START"
                ? "radial-gradient(circle, rgba(255,0,0,0.2) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(255,0,0,0.08) 0%, transparent 70%)",
            transition: "background 0.3s ease",
            pointerEvents: "none",
          }}
        />

        {/* IDLE State */}
        {gameState === "IDLE" && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              animation: "fadeInScale 0.4s ease-out",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(2.5rem, 10vw, 4rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                marginBottom: "8px",
                textAlign: "center",
                background:
                  "linear-gradient(135deg, #ff0000 0%, #ff4444 50%, #ff6b35 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 3s linear infinite",
              }}
            >
              F1 Start Reaction
            </h1>

            <p
              style={{
                fontSize: "clamp(1rem, 4vw, 1.25rem)",
                color: "#888",
                marginBottom: "48px",
                textAlign: "center",
                animation: "fadeInUp 0.4s ease-out 0.1s both",
              }}
            >
              Tap when the lights go out
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                tryVibrate(20);
                startSequence();
              }}
              style={{
                padding: "20px 56px",
                fontSize: "clamp(1.1rem, 4.5vw, 1.4rem)",
                fontWeight: 700,
                border: "none",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #e60000 0%, #cc0000 100%)",
                color: "#fff",
                cursor: "pointer",
                boxShadow:
                  "0 8px 32px rgba(230,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
                minWidth: "240px",
                touchAction: "manipulation",
                transition: "transform 0.15s ease, box-shadow 0.15s ease",
                animation:
                  "fadeInUp 0.4s ease-out 0.2s both, pulse 2s ease-in-out infinite 1s",
              }}
            >
              🏎️ Start Practice
            </button>

            {bestTime !== null && (
              <div
                style={{
                  marginTop: "32px",
                  textAlign: "center",
                  animation: "fadeInUp 0.4s ease-out 0.3s both",
                }}
              >
                <p
                  style={{
                    fontSize: "clamp(1.5rem, 6vw, 2rem)",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "4px",
                  }}
                >
                  {bestTime}ms
                </p>
                <p
                  style={{
                    fontSize: "clamp(0.8rem, 3vw, 0.9rem)",
                    color: "#666",
                  }}
                >
                  Personal Best
                </p>
              </div>
            )}

            {totalPlays > 0 && (
              <div
                style={{
                  marginTop: "24px",
                  display: "flex",
                  gap: "24px",
                  animation: "fadeInUp 0.4s ease-out 0.4s both",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    {totalPlays}
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "#666" }}>Attempts</p>
                </div>
                {streak > 1 && (
                  <div style={{ textAlign: "center" }}>
                    <p
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "#ff6b35",
                      }}
                    >
                      🔥 {streak}
                    </p>
                    <p style={{ fontSize: "0.75rem", color: "#666" }}>Streak</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* SEQUENCE / ARMED State */}
        {(gameState === "SEQUENCE" || gameState === "ARMED") && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              animation: "fadeInScale 0.3s ease-out",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "clamp(10px, 3vw, 20px)",
                padding: "clamp(20px, 5vw, 40px)",
                background: "linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)",
                borderRadius: "20px",
                boxShadow:
                  "0 8px 40px rgba(0,0,0,0.6), inset 0 2px 0 rgba(255,255,255,0.05)",
                marginBottom: "40px",
              }}
            >
              {lights.map((isOn, index) => (
                <div
                  key={index}
                  style={{
                    width: "clamp(48px, 14vw, 80px)",
                    height: "clamp(48px, 14vw, 80px)",
                    borderRadius: "50%",
                    background: isOn
                      ? "radial-gradient(circle at 30% 30%, #ff5555 0%, #cc0000 60%, #990000 100%)"
                      : "radial-gradient(circle at 30% 30%, #444 0%, #222 100%)",
                    boxShadow: isOn
                      ? "0 0 30px rgba(255,0,0,0.8), 0 0 60px rgba(255,0,0,0.4), 0 0 100px rgba(255,0,0,0.2), inset 0 -4px 12px rgba(0,0,0,0.4)"
                      : "inset 0 4px 12px rgba(0,0,0,0.6)",
                    transition: "all 0.15s ease-out",
                    animation: isOn ? "lightOn 0.2s ease-out" : "none",
                  }}
                />
              ))}
            </div>

            <p
              style={{
                fontSize: "clamp(1.1rem, 4vw, 1.4rem)",
                color: "#666",
                animation: "breathe 1.5s ease-in-out infinite",
              }}
            >
              Wait for lights out...
            </p>
          </div>
        )}

        {/* GO State */}
        {gameState === "GO" && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              animation: "fadeInScale 0.15s ease-out",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "clamp(10px, 3vw, 20px)",
                padding: "clamp(20px, 5vw, 40px)",
                background: "linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)",
                borderRadius: "20px",
                boxShadow:
                  "0 8px 40px rgba(0,0,0,0.6), 0 0 60px rgba(0,255,0,0.1)",
                marginBottom: "32px",
              }}
            >
              {lights.map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: "clamp(48px, 14vw, 80px)",
                    height: "clamp(48px, 14vw, 80px)",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle at 30% 30%, #444 0%, #222 100%)",
                    boxShadow: "inset 0 4px 12px rgba(0,0,0,0.6)",
                  }}
                />
              ))}
            </div>

            <p
              style={{
                fontSize: "clamp(5rem, 25vw, 10rem)",
                fontWeight: 900,
                color: "#00ff00",
                textShadow:
                  "0 0 40px rgba(0,255,0,0.8), 0 0 80px rgba(0,255,0,0.4)",
                animation: "goPulse 0.4s ease-in-out infinite",
                lineHeight: 1,
              }}
            >
              GO!
            </p>

            <p
              style={{
                fontSize: "clamp(1.2rem, 5vw, 1.6rem)",
                color: "#00ff00",
                marginTop: "16px",
                fontWeight: 600,
                animation: "pulse 0.3s ease-in-out infinite",
              }}
            >
              TAP NOW!
            </p>
          </div>
        )}

        {/* RESULT State */}
        {gameState === "RESULT" && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              maxWidth: "400px",
            }}
          >
            {isNewRecord && (
              <div
                style={{
                  fontSize: "clamp(2rem, 8vw, 3rem)",
                  marginBottom: "8px",
                  animation: "trophy 0.6s ease-out",
                }}
              >
                🏆
              </div>
            )}

            <p
              style={{
                fontSize: "clamp(4rem, 20vw, 7rem)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1,
                animation: "countUp 0.4s ease-out",
              }}
            >
              {displayTime}
              <span style={{ fontSize: "0.4em", color: "#888" }}>ms</span>
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "8px",
                marginBottom: "24px",
                animation: "fadeInUp 0.4s ease-out 0.2s both",
              }}
            >
              <span style={{ fontSize: "clamp(1.5rem, 6vw, 2rem)" }}>
                {rating.emoji}
              </span>
              <span
                style={{
                  fontSize: "clamp(1.2rem, 5vw, 1.6rem)",
                  fontWeight: 600,
                  color: rating.color,
                }}
              >
                {rating.label}
              </span>
            </div>

            {isNewRecord && (
              <p
                style={{
                  color: "#ffd700",
                  fontWeight: 700,
                  fontSize: "clamp(1rem, 4vw, 1.2rem)",
                  marginBottom: "16px",
                  animation: "bounceIn 0.5s ease-out 0.3s both",
                }}
              >
                ✨ NEW PERSONAL BEST! ✨
              </p>
            )}

            <ProgressToNextTier
              currentTime={reactionTime}
              nextTier={nextTier}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                tryVibrate(20);
                startSequence();
              }}
              style={{
                padding: "18px 48px",
                fontSize: "clamp(1rem, 4vw, 1.2rem)",
                fontWeight: 700,
                border: "none",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #e60000 0%, #cc0000 100%)",
                color: "#fff",
                cursor: "pointer",
                boxShadow: "0 6px 24px rgba(230,0,0,0.4)",
                minWidth: "200px",
                marginTop: "24px",
                touchAction: "manipulation",
                animation:
                  "fadeInUp 0.4s ease-out 0.4s both, pulse 2s ease-in-out infinite 1.5s",
              }}
            >
              ⚡ Go Again
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleShare();
              }}
              style={{
                padding: "14px 32px",
                fontSize: "clamp(0.9rem, 3.5vw, 1rem)",
                fontWeight: 500,
                border: "2px solid #444",
                borderRadius: "12px",
                background: shareStatus
                  ? "rgba(255,255,255,0.1)"
                  : "transparent",
                color: shareStatus ? "#fff" : "#888",
                cursor: "pointer",
                marginTop: "12px",
                touchAction: "manipulation",
                transition: "all 0.2s ease",
                animation: "fadeInUp 0.4s ease-out 0.5s both",
              }}
            >
              {shareStatus || "📤 Share Result"}
            </button>

            <div
              style={{
                marginTop: "28px",
                display: "flex",
                gap: "32px",
                animation: "fadeInUp 0.4s ease-out 0.6s both",
              }}
            >
              {bestTime !== null && (
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "#ffd700",
                    }}
                  >
                    {bestTime}ms
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "#666" }}>Best</p>
                </div>
              )}
              {streak > 1 && (
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "#ff6b35",
                    }}
                  >
                    🔥 {streak}
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "#666" }}>Streak</p>
                </div>
              )}
            </div>

            <p
              style={{
                marginTop: "20px",
                fontSize: "0.85rem",
                color: "#555",
                animation: "fadeInUp 0.4s ease-out 0.7s both",
              }}
            >
              Tap anywhere to play again
            </p>
          </div>
        )}

        {/* FALSE START State */}
        {gameState === "FALSE_START" && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              animation: "shake 0.5s ease-out",
            }}
          >
            <p
              style={{
                fontSize: "clamp(2.5rem, 10vw, 4rem)",
                fontWeight: 900,
                color: "#ff4444",
                textAlign: "center",
                textShadow: "0 0 30px rgba(255,0,0,0.5)",
                animation: "pulse 0.3s ease-in-out infinite",
              }}
            >
              🚫 FALSE START
            </p>

            <p
              style={{
                fontSize: "clamp(1rem, 4vw, 1.2rem)",
                color: "#888",
                marginTop: "20px",
                textAlign: "center",
              }}
            >
              Wait for the lights to go out!
            </p>

            {streak > 0 && (
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#ff6b35",
                  marginTop: "16px",
                  animation: "fadeInUp 0.3s ease-out 0.3s both",
                }}
              >
                Streak lost: {streak} → 0
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
