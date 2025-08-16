import React, { useState } from 'react';
import Reaction from './Reaction';
import Comment from './Comment';

const BlogPost = ({ post, onAuthorClick }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <article style={{
      backgroundColor: '#f3f4f6',
      borderRadius: '30px',
      border: '1px solid #e5e7eb',
      padding: '24px',
      marginBottom: '24px'
    }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '12px' }}>
        {post.title}
      </h1>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '16px',
        fontSize: '14px',
        color: '#6b7280'
      }}>
        <span>By</span>
        <button
          onClick={() => onAuthorClick(post.authorId)}
          style={{
            color: '#2563eb',
            fontWeight: '500',
            cursor: 'pointer',
            border: 'none',
            background: 'none',
            textDecoration: 'underline'
          }}
        >
          {post.authorName}
        </button>
        <span>•</span>
        <span>{post.date}</span>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <p style={{ color: '#374151', lineHeight: '1.6' }}>{post.content}</p>
      </div>

      <Reaction postId={post.id} />

      <div style={{ marginTop: '32px', borderTop: '1px solid #e5e7eb', paddingTop: '24px' }}>
        {post.comments.length > 0 && <button 
          onClick={() => setShowComments(!showComments)}
          style={{
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '16px',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            color: '#111827'
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
                  padding: '12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  resize: 'none',
                  fontSize: '14px',
                  fontFamily: 'inherit',
                  outline: 'none'
                }}
                rows="3"
                onFocus={(e) => {
                  e.target.style.borderColor = '#3b82f6';
                  e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#d1d5db';
                  e.target.style.boxShadow = 'none';
                }}
              />
              <button style={{
                marginTop: '8px',
                padding: '8px 16px',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px'
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
  );
};

export default BlogPost;
