import { LeadForm } from "./LeadForm";

export function ContactPage({ region }) {
  return (
    <section className="contact-page">
      <div>
        <p className="eyebrow">{region.label}</p>
        <h1>Get in touch.</h1>
        <p>
          A real person reads every message. We answer product questions,
          help with orders and returns, and pass any formula or care questions
          directly to the team behind our products.
        </p>
      </div>
      <LeadForm region={region} />
    </section>
  );
}
