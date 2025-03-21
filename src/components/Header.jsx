import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b-5 border-black bg-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo/Title */}
          <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
            Harley's Blog
          </h1>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden border-3 border-black p-2 shadow-brutal hover:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Menu</span>
            <div className="h-0.5 w-6 bg-black mb-1"></div>
            <div className="h-0.5 w-6 bg-black mb-1"></div>
            <div className="h-0.5 w-6 bg-black"></div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/"
                  className="font-heading text-xl font-bold border-b-3 border-primary hover:bg-orange-500 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="font-heading text-xl font-bold border-b-3 border-secondary hover:bg-[#143D60] hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 border-t-3 border-black pt-4 md:hidden">
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="block font-heading text-xl font-bold border-b-3 border-primary py-2 hover:bg-orange-500 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block font-heading text-xl font-bold border-b-3 border-secondary py-2 hover:bg-[#143D60] hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
