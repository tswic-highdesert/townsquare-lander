import React from 'react';

const LocalMomentumBlock: React.FC = () => {
  const thumbnails = [
    { src: 'https://via.placeholder.com/150', alt: 'Local Event 1', caption: 'Local Business Feature' },
    { src: 'https://via.placeholder.com/150', alt: 'Local Event 2', caption: 'Community Shoutout' },
    { src: 'https://via.placeholder.com/150', alt: 'Local Event 3' },
    { src: 'https://via.placeholder.com/150', alt: 'Local Event 4' },
    { src: 'https://via.placeholder.com/150', alt: 'Local Event 5', caption: 'Small Business Saturday Coverage' },
    { src: 'https://via.placeholder.com/150', alt: 'Local Event 6' },
  ];

  return (
    <section id="local-momentum" className="py-section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">The Local Momentum</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Even before launch, we’re already collaborating with local podcasts, business leaders, and community events to drive hometown discovery. Join the growing list of businesses putting Russellville on the map.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {thumbnails.map((thumbnail, index) => (
            <div key={index} className="relative group">
              <img
                src={thumbnail.src}
                alt={thumbnail.alt}
                className="w-full h-full object-cover rounded-lg shadow-subtle group-hover:shadow-medium transition-shadow duration-300"
              />
              {thumbnail.caption && (
                <div className="absolute bottom-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">
                  {thumbnail.caption}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalMomentumBlock;
