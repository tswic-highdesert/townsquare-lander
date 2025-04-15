import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-gradient-to-b from-blue-50 via-white to-white pt-20 pb-10 md:pt-32 md:pb-20 overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white/50 backdrop-blur-sm"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary mb-4">
          Empower Your Local Economy. <span className="text-primary">Together.</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8">
          Introducing LocalFirst: The platform connecting local businesses, city leaders, and residents to build thriving communities. Be the first to know when we launch.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#signup" className="btn btn-primary text-lg px-8 py-4 w-full sm:w-auto">
            Request Early Access
          </a>
          {/* Optional secondary action */}
          {/* <a href="#features" className="btn btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
            Learn More
          </a> */}
        </div>
        <p className="mt-6 text-sm text-text-secondary">Limited spots available for early adopters.</p>
      </div>
    </section>
  );
};

export default Hero;
