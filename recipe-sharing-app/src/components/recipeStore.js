import {create} from "zustand";

const useRecipeStore = create((set) => ({
  // Recipes list and other states
  recipes: [], // List of all recipes
  favorites: [], // List of favorite recipe IDs
  recommendations: [], // List of recommended recipes
  searchTerm: "", // Search term for filtering
  filteredRecipes: [], // Filtered list based on search

  // Actions for managing recipes
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  setRecipes: (recipes) => set({ recipes }),

  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // Actions for managing favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Actions for generating recommendations
  generateRecommendations: () =>
    set((state) => {
      // Generate random recommendations based on favorite recipes
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5 // Mock recommendation logic
      );
      return { recommendations: recommended };
    }),

  // Actions for searching and filtering
  setSearchTerm: (term) => set({ searchTerm: term }),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          recipe.description
            .toLowerCase()
            .includes(state.searchTerm.toLowerCase())
      ),
    })),
}));

export default useRecipeStore;
