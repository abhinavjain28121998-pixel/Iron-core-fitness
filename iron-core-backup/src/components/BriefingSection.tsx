import React from 'react';
import { motion } from 'motion/react';
import { User, Database, Cpu, ShieldAlert, Search } from 'lucide-react';

export default function BriefingSection() {
  const sections = [
    {
      icon: <User className="w-6 h-6" />,
      title: "The User Perspective",
      content: (
        <div className="space-y-4 text-gray-400 leading-relaxed">
          <p>
            The redesigned interface introduces an <strong className="text-white">Ingredient-First</strong> workflow. Users can search for basic food items like paneer, ghee, or bread and add them to a virtual "plate," creating a comprehensive record of their entire meal from its core components.
          </p>
          <p>
            Each added ingredient features a dynamic weight adjustment tool. By entering the weight in grams, users can precisely control the portion size for every component, moving beyond generic meal estimates to personalized, ingredient-level tracking.
          </p>
          <p>
            The interface provides real-time feedback, updating total nutritional values instantly as ingredients are added or weights are modified, creating a highly interactive and informative planning experience.
          </p>
        </div>
      )
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Calculation Logic",
      content: (
        <div className="space-y-4 text-gray-400 leading-relaxed">
          <p>The system employs a deterministic calculation engine to ensure accuracy:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white">Base Values:</strong> Every ingredient in the database is indexed with nutritional values (Calories, Protein, Carbs, Fat) per 100g.</li>
            <li><strong className="text-white">Scaling Factor:</strong> When a user sets a weight (e.g., 250g), the system calculates a scaling factor (2.5x) and applies it to all base nutrients.</li>
            <li><strong className="text-white">Aggregation:</strong> The system sums the scaled values across all ingredients in the meal to provide a unified "Meal Summary."</li>
            <li><strong className="text-white">Raw Data:</strong> By focusing on raw ingredients, we eliminate the variability of restaurant recipes, providing a more reliable "source of truth."</li>
          </ul>
        </div>
      )
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Search Technology",
      content: (
        <div className="space-y-4 text-gray-400 leading-relaxed">
          <p>
            This feature leverages a <strong className="text-white">High-Performance Search Engine</strong> that queries a curated culinary database in real-time.
          </p>
          <p>
            By moving away from generative AI, we ensure <strong className="text-red-500">100% Deterministic Results</strong>. Every time a user searches for a specific dish, they receive the same verified data, eliminating the "hallucinations" or inconsistencies often found in LLM-based visual analysis.
          </p>
          <p>
            The application uses fuzzy matching and keyword indexing to ensure users can find what they're looking for even with partial names or dietary preferences.
          </p>
        </div>
      )
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: "Challenges & Solutions",
      content: (
        <div className="space-y-4 text-gray-400 leading-relaxed">
          <p><strong className="text-white">Database Coverage:</strong> No database can contain every dish in the world. <br/><em className="text-red-400">Solution:</em> We focus on a robust set of common, high-impact foods and provide clear, generalized profiles that cover the majority of daily tracking needs.</p>
          <p><strong className="text-white">Data Maintenance:</strong> Nutritional standards can evolve. <br/><em className="text-red-400">Solution:</em> Our database is manually curated and periodically updated to reflect the latest nutritional guidelines and culinary trends.</p>
          <p><strong className="text-white">User Input:</strong> Users might not know the exact name of a dish. <br/><em className="text-red-400">Solution:</em> We implement smart suggestions and category-based filtering to guide users to the correct entry.</p>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-8">
      {sections.map((section, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-zinc-900 border border-white/10 rounded-3xl p-6 md:p-10 shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-800 flex items-center justify-center text-red-500 shrink-0 mt-1 [&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6">
              {section.icon}
            </div>
            <div>
              <h3 className="font-serif text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white">{section.title}</h3>
              <div className="text-sm md:text-base">
                {section.content}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
