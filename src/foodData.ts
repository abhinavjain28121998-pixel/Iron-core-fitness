export interface FoodItem {
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

export const foodDatabase: FoodItem[] = [
  {
    dishName: "Paneer (Raw)",
    cuisineType: "Dairy",
    description: "Fresh Indian cottage cheese, high in protein and fat.",
    ingredients: ["Milk", "Lemon Juice or Vinegar"],
    nutritionalFacts: {
      calories: "265 kcal",
      protein: "18g",
      carbs: "1.2g",
      fat: "20g"
    },
    dietaryTags: ["Vegetarian", "High Protein", "Gluten-Free", "Keto"]
  },
  {
    dishName: "Whole Wheat Bread",
    cuisineType: "Bakery",
    description: "Fiber-rich bread made from whole wheat flour.",
    ingredients: ["Whole Wheat Flour", "Water", "Yeast", "Salt"],
    nutritionalFacts: {
      calories: "250 kcal",
      protein: "9g",
      carbs: "45g",
      fat: "3g"
    },
    dietaryTags: ["Vegetarian", "Vegan", "High Fiber"]
  },
  {
    dishName: "Ghee (Clarified Butter)",
    cuisineType: "Dairy",
    description: "Pure butterfat rendered from butter to separate the milk solids and water.",
    ingredients: ["Butter"],
    nutritionalFacts: {
      calories: "900 kcal",
      protein: "0g",
      carbs: "0g",
      fat: "100g"
    },
    dietaryTags: ["Vegetarian", "Keto", "Paleo", "Gluten-Free"]
  },
  {
    dishName: "White Rice (Cooked)",
    cuisineType: "Grains",
    description: "Standard long-grain white rice, steamed.",
    ingredients: ["White Rice", "Water"],
    nutritionalFacts: {
      calories: "130 kcal",
      protein: "2.7g",
      carbs: "28g",
      fat: "0.3g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free"]
  },
  {
    dishName: "Brown Rice (Cooked)",
    cuisineType: "Grains",
    description: "Whole grain rice with the outer hull removed but the bran layer intact.",
    ingredients: ["Brown Rice", "Water"],
    nutritionalFacts: {
      calories: "110 kcal",
      protein: "2.6g",
      carbs: "23g",
      fat: "0.9g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "High Fiber"]
  },
  {
    dishName: "Milk (Full Cream)",
    cuisineType: "Dairy",
    description: "Whole cow's milk with all its natural fat content.",
    ingredients: ["Milk"],
    nutritionalFacts: {
      calories: "62 kcal",
      protein: "3.2g",
      carbs: "4.8g",
      fat: "3.5g"
    },
    dietaryTags: ["Vegetarian", "Gluten-Free"]
  },
  {
    dishName: "Butter (Unsalted)",
    cuisineType: "Dairy",
    description: "Churned cream, a rich source of fat.",
    ingredients: ["Cream"],
    nutritionalFacts: {
      calories: "717 kcal",
      protein: "0.8g",
      carbs: "0.1g",
      fat: "81g"
    },
    dietaryTags: ["Vegetarian", "Gluten-Free", "Keto"]
  },
  {
    dishName: "Olive Oil",
    cuisineType: "Oils",
    description: "Liquid fat obtained from olives, rich in monounsaturated fatty acids.",
    ingredients: ["Olives"],
    nutritionalFacts: {
      calories: "884 kcal",
      protein: "0g",
      carbs: "0g",
      fat: "100g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Keto", "Paleo"]
  },
  {
    dishName: "Egg (Large)",
    cuisineType: "Poultry",
    description: "A single large whole egg.",
    ingredients: ["Egg"],
    nutritionalFacts: {
      calories: "155 kcal",
      protein: "13g",
      carbs: "1.1g",
      fat: "11g"
    },
    dietaryTags: ["Vegetarian", "High Protein", "Keto", "Paleo", "Gluten-Free"]
  },
  {
    dishName: "Chicken Breast (Raw)",
    cuisineType: "Meat",
    description: "Lean white meat from the breast of a chicken.",
    ingredients: ["Chicken Breast"],
    nutritionalFacts: {
      calories: "165 kcal",
      protein: "31g",
      carbs: "0g",
      fat: "3.6g"
    },
    dietaryTags: ["High Protein", "Keto", "Paleo", "Gluten-Free"]
  },
  {
    dishName: "Salmon (Raw)",
    cuisineType: "Seafood",
    description: "Fresh Atlantic salmon fillet, rich in Omega-3 fatty acids.",
    ingredients: ["Salmon"],
    nutritionalFacts: {
      calories: "208 kcal",
      protein: "20g",
      carbs: "0g",
      fat: "13g"
    },
    dietaryTags: ["High Protein", "Keto", "Paleo", "Gluten-Free", "Seafood"]
  },
  {
    dishName: "Almonds",
    cuisineType: "Nuts",
    description: "Raw, unsalted whole almonds.",
    ingredients: ["Almonds"],
    nutritionalFacts: {
      calories: "579 kcal",
      protein: "21g",
      carbs: "22g",
      fat: "50g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "High Protein", "Gluten-Free", "Keto", "Paleo"]
  },
  {
    dishName: "Spinach (Raw)",
    cuisineType: "Vegetables",
    description: "Fresh green leafy vegetable, high in iron and vitamins.",
    ingredients: ["Spinach"],
    nutritionalFacts: {
      calories: "23 kcal",
      protein: "2.9g",
      carbs: "3.6g",
      fat: "0.4g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Low Calorie", "Paleo"]
  },
  {
    dishName: "Potato (Raw)",
    cuisineType: "Vegetables",
    description: "Whole starchy tuber, a staple carbohydrate source.",
    ingredients: ["Potato"],
    nutritionalFacts: {
      calories: "77 kcal",
      protein: "2g",
      carbs: "17g",
      fat: "0.1g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Paleo"]
  },
  {
    dishName: "Lentils (Dry)",
    cuisineType: "Legumes",
    description: "Dry whole lentils, a great plant-based protein source.",
    ingredients: ["Lentils"],
    nutritionalFacts: {
      calories: "352 kcal",
      protein: "25g",
      carbs: "63g",
      fat: "1.1g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "High Protein", "Gluten-Free", "High Fiber"]
  },
  {
    dishName: "Chickpeas (Dry)",
    cuisineType: "Legumes",
    description: "Dry whole chickpeas (garbanzo beans).",
    ingredients: ["Chickpeas"],
    nutritionalFacts: {
      calories: "364 kcal",
      protein: "19g",
      carbs: "61g",
      fat: "6g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "High Protein", "Gluten-Free", "High Fiber"]
  },
  {
    dishName: "Oats (Rolled)",
    cuisineType: "Grains",
    description: "Whole grain rolled oats, perfect for breakfast.",
    ingredients: ["Oats"],
    nutritionalFacts: {
      calories: "389 kcal",
      protein: "17g",
      carbs: "66g",
      fat: "7g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "High Fiber"]
  },
  {
    dishName: "Tofu (Firm)",
    cuisineType: "Plant-Based",
    description: "Condensed soy milk pressed into solid white blocks.",
    ingredients: ["Soybeans", "Water", "Coagulant"],
    nutritionalFacts: {
      calories: "144 kcal",
      protein: "16g",
      carbs: "3.9g",
      fat: "8g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "High Protein", "Gluten-Free", "Keto"]
  },
  {
    dishName: "Greek Yogurt (Plain)",
    cuisineType: "Dairy",
    description: "Strained yogurt with a thick consistency and high protein.",
    ingredients: ["Milk", "Live Cultures"],
    nutritionalFacts: {
      calories: "59 kcal",
      protein: "10g",
      carbs: "3.6g",
      fat: "0.4g"
    },
    dietaryTags: ["Vegetarian", "High Protein", "Gluten-Free"]
  },
  {
    dishName: "Honey",
    cuisineType: "Sweeteners",
    description: "Natural sweet substance produced by bees.",
    ingredients: ["Honey"],
    nutritionalFacts: {
      calories: "304 kcal",
      protein: "0.3g",
      carbs: "82g",
      fat: "0g"
    },
    dietaryTags: ["Vegetarian", "Gluten-Free", "Paleo"]
  },
  {
    dishName: "Sugar (White)",
    cuisineType: "Sweeteners",
    description: "Refined sucrose from sugarcane or sugar beets.",
    ingredients: ["Sugar"],
    nutritionalFacts: {
      calories: "387 kcal",
      protein: "0g",
      carbs: "100g",
      fat: "0g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free"]
  },
  {
    dishName: "Apple (Fresh)",
    cuisineType: "Fruits",
    description: "Whole fresh apple with skin.",
    ingredients: ["Apple"],
    nutritionalFacts: {
      calories: "52 kcal",
      protein: "0.3g",
      carbs: "14g",
      fat: "0.2g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Low Calorie", "Paleo"]
  },
  {
    dishName: "Banana (Fresh)",
    cuisineType: "Fruits",
    description: "Whole fresh ripe banana.",
    ingredients: ["Banana"],
    nutritionalFacts: {
      calories: "89 kcal",
      protein: "1.1g",
      carbs: "23g",
      fat: "0.3g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Paleo"]
  },
  {
    dishName: "Broccoli (Raw)",
    cuisineType: "Vegetables",
    description: "Fresh green vegetable in the cabbage family.",
    ingredients: ["Broccoli"],
    nutritionalFacts: {
      calories: "34 kcal",
      protein: "2.8g",
      carbs: "6.6g",
      fat: "0.4g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Low Calorie", "Keto", "Paleo"]
  },
  {
    dishName: "Tomato (Fresh)",
    cuisineType: "Vegetables",
    description: "Ripe red whole tomato.",
    ingredients: ["Tomato"],
    nutritionalFacts: {
      calories: "18 kcal",
      protein: "0.9g",
      carbs: "3.9g",
      fat: "0.2g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Low Calorie", "Paleo"]
  },
  {
    dishName: "Onion (Raw)",
    cuisineType: "Vegetables",
    description: "Fresh whole bulb onion.",
    ingredients: ["Onion"],
    nutritionalFacts: {
      calories: "40 kcal",
      protein: "1.1g",
      carbs: "9.3g",
      fat: "0.1g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Paleo"]
  },
  {
    dishName: "Garlic (Raw)",
    cuisineType: "Vegetables",
    description: "Fresh garlic cloves.",
    ingredients: ["Garlic"],
    nutritionalFacts: {
      calories: "149 kcal",
      protein: "6.4g",
      carbs: "33g",
      fat: "0.5g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Paleo"]
  },
  {
    dishName: "Ginger (Raw)",
    cuisineType: "Vegetables",
    description: "Fresh ginger root.",
    ingredients: ["Ginger"],
    nutritionalFacts: {
      calories: "80 kcal",
      protein: "1.8g",
      carbs: "18g",
      fat: "0.8g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Paleo"]
  },
  {
    dishName: "Salt (Table)",
    cuisineType: "Seasoning",
    description: "Standard granulated table salt.",
    ingredients: ["Salt"],
    nutritionalFacts: {
      calories: "0 kcal",
      protein: "0g",
      carbs: "0g",
      fat: "0g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Paleo"]
  },
  {
    dishName: "Cheddar Cheese",
    cuisineType: "Dairy",
    description: "Sharp and firm cow's milk cheese.",
    ingredients: ["Milk", "Salt", "Cultures", "Rennet"],
    nutritionalFacts: {
      calories: "402 kcal",
      protein: "25g",
      carbs: "1.3g",
      fat: "33g"
    },
    dietaryTags: ["Vegetarian", "High Protein", "Keto", "Gluten-Free"]
  },
  {
    dishName: "Mozzarella Cheese",
    cuisineType: "Dairy",
    description: "Soft, white Italian cheese with high moisture content.",
    ingredients: ["Milk", "Salt", "Cultures", "Rennet"],
    nutritionalFacts: {
      calories: "280 kcal",
      protein: "22g",
      carbs: "2.2g",
      fat: "17g"
    },
    dietaryTags: ["Vegetarian", "High Protein", "Keto", "Gluten-Free"]
  },
  {
    dishName: "Parmesan Cheese",
    cuisineType: "Dairy",
    description: "Hard, granular Italian cheese with a nutty flavor.",
    ingredients: ["Milk", "Salt", "Rennet"],
    nutritionalFacts: {
      calories: "431 kcal",
      protein: "38g",
      carbs: "4.1g",
      fat: "29g"
    },
    dietaryTags: ["Vegetarian", "High Protein", "Keto", "Gluten-Free"]
  },
  {
    dishName: "Heavy Cream",
    cuisineType: "Dairy",
    description: "Rich, high-fat dairy product collected from the top of milk.",
    ingredients: ["Cream"],
    nutritionalFacts: {
      calories: "340 kcal",
      protein: "2.8g",
      carbs: "2.8g",
      fat: "36g"
    },
    dietaryTags: ["Vegetarian", "Keto", "Gluten-Free"]
  },
  {
    dishName: "Quinoa (Dry)",
    cuisineType: "Grains",
    description: "Nutrient-dense pseudocereal, a complete protein source.",
    ingredients: ["Quinoa"],
    nutritionalFacts: {
      calories: "368 kcal",
      protein: "14g",
      carbs: "64g",
      fat: "6g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "High Protein", "Gluten-Free", "High Fiber"]
  },
  {
    dishName: "Barley (Dry)",
    cuisineType: "Grains",
    description: "Chewy, nutty whole grain high in beta-glucan fiber.",
    ingredients: ["Barley"],
    nutritionalFacts: {
      calories: "354 kcal",
      protein: "12g",
      carbs: "73g",
      fat: "2.3g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "High Fiber"]
  },
  {
    dishName: "Couscous (Dry)",
    cuisineType: "Grains",
    description: "Small steamed granules of rolled durum wheat semolina.",
    ingredients: ["Semolina"],
    nutritionalFacts: {
      calories: "376 kcal",
      protein: "13g",
      carbs: "77g",
      fat: "0.6g"
    },
    dietaryTags: ["Vegan", "Vegetarian"]
  },
  {
    dishName: "Cornmeal",
    cuisineType: "Grains",
    description: "Coarse flour ground from dried corn.",
    ingredients: ["Corn"],
    nutritionalFacts: {
      calories: "361 kcal",
      protein: "7g",
      carbs: "77g",
      fat: "3.6g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free"]
  },
  {
    dishName: "Maida (Refined Flour)",
    cuisineType: "Grains",
    description: "Finely milled, refined, and bleached wheat flour.",
    ingredients: ["Wheat"],
    nutritionalFacts: {
      calories: "364 kcal",
      protein: "10g",
      carbs: "76g",
      fat: "1g"
    },
    dietaryTags: ["Vegan", "Vegetarian"]
  },
  {
    dishName: "Besan (Gram Flour)",
    cuisineType: "Grains",
    description: "Pulse flour made from ground chana dal (chickpeas).",
    ingredients: ["Chickpeas"],
    nutritionalFacts: {
      calories: "387 kcal",
      protein: "22g",
      carbs: "58g",
      fat: "7g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "High Protein", "Gluten-Free"]
  },
  {
    dishName: "Suji (Semolina)",
    cuisineType: "Grains",
    description: "Coarse middlings of durum wheat used in pasta and upma.",
    ingredients: ["Wheat"],
    nutritionalFacts: {
      calories: "360 kcal",
      protein: "13g",
      carbs: "73g",
      fat: "1g"
    },
    dietaryTags: ["Vegan", "Vegetarian"]
  },
  {
    dishName: "Bell Pepper (Fresh)",
    cuisineType: "Vegetables",
    description: "Crunchy, sweet peppers available in various colors.",
    ingredients: ["Bell Pepper"],
    nutritionalFacts: {
      calories: "20 kcal",
      protein: "0.9g",
      carbs: "4.6g",
      fat: "0.2g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Low Calorie", "Paleo"]
  },
  {
    dishName: "Carrot (Fresh)",
    cuisineType: "Vegetables",
    description: "Sweet, crunchy root vegetable high in beta-carotene.",
    ingredients: ["Carrot"],
    nutritionalFacts: {
      calories: "41 kcal",
      protein: "0.9g",
      carbs: "10g",
      fat: "0.2g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Low Calorie", "Paleo"]
  },
  {
    dishName: "Cauliflower (Raw)",
    cuisineType: "Vegetables",
    description: "Versatile cruciferous vegetable, often used as a low-carb substitute.",
    ingredients: ["Cauliflower"],
    nutritionalFacts: {
      calories: "25 kcal",
      protein: "1.9g",
      carbs: "5g",
      fat: "0.3g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Low Calorie", "Keto", "Paleo"]
  },
  {
    dishName: "Cabbage (Raw)",
    cuisineType: "Vegetables",
    description: "Leafy green or purple biennial plant grown as an edible vegetable.",
    ingredients: ["Cabbage"],
    nutritionalFacts: {
      calories: "25 kcal",
      protein: "1.3g",
      carbs: "6g",
      fat: "0.1g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Low Calorie", "Keto", "Paleo"]
  },
  {
    dishName: "Cucumber (Fresh)",
    cuisineType: "Vegetables",
    description: "Cool, hydrating vegetable often used in salads.",
    ingredients: ["Cucumber"],
    nutritionalFacts: {
      calories: "15 kcal",
      protein: "0.7g",
      carbs: "3.6g",
      fat: "0.1g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Low Calorie", "Keto", "Paleo"]
  },
  {
    dishName: "Lettuce (Romaine)",
    cuisineType: "Vegetables",
    description: "Crisp, sturdy salad green with high water content.",
    ingredients: ["Lettuce"],
    nutritionalFacts: {
      calories: "17 kcal",
      protein: "1.2g",
      carbs: "3.3g",
      fat: "0.3g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Low Calorie", "Keto", "Paleo"]
  },
  {
    dishName: "Mushroom (White Button)",
    cuisineType: "Vegetables",
    description: "Common edible fungus with a mild, earthy flavor.",
    ingredients: ["Mushroom"],
    nutritionalFacts: {
      calories: "22 kcal",
      protein: "3.1g",
      carbs: "3.3g",
      fat: "0.3g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Low Calorie", "Keto", "Paleo"]
  },
  {
    dishName: "Green Peas (Fresh)",
    cuisineType: "Vegetables",
    description: "Small, sweet green seeds from pea pods.",
    ingredients: ["Peas"],
    nutritionalFacts: {
      calories: "81 kcal",
      protein: "5g",
      carbs: "14g",
      fat: "0.4g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "High Fiber"]
  },
  {
    dishName: "Sweet Corn (Fresh)",
    cuisineType: "Vegetables",
    description: "Sweet, yellow kernels from ears of corn.",
    ingredients: ["Corn"],
    nutritionalFacts: {
      calories: "86 kcal",
      protein: "3.2g",
      carbs: "19g",
      fat: "1.2g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free"]
  },
  {
    dishName: "Orange (Fresh)",
    cuisineType: "Fruits",
    description: "Citrus fruit known for its high Vitamin C content.",
    ingredients: ["Orange"],
    nutritionalFacts: {
      calories: "47 kcal",
      protein: "0.9g",
      carbs: "12g",
      fat: "0.1g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Paleo"]
  },
  {
    dishName: "Grapes (Fresh)",
    cuisineType: "Fruits",
    description: "Sweet, juicy berries grown on vines.",
    ingredients: ["Grapes"],
    nutritionalFacts: {
      calories: "69 kcal",
      protein: "0.7g",
      carbs: "18g",
      fat: "0.2g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Paleo"]
  },
  {
    dishName: "Mango (Fresh)",
    cuisineType: "Fruits",
    description: "Tropical stone fruit with sweet, orange flesh.",
    ingredients: ["Mango"],
    nutritionalFacts: {
      calories: "60 kcal",
      protein: "0.8g",
      carbs: "15g",
      fat: "0.4g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Paleo"]
  },
  {
    dishName: "Strawberry (Fresh)",
    cuisineType: "Fruits",
    description: "Sweet, red berries with tiny seeds on the outside.",
    ingredients: ["Strawberry"],
    nutritionalFacts: {
      calories: "32 kcal",
      protein: "0.7g",
      carbs: "7.7g",
      fat: "0.3g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Low Calorie", "Paleo"]
  },
  {
    dishName: "Blueberry (Fresh)",
    cuisineType: "Fruits",
    description: "Small, round blue berries packed with antioxidants.",
    ingredients: ["Blueberry"],
    nutritionalFacts: {
      calories: "57 kcal",
      protein: "0.7g",
      carbs: "14g",
      fat: "0.3g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Paleo"]
  },
  {
    dishName: "Watermelon (Fresh)",
    cuisineType: "Fruits",
    description: "Refreshing, high-water content fruit with red flesh.",
    ingredients: ["Watermelon"],
    nutritionalFacts: {
      calories: "30 kcal",
      protein: "0.6g",
      carbs: "7.6g",
      fat: "0.2g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Low Calorie", "Paleo"]
  },
  {
    dishName: "Pineapple (Fresh)",
    cuisineType: "Fruits",
    description: "Tropical fruit with a spiky exterior and sweet yellow flesh.",
    ingredients: ["Pineapple"],
    nutritionalFacts: {
      calories: "50 kcal",
      protein: "0.5g",
      carbs: "13g",
      fat: "0.1g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Paleo"]
  },
  {
    dishName: "Beef (Lean Ground)",
    cuisineType: "Meat",
    description: "Ground beef with a low fat percentage.",
    ingredients: ["Beef"],
    nutritionalFacts: {
      calories: "250 kcal",
      protein: "26g",
      carbs: "0g",
      fat: "15g"
    },
    dietaryTags: ["High Protein", "Keto", "Paleo", "Gluten-Free"]
  },
  {
    dishName: "Pork Loin (Raw)",
    cuisineType: "Meat",
    description: "Lean cut of meat from the back of a pig.",
    ingredients: ["Pork"],
    nutritionalFacts: {
      calories: "143 kcal",
      protein: "26g",
      carbs: "0g",
      fat: "3.5g"
    },
    dietaryTags: ["High Protein", "Keto", "Paleo", "Gluten-Free"]
  },
  {
    dishName: "Turkey Breast (Raw)",
    cuisineType: "Meat",
    description: "Very lean white meat from a turkey.",
    ingredients: ["Turkey"],
    nutritionalFacts: {
      calories: "135 kcal",
      protein: "30g",
      carbs: "0g",
      fat: "0.7g"
    },
    dietaryTags: ["High Protein", "Keto", "Paleo", "Gluten-Free"]
  },
  {
    dishName: "Lamb Chop (Raw)",
    cuisineType: "Meat",
    description: "Flavorful cut of meat from a young sheep.",
    ingredients: ["Lamb"],
    nutritionalFacts: {
      calories: "294 kcal",
      protein: "25g",
      carbs: "0g",
      fat: "21g"
    },
    dietaryTags: ["High Protein", "Keto", "Paleo", "Gluten-Free"]
  },
  {
    dishName: "Duck Breast (Raw)",
    cuisineType: "Meat",
    description: "Rich, dark meat from a duck, often cooked with skin.",
    ingredients: ["Duck"],
    nutritionalFacts: {
      calories: "140 kcal (without skin)",
      protein: "19g",
      carbs: "0g",
      fat: "6g"
    },
    dietaryTags: ["High Protein", "Keto", "Paleo", "Gluten-Free"]
  },
  {
    dishName: "Shrimp (Raw)",
    cuisineType: "Seafood",
    description: "Small, versatile shellfish low in calories and high in protein.",
    ingredients: ["Shrimp"],
    nutritionalFacts: {
      calories: "99 kcal",
      protein: "24g",
      carbs: "0.2g",
      fat: "0.3g"
    },
    dietaryTags: ["High Protein", "Keto", "Paleo", "Gluten-Free", "Seafood"]
  },
  {
    dishName: "Tuna (Fresh Fillet)",
    cuisineType: "Seafood",
    description: "Meaty, firm fish often used for steaks or sushi.",
    ingredients: ["Tuna"],
    nutritionalFacts: {
      calories: "132 kcal",
      protein: "28g",
      carbs: "0g",
      fat: "1g"
    },
    dietaryTags: ["High Protein", "Keto", "Paleo", "Gluten-Free", "Seafood"]
  },
  {
    dishName: "Cod (Raw)",
    cuisineType: "Seafood",
    description: "Mild-flavored white fish with a flaky texture.",
    ingredients: ["Cod"],
    nutritionalFacts: {
      calories: "82 kcal",
      protein: "18g",
      carbs: "0g",
      fat: "0.7g"
    },
    dietaryTags: ["High Protein", "Keto", "Paleo", "Gluten-Free", "Seafood"]
  },
  {
    dishName: "Tilapia (Raw)",
    cuisineType: "Seafood",
    description: "Inexpensive, mild white fish.",
    ingredients: ["Tilapia"],
    nutritionalFacts: {
      calories: "96 kcal",
      protein: "20g",
      carbs: "0g",
      fat: "1.7g"
    },
    dietaryTags: ["High Protein", "Keto", "Paleo", "Gluten-Free", "Seafood"]
  },
  {
    dishName: "Crab Meat (Raw)",
    cuisineType: "Seafood",
    description: "Sweet, delicate meat from a crab.",
    ingredients: ["Crab"],
    nutritionalFacts: {
      calories: "84 kcal",
      protein: "18g",
      carbs: "0g",
      fat: "1.1g"
    },
    dietaryTags: ["High Protein", "Keto", "Paleo", "Gluten-Free", "Seafood"]
  },
  {
    dishName: "Kidney Beans (Dry)",
    cuisineType: "Legumes",
    description: "Dark red beans shaped like kidneys, high in fiber.",
    ingredients: ["Kidney Beans"],
    nutritionalFacts: {
      calories: "333 kcal",
      protein: "24g",
      carbs: "60g",
      fat: "0.8g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "High Protein", "Gluten-Free", "High Fiber"]
  },
  {
    dishName: "Black Beans (Dry)",
    cuisineType: "Legumes",
    description: "Small, shiny black beans common in Latin American cuisine.",
    ingredients: ["Black Beans"],
    nutritionalFacts: {
      calories: "341 kcal",
      protein: "21g",
      carbs: "62g",
      fat: "1.4g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "High Protein", "Gluten-Free", "High Fiber"]
  },
  {
    dishName: "Walnuts",
    cuisineType: "Nuts",
    description: "Brain-shaped nuts high in Omega-3 fatty acids.",
    ingredients: ["Walnuts"],
    nutritionalFacts: {
      calories: "654 kcal",
      protein: "15g",
      carbs: "14g",
      fat: "65g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Keto", "Paleo"]
  },
  {
    dishName: "Cashews",
    cuisineType: "Nuts",
    description: "Creamy, kidney-shaped nuts.",
    ingredients: ["Cashews"],
    nutritionalFacts: {
      calories: "553 kcal",
      protein: "18g",
      carbs: "30g",
      fat: "44g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Paleo"]
  },
  {
    dishName: "Pistachios",
    cuisineType: "Nuts",
    description: "Small, green nuts often sold in their shells.",
    ingredients: ["Pistachios"],
    nutritionalFacts: {
      calories: "562 kcal",
      protein: "20g",
      carbs: "28g",
      fat: "45g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Paleo"]
  },
  {
    dishName: "Peanuts",
    cuisineType: "Nuts",
    description: "Common legume often categorized as a nut.",
    ingredients: ["Peanuts"],
    nutritionalFacts: {
      calories: "567 kcal",
      protein: "26g",
      carbs: "16g",
      fat: "49g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "High Protein", "Gluten-Free", "Keto"]
  },
  {
    dishName: "Coconut Oil",
    cuisineType: "Oils",
    description: "Edible oil extracted from the kernel of mature coconuts.",
    ingredients: ["Coconut"],
    nutritionalFacts: {
      calories: "862 kcal",
      protein: "0g",
      carbs: "0g",
      fat: "100g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Keto", "Paleo"]
  },
  {
    dishName: "Avocado Oil",
    cuisineType: "Oils",
    description: "Edible oil pressed from the fruit of the avocado.",
    ingredients: ["Avocado"],
    nutritionalFacts: {
      calories: "884 kcal",
      protein: "0g",
      carbs: "0g",
      fat: "100g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Keto", "Paleo"]
  },
  {
    dishName: "Peanut Butter (Natural)",
    cuisineType: "Spreads",
    description: "Spread made from ground dry-roasted peanuts.",
    ingredients: ["Peanuts", "Salt"],
    nutritionalFacts: {
      calories: "588 kcal",
      protein: "25g",
      carbs: "20g",
      fat: "50g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "High Protein", "Gluten-Free", "Keto"]
  },
  {
    dishName: "Turmeric Powder",
    cuisineType: "Seasoning",
    description: "Bright yellow spice known for its anti-inflammatory properties.",
    ingredients: ["Turmeric"],
    nutritionalFacts: {
      calories: "354 kcal",
      protein: "8g",
      carbs: "65g",
      fat: "10g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Paleo"]
  },
  {
    dishName: "Cumin Seeds",
    cuisineType: "Seasoning",
    description: "Aromatic seeds used extensively in global cuisines.",
    ingredients: ["Cumin"],
    nutritionalFacts: {
      calories: "375 kcal",
      protein: "18g",
      carbs: "44g",
      fat: "22g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Paleo"]
  },
  {
    dishName: "Chili Powder",
    cuisineType: "Seasoning",
    description: "Spicy blend of ground chili peppers and other spices.",
    ingredients: ["Chili Peppers", "Cumin", "Garlic", "Oregano"],
    nutritionalFacts: {
      calories: "282 kcal",
      protein: "13g",
      carbs: "50g",
      fat: "14g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Paleo"]
  },
  {
    dishName: "Soy Sauce",
    cuisineType: "Condiments",
    description: "Salty liquid condiment made from fermented soybeans.",
    ingredients: ["Soybeans", "Wheat", "Salt", "Water"],
    nutritionalFacts: {
      calories: "53 kcal",
      protein: "8g",
      carbs: "4.9g",
      fat: "0.6g"
    },
    dietaryTags: ["Vegan", "Vegetarian"]
  },
  {
    dishName: "Apple Cider Vinegar",
    cuisineType: "Condiments",
    description: "Vinegar made from fermented apple juice.",
    ingredients: ["Apples", "Water"],
    nutritionalFacts: {
      calories: "21 kcal",
      protein: "0g",
      carbs: "0.9g",
      fat: "0g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Paleo"]
  },
  {
    dishName: "Mustard (Yellow)",
    cuisineType: "Condiments",
    description: "Tangy condiment made from mustard seeds.",
    ingredients: ["Mustard Seeds", "Vinegar", "Salt", "Turmeric"],
    nutritionalFacts: {
      calories: "66 kcal",
      protein: "4g",
      carbs: "6g",
      fat: "3g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Paleo"]
  },
  {
    dishName: "Corn Tortilla",
    cuisineType: "Mexican Staples",
    description: "Thin, flatbread made from nixtamalized corn.",
    ingredients: ["Corn Masa", "Water"],
    nutritionalFacts: {
      calories: "218 kcal",
      protein: "5.7g",
      carbs: "45g",
      fat: "2.9g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free"]
  },
  {
    dishName: "Miso Paste",
    cuisineType: "Japanese Staples",
    description: "Traditional Japanese seasoning produced by fermenting soybeans.",
    ingredients: ["Soybeans", "Salt", "Koji"],
    nutritionalFacts: {
      calories: "199 kcal",
      protein: "12g",
      carbs: "25g",
      fat: "6g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free"]
  },
  {
    dishName: "Nori (Seaweed)",
    cuisineType: "Japanese Staples",
    description: "Dried edible seaweed used in sushi making.",
    ingredients: ["Seaweed"],
    nutritionalFacts: {
      calories: "35 kcal",
      protein: "5.8g",
      carbs: "5.1g",
      fat: "0.3g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Paleo"]
  },
  {
    dishName: "Pasta (Dry Wheat)",
    cuisineType: "Italian Staples",
    description: "Standard dry pasta made from durum wheat semolina.",
    ingredients: ["Durum Wheat Semolina"],
    nutritionalFacts: {
      calories: "371 kcal",
      protein: "13g",
      carbs: "75g",
      fat: "1.5g"
    },
    dietaryTags: ["Vegan", "Vegetarian"]
  },
  {
    dishName: "Balsamic Vinegar",
    cuisineType: "Italian Staples",
    description: "Dark, concentrated, and intensely flavored vinegar.",
    ingredients: ["Grape Must"],
    nutritionalFacts: {
      calories: "88 kcal",
      protein: "0.5g",
      carbs: "17g",
      fat: "0g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Paleo"]
  },
  {
    dishName: "Tahini",
    cuisineType: "Middle Eastern Staples",
    description: "Condiment made from toasted ground hulled sesame.",
    ingredients: ["Sesame Seeds"],
    nutritionalFacts: {
      calories: "595 kcal",
      protein: "17g",
      carbs: "21g",
      fat: "54g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Keto", "Paleo"]
  },
  {
    dishName: "Bulgur (Dry)",
    cuisineType: "Middle Eastern Staples",
    description: "Cereal food made from the cracked parboiled groats of several different wheat species.",
    ingredients: ["Wheat"],
    nutritionalFacts: {
      calories: "342 kcal",
      protein: "12g",
      carbs: "76g",
      fat: "1.3g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "High Fiber"]
  },
  {
    dishName: "Atta (Whole Wheat Flour)",
    cuisineType: "Indian Staples",
    description: "Whole wheat flour used to make rotis and parathas.",
    ingredients: ["Wheat"],
    nutritionalFacts: {
      calories: "340 kcal",
      protein: "13g",
      carbs: "72g",
      fat: "2.5g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "High Fiber"]
  },
  {
    dishName: "Toor Dal (Dry)",
    cuisineType: "Indian Staples",
    description: "Split pigeon peas, a staple pulse in Indian households.",
    ingredients: ["Pigeon Peas"],
    nutritionalFacts: {
      calories: "343 kcal",
      protein: "22g",
      carbs: "63g",
      fat: "1.5g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "High Protein", "Gluten-Free"]
  },
  {
    dishName: "Moong Dal (Dry)",
    cuisineType: "Indian Staples",
    description: "Split green gram, easy to digest and high in protein.",
    ingredients: ["Green Gram"],
    nutritionalFacts: {
      calories: "347 kcal",
      protein: "24g",
      carbs: "63g",
      fat: "1.2g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "High Protein", "Gluten-Free"]
  },
  {
    dishName: "Mustard Oil",
    cuisineType: "Indian Staples",
    description: "Pungent oil extracted from mustard seeds, common in North Indian cooking.",
    ingredients: ["Mustard Seeds"],
    nutritionalFacts: {
      calories: "884 kcal",
      protein: "0g",
      carbs: "0g",
      fat: "100g"
    },
    dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Keto"]
  },
  {
    dishName: "Jaggery (Gur)",
    cuisineType: "Indian Staples",
    description: "Unrefined sugar made from sugarcane juice or palm sap.",
    ingredients: ["Sugarcane Juice"],
    nutritionalFacts: {
      calories: "383 kcal",
      protein: "0.4g",
      carbs: "98g",
      fat: "0.1g"
    },
    dietaryTags: ["Vegetarian", "Gluten-Free"]
  }
];
