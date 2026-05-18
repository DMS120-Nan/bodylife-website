const trustBadges = [
  "Sensitive-needs tested",
  "Free shipping over $40",
  "30-day returns",
  "Vegan, cruelty-free"
];

export function InlineTrustLabels({ className = "" }) {
  return (
    <div className={`inline-trust-labels ${className}`}>
      {trustBadges.map((badge) => (
        <span key={badge}>{badge}</span>
      ))}
    </div>
  );
}

export function TrustBadges({ tone = "light" }) {
  return (
    <div className={`trust-badges trust-badges-${tone}`}>
      {trustBadges.map((badge) => (
        <span key={badge}>{badge}</span>
      ))}
    </div>
  );
}
