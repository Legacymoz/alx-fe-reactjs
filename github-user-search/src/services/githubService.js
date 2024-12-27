import axios from "axios";

const fetchUserData = async ({ username, location, minRepo }) => {
  console.log(`https://api.github.com/users/${username}`);
  console.log(username);
  console.log(location);
  console.log(minRepo);
  try {
    let queryParts = [];
    if (username) queryParts.push(username);
    if (location) queryParts.push(`location:${location}`);
    

    let query = queryParts.join(" ");
    // console.log(
    //   `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
    // );
    console.log(`my query is ${query}`);
    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
    );

    const users = response.data.items; // The API will return a list of matching users
    users.map((user) => {
      console.log(`Username: ${user.login}`);
      console.log(`Location: ${user.location}`);
    });

    console.log(users);
    // Post-process: Filter users by minimum repositories (if specified)
    if (minRepo > 0) {
      const filteredUsers = users.filter(
        (user) => user.public_repos >= minRepo
      );
      return filteredUsers;
    }

    return response.data.items;
  } catch (error) {
    console.error(error);
  }
};

export default fetchUserData;
