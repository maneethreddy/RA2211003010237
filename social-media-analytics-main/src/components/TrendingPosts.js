import React, { useState, useEffect } from 'react';
import './TrendingPosts.css';

const TrendingPosts = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      try {
        // Mock data for trending posts
        const mockPosts = [
          { 
            id: 1, 
            userId: "1",
            userName: "John Doe", 
            content: "Just discovered an amazing ocean view! #travel #ocean", 
            commentCount: 15
          },
          { 
            id: 2, 
            userId: "3",
            userName: "Alice Smith", 
            content: "My thoughts on the latest tech trends. What do you think? #tech #innovation", 
            commentCount: 15
          },
          { 
            id: 3, 
            userId: "5",
            userName: "Charlie Brown", 
            content: "The sunset at the beach was incredible today! #nature #photography", 
            commentCount: 12
          }
        ];
        
        setTrendingPosts(mockPosts);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch trending posts');
        setLoading(false);
        console.error('Error fetching trending posts:', err);
      }
    }, 1200); // Simulate network delay
  }, []);

  if (loading) return <div className="loading">Loading trending posts...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="trending-posts">
      <h2>Trending Posts</h2>
      {trendingPosts.length === 0 ? (
        <p>No trending posts found</p>
      ) : (
        <div className="post-grid">
          {trendingPosts.map(post => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <img src={`https://i.pravatar.cc/50?u=${post.userId}`} alt={`${post.userName} avatar`} />
                <h3>{post.userName}</h3>
              </div>
              <p className="post-content">{post.content}</p>
              <div className="post-stats">
                <div className="reactions">
                  <span className="reaction">❤️ 24</span>
                  <span className="reaction">👍 18</span>
                </div>
                <span className="comment-count">{post.commentCount} comments</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrendingPosts;