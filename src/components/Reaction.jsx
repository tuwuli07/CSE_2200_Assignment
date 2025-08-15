import React, { useState } from 'react';

const reactions = [
  { emoji: '👍', label: 'Like' },
  { emoji: '❤️', label: 'Love' },
  { emoji: '😠', label: 'Angry' },
  { emoji: '😢', label: 'Sad' }
];

const Reactions = ({ postId, type = 'post' }) => {
  const [activeReaction, setActiveReaction] = useState(null);
  const [reactionCounts, setReactionCounts] = useState({
    0: 42,
    1: 156,
    2: 8,
    3: 12
  });

  const handleReactionClick = (index) => {
    setReactionCounts(prev => {
      const newCounts = { ...prev };

      if (activeReaction === index) {
        newCounts[index] = Math.max(0, newCounts[index] - 1);
        setActiveReaction(null);
      } else {
        if (activeReaction !== null) {
          newCounts[activeReaction] = Math.max(0, newCounts[activeReaction] - 1);
        }
        newCounts[index] += 1;
        setActiveReaction(index);
      }
      return newCounts;
    });
  };

  return (
    <div style={{ marginTop: '16px' }}>
      <div style={{ display: 'flex', gap: '16px', marginBottom: '8px' }}>
        {reactions.map((reaction, index) => (
          <button
            key={index}
            onClick={() => handleReactionClick(index)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 12px',
              borderRadius: '20px',
              border: '1px solid',
              backgroundColor: activeReaction === index ? '#dbeafe' : '#f9fafb',
              borderColor: activeReaction === index ? '#93c5fd' : '#e5e7eb',
              color: activeReaction === index ? '#1d4ed8' : '#374151',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <span style={{ fontSize: '18px' }}>{reaction.emoji}</span>
            <span style={{ fontSize: '14px', fontWeight: '500' }}>{reaction.label}</span>
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '16px', fontSize: '14px', color: '#6b7280' }}>
        {reactions.map((reaction, index) => (
          <span key={index}>
            {reaction.label}: {reactionCounts[index]}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Reactions;
