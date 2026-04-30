import { LeadForm } from "./LeadForm";

export function ContactPage({ region }) {
  return (
    <section className="contact-page">
      <div>
        <p className="eyebrow">{region.label}</p>
        <h1>Contact Bodylife</h1>
        <p>
          Our regional team can help with product questions, sizing, orders, and
          support.
        </p>
      </div>
      <LeadForm region={region} />
    </section>
  );
}
