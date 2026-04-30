const clinicalStats = [
  {
    value: "93%",
    label: "noticed improved hydration"
  },
  {
    value: "99.5%",
    label: "sensitive skin reported no discomfort"
  },
  {
    value: "90%",
    label: "smoother skin texture"
  },
  {
    value: "Clinically tested",
    label: "formulas"
  }
];

export function ClinicalProofSection() {
  return (
    <section className="clinical-proof-section">
      <div className="clinical-proof-inner">
        <div className="clinical-proof-heading">
          <p className="eyebrow">Clinical proof</p>
          <h2>
            Measured support
            <br />
            for daily skin
            <br />
            health.
          </h2>
        </div>
        <div className="clinical-proof-grid">
          {clinicalStats.map((stat) => {
            const isClinicalTested = stat.value === "Clinically tested";

            return (
              <article className="clinical-proof-item" key={stat.label}>
                <strong
                  className={isClinicalTested ? "clinical-proof-wordmark" : ""}
                >
                  {isClinicalTested ? (
                    <>
                      Clinically
                      <br />
                      tested
                    </>
                  ) : (
                    stat.value
                  )}
                </strong>
                <p>{stat.label}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
