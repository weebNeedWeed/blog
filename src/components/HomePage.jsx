import BlogPost from "./BlogPost";

function HomePage({
  posts,
  currentPage,
  totalPages,
  goToNextPage,
  goToPrevPage,
}) {
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
