import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPostContentFromFile } from "../utils/fetchPostContentFromFile";

function ArticlePage({ post }) {
  const [content, setContent] = useState("");
  useEffect(() => {
    fetchPostContentFromFile(post.contentFilePath)
      .then((result) => {
        setContent(result);
      })
      .catch(() => {
        setContent("Error loading content");
      });
  }, [post.contentFilePath]);

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">
        {post.title}
      </h1>

      <div className="flex items-center space-x-4 mb-8 font-mono text-sm">
        <time>{post.date}</time>
        <span className="border-l-3 border-black pl-4">{post.readingTime}</span>
      </div>

      <div
        className="prose prose-lg max-w-none font-body"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <div className="mt-12 pt-8 border-t-3 border-black">
        <Link
          to="/"
          className="font-heading text-xl font-bold border-3 border-black px-6 py-3 inline-block shadow-brutal hover:bg-cyan-400 hover:text-black hover:shadow-none transition-all"
        >
          ← Return to Home
        </Link>
      </div>

      <div className="mt-8 pt-8 border-t-3 border-black">
        <h3 className="font-heading text-xl font-bold mb-4">
          Share this article
        </h3>
        <div className="flex space-x-6">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              post.title
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading font-bold border-b-3 border-primary hover:bg-cyan-400 hover:text-black transition-colors"
          >
            Twitter
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              window.location.href
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading font-bold border-b-3 border-secondary hover:bg-emerald-400 hover:text-black transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </article>
  );
}

export default ArticlePage;
