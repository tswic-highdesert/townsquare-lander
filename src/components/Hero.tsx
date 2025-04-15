import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-gradient-to-b from-blue-50 via-white to-white pt-20 pb-10 md:pt-32 md:pb-20 overflow-hidden"
      style={{
        backgroundImage: `url('https://framerusercontent.com/images/kaeo70G766MS29h4HUV55k0AA.jpg?scale-down-to=1024')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white/50 backdrop-blur-sm"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary mb-4">
          Drive foot traffic, digital presence, and local pride—in one platform.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8">
          Town Square is launching soon in Russellville. We’re building a local-first discovery platform to help businesses connect, grow, and lead the shop-local movement.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#signup" className="btn btn-primary text-lg px-8 py-4 w-full sm:w-auto">
            Be first to join the movement. Get exclusive invites, tools, and early access.
          </a>
          {/* Optional secondary action */}
          {/* <a href="#features" className="btn btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
            Learn More
          </a> */}
        </div>
        <p className="mt-6 text-sm text-text-secondary">We’ll only send local updates. No spam—just hometown value.</p>
      </div>
    </section>
  );
};

export default Hero;
