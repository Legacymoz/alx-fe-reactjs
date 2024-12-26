// context/SearchContext.js
import React, { createContext, useState } from "react";

// Create the context
const SearchContext = createContext();

// Create the SearchProvider to manage state and provide the context
export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState(""); // Direct state management without extra functions

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext };
