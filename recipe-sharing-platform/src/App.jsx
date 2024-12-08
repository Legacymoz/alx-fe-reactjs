import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import "./App.css";
import AddRecipeForm from "./components/AddRecipeForm";
import Nav from "./components/navigation";


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/AddRecipe" element={<AddRecipeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
