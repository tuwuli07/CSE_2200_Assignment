import React from 'react';
import Reaction from './Reaction';
import Comment from './Comment';
import profileImage from './assets/images.jpg';

const BlogPost = ({ post, onAuthorClick, showComments, onToggleComments }) => {

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', padding: '24px 0' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', backgroundColor: '#f8f8f8', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <article style={{
          padding: '24px'
        }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1e293b', marginBottom: '16px', lineHeight: '1.2' }}>
            {post.title}
          </h1>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '24px',
            fontSize: '15px',
            color: '#64748b'
          }}>
            <span style={{ fontWeight: '600' }}>By</span>
            <img src={profileImage} alt="Profile" style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} />
            <button
              onClick={() => onAuthorClick(post.authorId)}
              style={{
                color: '#3b82f6',
                fontWeight: '600',
                cursor: 'pointer',
                border: 'none',
                background: 'none',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
            >
              {post.authorName}
            </button>
            <span>•</span>
            <span>{post.date}</span>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <p style={{ color: '#334155', lineHeight: '1.7', fontSize: '17px' }}>{post.content}</p>
          </div>

          <Reaction postId={post.id} />

          <div style={{ marginTop: '40px', borderTop: '1px solid #e2e8f0', paddingTop: '32px' }}>
            {post.comments.length > 0 && <button 
              onClick={onToggleComments}
              style={{
                fontSize: '20px',
                fontWeight: '700',
                marginBottom: '24px',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                color: '#1e293b'
              }}
            >
              {post.comments.length} Comments {showComments ? '▲' : '▼'}
            </button>}

            {showComments && (
              <>
                <div style={{ marginBottom: '24px' }}>
                  <textarea
                    placeholder="Write your comment..."
                    style={{
                      width: '100%',
                      padding: '14px',
                      border: '1px solid #cbd5e1',
                      borderRadius: '8px',
                      resize: 'vertical',
                      fontSize: '15px',
                      fontFamily: 'inherit',
                      outline: 'none'
                    }}
                    rows="4"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3b82f6';
                      e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#cbd5e1';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                  <button style={{
                    marginTop: '12px',
                    padding: '10px 20px',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '15px',
                    fontWeight: '600'
                  }}>
                    Post Comment
                  </button>
                </div>

                <div>
                  {post.comments.map(comment => (
                    <Comment key={comment.id} comment={comment} />
                  ))}
                </div>
              </>
            )}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
