import Image from "next/image";

const audiences = [
  {
    title: "Sensitive Skin",
    description: "For skin that reacts easily — gentle formulas that feel calm and comfortable every day.",
    image: "/images/audience-sensitive.png",
  },
  {
    title: "Hormonal Skin Changes",
    description: "Formulated with comfort in mind for skin that needs extra gentleness during hormonal shifts.",
    image: "/images/audience-pregnancy.png",
  },
  {
    title: "Mature & Fragile Skin",
    description: "As skin becomes drier and more delicate with age, daily comfort and gentleness matter more.",
    image: "/images/audience-mature.png",
  },
  {
    title: "Delicate Areas",
    description: "For underarms, intimate skin, and areas that need a softer, comfort-focused approach.",
    image: "/images/audience-body.png",
  },
  {
    title: "Skin That Needs Extra Care",
    description: "When your skin needs more than everyday formulas, Bodylife is designed to feel safe and soothing.",
    image: "/images/audience-skin-conditions.png",
  },
];

export function AudienceSection() {
  return (
    <section className="section audience-section">
      <div className="section-heading">
        <p className="eyebrow">Sensitive needs</p>
        <h2>Made for people who need a gentler kind of care.</h2>
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
