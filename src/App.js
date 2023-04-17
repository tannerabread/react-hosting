import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Auth } from 'aws-amplify';

function App() {
  const [user, setUser] = useState(null);

  async function signIn() {
    const user = await Auth.signIn('testuser20', 'testtest');
    setUser(user);
  }

  async function signOut() {
    await Auth.signOut();
  }

  function getMessage() {
    console.log(process.env.REACT_APP_TESTMESSAGE);
    return process.env.REACT_APP_TESTMESSAGE;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={signIn}>Sign In</button>
        <button onClick={signOut}>Sign Out</button>
        <p>{user ? JSON.stringify(user) : 'No user'}</p>
        <button onClick={getMessage}>Get Message</button>
      </header>
    </div>
  );
}

export default App;
