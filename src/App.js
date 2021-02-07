import React from 'react';
import { useAuth } from './providers/auth';

const App = () => {
  const { user, setUser } = useAuth();

  const handleChangeName = e => {
    setUser({ ...user, name: e.target.value });
  }

  const handleBlur = e => {
    e.target.value = '';
  }

  return (
    <div className="App">
      <h2>{user.name}</h2>
      <label>Name:</label>
      <input
        style={{ width: '100%' }}
        onChange={e => handleChangeName(e)}
        onBlur={e => handleBlur(e)}
      />
    </div>
  );
}

export default App;
