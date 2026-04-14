import React from 'react';
import { motion } from 'motion/react';
import { User, Database, Cpu, ShieldAlert } from 'lucide-react';

export default function BriefingSection() {
  const sections = [
    {
      icon: <User className="w-6 h-6" />,
      title: "The User Perspective",
      content: (
        <div className="space-y-4 text-gray-400 leading-relaxed">
          <p>
            The flow is designed to be frictionless and instantly rewarding. A user simply snaps a photo of their meal or uploads an existing image from their gallery. 
          </p>
          <p>
            Within seconds, the interface transforms from a simple upload dropzone into a rich, magazine-style layout detailing the culinary profile of their food. There are no forms to fill out or complex settings to configure—the visual input is the only requirement.
          </p>
          <p>
            This creates a "magic moment" where opaque information (like hidden calories or complex ingredients) is made transparent and accessible through a single, intuitive action.
          </p>
        </div>
      )
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Information Architecture",
      content: (
        <div className="space-y-4 text-gray-400 leading-relaxed">
          <p>The system extracts and structures several key data points from the visual input:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white">Identification:</strong> Precise dish name and broader cuisine categorization.</li>
            <li><strong className="text-white">Composition:</strong> A breakdown of visible and inferred core ingredients.</li>
            <li><strong className="text-white">Nutritional Estimation:</strong> Approximations for calories, macronutrients (protein, carbs, fat) based on standard serving sizes for the identified dish.</li>
            <li><strong className="text-white">Dietary Context:</strong> Automated tagging for common dietary restrictions (e.g., Vegan, Gluten-Free).</li>
          </ul>
        </div>
      )
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Underlying Technology",
      content: (
        <div className="space-y-4 text-gray-400 leading-relaxed">
          <p>
            This feature leverages advanced Multimodal Large Language Models (specifically, Google's Gemini 3 Flash Preview). 
          </p>
          <p>
            Instead of relying on traditional, narrow computer vision models that only classify images into pre-defined categories, the multimodal LLM processes the image alongside a structured prompt. This allows it to not only identify the food but reason about its composition and nutritional profile in a single API call.
          </p>
          <p>
            The application enforces a strict JSON schema on the model's output, ensuring the unstructured visual data is reliably converted into a structured, predictable format that the frontend can confidently render.
          </p>
        </div>
      )
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: "Challenges & UX Solutions",
      content: (
        <div className="space-y-4 text-gray-400 leading-relaxed">
          <p><strong className="text-white">Accuracy of Nutrition:</strong> Visual analysis cannot perfectly determine portion size or hidden ingredients (like butter or sugar). <br/><em className="text-red-400">Solution:</em> The UI explicitly labels nutritional data as "Estimated" and avoids presenting the numbers as absolute medical facts.</p>
          <p><strong className="text-white">Latency:</strong> Multimodal analysis takes a few seconds, which can feel long in a modern web app. <br/><em className="text-red-400">Solution:</em> We implement engaging loading states ("Consulting the Chef...") to manage perceived wait times.</p>
          <p><strong className="text-white">Poor Image Quality:</strong> Blurry or poorly lit photos degrade analysis quality. <br/><em className="text-red-400">Solution:</em> Future iterations could include client-side image validation or prompt the user for a clearer photo if the model's confidence score is low.</p>
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
          className="bg-zinc-900 border border-white/10 rounded-3xl p-8 md:p-10 shadow-xl"
        >
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-red-500 shrink-0 mt-1">
              {section.icon}
            </div>
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-white">{section.title}</h3>
              {section.content}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
