import React from 'react';
import { AuthContext } from '../providers/auth';

const Profile = () => {
  const { user } = React.useContext(AuthContext);

  return (
    <h3>{user.age}</h3>
  );
}

export default Profile;
