// src/components/AuthForm.js
import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import axios from 'axios';

export default function AuthForm({ type, onSuccess }) {
    const [authType, setAuthType] = useState(type);
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
        <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#f0f2f5' }}>
            <Box sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: 4,

            }}>
                <Typography variant="h3" color="primary">TalkNest</Typography>
                <Typography variant="body1" sx={{ maxWidth: 400, mt: 2 }}>
                    TalkNest is a real-time chat app that connects users instantly with seamless messaging, persistent conversations, and a clean, intuitive interface.
                </Typography>

            </Box>
            <Box sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: '#fff',
            }}>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#fff',
                        gap: 2,
                        width: '100%',
                        maxWidth: 320,
                        padding: 4,
                        boxShadow: 3,
                        borderRadius: 2,
                    }}
                >
                    {authType === 'signup' && (
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
                    <Button type="submit" variant="contained" color="primary">
                        {authType === 'signup' ? 'Sign Up' : 'Log In'}
                    </Button>
                    {authType === 'login' ? (
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
                            <Typography variant="body2" sx={{ mr: 1 }}>
                                Don't have an account?
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: '#1976d2', cursor: 'pointer', textDecoration: 'underline' }}
                                onClick={() => setAuthType('signup')}
                            >
                                Sign Up
                            </Typography>
                        </Box>

                    ) : (
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
                            <Typography variant="body2" sx={{ mr: 1 }}>
                                Already have an account?
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: '#1976d2', cursor: 'pointer', textDecoration: 'underline' }}
                                onClick={() => setAuthType('login')}
                            >
                                Log In
                            </Typography>
                        </Box>
                    )
                    }
                </Box>
            </Box>
        </Box>
    );
}