import { Link } from "react-router-dom";

function BlogPost({ post, colorScheme = "blue" }) {
  // Determine color scheme classes based on the colorScheme prop
  const colorClasses = {
    blue: "border-primary bg-white hover:bg-cyan-400",
    green: "border-secondary bg-white hover:bg-emerald-400",
  };

  const borderColorClass = colorClasses[colorScheme] || colorClasses.blue;

  return (
    <article
      className={`border-5 ${borderColorClass} p-6 shadow-brutal hover:text-black hover:shadow-none transition-all duration-200 h-full flex flex-col`}
    >
      <h2 className="font-heading text-3xl font-bold mb-2">{post.title}</h2>
      <time className="font-mono text-sm mb-4 block">{post.date}</time>
      <p className="font-body mb-4 flex-grow">{post.excerpt}</p>
      <Link
        to={`/post/${post.slug}`}
        className="font-heading font-bold text-lg self-start border-b-3 border-black mt-auto"
      >
        Read More
      </Link>
    </article>
  );
}

export default BlogPost;
