import axios from "axios";

const BASE_URL = import.meta.env.VITE_GITHUB_API_BASE_URL;

const fetchUserData = async (username) => {
    console.log(`https://api.github.com/users/${username}`);
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchUserData;
