import { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Correct import

const AdminDashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [, setDecodedToken] = useState(null);  // State to hold decoded token

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const decoded = jwtDecode(token);
      setDecodedToken(decoded);
      localStorage.setItem('decodedToken', JSON.stringify(decoded)); // 👈 เก็บไว้ใน localStorage
    }

    const fetchTickets = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tickets');
        setTickets(response.data);  // Set state with received data
        setLoading(false);
      } catch (err) {
        setError('Error fetching tickets');
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>Tickets List</h3>
      
      <ul>
        {tickets.length > 0 ? (
          tickets.map((ticket) => (
            <li key={ticket._id}>
              <p><strong>Branch Code:</strong> {ticket.branchCode}</p>
              <p><strong>AnyDesk Number:</strong> {ticket.anydeskNumber || 'Not provided'}</p>
              <p><strong>Details:</strong> {ticket.details}</p>
              <p><strong>Issue Type:</strong> {ticket.issueType}</p>
              <p><strong>Created At:</strong> {new Date(ticket.createdAt).toLocaleString()}</p>
            </li>
          ))
        ) : (
          <p>No tickets available.</p>
        )}
      </ul>

    </div>
  );
};

export default AdminDashboard;
