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

  const handleBlur = e => {
    e.target.value = '';
  }

  return (
    <>
      <h3>{user.age}</h3>
      <h3>{user.votes}</h3>
      <label>Age:</label>
      <input
        style={{ width: '100%' }}
        onChange={e => handleChangeAge(e)}
        onBlur={e => handleBlur(e)}
      />
      <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between' }}>
        <button
          style={{ height: '25px', width: '25px' }}
          onClick={handleUpVoteClick}
        >
          +
        </button>
        <button
          style={{ height: '25px', width: '25px' }}
          onClick={handleDownVoteClick}
        >
          -
        </button>
      </div>
    </>
  );
}

export default Profile;
