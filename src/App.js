import React, { useEffect, useState } from 'react';

function App() {
  const [serverMessage, setServerMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(res => res.text())
      .then(data => setServerMessage(data))
  }, []);
  return (
    <div>
      <h1>{serverMessage}</h1>;
      <TextFeild
        placeholder='email' value={email} />
      <TextFeild
        placeholder='password' value={password} />
      <Button onClick={() => { }}>Login</Button>
    </div>
  )

}

export default App;
