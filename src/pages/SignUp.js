// src/pages/Signup.js
import React from 'react';
import AuthForm from '../components/AuthForm';


export default function SignUp() {
    const handleSuccess = (user) => {
        console.log('Signed up:', user);
    };

    return (
        <div>
            <AuthForm type="signup" onSuccess={handleSuccess} />
        </div>
    );
}