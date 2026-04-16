import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Loader2, CheckCircle2, Utensils, Info, X, Flame, Leaf, Zap, ArrowRight, Plus, Minus, Trash2, PieChart } from 'lucide-react';
import { foodDatabase, FoodItem } from '../foodData';

interface AddedItem {
  id: string;
  food: FoodItem;
  weight: number; // in grams
}

export default function DemoSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCuisine, setActiveCuisine] = useState<string | 'All'>('All');
  const [addedItems, setAddedItems] = useState<AddedItem[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const cuisines = useMemo(() => {
    const uniqueCuisines = Array.from(new Set(foodDatabase.map(f => f.cuisineType)));
    return ['All', ...uniqueCuisines];
  }, []);

  const filteredFoods = useMemo(() => {
    let results = foodDatabase;
    
    if (activeCuisine !== 'All') {
      results = results.filter(f => f.cuisineType === activeCuisine);
    }

    if (!searchQuery.trim()) {
      return activeCuisine === 'All' ? [] : results.slice(0, 12);
    }

    return results.filter(food => 
      food.dishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.cuisineType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.dietaryTags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    ).slice(0, 12);
  }, [searchQuery, activeCuisine]);

  const parseNutrient = (value: string) => {
    const match = value.match(/(\d+(\.\d+)?)/);
    return match ? parseFloat(match[0]) : 0;
  };

  const addItem = (food: FoodItem) => {
    const newItem: AddedItem = {
      id: Math.random().toString(36).substr(2, 9),
      food,
      weight: 100 // Default to 100g
    };
    setAddedItems([...addedItems, newItem]);
    setSearchQuery('');
    setShowSuggestions(false);
  };

  const updateWeight = (id: string, newWeight: number) => {
    setAddedItems(addedItems.map(item => 
      item.id === id ? { ...item, weight: Math.max(1, newWeight) } : item
    ));
  };

  const removeItem = (id: string) => {
    setAddedItems(addedItems.filter(item => item.id !== id));
  };

  const totals = useMemo(() => {
    return addedItems.reduce((acc, item) => {
      const factor = item.weight / 100;
      return {
        calories: acc.calories + parseNutrient(item.food.nutritionalFacts.calories) * factor,
        protein: acc.protein + parseNutrient(item.food.nutritionalFacts.protein) * factor,
        carbs: acc.carbs + parseNutrient(item.food.nutritionalFacts.carbs) * factor,
        fat: acc.fat + parseNutrient(item.food.nutritionalFacts.fat) * factor,
      };
    }, { calories: 0, protein: 0, carbs: 0, fat: 0 });
  }, [addedItems]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
      {/* Left Column: Meal Builder */}
      <div className="flex flex-col gap-6 md:gap-8">
        <div className="bg-zinc-900 border border-white/10 rounded-3xl p-4 md:p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4 md:mb-5">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-600/10 flex items-center justify-center text-red-500">
                <Plus className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm md:text-base">Meal Builder</h3>
                <p className="text-[10px] md:text-xs text-gray-400">Add multiple items to calculate total nutrition</p>
              </div>
            </div>
            {addedItems.length > 0 && (
              <button 
                onClick={() => setAddedItems([])}
                className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-red-500 transition-colors px-2 md:px-3 py-1 md:py-1.5 rounded-full hover:bg-red-500/10"
              >
                Clear Plate
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="flex overflow-x-auto gap-2 mb-5 pb-2 no-scrollbar">
            {cuisines.map((cuisine) => (
              <button
                key={cuisine}
                onClick={() => setActiveCuisine(cuisine)}
                className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all border ${
                  activeCuisine === cuisine 
                    ? 'bg-red-600 border-red-600 text-white shadow-lg shadow-red-600/20' 
                    : 'bg-zinc-800 border-white/5 text-zinc-500 hover:text-white hover:border-white/10'
                }`}
              >
                {cuisine}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative mb-5">
            <input 
              type="text" 
              placeholder="Search ingredients to add..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              className="w-full bg-black border border-white/10 rounded-2xl pl-10 md:pl-12 pr-4 py-3 md:py-3 text-sm md:text-base text-white focus:outline-none focus:border-red-600/50 transition-all placeholder:text-zinc-700"
            />
            <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-zinc-700" />
            
            <AnimatePresence>
              {showSuggestions && (filteredFoods.length > 0 || searchQuery.trim() !== '') && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-zinc-800 border border-white/10 rounded-2xl overflow-hidden z-50 shadow-2xl max-h-64 overflow-y-auto"
                >
                  {filteredFoods.length > 0 ? (
                    filteredFoods.map((food, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => addItem(food)}
                        className="w-full px-5 py-3 text-left hover:bg-zinc-700 transition-colors flex items-center justify-between group border-b border-white/5 last:border-0"
                      >
                        <div>
                          <p className="font-bold text-white group-hover:text-red-500 transition-colors text-sm">{food.dishName}</p>
                          <p className="text-[10px] text-gray-400 uppercase tracking-wider">{food.cuisineType}</p>
                        </div>
                        <Plus className="w-4 h-4 text-zinc-600 group-hover:text-red-500 transition-all" />
                      </button>
                    ))
                  ) : (
                    <div className="px-5 py-6 text-center">
                      <p className="text-gray-400 text-sm">No ingredients found.</p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Popular Ingredients */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold w-full mb-1">Popular Ingredients</span>
            {['Paneer (Raw)', 'Whole Wheat Bread', 'Ghee (Clarified Butter)', 'Milk (Full Cream)', 'Egg (Large)'].map((term) => (
              <button
                key={term}
                onClick={() => {
                  const food = foodDatabase.find(f => f.dishName === term);
                  if (food) addItem(food);
                }}
                className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/5 transition-all"
              >
                {term}
              </button>
            ))}
          </div>

          {/* Added Items List */}
          <div className="space-y-3">
            <AnimatePresence initial={false}>
              {addedItems.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-12 text-center border-2 border-dashed border-zinc-800 rounded-2xl"
                >
                  <Utensils className="w-8 h-8 text-zinc-700 mx-auto mb-3" />
                  <p className="text-zinc-500 text-sm">Your plate is empty.<br/>Add some food to get started.</p>
                </motion.div>
              ) : (
                addedItems.map((item) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-black/40 border border-white/5 rounded-2xl p-3 flex items-center justify-between gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-white text-xs md:text-sm truncate">{item.food.dishName}</p>
                      <p className="text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-widest">{item.food.cuisineType}</p>
                    </div>
                    
                    <div className="flex items-center gap-1 md:gap-2 bg-zinc-900 rounded-xl px-1.5 md:px-2 py-1 md:py-1.5 border border-white/5 shrink-0">
                      <button 
                        onClick={() => updateWeight(item.id, item.weight - 10)}
                        className="text-zinc-500 hover:text-white transition-colors p-1"
                      >
                        <Minus className="w-3 h-3 md:w-4 md:h-4" />
                      </button>
                      <div className="flex items-center gap-0.5 md:gap-1">
                        <input 
                          type="number" 
                          value={item.weight}
                          onChange={(e) => updateWeight(item.id, parseInt(e.target.value) || 0)}
                          className="w-8 md:w-12 bg-transparent text-center text-white font-bold text-xs md:text-sm focus:outline-none"
                        />
                        <span className="text-[10px] md:text-xs text-zinc-600 font-bold">g</span>
                      </div>
                      <button 
                        onClick={() => updateWeight(item.id, item.weight + 10)}
                        className="text-zinc-500 hover:text-white transition-colors p-1"
                      >
                        <Plus className="w-3 h-3 md:w-4 md:h-4" />
                      </button>
                    </div>

                    <button 
                      onClick={() => removeItem(item.id)}
                      className="p-1.5 md:p-2 text-zinc-600 hover:text-red-500 transition-colors shrink-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-3xl flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500 shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div className="text-sm text-gray-400 leading-relaxed">
            <p className="text-white font-bold mb-1">How it works</p>
            Add multiple items to your plate and adjust their weights in grams. The system automatically calculates the total nutritional breakdown based on verified database values per 100g.
          </div>
        </div>
      </div>

      {/* Right Column: Meal Summary */}
      <div className="sticky top-8">
        <div className="bg-zinc-900 border border-white/10 rounded-3xl p-4 md:p-6 shadow-xl overflow-hidden relative">
          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full -mr-16 -mt-16 blur-3xl" />
          
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-600/10 flex items-center justify-center text-red-500">
              <PieChart className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <h3 className="font-bold text-white text-sm md:text-base">Meal Summary</h3>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="bg-black/40 border border-white/5 p-3 md:p-4 rounded-2xl text-center">
              <p className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-bold">Total Calories</p>
              <p className="font-serif text-2xl md:text-3xl font-semibold text-white">{Math.round(totals.calories)}</p>
              <p className="text-[8px] md:text-[9px] text-zinc-600 mt-1 uppercase font-bold">kcal</p>
            </div>
            <div className="bg-black/40 border border-white/5 p-3 md:p-4 rounded-2xl text-center">
              <p className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-bold">Total Protein</p>
              <p className="font-serif text-2xl md:text-3xl font-semibold text-red-500">{totals.protein.toFixed(1)}</p>
              <p className="text-[8px] md:text-[9px] text-zinc-600 mt-1 uppercase font-bold">grams</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Macro Percentages */}
            {totals.calories > 0 && (
              <div className="flex h-3 rounded-full overflow-hidden mb-8 bg-black">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${((totals.protein * 4) / totals.calories) * 100}%` }}
                  className="h-full bg-red-500"
                  title={`Protein: ${Math.round(((totals.protein * 4) / totals.calories) * 100)}%`}
                />
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${((totals.carbs * 4) / totals.calories) * 100}%` }}
                  className="h-full bg-blue-500"
                  title={`Carbs: ${Math.round(((totals.carbs * 4) / totals.calories) * 100)}%`}
                />
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${((totals.fat * 9) / totals.calories) * 100}%` }}
                  className="h-full bg-yellow-500"
                  title={`Fat: ${Math.round(((totals.fat * 9) / totals.calories) * 100)}%`}
                />
              </div>
            )}

            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Carbohydrates</span>
                <div className="text-right">
                  <span className="text-sm font-serif text-white">{totals.carbs.toFixed(1)}g</span>
                  {totals.calories > 0 && (
                    <span className="text-[10px] text-blue-400 ml-2">({Math.round(((totals.carbs * 4) / totals.calories) * 100)}%)</span>
                  )}
                </div>
              </div>
              <div className="h-2 bg-black rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, (totals.carbs / 300) * 100)}%` }}
                  className="h-full bg-blue-500"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Fats</span>
                <div className="text-right">
                  <span className="text-sm font-serif text-white">{totals.fat.toFixed(1)}g</span>
                  {totals.calories > 0 && (
                    <span className="text-[10px] text-yellow-400 ml-2">({Math.round(((totals.fat * 9) / totals.calories) * 100)}%)</span>
                  )}
                </div>
              </div>
              <div className="h-2 bg-black rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, (totals.fat / 100) * 100)}%` }}
                  className="h-full bg-yellow-500"
                />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Protein</span>
                <div className="text-right">
                  <span className="text-sm font-serif text-white">{totals.protein.toFixed(1)}g</span>
                  {totals.calories > 0 && (
                    <span className="text-[10px] text-red-400 ml-2">({Math.round(((totals.protein * 4) / totals.calories) * 100)}%)</span>
                  )}
                </div>
              </div>
              <div className="h-2 bg-black rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, (totals.protein / 150) * 100)}%` }}
                  className="h-full bg-red-500"
                />
              </div>
            </div>
          </div>

          {addedItems.length > 0 && (
            <div className="mt-10 pt-8 border-t border-white/5">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4">Combined Ingredients</h4>
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(addedItems.flatMap(item => item.food.ingredients))).map((ing, i) => (
                  <span key={i} className="px-2 py-1 bg-zinc-800/50 text-zinc-400 rounded-lg text-[10px] font-medium border border-white/5">
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
