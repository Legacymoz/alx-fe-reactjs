import  useRecipeStore  from "./recipeStore";
import { useNavigate } from "react-router-dom";


const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate(); // Initialize useNavigate
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    // Delete the recipe using Zustand store
    deleteRecipe(recipeId);
    // Navigate to a different page after deleting (e.g., back to the recipe list)
    navigate("/recipes"); // Change '/recipes' to your desired route
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
