import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/src/data.json"); // Adjusted path
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const recipeData = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(recipeData);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleIngredientClick = (ingredient) => {
    alert(`You clicked on ${ingredient}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {recipe && (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <img
            className="w-full h-64 object-cover rounded-lg mb-4"
            src={recipe.image}
            alt={recipe.title}
          />
          <h2 className="text-xl font-semibold mb-2">Summary:</h2>
          <p className="text-gray-700 mb-4">{recipe.summary}</p>

          <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
          <ul className="list-disc list-inside mb-4">
            {recipe.ingredients &&
              recipe.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="cursor-pointer text-blue-600 hover:underline"
                  onClick={() => handleIngredientClick(ingredient)}
                >
                  {ingredient}
                </li>
              ))}
          </ul>

          <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
          <ol className="list-decimal list-inside">
            {recipe.instructions &&
              recipe.instructions.map((instruction, index) => (
                <li key={index} className="mb-2 text-gray-700">
                  {instruction}
                </li>
              ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
