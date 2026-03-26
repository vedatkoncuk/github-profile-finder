import { use, useState } from "react";
import { fetchGitUsers } from "../services/githubApi";

const [username, setUsername] = useState("");
const [userData, setUserData] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);


const handleSearch = async () => {
  try {
    setLoading(true);
    setError(null);

    const data = await fetchGitUsers(username);

    setUserData(data);

  } catch (error) {

    setError(error.message);

  } finally {

    setLoading(false);

  }
}