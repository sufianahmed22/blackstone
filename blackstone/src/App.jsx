import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import StudentDashboard from './components/StudentDashboard';

function App() {
    const [role, setRole] = useState('');

    const handleLogin = (role) => {
        setRole(role);
    };

    const handleLogout = () => {
        setRole(''); // Reset the role to log out
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={role ? <Navigate to={`/${role}`} /> : <Login onLogin={handleLogin} />} />
                <Route path="/admin" element={role === 'admin' ? <AdminDashboard onLogout={handleLogout} /> : <Navigate to="/" />} />
                <Route path="/student" element={role === 'student' ? <StudentDashboard onLogout={handleLogout} /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
