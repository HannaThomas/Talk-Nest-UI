// src/pages/Signup.js
import React from 'react';
import AuthForm from '../components/AuthForm';

export default function SignUp() {
    const handleSuccess = (user) => {
        console.log('Signed up:', user);
        // Redirect to chat or store user session
    };

    return (
        <div>
            <h2>Welcome to TalkNest 🪺</h2>
            <AuthForm type="signup" onSuccess={handleSuccess} />
        </div>
    );
}