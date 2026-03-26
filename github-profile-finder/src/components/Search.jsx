import { useState } from "react";
import { fetchGitUsers } from "../services/githubApi";
import Profile from "./Profile.jsx";

function Search() {

  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleSearch = async () => {
    if (!username) return;

    try {
      setLoading(true);
      setError(null);

      const data = await fetchGitUsers(username);

      setUserData(data);

    } catch (error) {

      setError(error.message);
      setUserData(null);

    } finally {

      setLoading(false);

    }
  }

  return (
    <div>
      <input type="text"
        placeholder="Github username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      {loading && <div className="spinner"></div>}

      {error && <p className="error">Error: {error}</p>}

      {userData && <Profile userData={userData} />}

    </div>
  )
}

export default Search;

