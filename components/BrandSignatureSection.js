const signatureLines = [
  "Three products. One routine.",
  "We pick molecules that do something.",
  "The rest, we leave out."
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
