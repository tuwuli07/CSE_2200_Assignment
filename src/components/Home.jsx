import React from 'react';
import BlogPost from './BlogPost';

const Home = ({ onAuthorClick, onBlogClick, currentPage, posts, postsPerPage }) => {
  
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
    </div>
  );
};

export default Home;
