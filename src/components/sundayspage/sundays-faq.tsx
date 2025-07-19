export function SundaysFAQ() {
  const sundaysFaq = [
    {
      question: 'What should I wear?',
      answer: "Come as you are! We're casual to business casual and care more about your presence than your attire.",
    },
    {
      question: 'Is there childcare available?',
      answer: 'Yes! We offer programs for children (infants through 5th grade) with secure check-in.',
    },
    {
      question: 'How long is the service?',
      answer: 'Services last approximately 90 minutes, including worship, message, and response time.',
    },
    {
      question: 'Will I be singled out as a visitor?',
      answer: "No, we won't put you on the spot. Welcome cards are available if you'd like to connect.",
    },
    {
      question: 'Where do I park?',
      answer: 'Free parking is available in our lot, with overflow spaces across the street.',
    },
    {
      question: 'What is the gospel?',
      answer: 'The gospel is the good news of Jesus Christ—His life, death, and resurrection for our salvation. We would love to share more with you in person!',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {sundaysFaq.map((faq, idx) => (
        <div key={idx} className="headline-defaults copy-defaults">
          <h3 className="text-xl font-bold mb-2 text-black">{faq.question}</h3>
          <div className="text-base text-gray-800">{faq.answer}</div>
        </div>
      ))}
    </div>
  );
} 