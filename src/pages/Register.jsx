import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import '../index.css';

const Register = () => {
    const navigate = useNavigate();
    const { register } = useUser();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        age: '',
        gender: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        register({
            name: formData.fullName,
            email: formData.email,
            age: parseInt(formData.age),
            gender: formData.gender,
            phone: formData.phone
        });
        navigate('/home');
    };
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            background: '#F1F5F9', // Clean background
            padding: '2rem',
        },
        card: {
            background: '#FFFFFF',
            padding: '2.5rem',
            borderRadius: '20px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
            width: '100%',
            maxWidth: '500px',
        },
        header: {
            marginBottom: '2rem',
            textAlign: 'center',
        },
        title: {
            fontSize: '1.8rem',
            color: '#0F172A',
            marginBottom: '0.5rem',
        },
        subtitle: {
            color: '#64748B',
            fontSize: '0.95rem',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
        },
        inputGroup: {
            marginBottom: '1.2rem',
        },
        fullWidth: {
            gridColumn: '1 / -1',
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
            padding: '0.8rem',
            borderRadius: '8px',
            border: '1px solid #CBD5E1',
            fontSize: '1rem',
            outline: 'none',
        },
        select: {
            width: '100%',
            padding: '0.8rem',
            borderRadius: '8px',
            border: '1px solid #CBD5E1',
            fontSize: '1rem',
            outline: 'none',
            backgroundColor: 'white',
        },
        button: {
            width: '100%',
            padding: '1rem',
            borderRadius: '10px',
            border: 'none',
            background: '#00509E',
            color: '#fff',
            fontSize: '1rem',
            fontWeight: '600',
            marginTop: '1rem',
            transition: 'background-color 0.2s',
        },
        loginLink: {
            marginTop: '1.5rem',
            textAlign: 'center',
            fontSize: '0.9rem',
            color: '#64748B',
        },
        link: {
            color: '#00509E',
            fontWeight: '600',
            textDecoration: 'none',
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <div style={styles.header}>
                    <h1 style={styles.title}>Join MediTruth</h1>
                    <p style={styles.subtitle}>Start your journey to safer medication.</p>
                </div>

                <form onSubmit={handleRegister}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Full Name</label>
                        <input name="fullName" type="text" placeholder="John Doe" style={styles.input} required value={formData.fullName} onChange={handleChange} />
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Email</label>
                        <input name="email" type="email" placeholder="john@example.com" style={styles.input} required value={formData.email} onChange={handleChange} />
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Password</label>
                        <input name="password" type="password" placeholder="••••••••" style={styles.input} required minLength={6} value={formData.password} onChange={handleChange} />
                    </div>

                    <div style={styles.grid}>
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Age</label>
                            <input name="age" type="number" placeholder="25" style={styles.input} required value={formData.age} onChange={handleChange} />
                        </div>
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Gender</label>
                            <select name="gender" style={styles.select} required value={formData.gender} onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Phone Number</label>
                        <input name="phone" type="tel" placeholder="+1 (555) 000-0000" style={styles.input} required value={formData.phone} onChange={handleChange} />
                    </div>

                    <div style={styles.grid}>
                        <Link to="/" style={{ ...styles.button, background: '#EFF6FF', color: '#00509E', display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>Back</Link>
                        <button type="submit" style={styles.button}>Register</button>
                    </div>
                </form>

                <div style={styles.loginLink}>
                    Already have an account?
                    <Link to="/" style={styles.link}>Log In</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
