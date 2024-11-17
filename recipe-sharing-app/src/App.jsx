import { useState } from "react";
import  RecipeList  from "./components/RecipeList";
import  AddRecipeForm  from "./components/AddRecipeForm";

function App() {
  return (
    <div>
      <AddRecipeForm />

      <RecipeList />
    </div>
  );
}

export default App;
