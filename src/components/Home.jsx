import React from 'react';
import BlogPost from './BlogPost';

const posts = [
  {
    id: 1,
    title: 'Getting Started with React',
    authorId: 1,
    authorName: 'Nusrat Jahan Tuli',
    date: '2025-08-15',
    content: 'React is a popular JavaScript library for building user interfaces. This post will walk you through the basics of creating a React application.',
    comments: [
      { id: 1, author: 'Jane Doe', text: 'Great introduction!' },
      { id: 2, author: 'John Smith', text: 'Looking forward to more content.' },
    ],
  },
  {
    id: 2,
    title: 'Understanding React Hooks',
    authorId: 1,
    authorName: 'Nusrat Jahan Tuli',
    date: '2025-08-16',
    content: 'React Hooks are functions that let you “hook into” React state and lifecycle features from function components. This post will explore some of the most commonly used hooks.',
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
