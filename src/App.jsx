import { useState } from "react";
import { Routes, Route, useParams, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ArticlePage from "./components/ArticlePage";
import posts from "./data/posts";

// Post component to handle individual post routes
function Post() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/" />;
  }

  return <ArticlePage post={post} />;
}

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Handle pagination
  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen flex flex-col bg-brutalism-bg">
      <Header />

      <main className="flex-grow py-12">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                posts={currentPosts}
                currentPage={currentPage}
                totalPages={totalPages}
                goToNextPage={goToNextPage}
                goToPrevPage={goToPrevPage}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/post/:slug" element={<Post />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
