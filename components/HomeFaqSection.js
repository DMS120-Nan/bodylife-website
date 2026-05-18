const homeFaqs = [
  {
    question: "Is it safe for sensitive skin?",
    answer:
      "Yes. Sensitive needs are the standard we design to first. Every formula is fragrance-free, dye-free, and runs through a 4-week patch and use study with people who have sensitive or reactive skin before we ship it."
  },
  {
    question: "Can I use this during pregnancy?",
    answer:
      "All three formulas are free from retinoids, salicylic acid, hydroquinone, and essential oils. If you have any concerns during pregnancy or while breastfeeding, we always recommend checking with your healthcare provider first."
  },
  {
    question: "How long until I see something?",
    answer:
      "You feel comfort first. Most people notice calmer, more hydrated skin in the first week. Smoother surface and more even tone usually land at week four, which matches the natural skin renewal cycle."
  },
  {
    question: "Does it layer with my retinol or actives?",
    answer:
      "Yes. Use Bodylife morning and evening as your hydration and barrier base. Add your retinol or acid on the nights you choose, after the serum and before the cream."
  },
  {
    question: "What if it doesn't work for me?",
    answer:
      "Email us within 30 days of delivery and we refund you. No reason needed. We would rather take it back than have a jar you can't use sitting on your shelf."
  }
];

export function HomeFaqSection() {
  return (
    <section className="section home-faq-section" aria-label="Frequently asked questions">
      <div className="section-heading">
        <p className="eyebrow">Quick answers</p>
        <h2>The questions we get most.</h2>
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
