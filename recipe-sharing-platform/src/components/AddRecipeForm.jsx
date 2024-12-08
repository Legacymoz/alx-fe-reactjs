import React, { useState } from "react";
import data from "/src/data.json";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("https://via.placeholder.com/150");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title) newErrors.title = "Title is required";
    if (!ingredients) newErrors.ingredients = "Ingredients are required";
    if (!steps) newErrors.steps = "Steps are required";
    if (!summary) newErrors.summary = "Summary is required";

    if (ingredients && ingredients.split("\n").length < 2)
      newErrors.ingredients = "At least two ingredients are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const newRecipe = {
        id: data.length + 1,
        title,
        summary,
        image,
        steps,
        ingredients: ingredients.split("\n"),
      };
      data.push(newRecipe);
      const jsonData = JSON.stringify(data, null, 2);
      fetch("/src/data.json", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      })
        .then(() => console.log("Recipe added successfully"))
        .catch((error) => console.error("Error:", error));
    }
  };

  return (
  <div className="max-w-md mx-auto p-4 mt-8 bg-white rounded-lg shadow-md">
    <h2 className="text-lg font-bold mb-4">Add Recipe</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col">
        <label className="text-sm font-medium text-black" htmlFor="title">
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="w-full p-2 pl-10 text-sm text-black bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          style={{ backgroundColor: "white", color: "black" }}
        />
        {errors.title && (
          <div className="text-red-500 text-sm">{errors.title}</div>
        )}
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-black" htmlFor="summary">
          Summary:
        </label>
        <textarea
          id="summary"
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
          className="w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          style={{ backgroundColor: "white", color: "black" }}
        />
        {errors.summary && (
          <div className="text-red-500 text-sm">{errors.summary}</div>
        )}
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-black" htmlFor="image">
          Image:
        </label>
        <input
          type="text"
          id="image"
          value={image}
          readOnly
          className="w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          style={{ backgroundColor: "white", color: "black" }}
        />
        {errors.image && (
          <div className="text-red-500 text-sm">{errors.image}</div>
        )}
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-black" htmlFor="ingredients">
          Ingredients:
        </label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(event) => setIngredients(event.target.value)}
          className="w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          style={{ backgroundColor: "white", color: "black" }}
        />
        {errors.ingredients && (
          <div className="text-red-500 text-sm">{errors.ingredients}</div>
        )}
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-black" htmlFor="steps">
          Steps:
        </label>
        <textarea
          id="steps"
          value={steps}
          onChange={(event) => setSteps(event.target.value)}
          className="w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          style={{ backgroundColor: "white", color: "black" }}
        />
        {errors.steps && (
          <div className="text-red-500 text-sm">{errors.steps}</div>
        )}
      </div>
      <button
        type="submit"
        className="w-full p-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-2 focus:ring-2 focus:outline-none"
      >
        Add Recipe
      </button>
    </form>
  </div>
);
};

export default AddRecipeForm;
      