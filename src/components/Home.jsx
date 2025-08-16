import React from 'react';
import BlogPost from './BlogPost';
import Pagination from './Pagination';

const Home = ({ onAuthorClick, onBlogClick, currentPage, posts, postsPerPage, totalPages, onPageChange }) => {
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div style={{ maxWidth: '768px', margin: '0 auto', padding: '24px' }}>
      {currentPosts.map(post => (
        <BlogPost
          key={post.id}
          post={post}
          onAuthorClick={onAuthorClick}
          onBlogClick={() => onBlogClick(post.id)}
        />
      ))}
      <div style={{ marginTop: '24px' }}>
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
