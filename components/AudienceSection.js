import Image from "next/image";

const audiences = [
  {
    title: "Sensitive Skin",
    description: "Calms redness, burning, and that tight feeling after cleansing.",
    image: "/images/audience-sensitive.png",
  },
  {
    title: "Pregnancy & Postpartum",
    description: "No retinoids, salicylic acid, or essential oils. Safe through every trimester.",
    image: "/images/audience-pregnancy.png",
  },
  {
    title: "Mature Skin",
    description: "Fragrance-free, dye-free. Comforts dryness and the daily itch of thinner skin.",
    image: "/images/audience-mature.png",
  },
  {
    title: "Body & Specialty",
    description: "Use it on underarms, intimate skin, knees, and feet. We tested all of it.",
    image: "/images/audience-body.png",
  },
  {
    title: "Eczema & Rosacea",
    description: "Supports flare-prone skin alongside your derm-prescribed routine.",
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
