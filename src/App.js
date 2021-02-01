import React from 'react';
import { useAuth } from './providers/auth';

const App = () => {
  const { user, setUser } = useAuth();

  const handleChangeName = e => {
    setUser({ ...user, name: e.target.value });
  }

  return (
    <div className="App">
      <h2>{user.name}</h2>
      <input onChange={e => handleChangeName(e)} />
    </div>
  );
}

export default App;
