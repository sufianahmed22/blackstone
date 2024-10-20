import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../admin.css'; // Admin specific styles

const AdminDashboard = ({ onLogout }) => {
    const navigate = useNavigate();

    // Initial students data
    const [students, setStudents] = useState([
        { name: 'John Doe', rollNumber: '12345', attendance: 'Present' },
        { name: 'Jane Smith', rollNumber: '67890', attendance: 'Absent' },
        { name: 'Emma Johnson', rollNumber: '11223', attendance: 'Present' },
    ]);

    const handleLogout = () => {
        onLogout(); // Call the logout function from props
        navigate('/'); // Redirect to login page
    };

    const handleAttendanceChange = (index, newAttendance) => {
        const updatedStudents = [...students];
        updatedStudents[index].attendance = newAttendance; // Update the attendance status
        setStudents(updatedStudents); // Set the updated state
    };

    return (
        <div className='body2'>
            <div className="admin-container">
            {/* Navbar */}
            <nav className="navbar">
                <div className="logo">Blackstone Admin</div>
                <ul className="nav-links">
                    <li><a href="#timetable">Timetable</a></li>
                    <li><a href="#attendance">Attendance</a></li>
                    <li><a href="#leave">Leave</a></li>
                </ul>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </nav>

            {/* Body */}
            <div className="admin-body">
                <h2>Student Attendance</h2>
                <table className="attendance-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Roll Number</th>
                            <th>Attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={student.rollNumber}>
                                <td>{student.name}</td>
                                <td>{student.rollNumber}</td>
                                <td>
                                    <select
                                        value={student.attendance}
                                        onChange={(e) => handleAttendanceChange(index, e.target.value)}
                                    >
                                        <option value="Present">Present</option>
                                        <option value="Absent">Absent</option>
                                        <option value="Leave">Leave</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Footer */}
            <footer className="admin-footer">
                <p>&copy; 2024 Blackstone Central. Licensed under MIT License.</p>
            </footer>
        </div>
        </div>
    );
};

export default AdminDashboard;
