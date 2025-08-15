import React, { useState } from 'react';
import Home from './pages/Home';
import AuthorProfile from './pages/AuthorProfile';
import BlogPost from './pages/BlogPost';

const App = () => {
  const [view, setView] = useState('home'); // 'home', 'author', 'blog'
  const [selectedId, setSelectedId] = useState(null);

  const goToAuthor = (authorId) => {
    setSelectedId(authorId);
    setView('author');
  };

  const goToBlog = (blogId) => {
    setSelectedId(blogId);
    setView('blog');
  };

  const goHome = () => {
    setSelectedId(null);
    setView('home');
  };

  return (
    <div>
      {view === 'home' && <Home onAuthorClick={goToAuthor} onBlogClick={goToBlog} />}
      {view === 'author' && <AuthorProfile authorId={selectedId} onBack={goHome} />}
      {view === 'blog' && <BlogPost blogId={selectedId} onBack={goHome} />}
    </div>
  );
};

export default App;
