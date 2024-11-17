import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore"; // Import Zustand store

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // Automatically filter recipes whenever the recipes or search term changes
  useEffect(() => {
    filterRecipes();
  }, [recipes, filterRecipes]);

  // Display either filtered recipes or all recipes if no filter is applied
  const displayRecipes = filteredRecipes.length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      <h2>All Recipes</h2>
      {displayRecipes.length === 0 ? (
        <p>No recipes available.</p>
      ) : (
        displayRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
            <button
              onClick={() => addFavorite(recipe.id)}
              disabled={favorites.includes(recipe.id)}
            >
              {favorites.includes(recipe.id) ? "Favorited" : "Add to Favorites"}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
