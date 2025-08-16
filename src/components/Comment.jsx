import React from 'react';
import Reaction from './Reaction';

const Comment = ({ comment }) => {
  return (
    <div style={{
      backgroundColor: '#f9fafb',
      padding: '16px',
      borderRadius: '8px',
      marginBottom: '12px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <div style={{
          width: '32px',
          height: '32px',
          backgroundColor: '#3b82f6',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span style={{ color: 'white', fontSize: '14px', fontWeight: '600' }}>
            {comment.author.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <span style={{ fontWeight: '600', fontSize: '14px' }}>{comment.author}</span>
          <span style={{ color: '#6b7280', fontSize: '12px', marginLeft: '8px' }}>{comment.date}</span>
        </div>
      </div>
      <p style={{ color: '#374151', fontSize: '14px', marginBottom: '12px', lineHeight: '1.5' }}>
        {comment.content}
      </p>
      <Reaction postId={`comment-${comment.id}`} type="comment" />
    </div>
  );
};

export default Comment;
