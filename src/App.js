import React, { useState } from 'react';
import Home from './components/Home.jsx';
import AuthorProfile from './components/AuthorProfile.jsx';
import BlogPost from './components/BlogPost.jsx';

const App = () => {
  const [view, setView] = useState('home'); // 'home', 'author', or 'blog'
  const [selectedId, setSelectedId] = useState(null);

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

  return (
    <div>
      {view === 'home' && (
        <Home
          onAuthorClick={handleAuthorClick}
          onBlogClick={handleBlogClick}
        />
      )}
      {view === 'author' && (
        <AuthorProfile authorId={selectedId} onBack={handleBackToHome} />
      )}
      {view === 'blog' && (
        <BlogPost blogId={selectedId} onBack={handleBackToHome} />
      )}
    </div>
  );
};

export default App;
