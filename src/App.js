import React, { useState } from 'react';
import Home from './components/Home.jsx';
import AuthorProfile from './components/AuthorProfile.jsx';
import BlogPost from './components/BlogPost.jsx';
import Pagination from './components/Pagination.jsx';

const posts = [
  {
    id: 1,
    title: 'Why Human Cannot Be Replaced by AI',
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
    title: 'CSE Is Fun',
    authorId: 1,
    authorName: 'Nusrat Jahan Tuli',
    date: '2025-08-16',
    content: 'Have you ever wondered what it feels like to create an app that people actually use? Or to make a robot follow your commands? That’s what studying Computer Science and Engineering is all about. It’s not just coding—it’s asking “what if?” and turning ideas into reality. Yes, it’s tough at times, but isn’t solving puzzles what makes learning fun?',
    comments: [],
  },
];

const App = () => {
  const [view, setView] = useState('home'); // 'home', 'author', or 'blog'
  const [selectedId, setSelectedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 1;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handleAuthorClick = (authorId) => {
    setSelectedId(authorId);
    setView('author');
  };

  const handleBlogClick = (blogId) => {
    setSelectedId(blogId);
    setView('blog');
  };

  const handleBackToHome = () => {
    setView('home');
    setSelectedId(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {view === 'home' && (
        <Home
          onAuthorClick={handleAuthorClick}
          onBlogClick={handleBlogClick}
          currentPage={currentPage}
          posts={posts}
          postsPerPage={postsPerPage}
        />
      )}
      {view === 'author' && (
        <AuthorProfile authorId={selectedId} onBack={handleBackToHome} />
      )}
      {view === 'blog' && (
        <BlogPost blogId={selectedId} onBack={handleBackToHome} />
      )}
      {view === 'home' && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default App;
