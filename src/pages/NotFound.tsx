import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { SEO } from '../components/SEO';
import { PageTransition } from '../components/PageTransition';
import { motion } from 'motion/react';

export default function NotFound() {
  return (
    <PageTransition>
      <div className="flex-1 flex items-center justify-center bg-black px-6 py-32">
        <SEO 
          title="404 - Page Not Found" 
          description="The page you are looking for does not exist. Return to Iron Core Fitness home for elite workout and diet plans."
          urlPath="/404"
          noindex={true}
        />
        <div className="text-center max-w-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-24 h-24 bg-red-600/20 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-red-600/30"
          >
            <span className="text-4xl font-black text-red-600 italic">404</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-6">
            Lost in the <span className="text-red-600">Void?</span>
          </h1>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            The page you're looking for has been shredded. Don't let your gains go to waste—head back to safety.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/" 
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-red-600/20"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
