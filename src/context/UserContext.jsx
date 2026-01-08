import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // { name, email, age, gender, phone }
    const [isLargeText, setIsLargeText] = useState(false);

    // Load settings from local storage
    useEffect(() => {
        const storedLargeText = localStorage.getItem('meditruth_large_text') === 'true';
        setIsLargeText(storedLargeText);
        if (storedLargeText) {
            document.body.classList.add('large-text');
        }
    }, []);

    const toggleLargeText = () => {
        setIsLargeText(prev => {
            const newValue = !prev;
            localStorage.setItem('meditruth_large_text', String(newValue));
            if (newValue) {
                document.body.classList.add('large-text');
            } else {
                document.body.classList.remove('large-text');
            }
            return newValue;
        });
    };

    const login = (userData) => {
        // Mock login
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    const register = (userData) => {
        // Mock register
        setUser(userData);
    };

    const value = {
        user,
        login,
        logout,
        register,
        isLargeText,
        toggleLargeText
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};
