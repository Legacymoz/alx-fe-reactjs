import React, { useState } from "react";

import fetchUserData from "../services/githubService";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState(null); // State to store fetched user data
  const [loading, setLoading] = useState(false); // State to handle loading state
  const [error, setError] = useState("");

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if (searchTerm.trim()){
        setLoading(true); // Set loading state to true before making the API call
        setError(""); // Clear any previous error
        setUserData(null); // Clear any previously displayed user data

        try {
          const data = await fetchUserData(searchTerm);
          if (data) {
            setUserData(data); // Set user data if the API call is successful
          } else {
            setError("Looks like we can't find the user!"); // Set error if no data is returned
          }
        
        } catch (err) {
          console.error("Error fetching user data:", err);
          setError("Looks like we can't find the user!"); // Set error message if API request fails
        
        } finally {
            setLoading(false); // Set loading state to false after the API call is complete
        }

    }
    else{
      setError("Search Bar is Empty."); // Display error if no data
    }


    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a user"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {userData &&
        !loading && (
          <div>
            <h2>{userData.name}</h2>
            <p>Location: {userData.location || "Not Available"}</p>
            <img
              src={userData.avatar_url}
              alt={`${userData.name}'s avatar`}
              width="100"
              height="100"
            />
            <p>
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub Profile
              </a>
            </p>
          </div>
        )}
    </div>
  );
};

export default SearchForm