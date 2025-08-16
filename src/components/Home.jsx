import React from 'react';
import BlogPost from './BlogPost';

const posts = [
  {
    id: 1,
    title: 'Getting Started with React',
    authorId: 1,
    authorName: 'Nusrat Jahan Tuli',
    date: '2025-08-15',
    content: 'AI can solve problems in seconds, but it will never know what it feels like to laugh or cry. Human emotions—our ability to care, dream, and connect—are what make us truly unique. No matter how advanced AI becomes, it can’t replace the warmth of a smile or the comfort of genuine empathy.',
    comments: [
      { id: 1, author: 'Commenter 1', text: 'Great introduction!' },
      { id: 2, author: 'Commenter 2', text: 'Looking forward to more content.' },
    ],
  },
  {
    id: 2,
    title: 'Understanding React Hooks',
    authorId: 1,
    authorName: 'Nusrat Jahan Tuli',
    date: '2025-08-16',
    content: 'Have you ever wondered what it feels like to create an app that people actually use? Or to make a robot follow your commands? That’s what studying Computer Science and Engineering is all about. It’s not just coding—it’s asking “what if?” and turning ideas into reality. Yes, it’s tough at times, but isn’t solving puzzles what makes learning fun?',
    comments: [],
  },
];

const Home = ({ onAuthorClick, onBlogClick }) => {
  return (
    <div style={{ maxWidth: '768px', margin: '0 auto', padding: '24px' }}>
      {posts.map(post => (
        <BlogPost
          key={post.id}
          post={post}
          onAuthorClick={onAuthorClick}
          onBlogClick={() => onBlogClick(post.id)}
        />
      ))}
    </div>
  );
};

export default Home;
