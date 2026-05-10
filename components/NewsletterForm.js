"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

export function NewsletterForm({ region }) {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          region: region?.code || "us",
          source_page: pathname
        })
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to subscribe right now.");
      }

      setEmail("");
      setStatus("success");
    } catch (submitError) {
      setError(submitError.message || "Unable to subscribe right now.");
      setStatus("error");
    }
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
      <label className="newsletter-label" htmlFor="newsletter-email">
        Email
      </label>
      <div className="newsletter-row">
        <input
          autoComplete="email"
          className="newsletter-input"
          id="newsletter-email"
          inputMode="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          required
          type="email"
          value={email}
        />
        <button
          className="newsletter-button"
          disabled={status === "submitting"}
          type="submit"
        >
          {status === "submitting" ? "..." : "Subscribe"}
        </button>
      </div>
      {status === "success" ? (
        <p className="newsletter-message newsletter-message-success">
          Thank you. Look out for our next note.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="newsletter-message newsletter-message-error">{error}</p>
      ) : null}
    </form>
  );
}
