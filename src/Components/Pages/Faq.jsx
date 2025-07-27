import React from 'react';

const Faq = () => {
    const faqs = [
  {
    id: 1,
    question: "What is this platform about?",
    answer: "This platform connects Buyers who need small tasks done with Workers who complete them in exchange for coins that can be withdrawn as real money."
  },
  {
    id: 2,
    question: "How do I earn money here?",
    answer: "Register as a Worker, complete available tasks, and submit your work. Once approved by the Buyer, you’ll earn coins which can later be withdrawn as cash."
  },
  {
    id: 3,
    question: "How do I post a task?",
    answer: "Register as a Buyer, go to your dashboard, and use the 'Add New Task' form. Make sure you have enough coins before posting."
  },
  {
    id: 4,
    question: "What is the coin system?",
    answer: "Coins are the in-platform currency. Buyers use them to pay Workers. 20 Coins = 1 USD for withdrawal, while Buyers purchase 10 Coins for 1 USD."
  },
  {
    id: 5,
    question: "Is the platform mobile-friendly?",
    answer: "Yes, the platform is fully responsive and optimized for all devices including smartphones and tablets."
  }
];
    return (
      <div className=' py-10 w-5/6 mx-auto my-[10px]'>
        <div className='text-center space-y-2 mb-6'>
         <p  className='text-center text-accent font-bold text-2xl'>FAQs</p>
        <h1
        text=""
        as="h1"
        className='text-4xl  text-neutral '
      >Frequently Asked Questions</h1>
            

    <p className='font-medium text-neutral opacity-80'>Find quick answers to common questions about using our platform.</p>
 
 </div>
        <div>
           {
            faqs.map(faq=>
                <div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border">
  <div className="collapse-title font-semibold">{faq.question}</div>
  <div className="collapse-content text-sm">
    {faq.answer}
  </div>
</div>
            )
           } 
        </div>
        </div>
    );
};

export default Faq;