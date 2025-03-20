import React, { useState, useEffect } from 'react';
import './TopUsers.css';

const TopUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call with setTimeout
    setTimeout(() => {
      try {
        // Mock data for users
        const mockUsers = [
          { id: "1", name: "John Doe", postCount: 10 },
          { id: "2", name: "Jane Doe", postCount: 8 },
          { id: "3", name: "Alice Smith", postCount: 7 },
          { id: "4", name: "Bob Johnson", postCount: 6 },
          { id: "5", name: "Charlie Brown", postCount: 5 }
        ];
        
        setUsers(mockUsers);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch users');
        setLoading(false);
        console.error('Error fetching users:', err);
      }
    }, 1000); // Simulate network delay
  }, []);

  if (loading) return <div className="loading">Loading top users...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="top-users">
      <h2>Top Users by Post Count</h2>
      <div className="user-cards">
        {users.map((user, index) => (
          <div key={user.id} className={`user-card ${index === 0 ? 'top-user' : ''}`}>
            {index === 0 && <div className="top-badge">👑 Top User</div>}
            <div className="user-avatar">
              <img src={`https://i.pravatar.cc/100?u=${user.id}`} alt={`${user.name} avatar`} />
            </div>
            <h3>{user.name}</h3>
            <p>{user.postCount} posts</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopUsers;