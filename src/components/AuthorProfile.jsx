import React, { useState, useEffect } from 'react';
import profileImage from './assets/images.jpg';
import './AuthorProfile.css';

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
    <div className="author-profile-container">
      <div className="author-profile">
        <button 
          onClick={onBack}
          className="back-button"
        >
          ← Back to Posts
        </button>

        <div className="author-profile-card">
          <div className="author-profile-header">
            <div className="author-profile-avatar-container">
              <img src={profileImage} alt="Profile" className="author-profile-avatar" />
            </div>
          </div>

          <div className="author-profile-body">
            <div className="author-profile-info">
              <div>
                <h2 className="author-profile-name">{author}</h2>
                <p className="author-profile-username">@tuli_cse</p>
              </div>
              <div className="author-profile-actions">
                <button 
                  onClick={handleFollow}
                  className={`follow-button ${isFollowing ? 'following' : ''}`}>
                  {isFollowing ? 'Following' : 'Follow'}
                </button>
              </div>
            </div>

            <div className="author-profile-bio">
              <p>
                Student of AUST CSE. Passionate about building beautiful and functional web applications. 
                Exploring the world of AI and machine learning.
              </p>
            </div>

            <div className="author-profile-stats">
              <div><strong>25</strong> Posts</div>
              <div><strong>1.2k</strong> Followers</div>
              <div><strong>345</strong> Following</div>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="follow-popup">
          You started following {author}
        </div>
      )}
    </div>
  );
};


export default AuthorProfile;
