import { Shield, Zap, Heart, Clock } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: 'Quick & Easy Bookings',
    description: 'Time is money. Save both when you book with us.'
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: '100% Verified Listings',
    description: 'What you see is what you get. We verify every listing.'
  },
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: 'Price Match Guarantee',
    description: 'Find a lower price elsewhere and we will match it.'
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: '24/7 Personal Assistance',
    description: 'Our experts are always here to help you out.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Why book with amber?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We take the hassle out of student accommodation search.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-primary/5 rounded-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
