import React from 'react';

const LocalMomentumBlock: React.FC = () => {
  const thumbnails = [
    { src: 'https://framerusercontent.com/images/waTNlL9qMhnttFJBOZ5LLOhXxZ4.jpg?scale-down-to=1024', alt: 'Local Event 1', caption: 'Local Business Feature' },
    { src: 'https://framerusercontent.com/images/qOwPyV6zhc1uZR2KYlhwPKb2ssw.jpg?scale-down-to=1024', alt: 'AI Driven Leadership at Co-Creeate Hub', caption: 'How to Use AI - At Co-Create Hub' },
    { src: 'https://framerusercontent.com/images/vQ3poW7GlBF0AOPSM2vRXIMXxQ.jpg?scale-down-to=1024', alt: 'Podcast with Christie Graham', caption: 'Podcasts with Local Community Members'  },
    { src: 'https://framerusercontent.com/images/NkJKmfganbJ2SxJxIFw5EcTrDk4.jpg?scale-down-to=1024', alt: 'Business Spotlight', caption: 'Business Spotlight - Dr. K'  },
    { src: 'https://framerusercontent.com/images/Rne7bnsS06kixqGCu1Ed4OkVUm8.jpeg?scale-down-to=1024', alt: 'Tacos4Ever media', caption: 'Restauraunt Videography & Photography' },
    { src: 'https://framerusercontent.com/images/lPa7Dy5BvhuILLWq9qlswOzIek.jpg?scale-down-to=1024', alt: 'Local Event 6' },
  ];

  return (
    <section id="local-momentum" className="py-section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Already Making Moves in Russellville</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Even before launch, Town Square is already part of the story—through podcasts, events, and collaborations that celebrate local businesses and voices. When you join, you’re not waiting—you’re participating.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
