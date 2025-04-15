import React from 'react';
import { Ticket, Medal, Rocket } from 'lucide-react'; // Example icons

interface IncentiveItemProps {
  icon: React.ElementType;
  title: string;
}

const IncentiveItem: React.FC<IncentiveItemProps> = ({ icon: Icon, title }) => (
  <div className="flex flex-col items-center text-center p-6 bg-surface rounded-lg shadow-subtle hover:shadow-medium transition-shadow duration-300">
    <div className="bg-primary-light text-primary-dark rounded-full p-3 mb-4 inline-flex">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-text-primary">{title}</h3>
  </div>
);

const EarlyAccessIncentivesBlock: React.FC = () => {
  const incentives = [
    { icon: Ticket, title: 'Exclusive Event Invites' },
    { icon: Medal, title: 'Early Adopter Recognition' },
    { icon: Rocket, title: 'First Access to Business Tools' },
  ];

  return (
    <section id="early-access-incentives" className="py-section bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Early Adopters Get More</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Businesses that sign up (for free) today will have exlusive access to perks:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {incentives.map((incentive) => (
            <IncentiveItem key={incentive.title} {...incentive} />
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-lg text-text-primary font-semibold">
            Spots are limited—join today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessIncentivesBlock;
