import express from "express";
import bodyParser from "body-parser";
import json  from "body-parser";

const app = express();
const port = 3000;

//Step 1: Run the solution.js file without looking at the code.
//Step 2: You can go to the recipe.json file to see the full structure of the recipeJSON below.
const recipeJSON =
  '[{"id": "0001","type": "taco","name": "Chicken Taco","price": 2.99,"ingredients": {"protein": {"name": "Chicken","preparation": "Grilled"},  "salsa": {"name": "Tomato Salsa","spiciness": "Medium"},  "toppings": [{"name": "Lettuce",  "quantity": "1 cup",  "ingredients": ["Iceberg Lettuce"]  },      {"name": "Cheese",  "quantity": "1/2 cup",  "ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"]  },      {"name": "Guacamole",  "quantity": "2 tablespoons",  "ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"]  },      {"name": "Sour Cream",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream"]  }      ]    }  },{"id": "0002","type": "taco","name": "Beef Taco","price": 3.49,"ingredients": {"protein": {"name": "Beef","preparation": "Seasoned and Grilled"},  "salsa": {"name": "Salsa Verde","spiciness": "Hot"},  "toppings": [{"name": "Onions",  "quantity": "1/4 cup",  "ingredients": ["White Onion", "Red Onion"]  },      {"name": "Cilantro",  "quantity": "2 tablespoons",  "ingredients": ["Fresh Cilantro"]  },      {"name": "Queso Fresco",  "quantity": "1/4 cup",  "ingredients": ["Queso Fresco"]  }      ]    }  },{"id": "0003","type": "taco","name": "Fish Taco","price": 4.99,"ingredients": {"protein": {"name": "Fish","preparation": "Battered and Fried"},  "salsa": {"name": "Chipotle Mayo","spiciness": "Mild"},  "toppings": [{"name": "Cabbage Slaw",  "quantity": "1 cup",  "ingredients": [    "Shredded Cabbage",    "Carrot",    "Mayonnaise",    "Lime Juice",    "Salt"          ]  },      {"name": "Pico de Gallo",  "quantity": "1/2 cup",  "ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"]  },      {"name": "Lime Crema",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream", "Lime Juice", "Salt"]  }      ]    }  }]';

const jsonData = JSON.parse(recipeJSON);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/recipe", (req, res) => {
  //Step 3: Write your code here to make this behave like the solution website.
  //Step 4: Add code to views/index.ejs to use the recieved recipe object.
  var taco_name;
  var Protein_name;
  var protein_preparation;
  var Salsa_name;
  var topping=[];


  var recipeChoice = req.body["choice"];
  if(recipeChoice==="beef"){
    taco_name=jsonData[1].name;
    Protein_name= jsonData[1].ingredients.protein.name;
    protein_preparation=jsonData[1].ingredients.protein.preparation;
    Salsa_name=jsonData[1].ingredients.salsa.name;
    topping=jsonData[1].ingredients.toppings[Math.floor(Math.random()*3)]; 
  }
  else if(recipeChoice==="chicken"){
    taco_name=jsonData[0].name;
    Protein_name= jsonData[0].ingredients.protein.name;
    protein_preparation=jsonData[0].ingredients.protein.preparation;
    Salsa_name=jsonData[0].ingredients.salsa.name;
    topping=jsonData[0].ingredients.toppings[Math.floor(Math.random()*4)]; 
  }
  else if(recipeChoice==="fish"){
    taco_name=jsonData[2].name;
    Protein_name= jsonData[2].ingredients.protein.name;
    protein_preparation=jsonData[2].ingredients.protein.preparation;
    Salsa_name=jsonData[2].ingredients.salsa.name;
    topping=jsonData[2].ingredients.toppings[Math.floor(Math.random()*3)]; 
  }
  
  res.render("index.ejs",{
    tacoName: taco_name,
    proteinName : Protein_name,
    proteinPreparation : protein_preparation,
    salsaName: Salsa_name,
    toppingRandom: topping,
  })
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
