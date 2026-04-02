import { Link } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">amber</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Amber is a leading student accommodation platform providing 1M+ rooms in 800+ cities worldwide.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">f</div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">t</div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">i</div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">l</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Refer a Friend</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Partner with Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Support</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Download App</h3>
            <p className="text-gray-400 mb-6">Get the best student accommodation experience on your mobile device.</p>
            <div className="space-y-3">
              <div className="bg-white/10 p-3 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-white/20 transition-all">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs">A</div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase">Download on the</p>
                  <p className="text-sm font-bold">App Store</p>
                </div>
              </div>
              <div className="bg-white/10 p-3 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-white/20 transition-all">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs">G</div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase">Get it on</p>
                  <p className="text-sm font-bold">Google Play</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>© 2026 AmberStudent Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
