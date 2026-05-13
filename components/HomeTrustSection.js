const trustItems = [
  {
    title: "Dermatologist Recommended",
    description: "We work with derms who treat sensitive skin.",
    icon: "doctor"
  },
  {
    title: "Safe for Sensitive Skin",
    description: "Tested with people who flush and react.",
    icon: "leaf"
  },
  {
    title: "Clinically Tested",
    description: "Each formula passes a 4-week use study.",
    icon: "flask"
  },
  {
    title: "Built for Daily Use",
    description: "Light enough to use every morning.",
    icon: "calendar"
  },
  {
    title: "Vegan",
    description: "No animal-derived ingredients.",
    icon: "sprout"
  },
  {
    title: "No Animal Testing",
    description: "We never test on animals.",
    icon: "bunny"
  },
  {
    title: "Naturally Sourced",
    description: "Plant-derived where the molecule allows.",
    icon: "branch"
  }
];

function TrustIcon({ type }) {
  if (type === "doctor") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 17c4 0 7-3 7-8 0-4-3-7-7-7S9 5 9 9c0 5 3 8 7 8Z" />
        <path d="M5 30c1-7 5-11 11-11s10 4 11 11" />
        <path d="M16 23v5M13.5 25.5h5" />
      </svg>
    );
  }

  if (type === "flask") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M12 3h8M14 3v9L7 25c-1 2 0 4 3 4h12c3 0 4-2 3-4l-7-13V3" />
        <path d="M10 23h12" />
      </svg>
    );
  }

  if (type === "calendar") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M7 6h18v21H7zM7 12h18M12 4v4M20 4v4" />
        <path d="M11 17h3M18 17h3M11 22h3M18 22h3" />
      </svg>
    );
  }

  if (type === "bunny") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M12 15C9 10 8 4 10 3c2-1 5 4 6 9M19 14c1-6 4-11 6-10s1 7-3 12" />
        <path d="M8 24c0-6 4-10 10-10 5 0 9 4 9 9 0 4-3 7-8 7H8c-3 0-5-2-5-4s2-4 5-2Z" />
        <path d="M20 21h.1" />
      </svg>
    );
  }

  if (type === "branch") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 29V5M16 16c-5-1-8-4-9-8 5 0 8 2 9 8ZM16 21c6-1 9-4 10-9-6 0-9 3-10 9Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 28C9 22 6 16 8 10c5 0 8 2 8 7 0-5 3-7 8-7 2 6-1 12-8 18Z" />
      <path d="M16 28V17" />
    </svg>
  );
}

export function HomeTrustSection() {
  return (
    <section className="home-trust-section bg-bodylife-paper px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-y-12 divide-bodylife-line sm:grid-cols-3 lg:grid-cols-7 lg:divide-x">
        {trustItems.map((item) => (
          <article
            className="trust-pillar px-3 text-center lg:px-5"
            key={item.title}
          >
            <div className="trust-pillar-icon mx-auto mb-5 h-10 w-10 text-bodylife-ink [&_svg]:h-full [&_svg]:w-full [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.2] [&_svg]:stroke-linecap-round [&_svg]:stroke-linejoin-round">
              <TrustIcon type={item.icon} />
            </div>
            <h3 className="mx-auto max-w-[150px] text-[0.88rem] font-semibold leading-[1.45] tracking-[-0.005em] text-bodylife-ink">
              {item.title}
            </h3>
            <p className="mx-auto mt-3 max-w-[150px] text-[0.76rem] leading-[1.6] text-bodylife-muted">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
