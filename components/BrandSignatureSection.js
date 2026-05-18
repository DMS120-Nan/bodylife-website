const signatureLines = [
  "Gentle care for sensitive needs.",
  "Clean formulas. Comfortable daily use.",
  "For skin that deserves a softer approach."
];

export function BrandSignatureSection() {
  return (
    <section className="brand-signature-section">
      <div className="brand-signature-inner">
        {signatureLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </section>
  );
}
