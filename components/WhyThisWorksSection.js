const whyThisWorksItems = [
  "Lightweight gel structure absorbs quickly",
  "Designed to reduce surface residue",
  "Balanced formula to support skin comfort"
];

export function WhyThisWorksSection() {
  return (
    <section className="section why-this-works-section">
      <div className="section-heading">
        <p className="eyebrow">Formula logic</p>
        <h2>Why this works</h2>
      </div>
      <div className="why-this-works-list">
        {whyThisWorksItems.map((item) => (
          <article key={item}>
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
