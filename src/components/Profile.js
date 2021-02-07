import React from 'react';
import { useAuth } from '../providers/auth';

const Profile = () => {
  const { user, setUser } = useAuth();

  const handleChangeAge = e => {
    setUser({ ...user, age: e.target.value });
  }

  const handleChangeVotes = () => {
    setTimeout(() => {
      setUser((user) => ({ ...user, votes: user.votes + 1 }));
    }, 2000)
    console.log(user.votes)
  }

  return (
    <>
      <h3>{user.age}</h3>
      <h3>{user.votes}</h3>
      <input onChange={e => handleChangeAge(e)} />
      <button onClick={handleChangeVotes}>Vote</button>
    </>
  );
}

export default Profile;
