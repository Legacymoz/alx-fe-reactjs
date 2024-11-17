import { useState } from "react";
import { RecipeList } from "./RecipeList";
import { AddRecipeForm } from "./AddRecipeForm";

function App() {
  return (
    <div>
      <AddRecipeForm />

      <RecipeList />
    </div>
  );
}

export default App;
