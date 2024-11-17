import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import  useRecipeStore  from "./recipeStore"; // Import Zustand store

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // Automatically filter recipes whenever the recipes or search term changes
  useEffect(() => {
    filterRecipes();
  }, [recipes, filterRecipes]);

  // Display either filtered recipes or all recipes if no filter is applied
  const displayRecipes = filteredRecipes.length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      {displayRecipes.length > 0 ? (
        displayRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList;
