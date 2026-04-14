import React from 'react';
import { motion } from 'motion/react';
import { Camera, Utensils, Info, ArrowRight, Leaf, Flame, Clock } from 'lucide-react';
import DemoSection from './components/DemoSection';
import BriefingSection from './components/BriefingSection';

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] text-[#2c2c26] selection:bg-[#5A5A40] selection:text-white">
      {/* Header */}
      <header className="px-8 py-6 flex justify-between items-center border-b border-[#e0e0d8]">
        <div className="flex items-center gap-2">
          <Utensils className="w-6 h-6 text-[#5A5A40]" />
          <span className="font-serif text-2xl font-semibold tracking-tight">Snap & Savor</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wider text-[#5A5A40]/80">
          <a href="#demo" className="hover:text-[#5A5A40] transition-colors">Demo</a>
          <a href="#briefing" className="hover:text-[#5A5A40] transition-colors">Briefing</a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="px-8 py-24 md:py-32 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#5A5A40]/20 text-[#5A5A40] text-xs font-semibold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-[#5A5A40] animate-pulse"></span>
              New Feature
            </div>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-8">
              Taste the <br/>
              <span className="italic text-[#5A5A40]">knowledge.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#2c2c26]/70 max-w-md mb-10 leading-relaxed font-light">
              Upload a photo of any dish and instantly receive comprehensive culinary insights, from ingredients to nutritional facts.
            </p>
            <div className="flex gap-4">
              <a href="#demo" className="olive-button inline-flex items-center gap-2">
                Try the Demo <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2000&auto=format&fit=crop" 
              alt="Beautifully plated food" 
              className="pill-image w-full max-w-md mx-auto shadow-2xl"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating UI Elements */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute top-1/4 -right-4 md:-right-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Calories</p>
                  <p className="font-serif text-xl font-semibold">420 kcal</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute bottom-1/4 -left-4 md:-left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Dietary</p>
                  <p className="font-serif text-xl font-semibold">Vegetarian</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl mb-4">Experience the Magic</h2>
              <p className="text-[#2c2c26]/60 max-w-2xl mx-auto">Upload a photo of your meal and let our AI analyze it in seconds.</p>
            </div>
            <DemoSection />
          </div>
        </section>

        {/* Briefing Section */}
        <section id="briefing" className="py-24">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl mb-4">Technical Briefing</h2>
              <p className="text-[#2c2c26]/60">Product development overview and implementation details.</p>
            </div>
            <BriefingSection />
          </div>
        </section>
      </main>

      <footer className="bg-[#2c2c26] text-[#f5f5f0] py-12 text-center">
        <p className="font-serif text-xl italic opacity-80">Bon Appétit & Happy Coding</p>
      </footer>
    </div>
  );
}

export default App;
