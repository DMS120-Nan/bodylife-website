const clinicalStats = [
  {
    value: "93%",
    label: "reported noticeably more comfortable skin"
  },
  {
    value: "99%",
    label: "sensitive skin reported no discomfort"
  },
  {
    value: "4 wk",
    label: "comfort improvement observed in user study"
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
          <p className="eyebrow">Comfort-focused results</p>
          <h2>
            Gentle care,
            <br />
            measured over
            <br />
            daily use.
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
