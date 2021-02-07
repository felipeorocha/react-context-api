import React from 'react';
import { useAuth } from '../providers/auth';

const Profile = () => {
  const { user, setUser } = useAuth();

  const handleChangeAge = e => {
    setUser({ ...user, age: e.target.value });
  }

  const handleUpVoteClick = () => {
    setTimeout(() => { // async request simulate for test purposes
      setUser((user) => ({ ...user, votes: user.votes + 1 }));
    }, 2000)
  }

  const handleDownVoteClick = () => {
    setTimeout(() => { // async request simulate for test purposes
      setUser((user) => ({ ...user, votes: user.votes - 1 }));
    }, 2000)
  }

  return (
    <>
      <h3>{user.age}</h3>
      <h3>{user.votes}</h3>
      <input onChange={e => handleChangeAge(e)} />
      <div>
        <button onClick={handleUpVoteClick}>+</button>
        <button onClick={handleDownVoteClick}>-</button>
      </div>
    </>
  );
}

export default Profile;
