import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import MedicineResult from './pages/MedicineResult';
import { UserProvider } from './context/UserContext';

function App() {
    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/result/:id" element={<MedicineResult />} />
                </Routes>
            </Router>
        </UserProvider>
    );
}

export default App;
