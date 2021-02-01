import React from 'react';
import { AuthContext } from './providers/auth';

const App = () => {
  const { user } = React.useContext(AuthContext);

  return (
    <div className="App">
      <h2>{user.name}</h2>
    </div>
  );
}

export default App;
