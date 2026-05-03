export function CertificationBadges() {
  const badges = [
    {
      label: "Cruelty Free",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 18C11 13 10 7 12 6c2-1 5 4 6 9M25 17c1-6 4-11 6-10s1 7-3 12" />
          <path d="M10 27c0-6 4-10 10-10 5 0 9 4 9 9 0 4-3 7-8 7H10c-3 0-5-2-5-4s2-4 5-2Z" />
          <circle cx="22" cy="24" r="0.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "Vegan",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 34V10" />
          <path d="M20 20c-5-1-9-5-10-10 6 0 9 3 10 10Z" />
          <path d="M20 25c6-1 10-5 11-11-7 0-10 4-11 11Z" />
          <path d="M15 8c2 0 4 1 5 3 1-2 3-3 5-3" />
        </svg>
      ),
    },
    {
      label: "Dermatologist Tested",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="20" cy="14" r="6" />
          <path d="M10 34c1-8 5-13 10-13s9 5 10 13" />
          <path d="M20 27v5M17.5 29.5h5" />
        </svg>
      ),
    },
    {
      label: "Clinically Tested",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 6h10M18 6v10L11 28c-1 2 0 4 3 4h12c3 0 4-2 3-4l-7-12V6" />
          <path d="M13 26h14" />
          <circle cx="18" cy="22" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="23" cy="24" r="1" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      label: "Paraben Free",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="20" cy="20" r="12" />
          <path d="M14 18c2-3 4-4 6-4s4 2 4 4c0 3-4 3-4 6" />
          <circle cx="20" cy="28" r="1" fill="currentColor" stroke="none" />
          <path d="M10 10l20 20" strokeWidth="1.8" />
        </svg>
      ),
    },
  ];

  return (
    <section className="certification-badges-section">
      <div className="certification-badges">
        {badges.map((badge) => (
          <div className="certification-badge" key={badge.label}>
            <div className="certification-badge-icon">{badge.icon}</div>
            <span className="certification-badge-label">{badge.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
