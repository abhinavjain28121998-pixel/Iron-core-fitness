import React from 'react';
import { motion } from 'motion/react';
import { Camera, Utensils, Info, ArrowRight, Leaf, Flame, Clock } from 'lucide-react';
import DemoSection from '../components/DemoSection';
import BriefingSection from '../components/BriefingSection';
import { SEO } from '../components/SEO';

export default function FoodAnalysis() {
  return (
    <div className="w-full bg-black text-white selection:bg-red-600 selection:text-white">
      <SEO 
        title="Food Analysis & Meal Builder"
        description="Build your plate by adding basic ingredients like paneer, bread, and ghee. Adjust portions for precise nutritional tracking."
        urlPath="/food-analysis"
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Food Analysis", item: "/food-analysis" }
        ]}
      />
      {/* Hero Section */}
      <section className="px-6 py-12 md:py-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-600/20 text-red-500 text-[10px] md:text-xs font-semibold uppercase tracking-widest mb-6 md:mb-8">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            New Feature
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-6 md:mb-8">
            Taste the <br/>
            <span className="italic text-red-500">knowledge.</span>
          </h1>
          <p className="text-base md:text-xl text-gray-400 max-w-md mb-8 md:mb-10 leading-relaxed font-light">
            Build your plate by adding basic ingredients like paneer, bread, and ghee. Adjust portions for precise nutritional tracking.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-red-600 text-white rounded-full px-6 py-4 md:py-3 hover:bg-red-700 transition-all inline-flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-xs md:text-sm"
            >
              Try the Demo <ArrowRight className="w-4 h-4" />
            </button>
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
            className="rounded-full aspect-[3/4] object-cover w-full max-w-md mx-auto shadow-2xl"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            width="800"
            height="1066"
          />
          
          {/* Floating UI Elements */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute top-1/4 -right-4 md:-right-12 bg-zinc-900/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-950 flex items-center justify-center text-red-500">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Calories</p>
                <p className="font-serif text-xl font-semibold text-white">420 kcal</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-1/4 -left-4 md:-left-12 bg-zinc-900/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-950 flex items-center justify-center text-green-500">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Dietary</p>
                <p className="font-serif text-xl font-semibold text-white">Vegetarian</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-16 md:py-24 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl mb-3 md:mb-4">Meal Builder</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">Add multiple items and adjust weights to calculate your meal's total nutritional profile.</p>
          </div>
          <DemoSection />
        </div>
      </section>

      {/* Briefing Section */}
      <section id="briefing" className="py-16 md:py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl mb-3 md:mb-4">Technical Briefing</h2>
            <p className="text-gray-400 text-sm md:text-base">Product development overview and implementation details.</p>
          </div>
          <BriefingSection />
        </div>
      </section>
    </div>
  );
}
