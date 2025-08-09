export function SundaysFAQ() {
  const sundaysFaq = [
    {
      question: 'What should I wear?',
      answer: "Come as you are! We're casual to business casual and care more about your presence than your attire.",
    },
    {
      question: 'How long is the service?',
      answer: 'Services last approximately 2 hours and 15 minutes, including worship, message, fellowship, and additional activities for kids and adults.',
    },
    {
      question: 'Will I be singled out as a visitor?',
      answer: "No, we won't put you on the spot. Welcome cards are available if you'd like to connect.",
    },
    {
      question: 'Where do I park?',
      answer: 'Free parking is available in our lot, with overflow spaces across the street.',
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