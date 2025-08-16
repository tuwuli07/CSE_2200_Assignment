import React, { useState, useEffect } from 'react';
import profileImage from './assets/images.jpg';

const AuthorProfile = ({ authorId, onBack }) => {
  const author = 'Nusrat Jahan Tuli';
  const [isFollowing, setIsFollowing] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    if (!isFollowing) {
      setShowPopup(true);
    }
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div style={{ backgroundColor: '#f1f5f9', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '24px' }}>
        <button 
          onClick={onBack}
          style={{
            marginBottom: '24px',
            padding: '10px 20px',
            backgroundColor: 'white',
            color: '#334155',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}
        >
          ← Back to Posts
        </button>

        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '16px', 
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          overflow: 'hidden'
        }}>
          <div style={{
            height: '200px',
            background: 'linear-gradient(to right, #60a5fa, #3b82f6)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              bottom: '-60px',
              left: '40px',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              border: '4px solid white',
              backgroundColor: '#e2e8f0',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <img src={profileImage} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          <div style={{ padding: '24px', paddingTop: '80px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1e293b' }}>{author}</h2>
                <p style={{ color: '#64748b', marginTop: '4px' }}>@tuli_cse</p>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button 
                  onClick={handleFollow}
                  style={{
                    padding: '10px 20px',
                    backgroundColor: isFollowing ? 'white' : '#3b82f6',
                    color: isFollowing ? 'black' : 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    minWidth: '100px',
                    transition: 'background-color 0.3s'
                  }}
                >
                  {isFollowing ? 'Following' : 'Follow'}
                </button>
              </div>
            </div>

            <div style={{ marginTop: '24px' }}>
              <p style={{ color: '#334155', lineHeight: '1.6' }}>
                Student of AUST CSE. Passionate about building beautiful and functional web applications. 
                Exploring the world of AI and machine learning.
              </p>
            </div>

            <div style={{ 
              marginTop: '24px', 
              display: 'flex', 
              gap: '24px', 
              color: '#64748b',
              borderTop: '1px solid #e2e8f0',
              paddingTop: '24px'
            }}>
              <div><strong style={{ color: '#1e293b' }}>25</strong> Posts</div>
              <div><strong style={{ color: '#1e293b' }}>1.2k</strong> Followers</div>
              <div><strong style={{ color: '#1e293b' }}>345</strong> Following</div>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'white',
          color: 'black',
          padding: '12px 24px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: '1000',
          fontSize: '16px',
          border: '1px solid #e2e8f0',
        }}>
          You started following {author}
        </div>
      )}
    </div>
  );
};


export default AuthorProfile;
