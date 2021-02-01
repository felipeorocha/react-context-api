import React from 'react';
import { AuthContext } from '../providers/auth';

const Profile = () => {
  const { user, setUser } = React.useContext(AuthContext);

  const handleChange = e => {
    e.preventDefault();

    setUser({ ...user, name: e.target.value });
  }

  return (
    <>
      <h3>{user.age}</h3>
      <input onChange={e => handleChange(e)} />
    </>
  );
}

export default Profile;
