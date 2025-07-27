import React from 'react';

const Terms = () => {
    return (
    <div className="w-5/6 mx-auto py-10 text-neutral space-y-6">
     <p  className='text-center text-accent font-bold text-2xl '>Terms</p>
      <h1 className="text-4xl font-bold text-center mb-6">Terms & Conditions</h1>

      <section>
        <h1 className="text-2xl text-accent font-semibold mb-2">1. Introduction</h1>
        <p className='opacity-70 font-medium'>
          Welcome to our Micro Tasking and Earning Platform. By accessing or using our services, you agree to be bound by these Terms and Conditions. Please read them carefully before using the platform.
        </p>
      </section>

      <section>
        <h1 className="text-2xl text-accent font-medium mb-2">2. User Roles & Responsibilities</h1>
        <p className='opacity-70 font-medium'><strong>Worker:</strong> You agree to complete tasks truthfully, submit valid proof, and respect deadlines. Submitting false or low-effort work may result in penalties or account suspension.</p>
        <p className='opacity-70 font-medium'><strong>Buyer:</strong> You are responsible for providing clear task instructions, setting fair rewards, and reviewing submissions within a reasonable time.</p>
        <p className='opacity-70 font-medium'><strong>Admin:</strong> We reserve the right to manage, update, or remove users, tasks, or coins to maintain platform integrity.</p>
      </section>

      <section>
        <h1 className="text-2xl text-accent font-semibold mb-2">3. Coin System</h1>
        <p className='opacity-70 font-medium'>
          Coins are the platform's internal currency. Workers earn coins by completing tasks. Buyers purchase coins via Stripe or other supported methods. Coins cannot be refunded after purchase and are not transferable outside the platform.
        </p>
        <p className='opacity-70 font-medium'>
          Workers can withdraw coins once they reach the minimum threshold (200 coins = $10). The platform charges a margin (20 coins = $1 for withdrawal, while buyers pay $1 for 10 coins).
        </p>
      </section>

      <section>
        <h1 className="text-2xl text-accent font-semibold mb-2">4. Account Suspension or Termination</h1>
        <p className='opacity-70 font-medium'>
          We reserve the right to suspend or terminate any account that violates these terms, including but not limited to spamming, scamming, submitting fraudulent work, or abusing the system.
        </p>
      </section>

      <section>
        <h1 className="text-2xl text-accent font-semibold mb-2">5. Payment & Refund Policy</h1>
        <p className='opacity-70 font-medium'>
          All coin purchases are final and non-refundable. Payments for completed tasks will only be released after review and approval by the Buyer. We do not guarantee earnings or task availability.
        </p>
      </section>

      <section>
        <h1 className="text-2xl text-accent font-semibold mb-2">6. Data & Privacy</h1>
        <p className='opacity-70 font-medium'>
          We collect minimal personal information for registration and payment purposes. Your data will not be sold or shared with third parties, except where required by law. Read our full Privacy Policy for more details.
        </p>
      </section>

      <section>
        <h1 className="text-2xl text-accent font-semibold mb-2">7. Changes to the Terms</h1>
        <p className='opacity-70 font-medium'>
          We may update these terms at any time. Continued use of the platform after changes means you agree to the new terms. Please review this page regularly.
        </p>
      </section>

      <section>
        <h1 className="text-2xl text-accent font-semibold mb-2">8. Contact</h1>
        <p className='opacity-70 font-medium'>
          If you have questions about these terms, please contact us at <span className="font-medium text-accent">lamiyarahmankhan01@gmail.com</span>.
        </p>
      </section>
    </div>
  );
};

export default Terms;