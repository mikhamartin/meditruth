
export const medicines = [
    {
        id: 'paracetamol',
        name: 'Paracetamol',
        purpose: 'Pain reliever and fever reducer.',
        commonUses: ['Headache', 'Muscle pain', 'Arthritis', 'Backache', 'Toothache', 'Colds', 'Fevers'],
        riskLevel: 'safe', // safe, caution, high
        riskText: 'Low Risk (when used correctly)',
        organImpact: {
            liver: 'caution', // safe, caution, danger
            kidney: 'safe',
            heart: 'safe',
            brain: 'safe'
        },
        warnings: [
            'Do NOT take with alcohol. It increases the risk of liver damage.',
            'Overuse (more than 4g/day) can cause severe liver failure.',
            'Check other medicines; many contain paracetamol (e.g., cold flu remedies).'
        ]
    },
    {
        id: 'ibuprofen',
        name: 'Ibuprofen',
        purpose: 'Non-steroidal anti-inflammatory drug (NSAID).',
        commonUses: ['Pain relief', 'Inflammation', 'Fever'],
        riskLevel: 'caution',
        riskText: 'Moderate Risk (Use with care)',
        organImpact: {
            liver: 'safe',
            kidney: 'caution',
            heart: 'caution',
            brain: 'safe'
        },
        warnings: [
            'Can cause stomach ulcers or bleeding.',
            'May increase risk of heart attack or stroke with long-term use.',
            'Avoid if you have kidney problems.'
        ]
    },
    {
        id: 'alprazolam',
        name: 'Alprazolam',
        purpose: 'Benzodiazepine for anxiety and panic disorders.',
        commonUses: ['Anxiety', 'Panic attacks'],
        riskLevel: 'high',
        riskText: 'High Risk (Potential for addiction)',
        organImpact: {
            liver: 'safe',
            kidney: 'safe',
            heart: 'safe',
            brain: 'danger'
        },
        warnings: [
            'High risk of dependency and addiction.',
            'Do NOT mix with alcohol or opioids (can be fatal).',
            'Causes drowsiness; do not drive or operate machinery.'
        ]
    }
];
