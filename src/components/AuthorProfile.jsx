import React from 'react';

const AuthorProfile = ({ authorId, onBack }) => {
  const author = `Nusrat Jahan Tuli ${authorId}`;
  
  return (
    <div style={{ maxWidth: '768px', margin: '0 auto', padding: '24px' }}>
      <button 
        onClick={onBack}
        style={{
          marginBottom: '16px',
          padding: '8px 16px',
          backgroundColor: '#f3f4f6',
          color: '#374151',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        ← Back to Posts
      </button>

      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: '96px',
          height: '96px',
          backgroundColor: '#3b82f6',
          borderRadius: '50%',
          margin: '0 auto 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
            {author.split(' ').map(n => n[0]).join('')}
          </span>
        </div>

        <h2 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '8px' }}>{author}</h2>
        <p style={{ color: '#6b7280', marginBottom: '16px' }}>Student of AUST CSE</p>

        <div style={{ backgroundColor: '#f9fafb', padding: '24px', borderRadius: '8px' }}>
          <p style={{ color: '#374151' }}>
            Welcome to the profile of <strong>{author}</strong>. Passionate learner exploring technology and new innovations.
          </p>

          <div style={{
            marginTop: '16px',
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            fontSize: '14px',
            color: '#6b7280'
          }}>
            <span>📝 25 Posts</span>
            <span>📅 Joined Feb 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorProfile;
