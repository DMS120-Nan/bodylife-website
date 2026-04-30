const trustBadges = [
  "Gentle daily use",
  "Barrier support",
  "Fast shipping",
  "Easy returns"
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
