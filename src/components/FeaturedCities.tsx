import { motion } from 'motion/react';

const cities = [
  { name: 'London', rooms: '1500+', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1000' },
  { name: 'Birmingham', rooms: '800+', image: 'https://images.unsplash.com/photo-1570158268183-d296b2892211?auto=format&fit=crop&q=80&w=1000' },
  { name: 'Glasgow', rooms: '600+', image: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?auto=format&fit=crop&q=80&w=1000' },
  { name: 'Manchester', rooms: '900+', image: 'https://images.unsplash.com/photo-1515586060484-d97f8a9168a2?auto=format&fit=crop&q=80&w=1000' },
  { name: 'Liverpool', rooms: '500+', image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&q=80&w=1000' },
  { name: 'Sheffield', rooms: '400+', image: 'https://images.unsplash.com/photo-1561571994-3c61c554181a?auto=format&fit=crop&q=80&w=1000' },
];

export default function FeaturedCities() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Popular Cities</h2>
            <p className="text-gray-600">Explore student accommodation in top university cities.</p>
          </div>
          <button className="text-primary font-bold hover:underline">View all cities →</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
            >
              <img 
                src={city.image} 
                alt={city.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{city.name}</h3>
                <p className="text-sm text-white/80">{city.rooms} student rooms</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
