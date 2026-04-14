import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { GoogleGenAI, Type } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Increase payload limit for base64 images
  app.use(express.json({ limit: '50mb' }));

  // API routes FIRST
  app.post("/api/analyze-food", async (req, res) => {
    try {
      const { imageBase64, mimeType } = req.body;
      
      if (!imageBase64 || !mimeType) {
        return res.status(400).json({ error: "Missing image data" });
      }

      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          {
            inlineData: {
              data: imageBase64,
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
        const result = JSON.parse(response.text);
        res.json(result);
      } else {
        throw new Error("No response from AI");
      }
    } catch (error) {
      console.error("Error analyzing food:", error);
      res.status(500).json({ error: error instanceof Error ? error.message : "Failed to analyze food" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
