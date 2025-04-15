import React from 'react';
import { MapPin, Handshake, Compass } from 'lucide-react'; // Example icons

interface FeatureItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-surface rounded-lg shadow-subtle hover:shadow-medium transition-shadow duration-300">
    <div className="bg-primary-light text-primary-dark rounded-full p-3 mb-4 inline-flex">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-text-primary">{title}</h3>
    <p className="text-text-secondary">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Be Discovered',
      description: 'Make it easier for locals and visitors to find you—online and on foot.',
    },
    {
      icon: Handshake,
      title: 'Connect Locally',
      description: 'Build stronger community ties through features designed for real-world interaction.',
    },
    {
      icon: Compass,
      title: 'Lead the Movement',
      description: 'Position your business as a local leader at the heart of a growing digital platform.',
    },
  ];

  return (
    <section id="features" className="py-section bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Why Your Business Should Be Here</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We're building the essential toolkit for vibrant local economies in the digital age.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureItem key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
