import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Home = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const { user, logout, isLargeText, toggleLargeText } = useUser();

    const handleSearch = (e) => {
        e.preventDefault();
        // Simple mock search redirection
        if (searchTerm.toLowerCase().includes('paracetamol')) {
            navigate('/result/paracetamol');
        } else if (searchTerm.toLowerCase().includes('ibuprofen')) {
            navigate('/result/ibuprofen');
        } else if (searchTerm.toLowerCase().includes('alprazolam')) {
            navigate('/result/alprazolam');
        } else {
            alert('Medicine not found in simulated database. Try "Paracetamol", "Ibuprofen", or "Alprazolam".');
        }
    };

    const styles = {
        container: {
            minHeight: '100vh',
            background: '#F8FAFC',
            paddingBottom: '2rem',
        },
        header: {
            background: 'white',
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        },
        logo: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#00509E',
            textDecoration: 'none',
        },
        navButton: {
            background: 'none',
            border: 'none',
            color: '#64748B',
            fontSize: '1rem',
            marginLeft: '1rem',
            cursor: 'pointer',
        },
        hero: {
            background: 'linear-gradient(135deg, #00509E 0%, #003E7E 100%)',
            color: 'white',
            padding: '3rem 2rem',
            textAlign: 'center',
            borderBottomRightRadius: '50% 20px',
            borderBottomLeftRadius: '50% 20px',
        },
        heroTitle: {
            marginBottom: '1rem',
            fontSize: '2rem',
        },
        heroSubtitle: {
            opacity: 0.9,
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem',
        },
        searchBox: {
            background: 'white',
            padding: '0.5rem',
            borderRadius: '50px',
            display: 'flex',
            maxWidth: '500px',
            margin: '0 auto',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
        },
        searchInput: {
            border: 'none',
            flex: 1,
            padding: '1rem 1.5rem',
            fontSize: '1rem',
            borderRadius: '50px',
            outline: 'none',
        },
        searchButton: {
            background: '#D62828',
            color: 'white',
            border: 'none',
            padding: '0.8rem 2rem',
            borderRadius: '50px',
            fontWeight: 'bold',
            transition: 'transform 0.1s',
        },
        uploadButton: {
            display: 'block',
            margin: '1rem auto 0',
            background: 'rgba(255,255,255,0.2)',
            border: '1px dashed rgba(255,255,255,0.5)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            backdropFilter: 'blur(5px)',
        },
        onboarding: {
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '3rem',
            flexWrap: 'wrap',
            padding: '0 2rem',
        },
        stepCard: {
            background: 'white',
            padding: '2rem',
            borderRadius: '16px',
            width: '280px',
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s',
        },
        stepIcon: {
            fontSize: '2.5rem',
            marginBottom: '1rem',
            color: '#00509E',
        },
        stepTitle: {
            fontWeight: 'bold',
            marginBottom: '0.5rem',
            color: '#1E293B',
        },
        stepDesc: {
            color: '#64748B',
            fontSize: '0.9rem',
        }
    };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <Link to="/" style={styles.logo}>MediTruth</Link>
                <div>
                    <button style={styles.navButton} onClick={toggleLargeText}>
                        {isLargeText ? 'Default Text' : 'Large Text'}
                    </button>
                    {user ? (
                        <span style={{ marginLeft: '1rem', color: '#64748B' }}>Hello, {user.name.split(' ')[0]}</span>
                    ) : null}
                    <Link to="/" onClick={logout} style={{ ...styles.navButton, textDecoration: 'none' }}>Logout</Link>
                </div>
            </header>

            <div style={styles.hero} className="animate-fade-in">
                <h1 style={styles.heroTitle}>Check Your Medicine Safety</h1>
                <p style={styles.heroSubtitle}>
                    Prevent silent harm. Instantly check risks, organ impact, and interactions.
                </p>

                <form onSubmit={handleSearch} style={{ position: 'relative' }}>
                    <div style={styles.searchBox}>
                        <input
                            type="text"
                            placeholder="Type medicine name (e.g., Paracetamol)"
                            style={styles.searchInput}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit" style={styles.searchButton}>Search</button>
                    </div>
                </form>

                <label style={{ cursor: 'pointer', ...styles.uploadButton }}>
                    📷 Scan Medicine Box
                    <input type="file" accept="image/*" style={{ display: 'none' }} onChange={() => alert('Image captured! Analyzing... (Simulation)')} />
                </label>
            </div>

            <div style={styles.onboarding}>
                <div style={styles.stepCard}>
                    <div style={styles.stepIcon}>💊</div>
                    <h3 style={styles.stepTitle}>1. Search or Upload</h3>
                    <p style={styles.stepDesc}>Enter the medicine name or scan the box to get started.</p>
                </div>
                <div style={styles.stepCard}>
                    <div style={styles.stepIcon}>📊</div>
                    <h3 style={styles.stepTitle}>2. Understand Risks</h3>
                    <p style={styles.stepDesc}>See clear visuals on how it affects your liver, kidneys, and heart.</p>
                </div>
                <div style={styles.stepCard}>
                    <div style={styles.stepIcon}>shield</div>
                    <h3 style={styles.stepTitle}>3. Stay Safe</h3>
                    <p style={styles.stepDesc}>Get personalized warnings about overuse and interactions.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
