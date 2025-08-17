// src/pages/Login.js
import React from 'react';
import AuthForm from '../components/AuthForm';

export default function Login() {
    const [user, setUser] = useState(null);

    return (
        <div>
            {!user ? (
                <>
                    <h2>Log In to TalkNest</h2>
                    <AuthForm type="login" onSuccess={setUser} />
                </>
            ) : (
                <h2>Welcome back, {user.name}!</h2>
            )}

        </div>
    );
}