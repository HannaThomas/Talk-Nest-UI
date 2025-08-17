// src/components/AuthForm.js
import React, { useState } from 'react';
import axios from 'axios';

export default function AuthForm({ type, onSuccess }) {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        avatar: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = type === 'signup'
            ? 'http://localhost:5000/api/signup'
            : 'http://localhost:5000/api/login';

        try {
            const res = await axios.post(endpoint, form);
            onSuccess(res.data); // Pass user data to parent
            console.log('Auth successful:', res.data);
        } catch (err) {
            alert(err.message || 'Something went wrong');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {type === 'signup' && (
                <>
                    <input
                        name="username"
                        placeholder="Username"
                        value={form.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="avatar"
                        placeholder="Avatar URL (optional)"
                        value={form.avatar}
                        onChange={handleChange}
                    />
                </>
            )}
            <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
            />
            <input
                name="password"
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
            />
            <button type="submit">
                {type === 'signup' ? 'Sign Up' : 'Log In'}
            </button>
        </form>
    );
}