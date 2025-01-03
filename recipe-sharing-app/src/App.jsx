import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router and Routes
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails"; // Import RecipeDetails
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

const App = () => (
  <Router>
    <div>
      <h1>Recipe Sharing App</h1>

      {/* Search Bar */}
      <SearchBar />

      {/* Add Recipe Form */}
      <AddRecipeForm />

      {/* Recipe List */}
      <RecipeList />

      {/* Favorites List */}
      <FavoritesList />

      {/* Recommendations List */}
      <RecommendationsList />

      {/* Routes for different pages */}
      <Routes>
        {/* Default route to show RecipeList */}
        <Route path="/" element={<RecipeList />} />

        {/* Route for individual recipe details */}
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  </Router>
);

export default App;
