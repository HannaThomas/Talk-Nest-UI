// src/pages/Login.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

export default function Login() {
    const [user, setUser] = useState(null);
    const location = useLocation();
    const [fromSignup, setFromSignup] = useState(location.state?.fromSignup || false);
    const [error, setError] = useState('');


    useEffect(() => {
        if (user && fromSignup) {
            setFromSignup(false); // Clear flag after login
        }
    }, [user, fromSignup]);

    const handleLogin = (data) => {
        if (data && data.username) {
            setUser(data);
            setError('');
        } else {
            setError('Wrong username or password');
        }
    };

    return (
        <div>
            {!user ? (
                <>
                    {fromSignup && (
                        <p style={{ color: 'green', textAlign: 'center' }}>
                            Signup successful! Please log in.
                        </p>
                    )}

                    <AuthForm type="login" onSuccess={handleLogin} />
                    {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
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