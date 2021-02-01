import React from 'react';
import { useAuth } from '../providers/auth';

const Profile = () => {
  const { user, setUser } = useAuth();

  const handleChangeAge = e => {
    setUser({ ...user, age: e.target.value });
  }

  return (
    <>
      <h3>{user.age}</h3>
      <input onChange={e => handleChangeAge(e)} />
    </>
  );
}

export default Profile;
