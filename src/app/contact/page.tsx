"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";

// Metadata must be in a separate file for client components, but we'll use head for basic SEO
// For proper metadata, this would need to be a server component with metadata export

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 800);
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    fontSize: "16px",
    border: "2px solid #333",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.05)",
    color: "#fff",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  const inputFocusStyle = {
    borderColor: "#e60000",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontSize: "14px",
    fontWeight: 600 as const,
    color: "#ccc",
  };

  const errorStyle = {
    color: "#ff4444",
    fontSize: "13px",
    marginTop: "6px",
  };

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
            Have questions, feedback, or found a bug? We&apos;d love to hear
            from you!
          </p>

          {/* Email Section */}
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "16px",
              padding: "24px",
              marginBottom: "32px",
            }}
          >
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "12px",
              }}
            >
              Email Us Directly
            </h2>
            <p style={{ marginBottom: "16px", color: "#999" }}>
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

          {/* Contact Form */}
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "16px",
              padding: "32px",
              marginBottom: "32px",
            }}
          >
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "24px",
              }}
            >
              Send Us a Message
            </h2>

            {submitted ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "40px 20px",
                }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: "16px",
                  }}
                >
                  ✅
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#4ecdc4",
                    marginBottom: "12px",
                  }}
                >
                  Thanks for reaching out!
                </h3>
                <p style={{ color: "#999", marginBottom: "24px" }}>
                  We&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    padding: "12px 24px",
                    background: "transparent",
                    border: "2px solid #444",
                    borderRadius: "8px",
                    color: "#888",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "20px" }}>
                  <label htmlFor="name" style={labelStyle}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    onFocus={(e) =>
                      (e.target.style.borderColor = inputFocusStyle.borderColor)
                    }
                    onBlur={(e) => (e.target.style.borderColor = "#333")}
                    style={{
                      ...inputStyle,
                      borderColor: errors.name ? "#ff4444" : "#333",
                    }}
                    placeholder="John Doe"
                  />
                  {errors.name && <p style={errorStyle}>{errors.name}</p>}
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label htmlFor="email" style={labelStyle}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    onFocus={(e) =>
                      (e.target.style.borderColor = inputFocusStyle.borderColor)
                    }
                    onBlur={(e) => (e.target.style.borderColor = "#333")}
                    style={{
                      ...inputStyle,
                      borderColor: errors.email ? "#ff4444" : "#333",
                    }}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p style={errorStyle}>{errors.email}</p>}
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label htmlFor="message" style={labelStyle}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    onFocus={(e) =>
                      (e.target.style.borderColor = inputFocusStyle.borderColor)
                    }
                    onBlur={(e) => (e.target.style.borderColor = "#333")}
                    style={{
                      ...inputStyle,
                      minHeight: "120px",
                      resize: "vertical",
                      borderColor: errors.message ? "#ff4444" : "#333",
                    }}
                    placeholder="Tell us what's on your mind..."
                  />
                  {errors.message && <p style={errorStyle}>{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: "100%",
                    padding: "16px",
                    fontSize: "16px",
                    fontWeight: 700,
                    border: "none",
                    borderRadius: "10px",
                    background: isSubmitting
                      ? "#666"
                      : "linear-gradient(135deg, #e60000 0%, #cc0000 100%)",
                    color: "#fff",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    transition: "opacity 0.2s ease",
                  }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Response time note */}
          <div
            style={{
              background: "rgba(78, 205, 196, 0.1)",
              borderRadius: "16px",
              padding: "24px",
              border: "1px solid rgba(78, 205, 196, 0.2)",
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "#4ecdc4",
                marginBottom: "12px",
              }}
            >
              Response Time
            </h3>
            <p style={{ color: "#888", margin: 0 }}>
              We typically respond within 48 hours. Thank you for your patience!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
