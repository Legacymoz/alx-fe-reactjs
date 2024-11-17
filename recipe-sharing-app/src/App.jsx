import { useState } from 'react'
import { RecipeList } from './component/recipeList'
import { AddRecipeForm } from './component/addRecipeForm'

function App() {
  

  return (
    <div>
      <AddRecipeForm />
      
      <RecipeList />
    

    </div>
  )
}

export default App
