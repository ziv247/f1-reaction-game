import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for F1 Start Reaction Game.",
};

export default function TermsPage() {
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
          Terms of Service
        </h1>

        <p style={{ color: "#666", marginBottom: "32px", fontSize: "14px" }}>
          Last updated: December 2024
        </p>

        <div style={{ lineHeight: 1.8, color: "#ccc" }}>
          <p style={{ marginBottom: "24px" }}>
            Welcome to ReactionF1.com. By accessing or using this website, you agree to be bound by these 
            Terms of Service. If you do not agree to these terms, please do not use this website.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginTop: "32px", marginBottom: "16px" }}>
            1. Description of Service
          </h2>
          <p style={{ marginBottom: "24px" }}>
            ReactionF1.com provides a free browser-based reaction time game inspired by Formula 1 race starts. 
            The game allows users to test and track their reaction times in a simulated race start environment.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginTop: "32px", marginBottom: "16px" }}>
            2. Use of Service
          </h2>
          <p style={{ marginBottom: "16px" }}>
            By using this service, you agree to:
          </p>
          <ul style={{ marginBottom: "24px", paddingLeft: "24px" }}>
            <li>Use the game for personal, non-commercial entertainment purposes</li>
            <li>Not use automated tools, bots, or scripts to interact with the game</li>
            <li>Not attempt to manipulate or falsify reaction time results</li>
            <li>Not interfere with or disrupt the service or servers</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginTop: "32px", marginBottom: "16px" }}>
            3. Age Requirement
          </h2>
          <p style={{ marginBottom: "24px" }}>
            You must be at least 13 years of age to use this service. If you are under 18, you should have 
            parental or guardian consent to use this website.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginTop: "32px", marginBottom: "16px" }}>
            4. Intellectual Property
          </h2>
          <p style={{ marginBottom: "24px" }}>
            This is an independent fan project created for entertainment purposes. &quot;F1&quot;, &quot;Formula 1&quot;, 
            &quot;Formula One&quot;, and related marks are trademarks of Formula One Licensing BV. This website is 
            <strong style={{ color: "#fff" }}> not affiliated with, endorsed by, or connected to</strong> Formula One Group, 
            FIA, or any Formula 1 team.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginTop: "32px", marginBottom: "16px" }}>
            5. Disclaimer
          </h2>
          <p style={{ marginBottom: "24px" }}>
            The reaction time measurements provided by this game are for entertainment purposes only. Results 
            may vary based on device performance, network conditions, and other factors. These measurements 
            should not be compared to professionally calibrated equipment or official timing systems used in 
            motorsports.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginTop: "32px", marginBottom: "16px" }}>
            6. Service Availability
          </h2>
          <p style={{ marginBottom: "24px" }}>
            The service is provided &quot;as is&quot; and &quot;as available.&quot; We do not guarantee that the service will be 
            uninterrupted, error-free, or available at all times. We reserve the right to modify, suspend, 
            or discontinue the service at any time without notice.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginTop: "32px", marginBottom: "16px" }}>
            7. Limitation of Liability
          </h2>
          <p style={{ marginBottom: "24px" }}>
            To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, 
            special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred 
            directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting 
            from your use of the service.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginTop: "32px", marginBottom: "16px" }}>
            8. Advertisements
          </h2>
          <p style={{ marginBottom: "24px" }}>
            This website displays advertisements through Google AdSense. By using this website, you acknowledge 
            that advertisements may be displayed and that we are not responsible for the content of third-party 
            advertisements.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginTop: "32px", marginBottom: "16px" }}>
            9. Changes to Terms
          </h2>
          <p style={{ marginBottom: "24px" }}>
            We reserve the right to update or modify these Terms of Service at any time. Changes will be 
            effective immediately upon posting to this page. Your continued use of the service after any 
            changes constitutes acceptance of the new terms.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginTop: "32px", marginBottom: "16px" }}>
            10. Contact
          </h2>
          <p style={{ marginBottom: "24px" }}>
            If you have any questions about these Terms of Service, please{" "}
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
          <Link href="/privacy" style={{ color: "#888", textDecoration: "none" }}>Privacy</Link>
          <Link href="/contact" style={{ color: "#888", textDecoration: "none" }}>Contact</Link>
        </div>
      </div>
    </div>
  );
}


