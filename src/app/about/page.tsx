import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about F1 Start Reaction Game - a free browser game to test your Formula 1 race start reflexes. Discover how it works and what makes a great reaction time.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/about",
  },
};

const REACTION_TIERS = [
  {
    range: "< 150ms",
    label: "Lightning Reflexes",
    emoji: "⚡",
    description: "Elite-level reactions, on par with the fastest F1 drivers",
  },
  {
    range: "150-180ms",
    label: "F1 Elite",
    emoji: "🏁",
    description: "Exceptional reflexes worthy of the starting grid",
  },
  {
    range: "180-250ms",
    label: "Pro Driver",
    emoji: "🚦",
    description: "Professional-grade reactions, competitive start",
  },
  {
    range: "250-330ms",
    label: "Solid Start",
    emoji: "👍",
    description: "Good reflexes, room for improvement",
  },
  {
    range: "330-500ms",
    label: "Warming Up",
    emoji: "🔥",
    description: "Average reaction time, keep practicing",
  },
  {
    range: "> 500ms",
    label: "Keep Practicing",
    emoji: "💪",
    description: "With practice, you'll get faster",
  },
];

export default function AboutPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0d0d0d 0%, #1a1a2e 100%)",
        color: "#fff",
        padding: "40px 20px",
        paddingBottom: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#e60000",
            textDecoration: "none",
            fontSize: "14px",
            marginBottom: "24px",
          }}
        >
          ← Back to Game
        </Link>

        <h1
          style={{
            fontSize: "clamp(2rem, 6vw, 3rem)",
            fontWeight: 800,
            marginBottom: "16px",
            background: "linear-gradient(135deg, #ff0000 0%, #ff4444 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          About F1 Start Reaction
        </h1>

        <div style={{ lineHeight: 1.8, color: "#ccc" }}>
          {/* What is this game */}
          <section style={{ marginBottom: "40px" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "16px",
              }}
            >
              What is F1 Start Reaction?
            </h2>
            <p style={{ marginBottom: "16px" }}>
              F1 Start Reaction is a free browser-based game that simulates the
              intense moment of a Formula 1 race start. When the five red lights
              go out, drivers must react instantly to launch off the grid. This
              game lets you experience that same adrenaline rush and measure
              your reaction time in milliseconds.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Built as a passion project by F1 fans, this game captures the
              essence of what makes race starts so thrilling. Whether
              you&apos;re a casual viewer or a die-hard motorsport enthusiast,
              you can now put your reflexes to the test and see how you compare
              to the professionals.
            </p>
          </section>

          {/* How it works */}
          <section style={{ marginBottom: "40px" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "16px",
              }}
            >
              How It Works
            </h2>
            <p style={{ marginBottom: "16px" }}>
              The game faithfully recreates the official F1 start procedure:
            </p>
            <ol
              style={{
                paddingLeft: "24px",
                marginBottom: "16px",
              }}
            >
              <li style={{ marginBottom: "12px" }}>
                <strong style={{ color: "#fff" }}>Tap to begin</strong> - Press
                the start button or tap anywhere on the screen to initiate the
                sequence.
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong style={{ color: "#fff" }}>Watch the lights</strong> -
                Five red lights illuminate one by one, each 350 milliseconds
                apart, just like on a real F1 starting gantry.
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong style={{ color: "#fff" }}>Stay focused</strong> - After
                all five lights are on, there&apos;s a random delay between 1
                and 3.5 seconds. This unpredictability is what makes F1 starts
                so challenging.
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong style={{ color: "#fff" }}>Lights out!</strong> - When
                the lights go out, tap as fast as you can. Your reaction time is
                measured from the exact moment the lights extinguish.
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong style={{ color: "#fff" }}>Get your result</strong> - See
                your reaction time, earn a rating, and track your personal best.
              </li>
            </ol>
            <p>
              Tap too early and you&apos;ll get a false start - just like in a
              real race where jumping the lights means a penalty!
            </p>
          </section>

          {/* Reaction time tiers */}
          <section style={{ marginBottom: "40px" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "16px",
              }}
            >
              What is a Good Reaction Time?
            </h2>
            <p style={{ marginBottom: "24px" }}>
              Professional F1 drivers typically react in 150-250 milliseconds.
              The best starts in history have been around 100-150ms. Here&apos;s
              how we rate your performance:
            </p>

            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              {REACTION_TIERS.map((tier, index) => (
                <div
                  key={tier.label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: "16px",
                    padding: "16px 20px",
                    borderBottom:
                      index < REACTION_TIERS.length - 1
                        ? "1px solid rgba(255,255,255,0.1)"
                        : "none",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      minWidth: "180px",
                    }}
                  >
                    <span style={{ fontSize: "1.5rem" }}>{tier.emoji}</span>
                    <div>
                      <div
                        style={{
                          fontWeight: 600,
                          color: "#fff",
                          fontSize: "0.95rem",
                        }}
                      >
                        {tier.label}
                      </div>
                      <div
                        style={{
                          color: "#ff6b35",
                          fontSize: "0.85rem",
                          fontFamily: "monospace",
                        }}
                      >
                        {tier.range}
                      </div>
                    </div>
                  </div>
                  <div style={{ color: "#999", fontSize: "0.9rem" }}>
                    {tier.description}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why we built it */}
          <section style={{ marginBottom: "40px" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "16px",
              }}
            >
              Why We Built This
            </h2>
            <p style={{ marginBottom: "16px" }}>
              Every F1 fan knows the tension of a race start. The formation lap,
              the drivers lining up, the five lights counting down - it&apos;s
              one of the most exciting moments in motorsport. We wanted to
              capture that feeling and let anyone experience it, anytime,
              anywhere.
            </p>
            <p>
              This game is completely free, works on any device with a browser,
              and requires no downloads or sign-ups. Your stats are saved
              locally on your device, so you can track your improvement over
              time and challenge your friends to beat your best time.
            </p>
          </section>

          {/* CTA */}
          <div
            style={{
              textAlign: "center",
              marginTop: "48px",
              padding: "32px",
              background: "rgba(230, 0, 0, 0.1)",
              borderRadius: "16px",
              border: "1px solid rgba(230, 0, 0, 0.2)",
            }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                marginBottom: "20px",
                color: "#fff",
              }}
            >
              Ready to test your reflexes?
            </p>
            <Link
              href="/"
              style={{
                display: "inline-block",
                padding: "16px 40px",
                background: "linear-gradient(135deg, #e60000 0%, #cc0000 100%)",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "12px",
                fontWeight: 700,
                fontSize: "1.1rem",
              }}
            >
              🏎️ Start Playing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
