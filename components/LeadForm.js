"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  country: "",
  message: ""
};

export function LeadForm({ region }) {
  const pathname = usePathname();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function updateField(event) {
    setForm((currentForm) => ({
      ...currentForm,
      [event.target.name]: event.target.value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...form,
          region: region.code,
          source_page: pathname
        })
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to submit your message.");
      }

      setForm(initialForm);
      setStatus("success");
    } catch (submitError) {
      setError(submitError.message || "Unable to submit your message.");
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          name="name"
          onChange={updateField}
          required
          type="text"
          value={form.name}
        />
      </label>
      <label>
        Email
        <input
          name="email"
          onChange={updateField}
          required
          type="email"
          value={form.email}
        />
      </label>
      <label>
        Phone
        <input
          name="phone"
          onChange={updateField}
          type="tel"
          value={form.phone}
        />
      </label>
      <label>
        Country
        <input
          name="country"
          onChange={updateField}
          type="text"
          value={form.country}
        />
      </label>
      <label>
        Message
        <textarea
          name="message"
          onChange={updateField}
          rows="5"
          value={form.message}
        />
      </label>
      <button
        className="primary-button"
        disabled={status === "submitting"}
        type="submit"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
      {status === "success" ? (
        <p className="form-success">Thanks. We received your message.</p>
      ) : null}
      {status === "error" ? <p className="form-error">{error}</p> : null}
    </form>
  );
}
