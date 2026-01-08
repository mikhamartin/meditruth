import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';
import { useUser } from '../context/UserContext';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useUser();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Mock login - in a real app check credentials
        login({ email, name: 'Guest User', age: 30 }); // Default mock user
        navigate('/home');
    };
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: 'linear-gradient(135deg, #00509E 0%, #FFFFFF 50%, #D62828 100%)',
            position: 'relative',
            overflow: 'hidden',
        },
        card: {
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            padding: '2.5rem',
            borderRadius: '20px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
            width: '100%',
            maxWidth: '400px',
            textAlign: 'center',
        },
        logo: {
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: '#00509E',
            marginBottom: '0.5rem',
        },
        subtitle: {
            color: '#64748B',
            marginBottom: '2rem',
            fontSize: '0.95rem',
        },
        inputGroup: {
            marginBottom: '1.2rem',
            textAlign: 'left',
        },
        label: {
            display: 'block',
            marginBottom: '0.5rem',
            fontSize: '0.9rem',
            color: '#334155',
            fontWeight: '500',
        },
        input: {
            width: '100%',
            padding: '0.8rem 1rem',
            borderRadius: '10px',
            border: '1px solid #CBD5E1',
            fontSize: '1rem',
            transition: 'border-color 0.2s, box-shadow 0.2s',
            outline: 'none',
        },
        button: {
            width: '100%',
            padding: '0.9rem',
            borderRadius: '10px',
            border: 'none',
            background: 'linear-gradient(90deg, #00509E 0%, #003E7E 100%)',
            color: '#fff',
            fontSize: '1rem',
            fontWeight: '600',
            marginTop: '1rem',
            transition: 'transform 0.1s',
        },
        registerLink: {
            marginTop: '1.5rem',
            fontSize: '0.9rem',
            color: '#475569',
        },
        link: {
            color: '#D62828', // Red accent for action
            fontWeight: '600',
            textDecoration: 'none',
            marginLeft: '0.5rem',
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <div style={styles.logo}>MediTruth</div>
                <p style={styles.subtitle}>Secure Access to Medical Intelligence</p>

                <form onSubmit={handleLogin}>
                    <div style={styles.inputGroup}>
                        <label htmlFor="email" style={styles.label}>Email</label>
                        <input
                            id="email"
                            name="email"
                            required
                            type="email"
                            placeholder="example@email.com"
                            style={styles.input}
                            aria-label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label htmlFor="password" style={styles.label}>Password</label>
                        <input
                            id="password"
                            name="password"
                            required
                            type="password"
                            placeholder="••••••••"
                            style={styles.input}
                            aria-label="Password"
                            minLength={6}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" style={styles.button}>Log In</button>
                </form>

                <div style={styles.registerLink}>
                    Don't have an account?
                    <Link to="/register" style={styles.link}>REGISTER NOW</Link>
                </div>

                <div style={{ marginTop: '1rem' }}>
                    <Link to="/home" style={{ color: '#00509E', textDecoration: 'none', fontSize: '0.9rem', borderBottom: '1px dashed #00509E' }}>
                        Continue as Guest
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
