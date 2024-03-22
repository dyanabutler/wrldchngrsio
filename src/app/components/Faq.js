"use client"
import React, { useState } from 'react';

const faqs = [
  {
    question: "What is WRLD CHNGRS?         ",
    answer: "WRLD CHNGR is a unique, AI-driven NFT universe where players control heroes of various classes and body types, each uniquely generated. Our innovative AI technology ensures each hero is one-of-a-kind, with the user 's journey directly influencing their hero's development and the impacts they make in the game and, symbolically, in the real world.",
  },
  {
    question: "What are impacts?",
    answer: "Impacts in WRLD CHNGRS refer to the positive actions and achievements you accomplish using your connections here with WRLD CHNGRS. These could align with real-world issues like environmental conservation or social justice. Each Impact not only progresses your impact level but also mirrors positive changes in the real world, emphasizing our game's commitment to making a difference.",
  },
  {
    question: "What are traits?",
    answer: "Traits and Auras in WRLD CHNGRS are special visual elements that heroes can earn. Traits might include unique accessories or physical features, while Auras are glowing effects or special atmospheres surrounding your hero. They are rewards for achievements within the universe and make your hero look even cooler and more unique.",
  },
  
  // Add more FAQs here
];

const FaqComponent = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="bg-transparent dark:bg-transparent">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-pro font-semibold text-Secondary lg:text-3xl dark:text-Secondary">FAQs</h1>
        <hr className="my-6 border-gray-200 dark:border-gray-700" />
        <div>
          {faqs.map((faq, index) => (
            <React.Fragment key={index}>
              <div>
                <button className="flex items-center justify-between w-full focus:outline-none" onClick={() => toggleFaq(index)}>
                  <h1 className="mx-4 text-xl text-gray-700 dark:text-white">{faq.question}</h1>
                  <svg className={`flex-shrink-0 w-6 h-6 text-Primary transition-transform ${openFaq === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="flex mt-4 md:mx-10">
                    <span className="border border-yellow-500"></span>
                    <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
              <hr className="my-8 border-yellow-200 dark:border-yellow-700" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqComponent;
