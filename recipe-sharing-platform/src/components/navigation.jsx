import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav style={{ backgroundColor: "#333", color: "#fff", padding: "1rem" }}>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        <li style={{ display: "inline-block", marginRight: "2rem" }}>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li style={{ display: "inline-block", marginRight: "2rem" }}>
          <Link to="AddRecipe" style={{ color: "#fff", textDecoration: "none" }}>
            Add Recipe
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
