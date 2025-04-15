import React, { useState } from 'react';
import { Mail, Phone, Send, User } from 'lucide-react';

const SignUpForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    if (!name || !email || !phone) {
      setError('All fields are required.');
      return;
    }

    // Basic email validation
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // This is a very simple check, consider a library for robust validation
    if (phone && !/^\+?[0-9\s\-()]{7,}$/.test(phone)) {
      setError('Please enter a valid phone number.');
      return;
    }

    const formData = { name, email, phone };

    try {
      const response = await fetch('https://services.leadconnectorhq.com/hooks/eSDWi7wv3f3KDenVp1JO/webhook-trigger/JkjO8WNGnL1hQZLa7jb9', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setSubmitted(true);
      setName('');
      setEmail('');
      setPhone('');
    } catch (error) {
      setError('There was a problem submitting the form. Please try again later.');
    }
  };

  return (
    <section id="signup" className="py-section bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center bg-surface p-8 md:p-12 rounded-lg shadow-medium">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Be the First to Know</h2>
          <p className="text-lg text-text-secondary mb-8">
            Sign up for exclusive early access to LocalFirst and get notified about our launch, plus receive SMS updates.
          </p>

          {submitted ? (
            <div className="text-center p-6 bg-green-100 text-green-800 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
              <p>You're on the list! We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="text-red-600 bg-red-100 p-3 rounded-md text-sm">
                  {error}
                </div>
              )}
              <div className="relative">
                <label htmlFor="name" className="sr-only">Name</label>
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-field pl-10"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="relative">
                <label htmlFor="email" className="sr-only">Email address</label>
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field pl-10"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="relative">
                <label htmlFor="phone" className="sr-only">Phone number</label>
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input-field pl-10"
                  placeholder="Phone number for SMS updates"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-full text-lg py-3 flex items-center justify-center gap-2">
                <Send size={20} />
                Request Early Access
              </button>
              <p className="text-xs text-gray-500 mt-4">
                By signing up, you agree to our Privacy Policy and Terms of Service. You can opt-out anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
