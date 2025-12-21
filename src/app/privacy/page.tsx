import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for F1 Start Reaction Game - Learn how we handle your data, cookies, and third-party advertising.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>

        <p style={{ color: "#666", marginBottom: "32px", fontSize: "14px" }}>
          Last updated: December 21, 2024
        </p>

        <div style={{ lineHeight: 1.8, color: "#ccc" }}>
          <p style={{ marginBottom: "24px" }}>
            ReactionF1.com (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
            operates the F1 Start Reaction Game website. This page informs you
            of our policies regarding the collection, use, and disclosure of
            information when you use our Service. By using this website, you
            consent to the data practices described in this policy.
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
            Information We Collect
          </h2>

          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#ff6b35",
              marginTop: "24px",
              marginBottom: "12px",
            }}
          >
            Game Statistics (Local Storage)
          </h3>
          <p style={{ marginBottom: "16px" }}>
            We store your game data locally on your device using your
            browser&apos;s localStorage feature:
          </p>
          <ul style={{ marginBottom: "24px", paddingLeft: "24px" }}>
            <li>Your personal best reaction time</li>
            <li>Your current streak count</li>
            <li>Total number of attempts</li>
          </ul>
          <p style={{ marginBottom: "24px" }}>
            <strong style={{ color: "#fff" }}>
              This data never leaves your device
            </strong>{" "}
            and is not transmitted to our servers. You can clear this data at
            any time by clearing your browser&apos;s local storage or using
            your browser&apos;s &quot;Clear Site Data&quot; feature.
          </p>

          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#ff6b35",
              marginTop: "24px",
              marginBottom: "12px",
            }}
          >
            Analytics Data
          </h3>
          <p style={{ marginBottom: "24px" }}>
            We use Vercel Analytics to collect anonymous, aggregated usage data
            to help us understand how visitors use our site and to improve our
            service. This may include:
          </p>
          <ul style={{ marginBottom: "24px", paddingLeft: "24px" }}>
            <li>Page views and navigation patterns</li>
            <li>Device type, browser, and operating system</li>
            <li>Approximate geographic location (country/region level)</li>
            <li>Referral sources</li>
          </ul>
          <p style={{ marginBottom: "24px" }}>
            This analytics data is collected in aggregate and does not include
            personally identifiable information. We cannot identify individual
            users from this data.
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
            Advertising and Cookies
          </h2>

          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#ff6b35",
              marginTop: "24px",
              marginBottom: "12px",
            }}
          >
            Google AdSense
          </h3>
          <p style={{ marginBottom: "16px" }}>
            We use Google AdSense to display advertisements on our website.
            Google AdSense uses cookies and similar technologies to serve ads
            based on your prior visits to this website or other websites on the
            Internet.
          </p>
          <p style={{ marginBottom: "16px" }}>
            <strong style={{ color: "#fff" }}>
              How Google uses advertising cookies:
            </strong>
          </p>
          <ul style={{ marginBottom: "24px", paddingLeft: "24px" }}>
            <li>
              Google uses the DoubleClick cookie to serve ads based on your
              visits to this site and/or other sites on the Internet
            </li>
            <li>
              Google may use data about your visits to this and other websites
              to provide relevant advertisements
            </li>
            <li>
              Third-party vendors, including Google, use cookies to serve ads
              based on your browsing history
            </li>
            <li>
              These cookies allow Google and its partners to serve ads to you
              based on your interests
            </li>
          </ul>

          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#ff6b35",
              marginTop: "24px",
              marginBottom: "12px",
            }}
          >
            Types of Cookies Used
          </h3>
          <ul style={{ marginBottom: "24px", paddingLeft: "24px" }}>
            <li>
              <strong style={{ color: "#fff" }}>Essential cookies:</strong>{" "}
              Required for basic website functionality
            </li>
            <li>
              <strong style={{ color: "#fff" }}>Analytics cookies:</strong> Used
              by Vercel Analytics to understand site usage (anonymous)
            </li>
            <li>
              <strong style={{ color: "#fff" }}>Advertising cookies:</strong>{" "}
              Used by Google AdSense to deliver personalized advertisements
            </li>
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
            Your Choices and Opt-Out Options
          </h2>
          <p style={{ marginBottom: "16px" }}>
            You have several options to control how your data is used:
          </p>

          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#ff6b35",
              marginTop: "24px",
              marginBottom: "12px",
            }}
          >
            Personalized Advertising
          </h3>
          <p style={{ marginBottom: "16px" }}>
            You can opt out of personalized advertising by:
          </p>
          <ul style={{ marginBottom: "24px", paddingLeft: "24px" }}>
            <li>
              Visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#4ecdc4", textDecoration: "underline" }}
              >
                Google&apos;s Ads Settings
              </a>{" "}
              to adjust your ad personalization preferences
            </li>
            <li>
              Using the{" "}
              <a
                href="https://optout.aboutads.info/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#4ecdc4", textDecoration: "underline" }}
              >
                Digital Advertising Alliance opt-out tool
              </a>
            </li>
            <li>
              Visiting{" "}
              <a
                href="https://www.networkadvertising.org/choices/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#4ecdc4", textDecoration: "underline" }}
              >
                Network Advertising Initiative opt-out page
              </a>
            </li>
          </ul>

          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#ff6b35",
              marginTop: "24px",
              marginBottom: "12px",
            }}
          >
            Browser Controls
          </h3>
          <p style={{ marginBottom: "24px" }}>
            Most web browsers allow you to control cookies through their
            settings. You can usually find these settings in the
            &quot;Options&quot; or &quot;Preferences&quot; menu of your browser.
            You can set your browser to block or delete cookies, though this may
            affect the functionality of some websites.
          </p>

          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#ff6b35",
              marginTop: "24px",
              marginBottom: "12px",
            }}
          >
            Clear Local Game Data
          </h3>
          <p style={{ marginBottom: "24px" }}>
            To clear your game statistics stored in localStorage, you can:
          </p>
          <ul style={{ marginBottom: "24px", paddingLeft: "24px" }}>
            <li>
              Use your browser&apos;s developer tools to clear localStorage
            </li>
            <li>
              Clear your browser&apos;s site data for reactionf1.com
            </li>
            <li>Use your browser&apos;s &quot;Clear browsing data&quot; feature</li>
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
            Children&apos;s Privacy
          </h2>
          <p style={{ marginBottom: "24px" }}>
            Our Service does not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from children
            under 13. If you are a parent or guardian and you are aware that
            your child has provided us with personal information, please contact
            us so that we can take necessary actions.
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
            Third-Party Links
          </h2>
          <p style={{ marginBottom: "24px" }}>
            Our website may contain links to other sites that are not operated
            by us. If you click on a third-party link, you will be directed to
            that third party&apos;s site. We strongly advise you to review the
            Privacy Policy of every site you visit. We have no control over and
            assume no responsibility for the content, privacy policies, or
            practices of any third-party sites or services.
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
            Changes to This Policy
          </h2>
          <p style={{ marginBottom: "24px" }}>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the &quot;Last updated&quot; date at the top of this
            page. You are advised to review this Privacy Policy periodically for
            any changes. Changes to this Privacy Policy are effective when they
            are posted on this page.
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
            Contact Us
          </h2>
          <p style={{ marginBottom: "24px" }}>
            If you have any questions about this Privacy Policy, your data, or
            would like to exercise your privacy rights, please contact us at{" "}
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
