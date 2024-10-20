import React from 'react';
import '../student.css'; // Make sure to create this CSS file

const StudentDashboard = ({ onLogout }) => { // Accept onLogout prop
    // Dummy attendance data
    const attendanceData = [
        { date: '2024-10-01', status: 'Present' },
        { date: '2024-10-02', status: 'Absent' },
        { date: '2024-10-03', status: 'Present' },
        { date: '2024-10-04', status: 'Present' },
    ];

    return (
        <div className='body3'>
            <Navbar onLogout={onLogout} /> {/* Pass onLogout to Navbar */}
            <div className="dashboard">
                <h2 className="dashboard-title">Welcome to the Student Dashboard</h2>
                <div className="attendance-container">
                    <h3 className="attendance-title">Attendance Record</h3>
                    <table className="attendance-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attendanceData.map((record, index) => (
                                <tr key={index}>
                                    <td>{record.date}</td>
                                    <td>{record.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
};

// Navbar Component
const Navbar = ({ onLogout }) => { // Accept onLogout prop
    return (
        <nav className="navbar">
            <div className="logo">Student Dashboard</div>
            <ul className="nav-links">
                <li><a href="#attendance">Attendance</a></li>
                <li><a href="#assignments">Assignments</a></li>
                <li><a href="#profile">Profile</a></li>
                <li>
                    <button onClick={onLogout} className="logout-btn">Logout</button> {/* Logout button */}
                </li>
            </ul>
        </nav>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="admin-footer">
            <p>&copy; 2024 Student Dashboard. All Rights Reserved.</p>
        </footer>
    );
};

export default StudentDashboard;
