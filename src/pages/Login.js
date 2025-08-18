// src/pages/Login.js
import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';

export default function Login() {
    const [user, setUser] = useState(null);

    return (
        <div>
            {!user ? (
                <>
                    <AuthForm type="login" onSuccess={setUser} />
                </>
            ) : (
                <h2>Welcome back, {user.name}!</h2>
            )}

        </div>
    );
}