import React, { useState } from "react";

import fetchUserData from "../services/githubService";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState([]); // State to store fetched user data
  const [loading, setLoading] = useState(false); // State to handle loading state
  const [error, setError] = useState("");
  const [location, setLocation] = useState(""); // State to store user location
  const [repoCount, setRepoCount] = useState(0); // State to store min  number of repositories needed

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // Set loading state to true before making the API call
    setError(""); // Clear any previous error
    setUserData(null); // Clear any previously displayed user data

    const searchCriteria = {
      username: searchTerm.trim(),
      location,
      minRepo: parseInt(repoCount, 10),
    };

    try {
      const data = await fetchUserData(searchCriteria);
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
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a user"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter Location"
        />
        <input
          type="text"
          value={repoCount}
          onChange={(e) => setRepoCount(e.target.value)}
          placeholder="Enter minimum number of repo needed"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {userData && !loading && (
        <div>
          {" "}
          <h2>Search Results:</h2>{" "}
          {userData.map((user) => (
            <div key={user.id}>
              {" "}
              <h3>{user.login}</h3>{" "}
              <p>Location: {user.location || "Not Available"}</p>{" "}
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                width="100"
                height="100"
              />{" "}
              <p>
                {" "}
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  View GitHub Profile{" "}
                </a>{" "}
              </p>{" "}
            </div>
          ))}{" "}
        </div>
      )}
    </div>
  );
};

export default SearchForm;
