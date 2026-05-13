const whyThisWorksItems = [
  "The gel sits like water and absorbs in seconds.",
  "No silicones to balloon on the skin and ball up.",
  "Glycerin and panthenol pull moisture in and hold it."
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
