import Image from "next/image";

const texturePoints = [
  {
    title: "Lightweight gel texture",
    description: "A light, non-sticky feel for daily use."
  },
  {
    title: "Absorbs quickly",
    description: "Settles into skin without a heavy finish."
  },
  {
    title: "Designed for sensitive skin",
    description: "Made to support comfort with regular use."
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
          <p className="eyebrow">TEXTURE &amp; FEEL</p>
          <h2>Lightweight texture for daily skin support.</h2>
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
