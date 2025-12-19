import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the F1 Start Reaction Game team.",
};

export default function ContactPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0d0d0d 0%, #1a1a2e 100%)",
        color: "#fff",
        padding: "40px 20px",
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
            marginBottom: "32px",
            background: "linear-gradient(135deg, #ff0000 0%, #ff4444 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Contact Us
        </h1>

        <div style={{ lineHeight: 1.8, color: "#ccc" }}>
          <p style={{ marginBottom: "32px", fontSize: "1.1rem" }}>
            Have questions, feedback, or found a bug? We&apos;d love to hear from you!
          </p>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "16px",
              padding: "32px",
              marginBottom: "32px",
            }}
          >
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#fff", marginBottom: "16px" }}>
              Email
            </h2>
            <p style={{ marginBottom: "24px" }}>
              For general inquiries, bug reports, or feedback:
            </p>
            <a
              href="mailto:contact@reactionf1.com"
              style={{
                display: "inline-block",
                padding: "12px 24px",
                background: "linear-gradient(135deg, #e60000 0%, #cc0000 100%)",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "8px",
                fontWeight: 600,
              }}
            >
              contact@reactionf1.com
            </a>
          </div>

          <div
            style={{
              background: "rgba(78, 205, 196, 0.1)",
              borderRadius: "16px",
              padding: "24px",
              border: "1px solid rgba(78, 205, 196, 0.2)",
            }}
          >
            <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#4ecdc4", marginBottom: "12px" }}>
              Response Time
            </h3>
            <p style={{ color: "#888", margin: 0 }}>
              We typically respond within 48 hours. Thank you for your patience!
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "48px",
            paddingTop: "24px",
            borderTop: "1px solid #333",
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            fontSize: "14px",
          }}
        >
          <Link href="/" style={{ color: "#888", textDecoration: "none" }}>Home</Link>
          <Link href="/privacy" style={{ color: "#888", textDecoration: "none" }}>Privacy</Link>
          <Link href="/terms" style={{ color: "#888", textDecoration: "none" }}>Terms</Link>
        </div>
      </div>
    </div>
  );
}

