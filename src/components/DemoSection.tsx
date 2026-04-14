import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, Image as ImageIcon, Loader2, CheckCircle2, AlertCircle, Utensils } from 'lucide-react';
import { GoogleGenAI, Type } from '@google/genai';

interface FoodAnalysis {
  dishName: string;
  cuisineType: string;
  description: string;
  ingredients: string[];
  nutritionalFacts: {
    calories: string;
    protein: string;
    carbs: string;
    fat: string;
  };
  dietaryTags: string[];
}

export default function DemoSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<FoodAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setAnalysis(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setAnalysis(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeFood = async () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);
    setError(null);

    try {
      // Extract base64 data
      const base64Data = selectedImage.split(',')[1];
      const mimeType = selectedImage.split(';')[0].split(':')[1];

      const response = await fetch('/api/analyze-food', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageBase64: base64Data,
          mimeType: mimeType,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || `Server error: ${response.status}`);
      }

      const result = await response.json() as FoodAnalysis;
      setAnalysis(result);
    } catch (err) {
      console.error("Analysis error:", err);
      setError(err instanceof Error ? err.message : "Failed to analyze image. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Upload Column */}
      <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 flex flex-col gap-6 shadow-xl">
        <div 
          className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all ${
            selectedImage ? 'border-red-500/30 bg-zinc-800/50' : 'border-zinc-800 hover:border-red-500/50 hover:bg-zinc-800/50 cursor-pointer'
          }`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => !selectedImage && fileInputRef.current?.click()}
        >
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleImageUpload} 
            accept="image/*" 
            className="hidden" 
          />
          
          {selectedImage ? (
            <div className="relative rounded-xl overflow-hidden aspect-square md:aspect-[4/3]">
              <img src={selectedImage} alt="Selected food" className="w-full h-full object-cover" />
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                  setAnalysis(null);
                }}
                className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-black transition-colors shadow-sm border border-white/10"
              >
                Change Photo
              </button>
            </div>
          ) : (
            <div className="py-16 flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center text-red-500">
                <Upload className="w-8 h-8" />
              </div>
              <div>
                <p className="font-medium text-lg mb-1 text-white">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-400">SVG, PNG, JPG or GIF (max. 5MB)</p>
              </div>
            </div>
          )}
        </div>

        <button 
          onClick={analyzeFood}
          disabled={!selectedImage || isAnalyzing}
          className="bg-red-600 hover:bg-red-700 disabled:bg-zinc-800 disabled:text-zinc-500 text-white rounded-full transition-all w-full flex items-center justify-center gap-2 py-4 text-lg font-bold uppercase tracking-widest"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Analyzing Dish...
            </>
          ) : (
            <>
              <ImageIcon className="w-5 h-5" />
              Analyze Photo
            </>
          )}
        </button>

        {error && (
          <div className="p-4 bg-red-950/50 border border-red-900/50 text-red-400 rounded-xl flex items-start gap-3 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <p>{error}</p>
          </div>
        )}
      </div>

      {/* Results Column */}
      <div className="relative min-h-[500px]">
        <AnimatePresence mode="wait">
          {!analysis && !isAnalyzing && (
            <motion.div 
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-zinc-800 rounded-3xl"
            >
              <div className="w-20 h-20 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-700 mb-6">
                <Utensils className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl mb-2 text-zinc-500">Awaiting Culinary Input</h3>
              <p className="text-zinc-600 max-w-sm">Upload a photo and hit analyze to uncover the secrets of your dish.</p>
            </motion.div>
          )}

          {isAnalyzing && (
            <motion.div 
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-zinc-900/50 rounded-3xl border border-white/5"
            >
              <Loader2 className="w-12 h-12 animate-spin text-red-500 mb-6" />
              <h3 className="font-serif text-2xl mb-2 animate-pulse text-white">Consulting the Chef...</h3>
              <p className="text-gray-400">Identifying ingredients and calculating nutritional value.</p>
            </motion.div>
          )}

          {analysis && (
            <motion.div 
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-zinc-900 border border-white/10 rounded-3xl p-8 flex flex-col gap-8 shadow-xl"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-red-500">{analysis.cuisineType}</span>
                </div>
                <h3 className="font-serif text-4xl mb-4 leading-tight text-white">{analysis.dishName}</h3>
                <p className="text-gray-400 leading-relaxed">{analysis.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {analysis.dietaryTags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-zinc-800 text-red-400 rounded-full text-xs font-medium uppercase tracking-wider border border-red-500/20">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 border-b border-zinc-800 pb-2">Key Ingredients</h4>
                  <ul className="space-y-2">
                    {analysis.ingredients.map((ingredient, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 border-b border-zinc-800 pb-2">Nutrition (Est.)</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-zinc-800/50 border border-white/5 p-3 rounded-xl text-center">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Calories</p>
                      <p className="font-serif text-xl font-semibold text-white">{analysis.nutritionalFacts.calories}</p>
                    </div>
                    <div className="bg-zinc-800/50 border border-white/5 p-3 rounded-xl text-center">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Protein</p>
                      <p className="font-serif text-xl font-semibold text-white">{analysis.nutritionalFacts.protein}</p>
                    </div>
                    <div className="bg-zinc-800/50 border border-white/5 p-3 rounded-xl text-center">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Carbs</p>
                      <p className="font-serif text-xl font-semibold text-white">{analysis.nutritionalFacts.carbs}</p>
                    </div>
                    <div className="bg-zinc-800/50 border border-white/5 p-3 rounded-xl text-center">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Fat</p>
                      <p className="font-serif text-xl font-semibold text-white">{analysis.nutritionalFacts.fat}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
