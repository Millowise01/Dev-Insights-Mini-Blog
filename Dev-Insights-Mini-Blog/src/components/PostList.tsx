import React from "react";
import Post from "./Post";
import type { Post as PostType } from "../types/Post";

const posts: PostType[] = [
  {
    id: 1,
    title: "Getting Started with TypeScript Generics",
    author: "Amara Sesay",
    content:
      "Generics let you write reusable, type safe components and functions without giving up type checking along the way, which matters a lot once a codebase grows past a few files.",
    datePosted: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Why Vite Feels So Much Faster Than CRA",
    author: "Mohamed Bangura",
    content:
      "Vite serves native ES modules straight to the browser during development, so only the files a page actually imports get compiled, instead of bundling the whole app up front.",
    datePosted: "2026-09-10T09:00:00.000Z",
  },
  {
    id: 3,
    title: "A Junior Guide to useEffect Timing",
    author: "Fatmata Koroma",
    content:
      "useEffect confuses a lot of beginners because it runs after the browser paints, not during render, and the dependency array decides how often it fires again.",
    datePosted: "2026-09-01T09:00:00.000Z",
  },
];

const PostList: React.FC = () => {
  return (
    <section className="post-list">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
};

export default PostList;