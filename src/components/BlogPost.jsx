import React from 'react';
import Reaction from './Reaction';
import Comment from './Comment';
import profileImage from './assets/images.jpg';
import './BlogPost.css';

const BlogPost = ({ post, onAuthorClick, showComments, onToggleComments }) => {

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <article className="blog-post-article">
          <h1 className="blog-post-title">
            {post.title}
          </h1>

          <div className="author-info">
            <span className="author-info-by">By</span>
            <img src={profileImage} alt="Profile" className="author-info-image" />
            <button
              onClick={() => onAuthorClick(post.authorId)}
              className="author-info-button"
            >
              {post.authorName}
            </button>
            <span>•</span>
            <span>{post.date}</span>
          </div>

          <div className="blog-post-content">
            <p>{post.content}</p>
          </div>

          <Reaction postId={post.id} />

          <div className="comments-section">
            {post.comments.length > 0 && <button 
              onClick={onToggleComments}
              className="comments-toggle-button"
            >
              {post.comments.length} Comments {showComments ? '▲' : '▼'}
            </button>}

            {showComments && (
              <>
                <div className="comment-form">
                  <textarea
                    placeholder="Write your comment..."
                    className="comment-textarea"
                    rows="4"
                  />
                  <button className="comment-post-button">
                    Post Comment
                  </button>
                </div>

                <div>
                  {post.comments.map(comment => (
                    <Comment key={comment.id} comment={comment} />
                  ))}
                </div>
              </>
            )}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
