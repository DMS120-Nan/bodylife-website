const signatureLines = [
  "Skincare should not be complicated.",
  "Gentle formulas, grounded in science.",
  "Designed for long-term skin health."
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
