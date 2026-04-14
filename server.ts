import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

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

      const apiKey = process.env.XAI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "XAI_API_KEY is not configured on the server." });
      }

      // Call xAI API (Grok Vision)
      const response = await fetch("https://api.x.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "grok-2-vision-1212", // Using grok-2-vision for multimodal tasks
          messages: [
            {
              role: "user",
              content: [
                { 
                  type: "text", 
                  text: "Analyze this food image. Provide the dish name, cuisine type, a brief appetizing description, main ingredients, estimated nutritional facts per serving, and relevant dietary tags (e.g., Vegan, Gluten-Free, High Protein). Return ONLY a valid JSON object with the exact following structure: { \"dishName\": \"\", \"cuisineType\": \"\", \"description\": \"\", \"ingredients\": [\"\"], \"nutritionalFacts\": { \"calories\": \"\", \"protein\": \"\", \"carbs\": \"\", \"fat\": \"\" }, \"dietaryTags\": [\"\"] }" 
                },
                { 
                  type: "image_url", 
                  image_url: { 
                    url: `data:${mimeType};base64,${imageBase64}`,
                    detail: "high"
                  } 
                }
              ]
            }
          ],
          temperature: 0.1
        })
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error("xAI API Error:", response.status, errText);
        throw new Error(`xAI API error: ${response.status}`);
      }

      const data = await response.json();
      let content = data.choices[0].message.content;
      
      // Clean up markdown code blocks if the model wrapped the JSON
      content = content.replace(/```json/g, '').replace(/```/g, '').trim();
      
      const parsedContent = JSON.parse(content);
      res.json(parsedContent);
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
