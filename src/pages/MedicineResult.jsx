import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { medicines } from '../data/medicines';
import { useUser } from '../context/UserContext';

const MedicineResult = () => {
    const { id } = useParams();
    const [medicine, setMedicine] = useState(null);
    const { user, isLargeText, toggleLargeText } = useUser();

    useEffect(() => {
        const found = medicines.find(m => m.id === id);
        setMedicine(found);
    }, [id]);

    if (!medicine) {
        return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading or Medicine Not Found... <br /><Link to="/home">Go Back</Link></div>;
    }

    const getRiskColor = (level) => {
        switch (level) {
            case 'safe': return '#10B981'; // Green
            case 'caution': return '#F59E0B'; // Amber
            case 'high':
            case 'danger': return '#EF4444'; // Red
            default: return '#94A3B8';
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
        navLink: {
            color: '#00509E',
            textDecoration: 'none',
            fontWeight: '600',
        },
        content: {
            maxWidth: '800px',
            margin: '2rem auto',
            padding: '0 1rem',
        },
        card: {
            background: 'white',
            borderRadius: '20px',
            padding: '2rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
            marginBottom: '2rem',
        },
        titleRow: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '1rem',
        },
        medicineName: {
            fontSize: '2rem',
            color: '#1E293B',
            marginBottom: '0.5rem',
        },
        purpose: {
            color: '#64748B',
            fontSize: '1.1rem',
        },
        riskBadge: {
            background: getRiskColor(medicine.riskLevel),
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '50px',
            fontWeight: 'bold',
            fontSize: '0.9rem',
            textTransform: 'uppercase',
        },
        sectionTitle: {
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: '#334155',
            marginTop: '1.5rem',
            marginBottom: '1rem',
            borderBottom: '2px solid #F1F5F9',
            paddingBottom: '0.5rem',
        },
        chip: {
            display: 'inline-block',
            background: '#F1F5F9',
            color: '#475569',
            padding: '0.4rem 1rem',
            borderRadius: '20px',
            marginRight: '0.5rem',
            marginBottom: '0.5rem',
            fontSize: '0.9rem',
        },
        organGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1rem',
        },
        organCard: {
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            padding: '1rem',
            textAlign: 'center',
        },
        organIcon: {
            fontSize: '2rem',
            marginBottom: '0.5rem',
            display: 'block',
        },
        statusDot: (status) => ({
            height: '10px',
            width: '10px',
            backgroundColor: getRiskColor(status),
            borderRadius: '50%',
            display: 'inline-block',
            marginRight: '5px',
        }),
        warningBox: {
            background: '#FEF2F2',
            border: '1px solid #FCA5A5',
            color: '#B91C1C',
            padding: '1rem',
            borderRadius: '12px',
            marginTop: '0.5rem',
        },
        disclaimer: {
            textAlign: 'center',
            color: '#94A3B8',
            fontSize: '0.85rem',
            marginTop: '3rem',
            padding: '0 2rem',
        }
    };

    return (
        <div style={styles.container} className="animate-fade-in">
            <header style={styles.header}>
                <Link to="/home" style={styles.navLink}>← Back to Search</Link>
                <button
                    onClick={toggleLargeText}
                    style={{ background: 'none', border: 'none', color: '#64748B', cursor: 'pointer' }}>
                    {isLargeText ? 'Default Text' : 'Large Text'}
                </button>
            </header>

            <div style={styles.content}>
                <div style={styles.card}>
                    <div style={styles.titleRow}>
                        <div>
                            <h1 style={styles.medicineName}>{medicine.name}</h1>
                            <p style={styles.purpose}>{medicine.purpose}</p>
                        </div>
                        <span style={styles.riskBadge}>{medicine.riskText}</span>
                    </div>

                    <h3 style={styles.sectionTitle}>Common Uses</h3>
                    <div>
                        {medicine.commonUses.map(use => (
                            <span key={use} style={styles.chip}>{use}</span>
                        ))}
                    </div>

                    <h3 style={styles.sectionTitle}>Organ Impact Analysis</h3>
                    <div style={styles.organGrid}>
                        {Object.entries(medicine.organImpact).map(([organ, status]) => (
                            <div key={organ} style={styles.organCard}>
                                <span style={styles.organIcon}>
                                    {organ === 'liver' ? '🍷' :
                                        organ === 'kidney' ? '🫘' :
                                            organ === 'heart' ? '❤️' : '🧠'}
                                </span>
                                <div style={{ textTransform: 'capitalize' }}>
                                    <span style={styles.statusDot(status)}></span>
                                    {organ}
                                </div>
                            </div>
                        ))}
                    </div>

                    <h3 style={{ ...styles.sectionTitle, color: '#D62828' }}>⚠️ Safety Warnings</h3>
                    {medicine.warnings.map((warn, i) => (
                        <div key={i} style={styles.warningBox}>
                            • {warn}
                        </div>
                    ))}

                    {/* Personalized Warnings */}
                    {user && user.age > 65 && (
                        <div style={{ ...styles.warningBox, background: '#FFF7ED', borderColor: '#FDBA74', color: '#C2410C', marginTop: '1rem' }}>
                            <strong>👴 Elder Care Warning:</strong>
                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                                <li>As we age, our kidneys/liver may process medicines slower.</li>
                                <li>Consult your doctor about lower dosage requirements.</li>
                                {medicine.riskLevel === 'caution' && <li>This medicine carries moderate risks for seniors.</li>}
                            </ul>
                        </div>
                    )}
                </div>

                <p style={styles.disclaimer}>
                    DISCLAIMER: This information is for educational purposes only and comes from simulated sources.
                    Calculations are based on general medical data but cannot replace professional advice.
                    Always consult your doctor before changing medication.
                </p>
            </div>
        </div>
    );
};

export default MedicineResult;