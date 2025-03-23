import BlogPost from "./BlogPost";
import { useState } from "react";

function HomePage({
  posts,
  currentPage,
  totalPages,
  goToNextPage,
  goToPrevPage,
}) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    // TODO: Handle subscription logic
    setEmail("");
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-4xl font-bold mb-12 border-b-5 border-black pb-4">
        Latest Articles
      </h2>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {posts.map((post, index) => (
          <div key={index} className="cursor-pointer">
            <BlogPost
              post={post}
              colorScheme={index % 2 === 0 ? "blue" : "green"}
            />
          </div>
        ))}
      </div>

      {/* Newsletter Subscription */}
      <div className="border-5 border-black bg-white p-8 shadow-brutal mb-12">
        <h3 className="font-heading text-3xl font-bold mb-4">
          Subscribe to My Newsletter
        </h3>
        <p className="font-body text-lg mb-6">
          Get the latest articles and updates delivered straight to your inbox!
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4"
        >
          <div className="flex-grow">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              className={`w-full border-3 ${
                emailError ? "border-red-500" : "border-black"
              } p-3 font-mono text-lg focus:outline-none focus:ring-2 focus:ring-primary`}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1 font-mono">
                {emailError}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="font-heading text-xl font-bold border-3 border-black px-8 py-3 bg-primary text-white shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center space-x-8 mt-8 border-t-3 border-black pt-8">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className={`font-heading text-xl font-bold ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "border-b-3 border-primary hover:bg-navy hover:text-white transition-colors"
            }`}
          >
            Previous
          </button>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`font-heading text-xl font-bold ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "border-b-3 border-secondary hover:bg-navy hover:text-white transition-colors"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default HomePage;
