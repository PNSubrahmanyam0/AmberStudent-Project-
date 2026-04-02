import { Search, Home, CheckCircle, Smartphone } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-10 h-10 text-primary" />,
    title: 'Search',
    description: 'Find your perfect home from over 1M+ student rooms worldwide.'
  },
  {
    icon: <Home className="w-10 h-10 text-primary" />,
    title: 'Book',
    description: 'Reserve your room with a small deposit and get instant confirmation.'
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-primary" />,
    title: 'Verify',
    description: 'Our team verifies your details and coordinates with the property.'
  },
  {
    icon: <Smartphone className="w-10 h-10 text-primary" />,
    title: 'Move-in',
    description: 'Get ready to start your new journey in your home away from home.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">How it works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Book your student accommodation in 4 simple steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/10 -translate-y-12 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-6 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-primary/5">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
