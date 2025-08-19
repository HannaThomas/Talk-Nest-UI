// src/pages/Login.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

export default function Login() {
    const [user, setUser] = useState(null);
    const location = useLocation();
    const fromSignup = location.state?.fromSignup;


    return (
        <div>
            {!user ? (
                <>
                    {fromSignup && (
                        <p style={{ color: 'green', textAlign: 'center' }}>
                            Signup successful! Please log in.
                        </p>
                    )}

                    <AuthForm type="login" onSuccess={setUser} />
                </>
            ) : (
                <>
                    {!fromSignup && (
                        <h2>Welcome back, {user.username}!</h2>
                    )}
                </>
            )}

        </div>
    );
}