import React, { useState } from 'react';
import BlogPost from './BlogPost';
import Pagination from './Pagination';

const Home = ({ onAuthorClick, onBlogClick, currentPage, posts, postsPerPage, totalPages, onPageChange }) => {
  
  const [showCommentsMap, setShowCommentsMap] = useState({});

  const handleToggleComments = (postId) => {
    setShowCommentsMap(prevMap => ({
      ...prevMap,
      [postId]: !prevMap[postId]
    }));
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const lastPost = currentPosts[currentPosts.length - 1];
  const isLastPostCommentsVisible = lastPost && showCommentsMap[lastPost.id];

  return (
    <div style={{ maxWidth: '768px', margin: '0 auto', padding: '24px' }}>
      {currentPosts.map(post => (
        <BlogPost
          key={post.id}
          post={post}
          onAuthorClick={onAuthorClick}
          onBlogClick={() => onBlogClick(post.id)}
          showComments={showCommentsMap[post.id]}
          onToggleComments={() => handleToggleComments(post.id)}
        />
      ))}
      <div style={{ marginTop: isLastPostCommentsVisible ? '24px' : '-100px', transition: 'margin-top 0.3s' }}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
  </div>
  );
};

export default Home;
