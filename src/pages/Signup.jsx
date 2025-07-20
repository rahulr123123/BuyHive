import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Signing up:', { name, email, password });
        // Add your signup logic here (API call, validation, etc.)
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit} className="signup-form">
                <h2>Create Account </h2>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign Up</button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
}

export default Signup;
