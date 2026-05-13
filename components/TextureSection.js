import Image from "next/image";

const texturePoints = [
  {
    title: "Light gel, no slip",
    description: "Sits like water on the skin. Nothing sticky, nothing tacky once it goes in."
  },
  {
    title: "Absorbs in seconds",
    description: "You can press it in, count to ten, and layer SPF or makeup over it."
  },
  {
    title: "Sensitive-skin first",
    description: "We tested it with people who flush, sting, and react. It cleared their bar."
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
          <p className="eyebrow">Texture &amp; feel</p>
          <h2>The gel goes on like water.</h2>
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
