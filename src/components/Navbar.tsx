import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, User, LogOut, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { cn } from '../lib/utils';

export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4",
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className={cn(
            "text-2xl font-bold tracking-tighter",
            isScrolled ? "text-primary" : "text-white"
          )}>amber</span>
        </Link>

        {/* Desktop Search (only shown when scrolled) */}
        {isScrolled && (
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-md mx-8">
            <Search className="w-4 h-4 text-gray-500 mr-2" />
            <input 
              type="text" 
              placeholder="Search by city, university or area" 
              className="bg-transparent border-none outline-none text-sm w-full"
            />
          </div>
        )}

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="#" className={cn("text-sm font-medium", isScrolled ? "text-gray-700" : "text-white")}>Download App</Link>
          <Link to="#" className={cn("text-sm font-medium", isScrolled ? "text-gray-700" : "text-white")}>Partner with us</Link>
          
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
                  {user?.name.charAt(0).toUpperCase()}
                </div>
                <span className={cn("text-sm font-medium", isScrolled ? "text-gray-700" : "text-white")}>{user?.name}</span>
              </div>
              <button 
                onClick={() => { logout(); navigate('/'); }}
                className={cn("p-2 rounded-full hover:bg-gray-100 transition-colors", isScrolled ? "text-gray-700" : "text-white")}
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login" className={cn("text-sm font-medium", isScrolled ? "text-gray-700" : "text-white")}>Login</Link>
              <Link to="/signup" className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={cn("w-6 h-6", isScrolled ? "text-gray-700" : "text-white")} />
          ) : (
            <Menu className={cn("w-6 h-6", isScrolled ? "text-gray-700" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <Link to="#" className="text-gray-700 font-medium py-2 border-b border-gray-100">Download App</Link>
          <Link to="#" className="text-gray-700 font-medium py-2 border-b border-gray-100">Partner with us</Link>
          {isAuthenticated ? (
            <>
              <div className="flex items-center gap-3 py-2">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  {user?.name.charAt(0).toUpperCase()}
                </div>
                <span className="font-bold text-gray-800">{user?.name}</span>
              </div>
              <button 
                onClick={() => { logout(); setIsMobileMenuOpen(false); navigate('/'); }}
                className="text-left text-red-500 font-medium py-2"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 font-medium py-2 border-b border-gray-100">Login</Link>
              <Link to="/signup" className="bg-primary text-white px-6 py-3 rounded-xl text-center font-bold mt-2">
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
