import Image from "next/image";

const audiences = [
  {
    title: "Sensitive Skin",
    description: "Relief for redness, burning, tightness and irritation.",
    image: "/images/audience-sensitive.png",
  },
  {
    title: "Expecting Mothers",
    description: "Hormone-safe care for changing skin during pregnancy.",
    image: "/images/audience-pregnancy.png",
  },
  {
    title: "Mature Skin",
    description: "Fragrance-free, no dyes. Soothes dryness and itch.",
    image: "/images/audience-mature.png",
  },
  {
    title: "Specialized Body Care",
    description: "Gentle, non-irritating care for underarms, intimate areas, knees and feet. Clinically tested.",
    image: "/images/audience-body.png",
  },
  {
    title: "Special Skin Conditions",
    description: "Gentle support for eczema, rosacea and dermatitis-prone skin.",
    image: "/images/audience-skin-conditions.png",
  },
];

export function AudienceSection() {
  return (
    <section className="section audience-section">
      <div className="section-heading">
        <p className="eyebrow">Made for you</p>
        <h2>Who is Bodylife for?</h2>
      </div>
      <div className="audience-grid">
        {audiences.map((item) => (
          <div className="audience-card" key={item.title}>
            <div className="audience-card-image">
              <Image
                alt={item.title}
                src={item.image}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 20vw"
                className="audience-card-photo"
              />
            </div>
            <div className="audience-card-text">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
