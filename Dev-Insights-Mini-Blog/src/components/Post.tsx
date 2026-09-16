import React from "react";
import type { Post as PostType } from "../types/Post";
import { getPreview, isNew } from "../utils/postHelpers";
import "./Post.css";

interface PostProps {
  post: PostType;
}

const HIGHLIGHTED_AUTHOR = "Amara Sesay";

const Post: React.FC<PostProps> = ({ post }) => {
  const highlight = post.author === HIGHLIGHTED_AUTHOR;

  return (
    <article
      className="post"
      style={{ backgroundColor: highlight ? "#eef7f1" : "#ffffff" }}
    >
      <div className="post__meta">
        {isNew(post.datePosted) && (
          <span className="post__badge">New!</span>
        )}
        <time className="post__date">
          {new Date(post.datePosted).toLocaleDateString()}
        </time>
      </div>
      <h2 className="post__title">{post.title}</h2>
      <p className="post__author">by {post.author}</p>
      <p className="post__preview">{getPreview(post.content)}</p>
    </article>
  );
};

export default React.memo(Post);