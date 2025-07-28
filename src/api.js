import axios from 'axios';

const handleLogin = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:5000/api/login', {
            email,
            password,
        });

        const user = response.data;
        // You might want to store user data in context or localStorage here
        console.log('Logged in user:', user);
    } catch (error) {
        console.error('Login failed:', error.response?.data?.message || error.message);
    }
};

const handleSignup = async () => {
    const res = await axios.post('http://localhost:5000/api/signup', {
        username,
        email,
        password,
    });
    console.log('User created', res.data);
};
