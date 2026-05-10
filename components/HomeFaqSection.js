const homeFaqs = [
  {
    question: "Is Bodylife actually safe for sensitive skin?",
    answer:
      "Yes. We design every formula with reactive, sensitive skin in mind first. We're fragrance-free, dye-free, dermatology-informed, and tested with people who flush, react, or sting easily."
  },
  {
    question: "Can I use this during pregnancy?",
    answer:
      "All current Bodylife formulas are made without retinoids, salicylic acid, hydroquinone, or essential oils — so they fit comfortably into a pregnancy or breastfeeding routine. As always, run a sensitivity check first if your skin has changed."
  },
  {
    question: "How long until I see something?",
    answer:
      "Comfort comes quickly — most people feel calmer, more hydrated skin within the first week. Smoother surface and more even tone usually take 4 weeks of consistent daily use, in line with the natural skin renewal cycle."
  },
  {
    question: "Do these layer with my retinol or actives?",
    answer:
      "Yes — the routine is intentionally gentle. We recommend Bodylife in the morning and evening as your hydration / barrier base, and adding actives (like retinol) on the nights you choose, after your serum, before the cream."
  },
  {
    question: "What if it doesn't work for me?",
    answer:
      "Email us within 30 days of delivery and we'll refund you, no questions asked. We'd rather make it right than have skincare you can't use."
  }
];

export function HomeFaqSection() {
  return (
    <section className="section home-faq-section" aria-label="Frequently asked questions">
      <div className="section-heading">
        <p className="eyebrow">Quick answers</p>
        <h2>Things people usually ask first.</h2>
      </div>
      <div className="home-faq-list">
        {homeFaqs.map((faq, index) => (
          <details className="home-faq-item" key={faq.question} {...(index === 0 ? { open: true } : {})}>
            <summary>
              <span>{faq.question}</span>
              <span className="home-faq-mark" aria-hidden="true" />
            </summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
