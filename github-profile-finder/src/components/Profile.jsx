function Profile({ userData }) {
  return (
    <div className="profile">
      <img
        src={userData.avatar_url}
        alt={`${userData.login} avatar`}
        className="profile-avatar"
      />
      <h2>{userData.login}</h2>
      <p>Public Repos: {userData.public_repos}</p>
      <p>Followers: {userData.followers}</p>
      <p>Account Created: {new Date(userData.created_at).toLocaleDateString()}</p>
      <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
        Go to GitHub
      </a>
    </div>
  );
}

export default Profile;