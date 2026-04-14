import { Link, useLocation } from 'react-router-dom';
import { User } from 'firebase/auth';
import { Dumbbell, User as UserIcon, LogOut, Menu, X, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { logout } from '../firebase';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'motion/react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar({ user }: { user: User | null }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Update UI notify the user they can install the PWA
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    // We've used the prompt, and can't use it again, throw it away
    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  const navLinks = [
    { name: 'Workouts', path: '/workouts' },
    { name: 'Muscle Groups', path: '/muscle-groups' },
    { name: 'Diets', path: '/diets' },
    { name: 'Supplements', path: '/supplements' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-red-600 p-1.5 rounded-lg group-hover:scale-110 transition-transform">
            <Dumbbell className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase italic">
            Iron<span className="text-red-600">Core</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-semibold uppercase tracking-widest hover:text-red-600 transition-colors",
                location.pathname === link.path ? "text-red-600" : "text-gray-400"
              )}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-4 pl-4 border-l border-white/10">
            {isInstallable && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleInstallClick}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors"
              >
                <Download className="w-4 h-4" />
                Install App
              </motion.button>
            )}
            
            {user && (
              <>
                <Link to="/profile" className="flex items-center gap-2 hover:text-red-600 transition-colors">
                  <UserIcon className="w-5 h-5" />
                  <span className="text-sm font-bold">{user.displayName?.split(' ')[0]}</span>
                </Link>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={logout}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5 text-gray-400" />
                </motion.button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          {isInstallable && (
            <button
              onClick={handleInstallClick}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors"
            >
              <Download className="w-4 h-4" />
              Install
            </button>
          )}
          <button 
            className="p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "absolute top-full left-0 right-0 bg-black border-b border-white/10 md:hidden p-6 flex flex-col gap-4 transition-all duration-300 origin-top",
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={cn(
              "text-lg font-bold uppercase tracking-widest",
              location.pathname === link.path ? "text-red-600" : "text-gray-400"
            )}
          >
            {link.name}
          </Link>
        ))}
        {user && (
          <>
            <Link 
              to="/profile" 
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold uppercase tracking-widest text-gray-400"
            >
              Profile
            </Link>
            <button 
              onClick={() => { logout(); setIsOpen(false); }}
              className="text-left text-lg font-bold uppercase tracking-widest text-red-600"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
