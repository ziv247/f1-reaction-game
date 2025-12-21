"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      onClick={(e) => e.stopPropagation()}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "16px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        fontSize: "12px",
        color: "#666",
        background: "linear-gradient(transparent, rgba(0,0,0,0.9) 30%)",
        pointerEvents: "auto",
        zIndex: 100,
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/about"
          style={{ color: "#888", textDecoration: "none" }}
        >
          About
        </Link>
        <Link
          href="/contact"
          style={{ color: "#888", textDecoration: "none" }}
        >
          Contact
        </Link>
        <Link
          href="/privacy"
          style={{ color: "#888", textDecoration: "none" }}
        >
          Privacy
        </Link>
        <Link
          href="/terms"
          style={{ color: "#888", textDecoration: "none" }}
        >
          Terms
        </Link>
      </nav>
      <p style={{ margin: 0, color: "#555" }}>
        © {currentYear} ReactionF1.com. Not affiliated with Formula 1.
      </p>
    </footer>
  );
}

