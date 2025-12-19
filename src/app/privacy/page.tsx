import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for F1 Start Reaction Game - Learn how we handle your data.",
};

export default function PrivacyPage() {
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
            marginBottom: "8px",
            background: "linear-gradient(135deg, #ff0000 0%, #ff4444 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Privacy Policy
        </h1>

        <p style={{ color: "#666", marginBottom: "32px", fontSize: "14px" }}>
          Last updated: December 2024
        </p>

        <div style={{ lineHeight: 1.8, color: "#ccc" }}>
          <p style={{ marginBottom: "24px" }}>
            ReactionF1.com (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the F1 Start Reaction Game website. 
            This page informs you of our policies regarding the collection, use, and disclosure of information 
            when you use our Service.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginTop: "32px", marginBottom: "16px" }}>
            Information We Collect
          </h2>

          <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#ff6b35", marginTop: "24px", marginBottom: "12px" }}>
            Game Statistics (Local Storage)
          </h3>
          <p style={{ marginBottom: "16px" }}>
            We store your game data locally on your device using your browser&apos;s localStorage feature:
          </p>
          <ul style={{ marginBottom: "24px", paddingLeft: "24px" }}>
            <li>Your personal best reaction time</li>
            <li>Your current streak count</li>
            <li>Total number of attempts</li>
          </ul>
          <p style={{ marginBottom: "24px" }}>
            <strong style={{ color: "#fff" }}>This data never leaves your device</strong> and is not transmitted to our servers. 
            You can clear this data at any time by clearing your browser&apos;s local storage.
          </p>

          <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#ff6b35", marginTop: "24px", marginBottom: "12px" }}>
            Analytics
          </h3>
          <p style={{ marginBottom: "24px" }}>
            We use Vercel Analytics to collect anonymous usage data to help us understand how visitors use our site 
            and to improve our service. This includes general information like page views and device types, 
            but does not include personally identifiable information.
          </p>

          <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#ff6b35", marginTop: "24px", marginBottom: "12px" }}>
            Advertising
          </h3>
          <p style={{ marginBottom: "24px" }}>
            We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your 
            prior visits to this website or other websites. Google&apos;s use of advertising cookies enables it and 
            its partners to serve ads based on your visit to our site and/or other sites on the Internet.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginTop: "32px", marginBottom: "16px" }}>
            Cookies
          </h2>
          <p style={{ marginBottom: "16px" }}>
            This site uses cookies for:
          </p>
          <ul style={{ marginBottom: "24px", paddingLeft: "24px" }}>
            <li>Google AdSense advertising (third-party cookies)</li>
            <li>Anonymous analytics via Vercel Analytics</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginTop: "32px", marginBottom: "16px" }}>
            Your Choices
          </h2>
          <p style={{ marginBottom: "24px" }}>
            You can opt out of personalized advertising by visiting{" "}
            <a 
              href="https://www.google.com/settings/ads" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: "#4ecdc4", textDecoration: "underline" }}
            >
              Google&apos;s Ads Settings
            </a>. You may also use browser settings or extensions to manage cookies.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginTop: "32px", marginBottom: "16px" }}>
            Children&apos;s Privacy
          </h2>
          <p style={{ marginBottom: "24px" }}>
            Our Service does not address anyone under the age of 13. We do not knowingly collect personally 
            identifiable information from children under 13.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginTop: "32px", marginBottom: "16px" }}>
            Changes to This Policy
          </h2>
          <p style={{ marginBottom: "24px" }}>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
            the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginTop: "32px", marginBottom: "16px" }}>
            Contact Us
          </h2>
          <p style={{ marginBottom: "24px" }}>
            If you have any questions about this Privacy Policy, please{" "}
            <Link href="/contact" style={{ color: "#4ecdc4", textDecoration: "underline" }}>
              contact us
            </Link>.
          </p>
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
          <Link href="/terms" style={{ color: "#888", textDecoration: "none" }}>Terms</Link>
          <Link href="/contact" style={{ color: "#888", textDecoration: "none" }}>Contact</Link>
        </div>
      </div>
    </div>
  );
}


