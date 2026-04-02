import { Search, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2070")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
        >
          Home away from home,<br />booked in a click.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-white/90 mb-10"
        >
          1M+ student rooms in 800+ cities worldwide.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-2 md:p-3 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-2"
        >
          <div className="flex items-center w-full px-4 py-2 border-b md:border-b-0 md:border-r border-gray-100">
            <MapPin className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Search by city, university or area" 
              className="w-full bg-transparent outline-none text-gray-800 placeholder:text-gray-400"
            />
          </div>
          <button className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-xl md:rounded-full font-bold flex items-center justify-center gap-2 transition-all shrink-0">
            <Search className="w-5 h-5" />
            Search
          </button>
        </motion.div>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/80 text-sm font-medium">
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">✓</span> Free Cancellation
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">✓</span> Price Match Guarantee
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">✓</span> 24/7 Assistance
          </div>
        </div>
      </div>
    </section>
  );
}
