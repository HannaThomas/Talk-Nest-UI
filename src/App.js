// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ChatRoom from './pages/ChatRoom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/chat" element={<ChatRoom />} />
      </Routes>
    </>
  );
}

export default App;