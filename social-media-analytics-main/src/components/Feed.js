import React, { useState, useEffect } from 'react';
import './Feed.css';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeed = async () => {
      // Simulate API call
      setTimeout(() => {
        try {
          // Mock data for feed
          const mockPosts = [
            { 
              id: 101, 
              userId: "2",
              userName: "Jane Doe", 
              content: "Working on a new project today! So excited about the possibilities.", 
              timestamp: Date.now() - 1000000
            },
            { 
              id: 102, 
              userId: "4",
              userName: "Bob Johnson", 
              content: "Just finished reading an amazing book. Highly recommend!", 
              timestamp: Date.now() - 2000000
            },
            { 
              id: 103, 
              userId: "1",
              userName: "John Doe", 
              content: "Beautiful day for a hike in the mountains!", 
              timestamp: Date.now() - 3000000
            },
            { 
              id: 104, 
              userId: "5",
              userName: "Charlie Brown", 
              content: "Trying out a new recipe for dinner tonight.", 
              timestamp: Date.now() - 4000000
            },
            { 
              id: 105, 
              userId: "3",
              userName: "Alice Smith", 
              content: "Just attended an inspiring conference on AI.", 
              timestamp: Date.now() - 5000000
            }
          ];
          
          setPosts(mockPosts);
          setLoading(false);
        } catch (err) {
          setError('Failed to fetch feed');
          setLoading(false);
          console.error('Error fetching feed:', err);
        }
      }, 1500); // Simulate network delay
    };

    fetchFeed();
    
    // Set up interval to simulate real-time updates
    const intervalId = setInterval(() => {
      const newPost = {
        id: 100 + Math.floor(Math.random() * 900),
        userId: String(Math.floor(Math.random() * 5) + 1),
        userName: ["John Doe", "Jane Doe", "Alice Smith", "Bob Johnson", "Charlie Brown"][Math.floor(Math.random() * 5)],
        content: ["Just posted something new!", "Another update from me!", "Checking in with everyone!", "What a great day!"][Math.floor(Math.random() * 4)],
        timestamp: Date.now()
      };
      
      setPosts(prevPosts => [newPost, ...prevPosts.slice(0, 9)]);
    }, 60000); // Add new post every minute
    
    return () => clearInterval(intervalId);
  }, []);

  if (loading) return <div className="loading">Loading feed...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="feed">
      <h2>Latest Posts</h2>
      <div className="feed-container">
        {posts.map((post, index) => (
          <div key={`${post.id}-${index}`} className="feed-item">
            <div className="post-user">
              <img src={`https://i.pravatar.cc/40?u=${post.userId}`} alt={`${post.userName} avatar`} />
              <span>{post.userName}</span>
            </div>
            <div className="post-body">
              <p>{post.content}</p>
            </div>
            <div className="post-time">
              {new Date(post.timestamp).toLocaleString()}
            </div>
          </div>
        ))}
        <div className="load-more">
          <div className="load-more-spinner"></div>
          <span>Loading more posts...</span>
        </div>
      </div>
    </div>
  );
};

export default Feed;