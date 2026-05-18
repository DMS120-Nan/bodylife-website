import Image from "next/image";

const texturePoints = [
  {
    title: "Gentle on contact",
    description: "Designed to feel comfortable the moment you apply it — nothing harsh, nothing heavy."
  },
  {
    title: "Light, non-irritating",
    description: "Nothing sticky, nothing that builds up. Comfortable enough for daily use on sensitive skin."
  },
  {
    title: "Sensitive needs first",
    description: "Every formula is tested with people who have sensitive or reactive skin before it ships."
  }
];

export function TextureSection() {
  return (
    <section className="texture-section">
      <div className="texture-inner">
        <div className="texture-image">
          <Image
            alt="Lightweight skincare gel texture applied on skin"
            className="texture-photo"
            fill
            sizes="(max-width: 820px) 100vw, 48vw"
            src="/images/texture-3types.png"
          />
        </div>
        <div className="texture-copy">
          <p className="eyebrow">Comfort &amp; feel</p>
          <h2>Formulas that feel right from the first use.</h2>
          <div className="texture-points">
            {texturePoints.map((point) => (
              <article key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
