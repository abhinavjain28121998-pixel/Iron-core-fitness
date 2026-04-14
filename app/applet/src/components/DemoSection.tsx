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
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      // Extract base64 data
      const base64Data = selectedImage.split(',')[1];
      const mimeType = selectedImage.split(';')[0].split(':')[1];

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          {
            inlineData: {
              data: base64Data,
              mimeType: mimeType,
            }
          },
          "Analyze this food image. Provide the dish name, cuisine type, a brief appetizing description, main ingredients, estimated nutritional facts per serving, and relevant dietary tags (e.g., Vegan, Gluten-Free, High Protein)."
        ],
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              dishName: { type: Type.STRING, description: "Name of the dish" },
              cuisineType: { type: Type.STRING, description: "Origin or style of cuisine" },
              description: { type: Type.STRING, description: "A brief, appetizing description of the dish" },
              ingredients: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING },
                description: "List of main ingredients visible or typical for this dish"
              },
              nutritionalFacts: {
                type: Type.OBJECT,
                properties: {
                  calories: { type: Type.STRING, description: "Estimated calories (e.g., '450 kcal')" },
                  protein: { type: Type.STRING, description: "Estimated protein (e.g., '20g')" },
                  carbs: { type: Type.STRING, description: "Estimated carbohydrates (e.g., '50g')" },
                  fat: { type: Type.STRING, description: "Estimated fat (e.g., '15g')" }
                },
                required: ["calories", "protein", "carbs", "fat"]
              },
              dietaryTags: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "Relevant dietary tags like Vegetarian, Keto, etc."
              }
            },
            required: ["dishName", "cuisineType", "description", "ingredients", "nutritionalFacts", "dietaryTags"]
          }
        }
      });

      if (response.text) {
        const result = JSON.parse(response.text) as FoodAnalysis;
        setAnalysis(result);
      } else {
        throw new Error("No response from AI");
      }
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
      <div className="card p-8 flex flex-col gap-6">
        <div 
          className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all ${
            selectedImage ? 'border-[#5A5A40]/30 bg-[#f5f5f0]/50' : 'border-[#e0e0d8] hover:border-[#5A5A40]/50 hover:bg-[#f5f5f0]/50 cursor-pointer'
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
                className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium hover:bg-white transition-colors shadow-sm"
              >
                Change Photo
              </button>
            </div>
          ) : (
            <div className="py-16 flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#f5f5f0] flex items-center justify-center text-[#5A5A40]">
                <Upload className="w-8 h-8" />
              </div>
              <div>
                <p className="font-medium text-lg mb-1">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500">SVG, PNG, JPG or GIF (max. 5MB)</p>
              </div>
            </div>
          )}
        </div>

        <button 
          onClick={analyzeFood}
          disabled={!selectedImage || isAnalyzing}
          className="olive-button w-full flex items-center justify-center gap-2 py-4 text-lg"
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
          <div className="p-4 bg-red-50 text-red-700 rounded-xl flex items-start gap-3 text-sm">
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
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-[#e0e0d8] rounded-3xl"
            >
              <div className="w-20 h-20 rounded-full bg-[#f5f5f0] flex items-center justify-center text-[#e0e0d8] mb-6">
                <Utensils className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl mb-2 text-gray-400">Awaiting Culinary Input</h3>
              <p className="text-gray-400 max-w-sm">Upload a photo and hit analyze to uncover the secrets of your dish.</p>
            </motion.div>
          )}

          {isAnalyzing && (
            <motion.div 
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-[#f5f5f0]/50 rounded-3xl"
            >
              <Loader2 className="w-12 h-12 animate-spin text-[#5A5A40] mb-6" />
              <h3 className="font-serif text-2xl mb-2 animate-pulse">Consulting the Chef...</h3>
              <p className="text-gray-500">Identifying ingredients and calculating nutritional value.</p>
            </motion.div>
          )}

          {analysis && (
            <motion.div 
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card p-8 flex flex-col gap-8"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#5A5A40]">{analysis.cuisineType}</span>
                </div>
                <h3 className="font-serif text-4xl mb-4 leading-tight">{analysis.dishName}</h3>
                <p className="text-gray-600 leading-relaxed">{analysis.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {analysis.dietaryTags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-[#f5f5f0] text-[#5A5A40] rounded-full text-xs font-medium uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 border-b border-gray-100 pb-2">Key Ingredients</h4>
                  <ul className="space-y-2">
                    {analysis.ingredients.map((ingredient, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#5A5A40] shrink-0 mt-0.5" />
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 border-b border-gray-100 pb-2">Nutrition (Est.)</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#f5f5f0] p-3 rounded-xl text-center">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Calories</p>
                      <p className="font-serif text-xl font-semibold">{analysis.nutritionalFacts.calories}</p>
                    </div>
                    <div className="bg-[#f5f5f0] p-3 rounded-xl text-center">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Protein</p>
                      <p className="font-serif text-xl font-semibold">{analysis.nutritionalFacts.protein}</p>
                    </div>
                    <div className="bg-[#f5f5f0] p-3 rounded-xl text-center">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Carbs</p>
                      <p className="font-serif text-xl font-semibold">{analysis.nutritionalFacts.carbs}</p>
                    </div>
                    <div className="bg-[#f5f5f0] p-3 rounded-xl text-center">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Fat</p>
                      <p className="font-serif text-xl font-semibold">{analysis.nutritionalFacts.fat}</p>
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
