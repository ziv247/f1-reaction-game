import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for F1 Start Reaction Game - Usage rules, disclaimers, and legal information.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
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
            marginBottom: "8px",
            background: "linear-gradient(135deg, #ff0000 0%, #ff4444 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Terms of Service
        </h1>

        <p style={{ color: "#666", marginBottom: "32px", fontSize: "14px" }}>
          Last updated: December 21, 2024
        </p>

        <div style={{ lineHeight: 1.8, color: "#ccc" }}>
          <p style={{ marginBottom: "24px" }}>
            Welcome to ReactionF1.com. By accessing or using this website, you
            agree to be bound by these Terms of Service. If you do not agree to
            these terms, please do not use this website.
          </p>

          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#fff",
              marginTop: "32px",
              marginBottom: "16px",
            }}
          >
            1. Description of Service
          </h2>
          <p style={{ marginBottom: "24px" }}>
            ReactionF1.com provides a free browser-based reaction time game
            inspired by Formula 1 race starts. The game allows users to test and
            track their reaction times in a simulated race start environment.
            The service is provided for entertainment and personal skill
            development purposes.
          </p>

          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#fff",
              marginTop: "32px",
              marginBottom: "16px",
            }}
          >
            2. Acceptable Use
          </h2>
          <p style={{ marginBottom: "16px" }}>
            By using this service, you agree to:
          </p>
          <ul style={{ marginBottom: "24px", paddingLeft: "24px" }}>
            <li>Use the game for personal, non-commercial entertainment purposes</li>
            <li>Not use automated tools, bots, or scripts to interact with the game</li>
            <li>Not attempt to manipulate or falsify reaction time results</li>
            <li>Not interfere with or disrupt the service or servers</li>
            <li>Not attempt to reverse engineer, decompile, or modify the game</li>
            <li>Not use the service for any illegal or unauthorized purpose</li>
          </ul>

          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#fff",
              marginTop: "32px",
              marginBottom: "16px",
            }}
          >
            3. Age Requirement
          </h2>
          <p style={{ marginBottom: "24px" }}>
            You must be at least 13 years of age to use this service. If you are
            under 18, you should have parental or guardian consent to use this
            website.
          </p>

          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#fff",
              marginTop: "32px",
              marginBottom: "16px",
            }}
          >
            4. Intellectual Property
          </h2>
          <p style={{ marginBottom: "16px" }}>
            This is an independent fan project created for entertainment
            purposes. &quot;F1&quot;, &quot;Formula 1&quot;, &quot;Formula
            One&quot;, and related marks are trademarks of Formula One Licensing
            BV. This website is
            <strong style={{ color: "#fff" }}>
              {" "}
              not affiliated with, endorsed by, or connected to
            </strong>{" "}
            Formula One Group, FIA, or any Formula 1 team.
          </p>
          <p style={{ marginBottom: "24px" }}>
            The game design, code, and original content on this website are
            protected by copyright. You may not reproduce, distribute, or create
            derivative works without permission.
          </p>

          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#fff",
              marginTop: "32px",
              marginBottom: "16px",
            }}
          >
            5. Disclaimer of Accuracy
          </h2>
          <p style={{ marginBottom: "24px" }}>
            <strong style={{ color: "#ff6b35" }}>
              The reaction time measurements provided by this game are for
              entertainment purposes only.
            </strong>{" "}
            Results may vary based on:
          </p>
          <ul style={{ marginBottom: "24px", paddingLeft: "24px" }}>
            <li>Device performance and processing speed</li>
            <li>Screen refresh rate and display latency</li>
            <li>Input device (touchscreen, mouse, keyboard) response time</li>
            <li>Browser performance and JavaScript execution</li>
            <li>Network conditions (if applicable)</li>
          </ul>
          <p style={{ marginBottom: "24px" }}>
            These measurements should not be compared to professionally
            calibrated equipment or official timing systems used in motorsports.
            The game is designed for fun and casual skill practice, not
            scientific measurement.
          </p>

          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#fff",
              marginTop: "32px",
              marginBottom: "16px",
            }}
          >
            6. Service Availability
          </h2>
          <p style={{ marginBottom: "24px" }}>
            The service is provided &quot;as is&quot; and &quot;as
            available.&quot; We do not guarantee that the service will be
            uninterrupted, error-free, or available at all times. We reserve the
            right to modify, suspend, or discontinue the service at any time
            without notice.
          </p>

          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#fff",
              marginTop: "32px",
              marginBottom: "16px",
            }}
          >
            7. Limitation of Liability
          </h2>
          <p style={{ marginBottom: "24px" }}>
            To the fullest extent permitted by law, we shall not be liable for
            any indirect, incidental, special, consequential, or punitive
            damages, or any loss of profits or revenues, whether incurred
            directly or indirectly, or any loss of data, use, goodwill, or other
            intangible losses resulting from:
          </p>
          <ul style={{ marginBottom: "24px", paddingLeft: "24px" }}>
            <li>Your use or inability to use the service</li>
            <li>Any unauthorized access to or use of our servers</li>
            <li>Any interruption or cessation of transmission to or from the service</li>
            <li>Any bugs, viruses, or other harmful code that may be transmitted</li>
            <li>Any errors or omissions in any content</li>
          </ul>

          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#fff",
              marginTop: "32px",
              marginBottom: "16px",
            }}
          >
            8. Advertisements
          </h2>
          <p style={{ marginBottom: "24px" }}>
            This website displays advertisements through Google AdSense. By
            using this website, you acknowledge that advertisements may be
            displayed and that we are not responsible for the content of
            third-party advertisements. Your interactions with advertisers are
            solely between you and the advertiser.
          </p>

          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#fff",
              marginTop: "32px",
              marginBottom: "16px",
            }}
          >
            9. Changes to Terms
          </h2>
          <p style={{ marginBottom: "24px" }}>
            We reserve the right to update or modify these Terms of Service at
            any time. Changes will be effective immediately upon posting to this
            page. The &quot;Last updated&quot; date at the top of this page will
            be revised accordingly. Your continued use of the service after any
            changes constitutes acceptance of the new terms.
          </p>

          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#fff",
              marginTop: "32px",
              marginBottom: "16px",
            }}
          >
            10. Governing Law
          </h2>
          <p style={{ marginBottom: "24px" }}>
            These Terms shall be governed and construed in accordance with
            applicable laws, without regard to conflict of law principles.
          </p>

          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#fff",
              marginTop: "32px",
              marginBottom: "16px",
            }}
          >
            11. Contact
          </h2>
          <p style={{ marginBottom: "24px" }}>
            If you have any questions about these Terms of Service, please
            contact us at{" "}
            <a
              href="mailto:contact@reactionf1.com"
              style={{ color: "#4ecdc4", textDecoration: "underline" }}
            >
              contact@reactionf1.com
            </a>{" "}
            or visit our{" "}
            <Link
              href="/contact"
              style={{ color: "#4ecdc4", textDecoration: "underline" }}
            >
              Contact page
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
